import { useState, useEffect } from 'react'
import { CartProvider } from './context/CartContext'
import Header from './components/Header'
import Hero from './components/Hero'
import MenuSection from './components/MenuSection'
import Events from './components/Events'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CartModal from './components/CartModal'

function App() {
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'menu', 'events', 'about', 'contact']
      const current = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (current) setActiveSection(current)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <CartProvider>
      <div className="min-h-screen bg-white">
        <Header activeSection={activeSection} />
        <Hero />
        <MenuSection />
        <Events />
        <About />
        <Contact />
        <Footer />
        <CartModal />
      </div>
    </CartProvider>
  )
}

export default App