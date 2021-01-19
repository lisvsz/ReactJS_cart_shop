import { ADD_PRODUCT, REMOVE_PRODUCT } from './actions'; 

export const addProductCart = (productInfo) => {
    return {
        type: ADD_PRODUCT,
        product: productInfo,
    }
}

export const removeProductCart = (productId, price) => {
    return {
        type: REMOVE_PRODUCT,
        id: productId,
        price: price,
    }
}