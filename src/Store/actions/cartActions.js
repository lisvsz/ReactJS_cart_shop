import { ADD_PRODUCT, REMOVE_PRODUCT } from './actions'; 

export const addProductCart = (productId, productName, productPrice, productBasics, productImg) => {
    return {
        type: ADD_PRODUCT,
        payload: {
            id: productId,
            name: productName,
            price: productPrice,
            basics: productBasics,
            img: productImg,
        }
    }
}

export const removeProductCart = (productId) => {
    return {
        type: REMOVE_PRODUCT,
        /*id*/payload: { productId }
    }
}
