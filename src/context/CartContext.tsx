import { createContext, useContext, useReducer, useEffect, ReactNode } from 'react'
import { CartItem, MenuItem } from '../types/menu'

interface CartState {
  items: CartItem[]
  isOpen: boolean
}

type CartAction =
  | { type: 'ADD_ITEM'; payload: { menuItem: MenuItem; selectedOptions: string[] } }
  | { type: 'REMOVE_ITEM'; payload: { itemId: string; selectedOptions: string[] } }
  | { type: 'UPDATE_QUANTITY'; payload: { itemId: string; selectedOptions: string[]; quantity: number } }
  | { type: 'CLEAR_CART' }
  | { type: 'TOGGLE_CART' }
  | { type: 'OPEN_CART' }
  | { type: 'CLOSE_CART' }
  | { type: 'LOAD_CART'; payload: CartItem[] }

const getItemKey = (itemId: string, options: string[]): string => {
  return `${itemId}-${options.sort().join(',')}`
}

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case 'ADD_ITEM': {
      const { menuItem, selectedOptions } = action.payload
      const itemKey = getItemKey(menuItem.id, selectedOptions)
      const existingIndex = state.items.findIndex(
        item => getItemKey(item.menuItem.id, item.selectedOptions) === itemKey
      )

      if (existingIndex >= 0) {
        const newItems = [...state.items]
        newItems[existingIndex] = {
          ...newItems[existingIndex],
          quantity: newItems[existingIndex].quantity + 1
        }
        return { ...state, items: newItems, isOpen: true }
      }

      return {
        ...state,
        items: [...state.items, { menuItem, quantity: 1, selectedOptions }],
        isOpen: true
      }
    }

    case 'REMOVE_ITEM': {
      const { itemId, selectedOptions } = action.payload
      const itemKey = getItemKey(itemId, selectedOptions)
      return {
        ...state,
        items: state.items.filter(
          item => getItemKey(item.menuItem.id, item.selectedOptions) !== itemKey
        )
      }
    }

    case 'UPDATE_QUANTITY': {
      const { itemId, selectedOptions, quantity } = action.payload
      const itemKey = getItemKey(itemId, selectedOptions)

      if (quantity <= 0) {
        return {
          ...state,
          items: state.items.filter(
            item => getItemKey(item.menuItem.id, item.selectedOptions) !== itemKey
          )
        }
      }

      return {
        ...state,
        items: state.items.map(item =>
          getItemKey(item.menuItem.id, item.selectedOptions) === itemKey
            ? { ...item, quantity }
            : item
        )
      }
    }

    case 'CLEAR_CART':
      return { ...state, items: [] }

    case 'TOGGLE_CART':
      return { ...state, isOpen: !state.isOpen }

    case 'OPEN_CART':
      return { ...state, isOpen: true }

    case 'CLOSE_CART':
      return { ...state, isOpen: false }

    case 'LOAD_CART':
      return { ...state, items: action.payload }

    default:
      return state
  }
}

interface CartContextType {
  items: CartItem[]
  isOpen: boolean
  total: number
  itemCount: number
  addItem: (menuItem: MenuItem, selectedOptions?: string[]) => void
  removeItem: (itemId: string, selectedOptions?: string[]) => void
  updateQuantity: (itemId: string, selectedOptions: string[], quantity: number) => void
  clearCart: () => void
  toggleCart: () => void
  openCart: () => void
  closeCart: () => void
  getItemPrice: (item: CartItem) => number
}

const CartContext = createContext<CartContextType | undefined>(undefined)

const STORAGE_KEY = 'emlbanet-cart'

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, { items: [], isOpen: false })

  // Load cart from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      if (saved) {
        const parsed = JSON.parse(saved)
        dispatch({ type: 'LOAD_CART', payload: parsed })
      }
    } catch (e) {
      console.error('Failed to load cart:', e)
    }
  }, [])

  // Save cart to localStorage on change
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state.items))
    } catch (e) {
      console.error('Failed to save cart:', e)
    }
  }, [state.items])

  const getItemPrice = (item: CartItem): number => {
    let price = item.menuItem.price
    if (item.menuItem.options) {
      for (const optionId of item.selectedOptions) {
        const option = item.menuItem.options.find(o => o.id === optionId)
        if (option) {
          price += option.priceModifier
        }
      }
    }
    return price * item.quantity
  }

  const total = state.items.reduce((sum, item) => sum + getItemPrice(item), 0)
  const itemCount = state.items.reduce((sum, item) => sum + item.quantity, 0)

  const value: CartContextType = {
    items: state.items,
    isOpen: state.isOpen,
    total,
    itemCount,
    addItem: (menuItem, selectedOptions = []) =>
      dispatch({ type: 'ADD_ITEM', payload: { menuItem, selectedOptions } }),
    removeItem: (itemId, selectedOptions = []) =>
      dispatch({ type: 'REMOVE_ITEM', payload: { itemId, selectedOptions } }),
    updateQuantity: (itemId, selectedOptions, quantity) =>
      dispatch({ type: 'UPDATE_QUANTITY', payload: { itemId, selectedOptions, quantity } }),
    clearCart: () => dispatch({ type: 'CLEAR_CART' }),
    toggleCart: () => dispatch({ type: 'TOGGLE_CART' }),
    openCart: () => dispatch({ type: 'OPEN_CART' }),
    closeCart: () => dispatch({ type: 'CLOSE_CART' }),
    getItemPrice
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}
