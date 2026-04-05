import { useTranslation } from 'react-i18next'
import { motion, AnimatePresence } from 'motion/react'
import { useCart } from '../../context/CartContext'
import { useLanguage } from '../../context/LanguageContext'
import { CloseIcon, TrashIcon, MinusIcon, PlusIcon } from '../common/Icons'

export function CartDrawer() {
  const { t } = useTranslation()
  const { language, isRtl } = useLanguage()
  const { items, isOpen, total, closeCart, clearCart, updateQuantity, removeItem, getItemPrice } = useCart()

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="cart-backdrop"
            onClick={closeCart}
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: isRtl ? '-100%' : '100%' }}
            animate={{ x: 0 }}
            exit={{ x: isRtl ? '-100%' : '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="cart-drawer"
          >
            {/* Header */}
            <div className="cart-header">
              <h2>{t('cart.title')}</h2>
              <button
                onClick={closeCart}
                className="cart-close-button"
                aria-label="Close cart"
              >
                <CloseIcon className="w-5 h-5" />
              </button>
            </div>

            {/* Items */}
            <div className="cart-items">
              {items.length === 0 ? (
                <div className="cart-empty">
                  <span className="cart-empty-icon">🛒</span>
                  <p style={{fontWeight: 500}}>{t('cart.empty')}</p>
                </div>
              ) : (
                <div className="cart-items-list">
                  {items.map((item, index) => {
                    const name = language === 'ar' ? item.menuItem.nameAr : item.menuItem.nameEn
                    const options = item.selectedOptions
                      .map(optId => {
                        const opt = item.menuItem.options?.find(o => o.id === optId)
                        return opt ? (language === 'ar' ? opt.nameAr : opt.nameEn) : ''
                      })
                      .filter(Boolean)

                    return (
                      <div
                        key={`${item.menuItem.id}-${item.selectedOptions.join(',')}-${index}`}
                        className="cart-item"
                      >
                        {/* Image */}
                        <div className="cart-item-image">
                          {item.menuItem.image ? (
                            <img
                              src={item.menuItem.image}
                              alt={name}
                            />
                          ) : (
                            <div style={{width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                              <span style={{fontSize: '1.25rem', opacity: 0.3}}>🍽️</span>
                            </div>
                          )}
                        </div>

                        {/* Details */}
                        <div className="cart-item-details">
                          <h3 className="cart-item-title">{name}</h3>
                          {options.length > 0 && (
                            <p className="cart-item-options">
                              {options.join(', ')}
                            </p>
                          )}
                          <p className="cart-item-price">
                            ${getItemPrice(item)}
                          </p>

                          {/* Quantity Controls */}
                          <div className="cart-quantity-controls">
                            <button
                              onClick={() => updateQuantity(item.menuItem.id, item.selectedOptions, item.quantity - 1)}
                              className="cart-quantity-button"
                            >
                              <MinusIcon className="w-3.5 h-3.5" />
                            </button>
                            <span className="cart-quantity-value">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.menuItem.id, item.selectedOptions, item.quantity + 1)}
                              className="cart-quantity-button"
                            >
                              <PlusIcon className="w-3.5 h-3.5" />
                            </button>

                            <button
                              onClick={() => removeItem(item.menuItem.id, item.selectedOptions)}
                              className="cart-remove-button"
                            >
                              <TrashIcon className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="cart-footer">
                {/* Total */}
                <div className="cart-total">
                  <span className="cart-total-label">{t('cart.total')}</span>
                  <span className="cart-total-value">${total}</span>
                </div>

                {/* Clear cart */}
                <button
                  onClick={clearCart}
                  className="cart-clear-button"
                >
                  {t('cart.clear')}
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
