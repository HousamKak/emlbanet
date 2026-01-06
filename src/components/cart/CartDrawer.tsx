import { useTranslation } from 'react-i18next'
import { motion, AnimatePresence } from 'motion/react'
import { useCart } from '../../context/CartContext'
import { useLanguage } from '../../context/LanguageContext'
import { CloseIcon, TrashIcon, WhatsAppIcon, MinusIcon, PlusIcon } from '../common/Icons'

const PHONE = '961712593589'

export function CartDrawer() {
  const { t } = useTranslation()
  const { language, isRtl } = useLanguage()
  const { items, isOpen, total, closeCart, clearCart, updateQuantity, removeItem, getItemPrice } = useCart()

  const generateWhatsAppMessage = () => {
    let message = language === 'ar'
      ? `مرحبا! أود طلب التالي:\n------------------\n`
      : `Hello! I would like to order:\n------------------\n`

    items.forEach(item => {
      const name = language === 'ar' ? item.menuItem.nameAr : item.menuItem.nameEn
      const options = item.selectedOptions
        .map(optId => {
          const opt = item.menuItem.options?.find(o => o.id === optId)
          return opt ? (language === 'ar' ? opt.nameAr : opt.nameEn) : ''
        })
        .filter(Boolean)
        .join(', ')

      const optionText = options ? ` (${options})` : ''
      const price = getItemPrice(item)
      message += `- ${name}${optionText} x${item.quantity} - $${price}\n`
    })

    message += `------------------\n`
    message += language === 'ar' ? `المجموع: $${total}` : `Total: $${total}`

    return encodeURIComponent(message)
  }

  const handleWhatsAppOrder = () => {
    const message = generateWhatsAppMessage()
    window.open(`https://wa.me/${PHONE}?text=${message}`, '_blank')
  }

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
                <CloseIcon style={{width: '1.25rem', height: '1.25rem', color: 'var(--color-brown)'}} />
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
                              <MinusIcon style={{width: '0.875rem', height: '0.875rem'}} />
                            </button>
                            <span className="cart-quantity-value">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.menuItem.id, item.selectedOptions, item.quantity + 1)}
                              className="cart-quantity-button"
                            >
                              <PlusIcon style={{width: '0.875rem', height: '0.875rem'}} />
                            </button>

                            <button
                              onClick={() => removeItem(item.menuItem.id, item.selectedOptions)}
                              className="cart-remove-button"
                            >
                              <TrashIcon style={{width: '1rem', height: '1rem'}} />
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

                {/* WhatsApp Order */}
                <button
                  onClick={handleWhatsAppOrder}
                  className="cart-whatsapp-button"
                >
                  <WhatsAppIcon style={{width: '1.25rem', height: '1.25rem'}} />
                  <span>{t('cart.orderViaWhatsapp')}</span>
                </button>

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
