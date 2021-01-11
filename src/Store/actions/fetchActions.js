import { FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_FAILURE, ADD_PAGE } from './actions'; 

export const fetchProductsSuccess = (response) => {
    return {
        type: FETCH_PRODUCTS_SUCCESS,
        response: response,
    }
};

export const fetchProductsFailure = (error) => {
    return {
        type: FETCH_PRODUCTS_FAILURE,
        error: error
    }
}

export const fetchProducts = () => {
    // const res = await fetch('http://localhost:8080/products');
    // const data = await res.json();
    // console.log(data);
    // dispatch({
    //     type: FETCH_PRODUCTS,
    //     payload: data.products,
    // });
    return (dispatch) => {
       // dispatch(fetchProductsStart());

        fetch('http://localhost:8080/products')
            .then(response => {
                return response.json();
            })
            .then(responseJSON => {
                console.log('fetch de productos en action creator con Thunk');
                console.log(responseJSON.products);
                dispatch(fetchProductsSuccess(responseJSON));
            })
            .catch(error => {
                dispatch(fetchProductsFailure(error));
            });
        }
};

export const addPage = () => {
    return {
        type: ADD_PAGE,
    }
}

/*useEffect (() => {
    fetch(`http://localhost:8080/products`)
        .then(response => {
            return response.json();
        })
        .then(responseJSON => {
            // setResponse(responseJSON)
            setProducts(responseJSON.products);
        })
}, [])*/
