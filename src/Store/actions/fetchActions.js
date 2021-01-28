import { FETCH_PRODUCTS_SUCCESS, 
    FETCH_PRODUCTS_FAILURE, 
    FETCH_PRODUCTS_DETAILS,
    FETCH_PRODUCTS_DETAILS_FAILURE,
    ADD_PAGE, 
    FILTER_BASICS, 
    FILTER_BASICS_REMOVE, 
    FILTER_PRICES, 
    SORT_RATING_PRICES,
    SORT_REMOVE } from './actions'; 


export const fetchProductsSuccess = (response) => {
    return {
        type: FETCH_PRODUCTS_SUCCESS,
        response: response,
    };
};

export const fetchProductsFailure = (error) => {
    return {
        type: FETCH_PRODUCTS_FAILURE,
        error: error
    };
};
// fetchProducts(page, filterOption, sortOption, filterPricesOn, pricesRange);
export const fetchProducts = (page, filterOption, sortOption, filterPricesOn, pricesRange) => {
    // const res = await fetch('http://localhost:8080/products');
    // const data = await res.json();
    // console.log(data);
    //     payload: data.products,
    // });

    return (dispatch) => {

    let url = `http://localhost:8080/products?page=${page}`

    if (filterOption && sortOption) {
        url = `http://localhost:8080/products?page=${page}&filter=${filterOption}&sort=${sortOption}`

    } else if (filterOption) {
        url = `http://localhost:8080/products?page=${page}&filter=${filterOption}`;

    } else if (sortOption) {
        url = `http://localhost:8080/products?page=${page}&sort=${sortOption}`;
    };
       // dispatch(fetchProductsStart());
        fetch(url)
            .then(response => {
                return response.json();
            })
            .then(responseJSON => {
                console.log('fetch de productos en action creator con Thunk');
                console.log(responseJSON.products);
                dispatch(fetchProductsSuccess(responseJSON));
                if (filterPricesOn) {
                    dispatch(filterPrices(pricesRange));
                };
            })
            .catch(error => {
                dispatch(fetchProductsFailure(error));
            });
        };
};

export const fetchProductsDetailsSuccess = (response) => {
    return {
        type: FETCH_PRODUCTS_DETAILS, 
        response: response,
    };
};

export const fetchProductsDetailsFailure = (error) => {
    return {
        type: FETCH_PRODUCTS_DETAILS_FAILURE,
        error: error
    };
};

//Fetch sección detalle productos
export const fetchProductsDetails = (productId) => {
    return (dispatch) => {
    fetch(`http://localhost:8080/products/${productId}`)
            .then(response => {
                return response.json();
            })
            .then(responseJSON => {
                console.log('fetch para detalles de productos');
                dispatch(fetchProductsDetailsSuccess(responseJSON));
            })
            .catch(error => {
                dispatch(fetchProductsDetailsFailure(error));
            });
    };
};

export const addPage = () => {
    return {
        type: ADD_PAGE,
    };
};

export const filterBasics = (filterOption) => {
    return {
        type: FILTER_BASICS,
        filterOption: filterOption,
    };
};

export const filterBasicsRemove = () => {
    return {
        type: FILTER_BASICS_REMOVE,
    };
};

export const filterPrices = (priceFilter) => {
    return {
        type: FILTER_PRICES,
        priceFilter: priceFilter,
    };
};

export const sortRatingPrices = (sortOption) => {
    return {
        type: SORT_RATING_PRICES,
        sortOption: sortOption,
    };
};

export const sortRemove = () => {
    return {
        type: SORT_REMOVE,
    };
};

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

/*QUERIES:
- page: NUMBER
- items: NUMBER
- filter: STRING 1-50, 51-100, 101-200
- sort: ENUM[Prices | Raiting ]*/