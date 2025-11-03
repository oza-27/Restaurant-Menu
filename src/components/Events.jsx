const Events = () => {
    const events = [
        {
            id: 1,
            title: "Live Jazz Nights",
            description: "Enjoy smooth jazz performances every Friday and Saturday evening with our talented local musicians.",
            date: "Every Fri & Sat",
            time: "7:00 PM - 10:00 PM",
            price: "No cover charge",
            image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-4.0.3",
            type: "music"
        },
        {
            id: 2,
            title: "Wine Tasting Experience",
            description: "Join our sommelier for an exclusive wine tasting featuring rare vintages and perfect pairings.",
            date: "First Wednesday Monthly",
            time: "6:30 PM - 8:30 PM",
            price: "$65 per person",
            image: "https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?ixlib=rb-4.0.3",
            type: "wine"
        },
        {
            id: 3,
            title: "Chef's Table Experience",
            description: "An exclusive 7-course tasting menu personally curated and presented by Executive Chef Marco Bellini.",
            date: "By Reservation",
            time: "7:00 PM seating",
            price: "$125 per person",
            image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3",
            type: "dining"
        },
        {
            id: 4,
            title: "Sunday Brunch",
            description: "Relaxed Sunday brunch with live acoustic music, bottomless mimosas, and our signature dishes.",
            date: "Every Sunday",
            time: "11:00 AM - 3:00 PM",
            price: "A la carte",
            image: "https://images.unsplash.com/photo-1526234362653-3b75a0c07438?ixlib=rb-4.0.3",
            type: "brunch"
        }
    ];

    const getEventIcon = (type) => {
        switch (type) {
            case 'music': return '🎵';
            case 'wine': return '🍷';
            case 'dining': return '👨‍🍳';
            case 'brunch': return '🥂';
            default: return '🎉';
        }
    };

    return (
        <section id="events" className="py-20 bg-primary text-white">
            <div className="w-full px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
                        Events & Specials
                    </h2>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Discover our exclusive events and seasonal specials designed to create unforgettable experiences.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {events.map((event) => (
                        <div
                            key={event.id}
                            className="bg-dark rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
                        >
                            <div className="relative overflow-hidden">
                                <img
                                    src={event.image}
                                    alt={event.title}
                                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute top-4 left-4 bg-secondary text-primary px-3 py-1 rounded-full text-sm font-sans font-semibold">
                                    {getEventIcon(event.type)} {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                                </div>
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-serif font-bold mb-3">{event.title}</h3>
                                <p className="text-gray-300 mb-4 leading-relaxed">{event.description}</p>

                                <div className="space-y-2 mb-4">
                                    <div className="flex items-center text-sm text-gray-400">
                                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                        {event.date}
                                    </div>
                                    <div className="flex items-center text-sm text-gray-400">
                                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        {event.time}
                                    </div>
                                    <div className="flex items-center text-sm text-secondary font-sans font-semibold">
                                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                                        </svg>
                                        {event.price}
                                    </div>
                                </div>

                                <button className="w-full bg-secondary text-primary py-3 rounded-lg font-sans font-semibold hover:bg-yellow-600 transition-colors duration-300">
                                    Reserve Now
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Special Offers Banner */}
                <div className="mt-16 bg-gradient-to-r from-secondary to-yellow-500 rounded-2xl p-8 text-center">
                    <h3 className="text-2xl font-serif font-bold text-primary mb-4">
                        Weekly Special Offer
                    </h3>
                    <p className="text-primary text-lg mb-4">
                        Enjoy 20% off all wine bottles every Tuesday evening
                    </p>
                    <button className="bg-primary text-white px-8 py-3 rounded-lg font-sans font-semibold hover:bg-dark transition-colors">
                        View Wine List
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Events;