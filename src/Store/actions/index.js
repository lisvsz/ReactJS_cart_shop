//Exporto las funciones que utilizaré para mi mapDispatchToProps
export { fetchProductsSuccess,
    fetchProductsFailure,
    fetchProducts, 
    addPage,
    filterBasics,
    filterBasicsRemove,
    filterPrices,
    sortRatingPrices,
    sortRemove,
} from './fetchActions';

export {
    addProductCart,
    removeProductCart,
} from './cartActions';

export {
    purchaseSuccess,
    purchaseFail,
    purchaseProducts,
} from './orderActions';