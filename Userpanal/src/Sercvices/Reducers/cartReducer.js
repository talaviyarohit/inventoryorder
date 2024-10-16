const initialState = {
    cart: [],
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            // Check if the item is already in the cart
            const existingItem = state.cart.find(item => item.id === action.payload.id);
            if (existingItem) {
                // If it's already in the cart, you might want to increase the quantity or just ignore the action
                return {
                    ...state,
                    cart: state.cart.map(item =>
                        item.id === action.payload.id
                            ? { ...item, quantity: (item.quantity || 1) + 1 } // Increment quantity
                            : item
                    ),
                };
            } else {
                return {
                    ...state,
                    cart: [...state.cart, { ...action.payload, quantity: 1 }], // Add new product with quantity 1
                };
            }
        case 'REMOVE_FROM_CART':
            return {
                ...state,
                cart: state.cart.filter(item => item.id !== action.payload),
            };
        default:
            return state;
    }
};

export default cartReducer;
