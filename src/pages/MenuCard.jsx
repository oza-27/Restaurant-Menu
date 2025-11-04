import { useCart } from '../context/CartContext';

const MenuCard = ({ item }) => {
    const { addItem } = useCart();

    const handleAddToCart = () => {
        addItem(item);
        // Optional: Add a toast notification here
    };

    return (
        <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
            <div className="relative overflow-hidden">
                <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-secondary text-primary px-3 py-1 rounded-full text-sm font-sans font-semibold">
                    ${item.price}
                </div>
                {item.isPopular && (
                    <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-sans font-medium">
                        Popular
                    </div>
                )}
            </div>

            <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-serif font-semibold text-primary">{item.name}</h3>
                </div>
                <p className="text-gray-600 font-sans leading-relaxed mb-4">{item.description}</p>
                <div className="flex items-center justify-between">
                    <span className="text-secondary font-sans font-semibold">${item.price}</span>
                    <button
                        onClick={handleAddToCart}
                        className="bg-primary text-white px-4 py-2 rounded-lg font-sans font-medium hover:bg-dark transition-colors duration-300 flex items-center space-x-2"
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                        <span>Add to Cart</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MenuCard;