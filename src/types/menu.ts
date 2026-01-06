export type Category = 'salads' | 'stuffed' | 'kibbeh' | 'pastries' | 'desserts'

export type Unit = 'item' | 'dozen' | 'kg' | 'plate'

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
  category: Category
  image: string
  options?: ItemOption[]
  badges?: Badge[]
}

export interface CartItem {
  menuItem: MenuItem
  quantity: number
  selectedOptions: string[] // option IDs
}

export interface CartState {
  items: CartItem[]
  total: number
}
