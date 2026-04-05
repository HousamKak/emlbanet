import { useTranslation } from 'react-i18next'
import { motion } from 'motion/react'
import { LanguageProvider, useLanguage } from '@emlbanet/ui'

const HOMEMADE_URL = 'https://homemadefood.emlbanet.com'
const CHEESECAKE_URL = 'https://cheesecake.emlbanet.com'

function LangToggle() {
  const { language, toggleLanguage } = useLanguage()
  return (
    <button
      onClick={toggleLanguage}
      className="landing-lang-toggle"
      aria-label={language === 'ar' ? 'Switch to English' : 'التبديل إلى العربية'}
    >
      <span>{language === 'ar' ? '🇬🇧' : '🇱🇧'}</span>
      <span>{language === 'ar' ? 'EN' : 'عربي'}</span>
    </button>
  )
}

function ArrowIcon() {
  return (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
    </svg>
  )
}

function Half({
  href,
  side,
  title,
  tagline,
  parentName,
  enter,
  delay
}: {
  href: string
  side: 'homemade' | 'cheesecake'
  title: string
  tagline: string
  parentName: string
  enter: string
  delay: number
}) {
  return (
    <a href={href} className={`split-half ${side}`} aria-label={title}>
      <div className="split-bg" />
      <div className="split-overlay" />
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
        className="split-content"
      >
        <span className="split-parent-mark">{parentName}</span>
        <h2 className="split-title">{title}</h2>
        <p className="split-tagline">{tagline}</p>
        <span className="split-cta">
          <span>{enter}</span>
          <ArrowIcon />
        </span>
      </motion.div>
    </a>
  )
}

function Landing() {
  const { t } = useTranslation()

  return (
    <div className="split">
      <Half
        href={HOMEMADE_URL}
        side="homemade"
        title={t('homemade.name')}
        tagline={t('homemade.tagline')}
        parentName={t('parent.name')}
        enter={t('homemade.enter')}
        delay={0.15}
      />

      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="split-divider"
        aria-hidden="true"
      >
        <img src="/images/logo.jpeg" alt="" />
      </motion.div>

      <Half
        href={CHEESECAKE_URL}
        side="cheesecake"
        title={t('cheesecake.name')}
        tagline={t('cheesecake.tagline')}
        parentName={t('parent.name')}
        enter={t('cheesecake.enter')}
        delay={0.25}
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="landing-parent-tagline"
      >
        {t('parent.tagline')}
      </motion.div>

      <LangToggle />
    </div>
  )
}

function App() {
  return (
    <LanguageProvider>
      <Landing />
    </LanguageProvider>
  )
}

export default App
