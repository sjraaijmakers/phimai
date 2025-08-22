import th from './th.json';
import en from './en.json';

export const languages = {
  en: 'English',
  th: 'ไทย',
} as const;

export const defaultLang = 'en';

export type Lang = keyof typeof languages;

export const ui = {
  en,
  th,
} as const;

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as Lang;
  return defaultLang;
}

export function useTranslations(lang: Lang) {
  return function t(key: string) {
    const keys = key.split('.');
    let result: any = ui[lang];
    
    for (const k of keys) {
      if (result && typeof result === 'object' && k in result) {
        result = result[k];
      } else {
        // Fallback to English if translation not found
        result = ui[defaultLang];
        for (const fallbackKey of keys) {
          if (result && typeof result === 'object' && fallbackKey in result) {
            result = result[fallbackKey];
          } else {
            return key; // Return key if translation not found
          }
        }
        break;
      }
    }
    
    return result || key;
  };
}

// Client-side language management
export function getCurrentLanguage(): Lang {
  if (typeof window === 'undefined') return defaultLang;
  return (localStorage.getItem('preferred-language') as Lang) || defaultLang;
}

export function setLanguage(lang: Lang) {
  if (typeof window === 'undefined') return;
  
  localStorage.setItem('preferred-language', lang);
  
  // Update all elements with t() function calls
  updateAllElements(lang);
  
  // Dispatch custom event for language change
  window.dispatchEvent(new CustomEvent('languageChanged', {
    detail: { language: lang }
  }));
}

// Update all elements with translations
function updateAllElements(lang: Lang) {
  const translationData = ui[lang];
  
  // Find all elements that have been rendered with t() function
  // We'll use a special attribute that t() automatically adds
  const elements = document.querySelectorAll('[data-t-key]');
  elements.forEach(element => {
    const key = element.getAttribute('data-t-key');
    if (key) {
      const translation = getNestedValue(translationData, key);
      if (translation) {
        element.textContent = translation;
      }
    }
  });
}

// Helper function to get nested object values by dot notation
function getNestedValue(obj: any, path: string): string | undefined {
  return path.split('.').reduce((current, key) => {
    return current && current[key] !== undefined ? current[key] : undefined;
  }, obj);
}

// Initialize on page load
if (typeof window !== 'undefined') {
  document.addEventListener('DOMContentLoaded', () => {
    const currentLang = getCurrentLanguage();
    updateAllElements(currentLang);
  });
}

// Get all translations for a specific key across all languages
export function getAllTranslations(key: string): Record<keyof typeof ui, string> {
  const result: Record<keyof typeof ui, string> = {} as any;
  
  Object.keys(ui).forEach((lang) => {
    const t = useTranslations(lang as keyof typeof ui);
    result[lang as keyof typeof ui] = t(key);
  });
  
  return result;
}

// Astro i18n utilities
export function getRelativeLocaleUrl(locale: string, path?: string) {
  if (locale === defaultLang) {
    return path || '/';
  }
  return `/${locale}${path || ''}`;
}

export function getAbsoluteLocaleUrl(locale: string, path?: string) {
  const baseUrl = 'https://www.phimaipondhouse.com';
  return `${baseUrl}${getRelativeLocaleUrl(locale, path)}`;
}
