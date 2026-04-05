import type { MenuItem, CategoryDef } from '@emlbanet/ui'

export const menuItems: MenuItem[] = [
  // Classic
  {
    id: 'classic-cheesecake',
    nameAr: 'تشيز كيك كلاسيك',
    nameEn: 'Classic Cheesecake',
    price: 5,
    unit: 'slice',
    category: 'classic',
    badges: ['popular']
  },
  {
    id: 'classic-cheesecake-whole',
    nameAr: 'تشيز كيك كلاسيك كاملة',
    nameEn: 'Classic Cheesecake (Whole)',
    price: 45,
    unit: 'whole',
    serves: 10,
    category: 'classic'
  },
  {
    id: 'vanilla-cheesecake',
    nameAr: 'تشيز كيك فانيلا',
    nameEn: 'Vanilla Bean Cheesecake',
    price: 5,
    unit: 'slice',
    category: 'classic'
  },

  // Fruit
  {
    id: 'strawberry-cheesecake',
    nameAr: 'تشيز كيك فراولة',
    nameEn: 'Strawberry Cheesecake',
    price: 6,
    unit: 'slice',
    category: 'fruit',
    badges: ['popular']
  },
  {
    id: 'blueberry-cheesecake',
    nameAr: 'تشيز كيك توت',
    nameEn: 'Blueberry Cheesecake',
    price: 6,
    unit: 'slice',
    category: 'fruit'
  },
  {
    id: 'mango-cheesecake',
    nameAr: 'تشيز كيك منغا',
    nameEn: 'Mango Cheesecake',
    price: 6,
    unit: 'slice',
    category: 'fruit',
    badges: ['seasonal']
  },

  // Chocolate
  {
    id: 'chocolate-cheesecake',
    nameAr: 'تشيز كيك شوكولا',
    nameEn: 'Chocolate Cheesecake',
    price: 6,
    unit: 'slice',
    category: 'chocolate',
    badges: ['popular']
  },
  {
    id: 'nutella-cheesecake',
    nameAr: 'تشيز كيك نوتيلا',
    nameEn: 'Nutella Cheesecake',
    price: 7,
    unit: 'slice',
    category: 'chocolate'
  },
  {
    id: 'oreo-cheesecake',
    nameAr: 'تشيز كيك أوريو',
    nameEn: 'Oreo Cheesecake',
    price: 6,
    unit: 'slice',
    category: 'chocolate'
  },

  // Specialty
  {
    id: 'lotus-cheesecake',
    nameAr: 'تشيز كيك لوتس',
    nameEn: 'Lotus Biscoff Cheesecake',
    price: 7,
    unit: 'slice',
    category: 'specialty',
    badges: ['popular']
  },
  {
    id: 'pistachio-cheesecake',
    nameAr: 'تشيز كيك فستق',
    nameEn: 'Pistachio Cheesecake',
    price: 8,
    unit: 'slice',
    category: 'specialty',
    badges: ['new']
  },
  {
    id: 'salted-caramel-cheesecake',
    nameAr: 'تشيز كيك كراميل مملح',
    nameEn: 'Salted Caramel Cheesecake',
    price: 7,
    unit: 'slice',
    category: 'specialty'
  }
]

export const categories: readonly CategoryDef[] = [
  { id: 'all', nameKey: 'categories.all' },
  { id: 'classic', nameKey: 'categories.classic' },
  { id: 'fruit', nameKey: 'categories.fruit' },
  { id: 'chocolate', nameKey: 'categories.chocolate' },
  { id: 'specialty', nameKey: 'categories.specialty' }
] as const
