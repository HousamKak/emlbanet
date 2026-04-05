export type Unit = 'item' | 'dozen' | 'kg' | 'plate' | 'slice' | 'whole'

export type Badge = 'new' | 'popular' | 'seasonal'

export interface ItemOption {
  id: string
  nameAr: string
  nameEn: string
  priceModifier: number
}

export interface MenuItem {
  id: string
  nameAr: string
  nameEn: string
  price: number
  unit: Unit
  serves?: number
  category: string
  image?: string
  options?: ItemOption[]
  badges?: Badge[]
}

export interface CategoryDef {
  id: string
  nameKey: string
}

export interface CartItem {
  menuItem: MenuItem
  quantity: number
  selectedOptions: string[]
}

export interface CartState {
  items: CartItem[]
  total: number
}
