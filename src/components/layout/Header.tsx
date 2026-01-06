import { useTranslation } from 'react-i18next'
import { motion } from 'motion/react'
import { useCart } from '../../context/CartContext'
import { LanguageToggle } from '../common/LanguageToggle'

export function Header() {
  const { t } = useTranslation()
  const { itemCount, toggleCart } = useCart()

  return (
    <header className="header">
      <div className="header-container">
        {/* Logo */}
        <a href="#" className="logo">
          <div className="logo-image">
            <img
              src="/images/logo.jpeg"
              alt={t('brand.name')}
              style={{width: '100%', height: '100%', objectFit: 'cover'}}
            />
          </div>

          <div style={{display: 'none'}} className="sm-block">
            <h1 style={{fontSize: '1.125rem', fontWeight: 700, color: 'var(--color-brown)', lineHeight: 1.2}}>
              {t('brand.name')}
            </h1>
            <p style={{fontSize: '0.75rem', color: 'var(--color-primary)', fontWeight: 600}}>
              {t('brand.tagline')}
            </p>
          </div>
        </a>

        {/* Right side actions */}
        <div style={{display: 'flex', alignItems: 'center', gap: '0.75rem'}}>
          <LanguageToggle />

          {/* Cart Button */}
          <button
            onClick={toggleCart}
            className="cart-button"
            aria-label={t('cart.title')}
          >
            <svg style={{width: '1.25rem', height: '1.25rem'}} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>

            {itemCount > 0 && (
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="cart-badge"
              >
                {itemCount > 9 ? '9+' : itemCount}
              </motion.span>
            )}

            <span style={{display: 'none'}} className="md-inline">
              {t('cart.title')}
            </span>
          </button>
        </div>
      </div>
    </header>
  )
}
