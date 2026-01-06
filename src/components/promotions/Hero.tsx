import { useTranslation } from 'react-i18next'
import { motion } from 'motion/react'
import { useLanguage } from '../../context/LanguageContext'

export function Hero() {
  const { t } = useTranslation()
  const { language } = useLanguage()

  return (
    <section className="relative min-h-[60vh] md:min-h-[68vh] overflow-hidden bg-gradient-to-b from-[--color-cream] to-white flex items-center justify-center">
      {/* Subtle decorative blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -end-32 w-[400px] h-[400px] md:w-[500px] md:h-[500px] rounded-full bg-[--color-olive]/[0.04] blur-3xl" />
        <div className="absolute -bottom-20 -start-20 w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full bg-[--color-terracotta]/[0.03] blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-20">
        <div className="flex flex-col items-center justify-center text-center">

          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mb-12 md:mb-14"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-[--color-olive]/10 blur-2xl rounded-full scale-150" />
              <div className="relative w-28 h-28 md:w-36 md:h-36 lg:w-44 lg:h-44 rounded-full bg-white shadow-xl shadow-[--color-brown]/10 p-1.5 md:p-2">
                <img
                  src="/images/logo.jpeg"
                  alt={t('brand.name')}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
          </motion.div>

          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center gap-3 mb-7 md:mb-8"
          >
            <span className="w-8 h-px bg-gradient-to-r from-transparent to-[--color-gold]" />
            <span className="text-xs md:text-sm font-semibold tracking-[0.15em] text-[--color-olive] uppercase">
              {language === 'ar' ? 'مطبخ منزلي' : 'Home Kitchen'}
            </span>
            <span className="w-8 h-px bg-gradient-to-l from-transparent to-[--color-gold]" />
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl md:text-5xl lg:text-6xl font-bold text-[--color-brown] mb-6 md:mb-7 leading-snug"
          >
            {t('hero.title')}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg md:text-2xl font-medium text-[--color-terracotta] leading-relaxed mb-8 md:mb-9"
          >
            {t('hero.subtitle')}
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-base md:text-lg text-[--color-brown-light] mb-14 md:mb-16 max-w-md leading-relaxed"
          >
            {t('hero.catering')}
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex items-center justify-center"
          >
            <a
              href="#menu"
              className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-full text-white font-semibold text-base shadow-lg transition-all duration-200 hover:scale-105"
              style={{
                backgroundColor: '#6B7B4C',
                boxShadow: '0 10px 15px -3px rgba(107, 123, 76, 0.2), 0 4px 6px -4px rgba(107, 123, 76, 0.2)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#4A5535'
                e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(107, 123, 76, 0.3), 0 8px 10px -6px rgba(107, 123, 76, 0.3)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#6B7B4C'
                e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(107, 123, 76, 0.2), 0 4px 6px -4px rgba(107, 123, 76, 0.2)'
              }}
            >
              <span>{t('hero.cta')}</span>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </a>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="mt-14 md:mt-18 flex flex-wrap items-center justify-center gap-5 md:gap-6 text-sm text-[--color-brown-light]"
          >
            <div className="flex items-center gap-2">
              <span className="text-[--color-gold]">★★★★★</span>
              <span className="font-medium">{language === 'ar' ? 'طعم بيتي' : 'Home Taste'}</span>
            </div>
            <div className="w-1 h-1 rounded-full bg-[--color-brown-light]/30" />
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-[--color-olive]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              <span className="font-medium">{language === 'ar' ? 'توصيل متاح' : 'Delivery'}</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
