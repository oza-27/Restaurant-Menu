import { useState, useEffect } from 'react'
import Header from './Header'
import Footer from './Footer'
import CartModal from '../../pages/CartModal.jsx';

const Layout = ({ children }) => {
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
            <Header isScrolled={isScrolled} />
            <main className="pt-20"> {/* Account for fixed header */}
                {children}
            </main>
            <Footer />
            <CartModal />
        </div>
    )
}

export default Layout