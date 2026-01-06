import { createContext, useContext, useEffect, ReactNode } from 'react'
import { useTranslation } from 'react-i18next'

interface LanguageContextType {
  language: string
  isRtl: boolean
  toggleLanguage: () => void
  setLanguage: (lang: string) => void
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const { i18n } = useTranslation()

  const language = i18n.language || 'ar'
  const isRtl = language === 'ar'

  useEffect(() => {
    document.documentElement.lang = language
    document.documentElement.dir = isRtl ? 'rtl' : 'ltr'
  }, [language, isRtl])

  const toggleLanguage = () => {
    const newLang = language === 'ar' ? 'en' : 'ar'
    i18n.changeLanguage(newLang)
  }

  const setLanguage = (lang: string) => {
    i18n.changeLanguage(lang)
  }

  return (
    <LanguageContext.Provider value={{ language, isRtl, toggleLanguage, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
