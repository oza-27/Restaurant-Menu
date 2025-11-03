import { createContext, useContext, useReducer } from 'react';

const CartContext = createContext();

const cartReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            const existingItem = state.items.find(item => item.id === action.payload.id);
            if (existingItem) {
                return {
                    ...state,
                    items: state.items.map(item =>
                        item.id === action.payload.id
                            ? { ...item, quantity: item.quantity + 1 }
                            : item
                    )
                };
            }
            return {
                ...state,
                items: [...state.items, { ...action.payload, quantity: 1 }]
            };

        case 'REMOVE_ITEM':
            return {
                ...state,
                items: state.items.filter(item => item.id !== action.payload)
            };

        case 'UPDATE_QUANTITY':
            return {
                ...state,
                items: state.items.map(item =>
                    item.id === action.payload.id
                        ? { ...item, quantity: action.payload.quantity }
                        : item
                )
            };

        case 'CLEAR_CART':
            return {
                ...state,
                items: []
            };

        case 'TOGGLE_CART':
            return {
                ...state,
                isOpen: !state.isOpen
            };

        default:
            return state;
    }
};

const initialState = {
    items: [],
    isOpen: false
};

export const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, initialState);

    const addItem = (item) => {
        dispatch({ type: 'ADD_ITEM', payload: item });
    };

    const removeItem = (itemId) => {
        dispatch({ type: 'REMOVE_ITEM', payload: itemId });
    };

    const updateQuantity = (itemId, quantity) => {
        if (quantity === 0) {
            removeItem(itemId);
        } else {
            dispatch({ type: 'UPDATE_QUANTITY', payload: { id: itemId, quantity } });
        }
    };

    const clearCart = () => {
        dispatch({ type: 'CLEAR_CART' });
    };

    const toggleCart = () => {
        dispatch({ type: 'TOGGLE_CART' });
    };

    const getCartTotal = () => {
        return state.items.reduce((total, item) => total + (parseFloat(item.price) * item.quantity), 0);
    };

    const getCartItemsCount = () => {
        return state.items.reduce((count, item) => count + item.quantity, 0);
    };

    return (
        <CartContext.Provider value={{
            cart: state,
            addItem,
            removeItem,
            updateQuantity,
            clearCart,
            toggleCart,
            getCartTotal,
            getCartItemsCount
        }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};