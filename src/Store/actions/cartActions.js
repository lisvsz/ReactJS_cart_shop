import { ADD_PRODUCT, REMOVE_PRODUCT } from './actions'; 

export const addProductCart = (productInfo) => {
    return {
        type: ADD_PRODUCT,
        product: productInfo,
    }
}

export const removeProductCart = (productId, productPrice) => {
    return {
        type: REMOVE_PRODUCT,
        id: productId,
        price: productPrice, // por qué se llama como éste y no por el nombre del parámetro?
    }
}