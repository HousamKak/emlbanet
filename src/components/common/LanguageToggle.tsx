import { useLanguage } from '../../context/LanguageContext'

export function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage()

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-white/80 hover:bg-white border border-[--color-primary] text-[--color-secondary] text-sm font-medium transition-all duration-200 hover:shadow-md"
      aria-label={language === 'ar' ? 'Switch to English' : 'التبديل إلى العربية'}
    >
      <span className="text-base">{language === 'ar' ? '🇬🇧' : '🇱🇧'}</span>
      <span>{language === 'ar' ? 'EN' : 'عربي'}</span>
    </button>
  )
}
