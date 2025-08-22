import { ui, getCurrentLanguage } from './ui';

// Set language and update all elements
export function setLanguage(lang: string) {
  if (typeof window === 'undefined') return;
  
  localStorage.setItem('preferred-language', lang);
  
  // Update all elements with data-i18n-key attributes
  updateAllElements(lang);
  
  // Update URL in background for SEO (without page reload)
  updateUrlForSEO(lang);
  
  // Dispatch custom event for language change
  window.dispatchEvent(new CustomEvent('languageChanged', {
    detail: { language: lang }
  }));
}

// Update all elements with translations
function updateAllElements(lang: string) {
  const translationData = ui[lang as keyof typeof ui] || ui.en;
  
  // Find all elements with data-i18n-key attribute
  const elements = document.querySelectorAll('[data-i18n-key]');
  elements.forEach(element => {
    const key = element.getAttribute('data-i18n-key');
    if (key) {
      const translation = getNestedValue(translationData, key);
      if (translation) {
        element.textContent = translation;
      }
    }
  });
}

// Update URL in background for SEO (without page reload)
function updateUrlForSEO(lang: string) {
  if (typeof window === 'undefined') return;
  
  const currentPath = window.location.pathname;
  const currentLang = getCurrentLanguage();
  
  // Only update if language actually changed
  if (lang === currentLang) return;
  
  let newPath = currentPath;
  
  // Remove current language from path if it exists
  if (currentLang !== 'en') {
    newPath = currentPath.replace(`/${currentLang}`, '');
  }
  
  // Add new language to path if it's not English
  if (lang !== 'en') {
    newPath = `/${lang}${newPath}`;
  }
  
  // Update URL without page reload
  if (newPath !== currentPath) {
    window.history.replaceState({}, '', newPath);
  }
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

export { getCurrentLanguage };
