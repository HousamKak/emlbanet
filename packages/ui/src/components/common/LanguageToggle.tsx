import { useLanguage } from '../../context/LanguageContext'

export function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage()

  return (
    <button
      onClick={toggleLanguage}
      className="language-toggle"
      aria-label={language === 'ar' ? 'Switch to English' : 'التبديل إلى العربية'}
    >
      <span>{language === 'ar' ? '🇬🇧' : '🇱🇧'}</span>
      <span>{language === 'ar' ? 'EN' : 'عربي'}</span>
    </button>
  )
}
