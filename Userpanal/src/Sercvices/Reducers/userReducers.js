
const initialState = {
    allproducts: [],
    order: null,
    product: null,
    cart:[]

}

function userReducer(state = initialState, action) {

    switch (action.type) {

        case 'VIEWPRODUCTS':
            return {
                ...state,
                allproducts: action.payload
            }
        case 'PRODUCTINFO':
            const singlePro = state.allproducts.find((proinfo) => proinfo.id === action.payload)
            return {
                ...state,
                product: singlePro
            }
        // case 'VIEWORDERLIST':
        //     return{
        //         ...state,
        //         order:action.payload
        //     }

        case 'ORDERSUCDATA':
            return {
                ...state,
                order: action.payload
            }

        case 'ADD_TO_CART':
            return {
                ...state,
                cart: [...state.cart, action.payload],
            };
        case 'REMOVE_FROM_CART':
            return {
                ...state,
                cart: state.cart.filter(item => item.id !== action.payload),
            };
        default:
            return state;
    }
}

export default userReducer