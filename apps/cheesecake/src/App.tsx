import { CartProvider, LanguageProvider, MenuGrid, CartDrawer } from '@emlbanet/ui'
import { Header } from './components/layout/Header'
import { Footer } from './components/layout/Footer'
import { Hero } from './components/promotions/Hero'
import { PromoBanner } from './components/promotions/PromoBanner'
import { menuItems, categories } from './data/menu'

function App() {
  return (
    <LanguageProvider>
      <CartProvider storageKey="emlbanet-cheesecake-cart">
        <div className="min-h-screen flex flex-col">
          <Header />

          <main className="flex-1">
            <Hero />
            <div className="max-w-6xl mx-auto">
              <PromoBanner />
              <MenuGrid items={menuItems} categories={categories} />
            </div>
          </main>

          <Footer />
          <CartDrawer />
        </div>
      </CartProvider>
    </LanguageProvider>
  )
}

export default App
