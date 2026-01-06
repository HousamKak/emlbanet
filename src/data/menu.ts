import { MenuItem } from '../types/menu'

export const menuItems: MenuItem[] = [
  // Salads & Mezze
  {
    id: 'fatoush',
    nameAr: 'فتوش',
    nameEn: 'Fatoush',
    price: 15,
    unit: 'plate',
    serves: 6,
    category: 'salads',
    image: '/images/menu/Fatoush 6ppl - 15$.jpeg',
    badges: ['popular']
  },
  {
    id: 'mutabal-eggplant',
    nameAr: 'متبل باذنجان',
    nameEn: 'Eggplant Mutabal',
    price: 7,
    unit: 'plate',
    category: 'salads',
    image: '/images/menu/check ref 3.jpeg'
  },
  {
    id: 'hummus',
    nameAr: 'متبل حمص',
    nameEn: 'Hummus',
    price: 8,
    unit: 'plate',
    category: 'salads'
  },

  // Stuffed Dishes
  {
    id: 'grape-leaves-beef',
    nameAr: 'ورق عنب لحمة بقر',
    nameEn: 'Grape Leaves (Beef)',
    price: 15,
    unit: 'kg',
    category: 'stuffed',
    image: '/images/menu/check ref 1.jpeg',
    options: [
      { id: 'cooked', nameAr: 'مطبوخ', nameEn: 'Cooked', priceModifier: 5 }
    ],
    badges: ['popular']
  },
  {
    id: 'grape-leaves-lamb',
    nameAr: 'ورق عنب لحمة غنم',
    nameEn: 'Grape Leaves (Lamb)',
    price: 20,
    unit: 'kg',
    category: 'stuffed',
    image: '/images/menu/check ref 1.jpeg',
    options: [
      { id: 'cooked', nameAr: 'مطبوخ', nameEn: 'Cooked', priceModifier: 5 }
    ]
  },
  {
    id: 'sheikh-mahshi',
    nameAr: 'شيخ المحشي + رز',
    nameEn: 'Sheikh el Mahshi + Rice',
    price: 25,
    unit: 'plate',
    serves: 4,
    category: 'stuffed',
    image: '/images/menu/شيخ المحشي + رز ٤ اشخاص - 25$.jpeg',
    badges: ['popular']
  },

  // Kibbeh & Fried
  {
    id: 'kibbeh',
    nameAr: 'كبب',
    nameEn: 'Kibbeh',
    price: 8,
    unit: 'dozen',
    category: 'kibbeh',
    image: '/images/menu/صفيحة دزينة 6$.jpeg',
    options: [
      { id: 'fried', nameAr: 'مقلي', nameEn: 'Fried', priceModifier: 2 }
    ],
    badges: ['popular']
  },
  {
    id: 'rqaqat',
    nameAr: 'رقاقات',
    nameEn: 'Rqaqat',
    price: 6,
    unit: 'dozen',
    category: 'kibbeh',
    options: [
      { id: 'fried', nameAr: 'مقلي', nameEn: 'Fried', priceModifier: 2 }
    ]
  },

  // Pastries
  {
    id: 'fatayer-spinach',
    nameAr: 'فطاير سبانخ',
    nameEn: 'Spinach Fatayer',
    price: 3,
    unit: 'dozen',
    category: 'pastries',
    image: '/images/menu/سبانغ 3$.jpeg'
  },
  {
    id: 'fatayer-lamb',
    nameAr: 'فطاير لحمة غنم',
    nameEn: 'Lamb Fatayer',
    price: 6,
    unit: 'dozen',
    category: 'pastries',
    image: '/images/menu/check ref 4.jpeg'
  },
  {
    id: 'sfiha',
    nameAr: 'صفيحة',
    nameEn: 'Sfiha',
    price: 6,
    unit: 'dozen',
    category: 'pastries',
    image: '/images/menu/صفيحة دزينة 6$.jpeg',
    badges: ['popular']
  },

  // Desserts
  {
    id: 'buche-noel',
    nameAr: 'بوش دو نويل',
    nameEn: 'Bûche de Noël',
    price: 35,
    unit: 'item',
    category: 'desserts',
    image: '/images/menu/Bûche de noël 40cm - 35$.jpeg',
    badges: ['seasonal']
  },
  {
    id: 'fruit-tart',
    nameAr: 'تارت فواكه',
    nameEn: 'Fruit Tart',
    price: 25,
    unit: 'item',
    serves: 20,
    category: 'desserts',
    image: '/images/menu/تارت ٢٠ شخص 25$.jpeg'
  }
]

export const categories = [
  { id: 'all', nameKey: 'categories.all' },
  { id: 'salads', nameKey: 'categories.salads' },
  { id: 'stuffed', nameKey: 'categories.stuffed' },
  { id: 'kibbeh', nameKey: 'categories.kibbeh' },
  { id: 'pastries', nameKey: 'categories.pastries' },
  { id: 'desserts', nameKey: 'categories.desserts' }
] as const
