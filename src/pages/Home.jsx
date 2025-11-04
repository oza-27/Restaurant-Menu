import { Link } from 'react-router-dom'

const Home = () => {
    const features = [
        {
            icon: '🍽️',
            title: 'Exquisite Cuisine',
            description: 'Handcrafted dishes using locally sourced, seasonal ingredients'
        },
        {
            icon: '🎵',
            title: 'Live Music',
            description: 'Weekly jazz performances in an intimate setting'
        },
        {
            icon: '🍷',
            title: 'Fine Wines',
            description: 'Curated selection of international and local wines'
        },
        {
            icon: '🌟',
            title: 'Award Winning',
            description: 'Recognized for excellence in culinary innovation'
        }
    ]

    return (
        <div>
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
                {/* Background with gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-dark/90 z-0"></div>
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
                    style={{
                        backgroundImage: 'url("https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3")',
                    }}
                ></div>

                {/* Animated background elements */}
                <div className="absolute inset-0 overflow-hidden z-0">
                    <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-secondary/10 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-secondary/5 rounded-full blur-3xl"></div>
                </div>

                {/* Hero Content */}
                <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
                    <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 animate-fade-in">
                        <span className='text-black'>Bistro</span><span className="text-secondary">Elegante</span>
                    </h1>
                    <p className="text-xl md:text-2xl font-sans mb-8 text-gray-200 leading-relaxed">
                        Where culinary artistry meets unforgettable experiences in the heart of the city
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            to="/menu"
                            className="bg-secondary text-primary px-8 py-4 rounded-lg font-sans font-semibold hover:bg-yellow-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                        >
                            Explore Our Menu
                        </Link>
                        <Link
                            to="/contact"
                            className="bg-white text-primary px-8 py-4 rounded-lg font-sans font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
                        >
                            Reserve a Table
                        </Link>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
                    <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
                        <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">
                            Why Choose Us
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Experience the perfect blend of exceptional cuisine, warm hospitality, and unforgettable ambiance
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="text-center group p-6 rounded-2xl hover:bg-accent transition-all duration-300 transform hover:-translate-y-2"
                            >
                                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-serif font-semibold text-primary mb-3">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-primary to-dark text-white">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
                        Ready for an Unforgettable Experience?
                    </h2>
                    <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                        Join us for an evening of exceptional food, fine wines, and memories that last a lifetime.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            to="/contact"
                            className="bg-secondary text-primary px-8 py-4 rounded-lg font-sans font-semibold hover:bg-yellow-600 transition-all duration-300 shadow-lg"
                        >
                            Book Your Table
                        </Link>
                        <Link
                            to="/events"
                            className="border-2 border-white text-white px-8 py-4 rounded-lg font-sans font-semibold hover:bg-white hover:text-primary transition-all duration-300"
                        >
                            View Events
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home