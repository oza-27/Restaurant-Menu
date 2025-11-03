const Footer = () => {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="bg-primary text-white">
            {/* Main Footer Content */}
            <div className="container mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Brand Column */}
                    <div className="lg:col-span-1">
                        <h3 className="text-2xl font-serif font-bold mb-4">
                            Bistro<span className="text-secondary">.</span>
                        </h3>
                        <p className="text-gray-300 mb-6 leading-relaxed">
                            Experience culinary excellence in the heart of the city. Where every meal is a celebration of flavor, tradition, and innovation.
                        </p>
                        <div className="flex space-x-4">
                            {['twitter', 'facebook', 'instagram', 'tripadvisor'].map((social) => (
                                <a
                                    key={social}
                                    href="#"
                                    className="w-10 h-10 bg-dark rounded-full flex items-center justify-center hover:bg-secondary transition-colors duration-300 group"
                                >
                                    <span className="text-white group-hover:text-primary">
                                        {social === 'instagram' ? '📷' : social === 'twitter' ? '🐦' : social === 'facebook' ? '📘' : '⭐'}
                                    </span>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-sans font-semibold mb-6">Quick Links</h4>
                        <ul className="space-y-3">
                            {['Menu', 'About Us', 'Gallery', 'Testimonials', 'Careers'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-gray-300 hover:text-secondary transition-colors duration-300">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-sans font-semibold mb-6">Contact Info</h4>
                        <div className="space-y-3 text-gray-300">
                            <p>123 Culinary Avenue<br />New York, NY 10001</p>
                            <p>+1 (555) 123-4567</p>
                            <p>info@bistroelegante.com</p>
                        </div>
                    </div>

                    {/* Newsletter Signup */}
                    <div>
                        <h4 className="text-lg font-sans font-semibold mb-6">Newsletter</h4>
                        <p className="text-gray-300 mb-4">Subscribe for updates and exclusive offers</p>
                        <div className="flex">
                            <input
                                type="email"
                                placeholder="Your email"
                                className="flex-1 px-4 py-3 bg-dark border border-gray-600 rounded-l-lg focus:outline-none focus:border-secondary"
                            />
                            <button className="bg-secondary text-primary px-6 py-3 rounded-r-lg font-sans font-semibold hover:bg-yellow-600 transition-colors">
                                Join
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-700">
                <div className="container mx-auto px-6 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="text-gray-400 text-sm mb-4 md:mb-0">
                            © {currentYear} Bistro Elegante. All rights reserved.
                        </p>
                        <div className="flex space-x-6 text-sm text-gray-400">
                            <a href="#" className="hover:text-secondary transition-colors">Privacy Policy</a>
                            <a href="#" className="hover:text-secondary transition-colors">Terms of Service</a>
                            <a href="#" className="hover:text-secondary transition-colors">Cookie Policy</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer