import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

export interface CreateI18nOptions {
  ar: Record<string, unknown>
  en: Record<string, unknown>
  fallbackLng?: 'ar' | 'en'
}

/**
 * Initialize i18next with brand-specific Arabic and English resources.
 * Each app calls this once at startup with its own translation JSON.
 */
export function createI18n({ ar, en, fallbackLng = 'ar' }: CreateI18nOptions) {
  i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      resources: {
        ar: { translation: ar },
        en: { translation: en }
      },
      fallbackLng,
      interpolation: {
        escapeValue: false
      },
      detection: {
        order: ['localStorage', 'navigator'],
        caches: ['localStorage']
      }
    })

  return i18n
}

export { i18n }
export default i18n
