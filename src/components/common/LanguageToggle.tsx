import { useLanguage } from '../../context/LanguageContext'

export function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage()

  return (
    <button
      onClick={toggleLanguage}
      className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-[--color-cream] hover:bg-[--color-cream-dark] text-[--color-brown] text-sm font-semibold transition-colors"
      aria-label={language === 'ar' ? 'Switch to English' : 'التبديل إلى العربية'}
    >
      <span>{language === 'ar' ? '🇬🇧' : '🇱🇧'}</span>
      <span>{language === 'ar' ? 'EN' : 'عربي'}</span>
    </button>
  )
}
