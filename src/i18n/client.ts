import i18next from 'i18next';
import en from './en.json';
import th from './th.json';
import zh from './zh.json';

// Initialize i18next
i18next.init({
  lng: 'en', // default language
  fallbackLng: 'en',
  resources: {
    en: { translation: en },
    th: { translation: th },
    zh: { translation: zh }
  },
  interpolation: {
    escapeValue: false
  }
});

// Get language from localStorage or default to 'en'
export function getCurrentLanguage(): string {
  if (typeof window === 'undefined') return 'en';
  return localStorage.getItem('preferred-language') || 'en';
}

// Set language and update all elements
export function setLanguage(lang: string) {
  if (typeof window === 'undefined') return;
  
  localStorage.setItem('preferred-language', lang);
  i18next.changeLanguage(lang);
  
  // Update all elements with data-i18n attributes
  updateAllElements();
}

// Update all elements with translations
function updateAllElements() {
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(element => {
    const key = element.getAttribute('data-i18n');
    if (key) {
      const translation = i18next.t(key);
      if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
        (element as HTMLInputElement).placeholder = translation;
      } else {
        element.textContent = translation;
      }
    }
  });

  // Handle placeholder-specific translations
  const placeholderElements = document.querySelectorAll('[data-i18n-placeholder]');
  placeholderElements.forEach(element => {
    const key = element.getAttribute('data-i18n-placeholder');
    if (key) {
      const translation = i18next.t(key);
      if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
        (element as HTMLInputElement).placeholder = translation;
      }
    }
  });
}

// Initialize on page load
if (typeof window !== 'undefined') {
  document.addEventListener('DOMContentLoaded', () => {
    const currentLang = getCurrentLanguage();
    i18next.changeLanguage(currentLang);
    updateAllElements();
  });
}

export { i18next };
