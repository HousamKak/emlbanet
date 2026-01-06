import { useTranslation } from 'react-i18next'
import { motion } from 'motion/react'
import { useLanguage } from '../../context/LanguageContext'

export function Hero() {
  const { t } = useTranslation()
  const { language } = useLanguage()

  return (
    <section className="hero">
      <div className="hero-content">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="hero-logo"
        >
          <img
            src="/images/logo.jpeg"
            alt={t('brand.name')}
          />
        </motion.div>

        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="hero-eyebrow"
        >
          <span>{language === 'ar' ? 'مطبخ منزلي' : 'Home Kitchen'}</span>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="hero-title"
        >
          {t('hero.title')}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="hero-subtitle"
        >
          {t('hero.subtitle')}
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="hero-description"
        >
          {t('hero.catering')}
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <a href="#menu" className="btn btn-primary btn-large">
            <span>{t('hero.cta')}</span>
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} style={{width: '1.25rem', height: '1.25rem'}}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="hero-trust"
        >
          <div className="hero-trust-item">
            <span className="hero-trust-stars">★★★★★</span>
            <span>{language === 'ar' ? 'طعم بيتي' : 'Home Taste'}</span>
          </div>
          <div style={{width: '4px', height: '4px', borderRadius: '50%', background: 'var(--color-brown-light)', opacity: 0.3}}></div>
          <div className="hero-trust-item">
            <svg style={{width: '1rem', height: '1rem'}} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            <span>{language === 'ar' ? 'توصيل متاح' : 'Delivery'}</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
