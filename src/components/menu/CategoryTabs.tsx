import { useTranslation } from 'react-i18next'
import { categories } from '../../data/menu'

interface CategoryTabsProps {
  activeCategory: string
  onCategoryChange: (category: string) => void
}

export function CategoryTabs({ activeCategory, onCategoryChange }: CategoryTabsProps) {
  const { t } = useTranslation()

  return (
    <div className="sticky top-16 md:top-20 z-30 bg-white/95 backdrop-blur-md border-y border-[--color-cream-dark] shadow-sm">
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 py-4">
        <div className="flex gap-2.5 md:gap-3 overflow-x-auto hide-scrollbar md:justify-center">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => onCategoryChange(category.id)}
              className={`flex-shrink-0 px-4 md:px-5 py-2.5 rounded-full text-sm md:text-base font-semibold whitespace-nowrap transition-all duration-200 ${
                activeCategory === category.id
                  ? 'bg-[--color-olive] text-white shadow-sm shadow-[--color-olive]/30'
                  : 'bg-white text-[--color-brown] border border-[--color-cream-dark] hover:bg-[--color-cream]'
              }`}
            >
              {t(category.nameKey)}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
