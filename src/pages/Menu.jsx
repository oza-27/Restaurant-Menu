import { useState } from 'react'
import { menuData } from '../data/menuData'
import MenuCard from '../pages/MenuCard.jsx'

const Menu = () => {
    const [activeCategory, setActiveCategory] = useState('all')
    const [searchTerm, setSearchTerm] = useState('')

    const categories = [
        { id: 'all', name: 'All Menu' },
        { id: 'starters', name: 'Starters' },
        { id: 'mains', name: 'Main Courses' },
        { id: 'desserts', name: 'Desserts' },
        { id: 'drinks', name: 'Drinks' }
    ]

    // Filter items based on category and search term
    const filteredItems = menuData.filter(item => {
        const matchesCategory = activeCategory === 'all' || item.category === activeCategory
        const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.description.toLowerCase().includes(searchTerm.toLowerCase())
        return matchesCategory && matchesSearch
    })

    // Group items by category for the "All" view
    const itemsByCategory = filteredItems.reduce((acc, item) => {
        if (!acc[item.category]) {
            acc[item.category] = []
        }
        acc[item.category].push(item)
        return acc
    }, {})

    return (
        <div className="min-h-screen py-20">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-5xl md:text-6xl font-serif font-bold text-primary mb-6">
                        Our Menu
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                        Discover our carefully crafted selection of dishes, each prepared with the finest ingredients and passion for culinary excellence.
                    </p>

                    {/* Search Bar */}
                    <div className="max-w-md mx-auto mb-8">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search menu items..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full px-6 py-4 rounded-2xl border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent transition-all duration-300 bg-white shadow-sm"
                            />
                            <svg className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>
                    </div>
                </div>

                {/* Category Filter */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => setActiveCategory(category.id)}
                            className={`px-6 py-3 rounded-full font-sans font-medium transition-all duration-300 ${activeCategory === category.id
                                    ? 'bg-secondary text-primary shadow-lg transform -translate-y-1'
                                    : 'bg-white text-gray-600 hover:bg-gray-100 shadow-sm'
                                }`}
                        >
                            {category.name}
                        </button>
                    ))}
                </div>

                {/* Menu Content */}
                {activeCategory === 'all' ? (
                    // Show all categories with headers
                    <div className="space-y-16">
                        {categories.filter(cat => cat.id !== 'all').map(category => (
                            itemsByCategory[category.id]?.length > 0 && (
                                <div key={category.id} className="animate-fade-in">
                                    <h2 className="text-4xl font-serif font-bold text-primary mb-8 text-center border-b-2 border-secondary pb-4">
                                        {category.name}
                                    </h2>
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                        {itemsByCategory[category.id].map((item) => (
                                            <MenuCard key={item.id} item={item} />
                                        ))}
                                    </div>
                                </div>
                            )
                        ))}
                    </div>
                ) : (
                    // Show filtered items for specific category
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in">
                        {filteredItems.map((item) => (
                            <MenuCard key={item.id} item={item} />
                        ))}
                    </div>
                )}

                {/* No Results Message */}
                {filteredItems.length === 0 && (
                    <div className="text-center py-12">
                        <div className="text-6xl mb-4">🔍</div>
                        <h3 className="text-2xl font-serif font-semibold text-primary mb-2">
                            No items found
                        </h3>
                        <p className="text-gray-600">
                            Try adjusting your search or filter criteria
                        </p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Menu