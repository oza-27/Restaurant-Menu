import { useState } from 'react';
import { useCart } from '../context/CartContext';

const Header = ({ activeSection }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { toggleCart, getCartItemsCount } = useCart();

    const navItems = [
        { name: 'Home', href: '#home' },
        { name: 'Menu', href: '#menu' },
        { name: 'Events', href: '#events' },
        { name: 'About', href: '#about' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <header className="fixed w-full bg-white/90 backdrop-blur-md z-50 shadow-sm">
            <nav className="w-full px-6 py-4">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <div className="text-2xl font-serif font-bold text-primary">
                        Bistro<span className="text-secondary">.</span>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex space-x-8 items-center">
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className={`font-sans font-medium transition-all duration-300 hover:text-secondary ${activeSection === item.name.toLowerCase()
                                        ? 'text-secondary border-b-2 border-secondary'
                                        : 'text-primary'
                                    }`}
                            >
                                {item.name}
                            </a>
                        ))}

                        {/* Cart Icon */}
                        <button
                            onClick={toggleCart}
                            className="relative p-2 text-primary hover:text-secondary transition-colors"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5.5M7 13l2.5 5.5m0 0L17 21" />
                            </svg>
                            {getCartItemsCount() > 0 && (
                                <span className="absolute -top-1 -right-1 bg-secondary text-primary text-xs rounded-full h-5 w-5 flex items-center justify-center font-sans font-bold">
                                    {getCartItemsCount()}
                                </span>
                            )}
                        </button>
                    </div>

                    {/* Mobile menu button and cart */}
                    <div className="flex items-center space-x-4 md:hidden">
                        <button
                            onClick={toggleCart}
                            className="relative p-2 text-primary"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5.5M7 13l2.5 5.5m0 0L17 21" />
                            </svg>
                            {getCartItemsCount() > 0 && (
                                <span className="absolute -top-1 -right-1 bg-secondary text-primary text-xs rounded-full h-5 w-5 flex items-center justify-center font-sans font-bold">
                                    {getCartItemsCount()}
                                </span>
                            )}
                        </button>

                        <button
                            className="text-primary"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                                <span className={`block h-0.5 w-6 bg-primary transition-all ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                                <span className={`block h-0.5 w-6 bg-primary transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                                <span className={`block h-0.5 w-6 bg-primary transition-all ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
                            </div>
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
                        <div className="flex flex-col space-y-4 mt-4">
                            {navItems.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="font-sans font-medium text-primary hover:text-secondary transition-colors"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item.name}
                                </a>
                            ))}
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
};

export default Header;