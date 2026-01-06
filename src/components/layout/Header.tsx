import { useTranslation } from 'react-i18next'
import { useCart } from '../../context/CartContext'
import { LanguageToggle } from '../common/LanguageToggle'
import { CartIcon } from '../common/Icons'

export function Header() {
  const { t } = useTranslation()
  const { itemCount, toggleCart } = useCart()

  return (
    <header className="sticky top-0 z-40 bg-[--color-cream]/95 backdrop-blur-sm border-b border-[--color-primary]/20 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <img
              src="/images/logo.jpeg"
              alt={t('brand.name')}
              className="w-12 h-12 rounded-full object-cover border-2 border-[--color-primary]"
            />
            <div className="hidden sm:block">
              <h1 className="text-lg font-bold text-[--color-secondary]">
                {t('brand.name')}
              </h1>
              <p className="text-xs text-[--color-accent]">{t('brand.tagline')}</p>
            </div>
          </a>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <LanguageToggle />

            {/* Cart Button */}
            <button
              onClick={toggleCart}
              className="relative p-2 rounded-full bg-[--color-primary] text-white hover:bg-[--color-primary-dark] transition-colors duration-200 shadow-md"
              aria-label={t('nav.menu')}
            >
              <CartIcon className="w-6 h-6" />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-[--color-accent] text-white text-xs font-bold rounded-full flex items-center justify-center">
                  {itemCount > 9 ? '9+' : itemCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
