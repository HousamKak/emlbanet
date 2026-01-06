import { motion } from 'motion/react'
import { useLanguage } from '../../context/LanguageContext'

export function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage()

  return (
    <motion.button
      onClick={toggleLanguage}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="relative flex items-center gap-1.5 px-3 py-2 md:px-4 md:py-2.5 rounded-full bg-[--color-cream-dark] hover:bg-[--color-cream] border border-[--color-olive]/10 hover:border-[--color-olive]/30 text-[--color-brown] text-sm font-medium transition-all duration-300"
      aria-label={language === 'ar' ? 'Switch to English' : 'التبديل إلى العربية'}
    >
      <span className="text-base">
        {language === 'ar' ? '🇬🇧' : '🇱🇧'}
      </span>
      <span className="font-semibold">
        {language === 'ar' ? 'EN' : 'عربي'}
      </span>
    </motion.button>
  )
}
