import { ADD_PRODUCT, REMOVE_PRODUCT } from '../actions/actions'; 

const initialState = {
    cart: [],
    totalPrice: 0,
    productCounter: 0,
}

const addProduct = (state, action) => {
    const addToCart = {
        ...action.product,
        id: action.product.id + Math.random(),
    }
    return {
        ...state,
        cart: state.cart.concat(addToCart),
        totalPrice: state.totalPrice + parseFloat(action.product.price),
        itemCounter: state.itemCounter + 1,
    }
}

const removeProduct = (state, action) => {
    const cartUpdated = state.cartProducts.filter(product => product.id !== action.id)
    return {
        ...state,
        cart: cartUpdated,
        totalPrice: state.totalPrice - parseFloat(action.price),
        itemCounter: state.itemCounter - 1,
    }
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCT:
            return addProduct(state, action); //por qué sin sin {}
        case REMOVE_PRODUCT:
            return removeProduct(state, action);
        default: return state;
    };
};

export default cartReducer;