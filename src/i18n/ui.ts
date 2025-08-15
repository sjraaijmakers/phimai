import en from './en.json';
import th from './th.json';

export const languages = {
  en: 'English',
  th: 'ไทย',
  zh: '中文'
};

export const defaultLang = 'en';

export const ui = {
  en,
  th
} as const;

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: string) {
    const keys = key.split('.');
    let value: any = ui[lang];
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        // Fallback to English
        value = ui[defaultLang];
        for (const fallbackKey of keys) {
          if (value && typeof value === 'object' && fallbackKey in value) {
            value = value[fallbackKey];
          } else {
            return key; // Return the key if translation not found
          }
        }
        break;
      }
    }
    
    return typeof value === 'string' ? value : key;
  }
}

// Client-side language switching utilities
export function getCurrentLanguage(): keyof typeof ui {
  if (typeof window === 'undefined') return defaultLang;
  return (localStorage.getItem('preferred-language') as keyof typeof ui) || defaultLang;
}

export function setLanguage(lang: keyof typeof ui) {
  if (typeof window === 'undefined') return;
  localStorage.setItem('preferred-language', lang);
  
  // Dispatch custom event for components to listen to
  window.dispatchEvent(new CustomEvent('languageChanged', { detail: { language: lang } }));
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
