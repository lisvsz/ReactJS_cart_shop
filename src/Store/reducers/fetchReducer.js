import { ADD_PAGE, 
    FETCH_PRODUCTS_SUCCESS, 
    FETCH_PRODUCTS_FAILURE, 
    FILTER_BASICS, 
    FILTER_BASICS_REMOVE,
    SORT_RATING,
    SORT_RATING_REMOVE,
    FILTER_PRICES, 
    SORT_PRICES } from '../actions/actions';

const initialState = {
    response: null,
    products: [],
    page: 1,
    basics: null, // filter option
    rating: null, // sort option
    pricesRange: null, // rangeSelected
    filteredProducts: [],
    filterPrices: false, //isFilterRangePricesOn
};

const fetchReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PAGE: {
            return {
                ...state,
                page: state.page + 1,
            }
        }
        case FETCH_PRODUCTS_SUCCESS:
            return {
                ...state,
                response: action.response,
                products: state.products.concat(action.response.products),
            };
        case FETCH_PRODUCTS_FAILURE:
            return {
                ...state,
                error: action.error,
            };
        case FILTER_BASICS:
            return {
                ...state,
                basics: action.basics,
                page: 1, 
                products: [],
            };
        case FILTER_BASICS_REMOVE:
            return{
                ...state,
                basics: null,
                page: 1,
                products: [],
            };
        case SORT_RATING: 
            return {
                ...state,
                rating: action.rating,
                page: 1,
                products: [],
            };
        case SORT_RATING_REMOVE:
            return {
                ...state,
                rating: null,
                page: 1,
                products: [],
            };
        case FILTER_PRICES:
            const filterProducts =[]; // Genero nuevo arreglo para no modificar el original
            if (action.range === '1_to_50') {
                filterProducts = state.products.filter((product) => {
                    return product.price >= 1 && product.price <= 50;
                })
            } else if (action.range === '51_to_100') {
                filterProducts = state.products.filter((product) => {
                    return product.price >= 51 && product.price <= 100;
                })
            } else if (action.range === '101_to_200') {
                filterProducts = state.products.filter((product) => {
                    return product.price >= 101 && product.price <= 200;
                })
            }
            return {
                ...state,
                filteredProducts: filterProducts,
                filterPrices: true, 
                pricesRange: action.range,
            }
        default: return state;
    };
}

export default fetchReducer;

//FILTER_BASICS, FILTER_PRICES, SORT_PRICES