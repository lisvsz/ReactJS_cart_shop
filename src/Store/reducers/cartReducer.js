import { ADD_PRODUCT, REMOVE_PRODUCT } from '../actions/actions'; 

const initialState = {
    cart: [],
    totalPrice: 0,
    productCounter: 0,
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCT:
            return {
                ...state,
            };

        case REMOVE_PRODUCT:
            return [
                // ...state, 
                // state.filter( product => product.id !== action.id)
            ];
        
        default: return state;
    }
};

export default cartReducer;