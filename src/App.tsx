import { CartProvider } from './context/CartContext'
import { LanguageProvider } from './context/LanguageContext'
import { Header } from './components/layout/Header'
import { Footer } from './components/layout/Footer'
import { Hero } from './components/promotions/Hero'
import { PromoBanner } from './components/promotions/PromoBanner'
import { MenuGrid } from './components/menu/MenuGrid'
import { CartDrawer } from './components/cart/CartDrawer'

function App() {
  return (
    <LanguageProvider>
      <CartProvider>
        <div className="min-h-screen flex flex-col">
          <Header />

          <main className="flex-1">
            <Hero />
            <div className="max-w-6xl mx-auto">
              <PromoBanner />
              <MenuGrid />
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
