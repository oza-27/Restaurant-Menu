const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative bg-gray-900">
            {/* Background Image with Gradient Overlay */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: 'url("https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3")',
                }}
            >
                <div className="absolute inset-0 bg-black/50"></div>
            </div>

            {/* Hero Content */}
            <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
                <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">
                    Bistro<span className="text-secondary">Elegante</span>
                </h1>
                <p className="text-xl md:text-2xl font-sans mb-8 text-gray-200">
                    Where culinary artistry meets unforgettable experiences
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                        href="#menu"
                        className="bg-secondary text-primary px-8 py-4 rounded-lg font-sans font-semibold hover:bg-yellow-600 transition-colors duration-300"
                    >
                        Explore Our Menu
                    </a>
                    <a
                        href="#contact"
                        className="border-2 border-white text-white px-8 py-4 rounded-lg font-sans font-semibold hover:bg-white hover:text-primary transition-all duration-300"
                    >
                        Reserve a Table
                    </a>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
                    <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
                </div>
            </div>
        </section>
    )
}

export default Hero