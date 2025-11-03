import { useState } from 'react'
import MenuCard from './MenuCard'
import { menuData } from '../data/menuData'

const MenuSection = () => {
    const [activeCategory, setActiveCategory] = useState('all')

    const categories = [
        { id: 'all', name: 'All Menu' },
        { id: 'starters', name: 'Starters' },
        { id: 'mains', name: 'Main Courses' },
        { id: 'desserts', name: 'Desserts' },
        { id: 'drinks', name: 'Drinks' }
    ]

    const filteredItems = activeCategory === 'all'
        ? menuData
        : menuData.filter(item => item.category === activeCategory)

    // Group items by category for the "All" view
    const itemsByCategory = menuData.reduce((acc, item) => {
        if (!acc[item.category]) {
            acc[item.category] = []
        }
        acc[item.category].push(item)
        return acc
    }, {})

    return (
        <section id="menu" className="py-20 bg-accent">
            <div className="w-full px-6">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">
                        Our Menu
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Crafted with passion, served with excellence. Discover our seasonal offerings prepared with the finest ingredients.
                    </p>
                </div>

                {/* Category Filter */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => setActiveCategory(category.id)}
                            className={`px-6 py-3 rounded-full font-sans font-medium transition-all duration-300 ${activeCategory === category.id
                                    ? 'bg-secondary text-primary shadow-lg'
                                    : 'bg-white text-gray-600 hover:bg-gray-100'
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
                            <div key={category.id}>
                                <h3 className="text-3xl font-serif font-bold text-primary mb-8 text-center border-b-2 border-secondary pb-4">
                                    {category.name}
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                    {itemsByCategory[category.id]?.map((item) => (
                                        <MenuCard key={item.id} item={item} />
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    // Show filtered items for specific category
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredItems.map((item) => (
                            <MenuCard key={item.id} item={item} />
                        ))}
                    </div>
                )}
            </div>
        </section>
    )
}

export default MenuSection