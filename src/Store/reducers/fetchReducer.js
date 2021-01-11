import { FETCH_PRODUCTS_SUCCESS,FETCH_PRODUCTS_FAILURE } from  '../actions/actions'; 

const initialState = {
    response: null,
    products: [],
};

const fetchReducer = (state = initialState, action) => {
    switch(action.type) {
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
            }
    default: return state;
    };
}

export default fetchReducer;

//mapdistpachproducts (fetchproducts) y llamar la función