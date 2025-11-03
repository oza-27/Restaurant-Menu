import { useEffect, useState } from 'react'

const Contact = () => {
    const [availableTimes, setAvailableTimes] = useState([]);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        guests: '2',
        message: ''
    })

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }
    useEffect(() => {
        if (formData.date) {
            // Mock API call - in real project, this would be your backend
            const times = ['17:00', '17:30', '18:00', '19:00', '20:00', '20:30'];
            setAvailableTimes(times);
        }
    }, [formData.date]);
    const handleSubmit = (e) => {
        e.preventDefault()
        // Handle form submission here
        console.log('Form submitted:', formData)
        alert('Reservation request sent! We will confirm shortly.')
        // Reset form
        setFormData({
            name: '',
            email: '',
            phone: '',
            date: '',
            time: '',
            guests: '2',
            message: ''
        })
    }

    return (
        <section id="contact" className="py-20 bg-gray-50">
            <div className="w-full px-6">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">
                        Reserve Your Table
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Experience culinary excellence. Book your table today and let us create an unforgettable dining experience for you.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Contact Information */}
                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-2xl shadow-lg p-8 h-full">
                            <h3 className="text-2xl font-serif font-bold text-primary mb-6">Visit Us</h3>

                            {/* Address */}
                            <div className="flex items-start space-x-4 mb-6">
                                <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="font-sans font-semibold text-primary mb-1">Address</h4>
                                    <p className="text-gray-600">123 Culinary Avenue<br />New York, NY 10001</p>
                                </div>
                            </div>

                            {/* Phone */}
                            <div className="flex items-start space-x-4 mb-6">
                                <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="font-sans font-semibold text-primary mb-1">Phone</h4>
                                    <p className="text-gray-600">+1 (555) 123-4567</p>
                                </div>
                            </div>

                            {/* Hours */}
                            <div className="flex items-start space-x-4 mb-6">
                                <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="font-sans font-semibold text-primary mb-1">Hours</h4>
                                    <p className="text-gray-600">
                                        Mon-Thu: 5PM - 10PM<br />
                                        Fri-Sat: 5PM - 11PM<br />
                                        Sunday: 4PM - 9PM
                                    </p>
                                </div>
                            </div>

                            {/* Map Placeholder */}
                            <div className="mt-8 rounded-lg overflow-hidden shadow-md">
                                <div className="bg-gray-200 h-48 flex items-center justify-center text-gray-500">
                                    <p>Interactive Map Here</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Reservation Form */}
                    <div className="lg:col-span-2">
                        <div className="bg-white rounded-2xl shadow-lg p-8">
                            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Name */}
                                <div>
                                    <label htmlFor="name" className="block text-sm font-sans font-medium text-gray-700 mb-2">
                                        Full Name *
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent transition-all"
                                        placeholder="Your full name"
                                    />
                                </div>

                                {/* Email */}
                                <div>
                                    <label htmlFor="email" className="block text-sm font-sans font-medium text-gray-700 mb-2">
                                        Email Address *
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent transition-all"
                                        placeholder="your.email@example.com"
                                    />
                                </div>

                                {/* Phone */}
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-sans font-medium text-gray-700 mb-2">
                                        Phone Number
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent transition-all"
                                        placeholder="+1 (555) 123-4567"
                                    />
                                </div>

                                {/* Guests */}
                                <div>
                                    <label htmlFor="guests" className="block text-sm font-sans font-medium text-gray-700 mb-2">
                                        Number of Guests *
                                    </label>
                                    <select
                                        id="guests"
                                        name="guests"
                                        value={formData.guests}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent transition-all"
                                    >
                                        {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                                            <option key={num} value={num}>{num} {num === 1 ? 'Person' : 'People'}</option>
                                        ))}
                                        <option value="9+">9+ People (Please call)</option>
                                    </select>
                                </div>

                                {/* Date */}
                                <div>
                                    <label htmlFor="date" className="block text-sm font-sans font-medium text-gray-700 mb-2">
                                        Preferred Date *
                                    </label>
                                    <input
                                        type="date"
                                        id="date"
                                        name="date"
                                        value={formData.date}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent transition-all"
                                    />
                                </div>

                                {/* Time */}
                                <div>
                                    <label htmlFor="time" className="block text-sm font-sans font-medium text-gray-700 mb-2">
                                        Preferred Time *
                                    </label>
                                    <select
                                        id="time"
                                        name="time"
                                        value={formData.time}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent transition-all"
                                    >
                                        <option value="">Select a time</option>
                                        <option value="17:00">5:00 PM</option>
                                        <option value="17:30">5:30 PM</option>
                                        <option value="18:00">6:00 PM</option>
                                        <option value="18:30">6:30 PM</option>
                                        <option value="19:00">7:00 PM</option>
                                        <option value="19:30">7:30 PM</option>
                                        <option value="20:00">8:00 PM</option>
                                        <option value="20:30">8:30 PM</option>
                                        <option value="21:00">9:00 PM</option>
                                    </select>
                                </div>

                                {/* Message - Full width */}
                                <div className="md:col-span-2">
                                    <label htmlFor="message" className="block text-sm font-sans font-medium text-gray-700 mb-2">
                                        Special Requests
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows="4"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent transition-all"
                                        placeholder="Any dietary restrictions, celebrations, or special requests..."
                                    ></textarea>
                                </div>

                                {/* Submit Button */}
                                <div className="md:col-span-2">
                                    <button
                                        type="submit"
                                        className="w-full bg-secondary text-primary py-4 px-8 rounded-lg font-sans font-semibold hover:bg-yellow-600 transition-all duration-300 shadow-lg hover:shadow-xl"
                                    >
                                        Reserve Table
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact