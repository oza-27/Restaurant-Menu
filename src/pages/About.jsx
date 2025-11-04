const About = () => {
    return (
        <section id="about" className="py-20 bg-white">
            <div className="w-full px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Image Section */}
                    <div className="relative">
                        <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-4.0.3"
                                alt="Restaurant interior"
                                className="w-full h-96 object-cover"
                            />
                        </div>
                        {/* Decorative element */}
                        <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-secondary rounded-2xl -z-10"></div>
                    </div>

                    {/* Content Section */}
                    <div className="lg:pl-12">
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
                            Our Story
                        </h2>
                        <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                            Founded in 2015, Bistro Elegante emerged from a simple belief: that every meal should be a celebration.
                            Our chef, Marco Bellini, brings decades of culinary expertise from Michelin-starred kitchens across Europe.
                        </p>
                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                            We source our ingredients from local farms and trusted partners worldwide, ensuring each dish tells a story
                            of quality, sustainability, and passion. Every plate is crafted with attention to detail and a commitment to excellence.
                        </p>

                        {/* Stats */}
                        <div className="grid grid-cols-2 gap-6 mb-8">
                            <div className="text-center">
                                <div className="text-3xl font-serif font-bold text-secondary mb-2">8+</div>
                                <div className="text-sm text-gray-500 font-sans">Years of Excellence</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-serif font-bold text-secondary mb-2">50+</div>
                                <div className="text-sm text-gray-500 font-sans">Signature Dishes</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-serif font-bold text-secondary mb-2">100%</div>
                                <div className="text-sm text-gray-500 font-sans">Locally Sourced</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-serif font-bold text-secondary mb-2">5★</div>
                                <div className="text-sm text-gray-500 font-sans">Customer Rating</div>
                            </div>
                        </div>

                        {/* Chef Signature */}
                        <div className="flex items-center space-x-4 p-4 bg-accent rounded-lg">
                            <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-secondary">
                                <img
                                    src="https://images.unsplash.com/photo-1605497788044-5a32c7078486?ixlib=rb-4.0.3"
                                    alt="Chef Marco"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div>
                                <h4 className="font-serif font-semibold text-primary">Marco Bellini</h4>
                                <p className="text-sm text-gray-600">Executive Chef & Founder</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About