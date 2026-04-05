// Types
export type {
  Unit,
  Badge as BadgeType,
  ItemOption,
  MenuItem,
  CategoryDef,
  CartItem,
  CartState
} from './types/menu'

// Context
export { CartProvider, useCart } from './context/CartContext'
export { LanguageProvider, useLanguage } from './context/LanguageContext'

// i18n
export { createI18n } from './i18n'

// Common components
export { Badge } from './components/common/Badge'
export { LanguageToggle } from './components/common/LanguageToggle'
export {
  CartIcon,
  CloseIcon,
  PlusIcon,
  MinusIcon,
  TrashIcon,
  WhatsAppIcon,
  PhoneIcon,
  InstagramIcon,
  LocationIcon
} from './components/common/Icons'

// Menu components
export { MenuCard } from './components/menu/MenuCard'
export { MenuGrid } from './components/menu/MenuGrid'
export { CategoryTabs } from './components/menu/CategoryTabs'

// Cart components
export { CartDrawer } from './components/cart/CartDrawer'
