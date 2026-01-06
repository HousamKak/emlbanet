import { useState, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { menuItems } from '../../data/menu'
import { MenuCard } from './MenuCard'
import { CategoryTabs } from './CategoryTabs'

export function MenuGrid() {
  const { t } = useTranslation()
  const [activeCategory, setActiveCategory] = useState('all')

  const filteredItems = useMemo(() => {
    if (activeCategory === 'all') return menuItems
    return menuItems.filter(item => item.category === activeCategory)
  }, [activeCategory])

  return (
    <section id="menu" className="py-12 md:py-16 bg-[--color-cream]">
      {/* Section header */}
      <div className="max-w-6xl mx-auto px-5 md:px-8 mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-[--color-brown]">
          {t('nav.menu')}
        </h2>
        <div className="mt-3 w-12 h-1 rounded-full bg-gradient-to-r from-[--color-olive] to-[--color-gold]" />
      </div>

      {/* Category tabs */}
      <CategoryTabs
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />

      {/* Grid */}
      <div className="max-w-6xl mx-auto px-5 md:px-8 lg:px-8 mt-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-6">
          {filteredItems.map((item, index) => (
            <MenuCard key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>

      {/* Empty state */}
      {filteredItems.length === 0 && (
        <div className="text-center py-16 text-[--color-brown-light]">
          <span className="text-5xl mb-3 block opacity-30">🍽️</span>
          <p className="font-medium">No items in this category</p>
        </div>
      )}
    </section>
  )
}
