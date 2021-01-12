import { FETCH_PRODUCTS_SUCCESS, 
    FETCH_PRODUCTS_FAILURE, 
    ADD_PAGE, FILTER_BASICS, 
    FILTER_BASICS_REMOVE, 
    FILTER_PRICES, 
    SORT_PRICES, 
    SORT_RATING } from './actions'; 


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

export const fetchProducts = (page, basics, rating) => {
    // const res = await fetch('http://localhost:8080/products');
    // const data = await res.json();
    // console.log(data);
    //     payload: data.products,
    // });

    return (dispatch) => {

    let url = `http://localhost:8080/products?page=${page}`

    if (basics && rating) {
        url = `http://localhost:8080/products?page=${page}&filter=${basics}&sort=${rating}`

    } else if (basics) {
        url = `http://localhost:8080/products?page=${page}&filter=${basics}`;

    } else if (rating) {
        url = `http://localhost:8080/products?page=${page}&sort=${rating}`;
    };
       // dispatch(fetchProductsStart());
        fetch(`http://localhost:8080/products?page=${page}`)
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

export const filterBasics = (basics) => {
    return {
        type: FILTER_BASICS,
        basics: basics,
    }
}

export const filterBasicsRemove = () => {
    return {
        type: FILTER_BASICS_REMOVE,
    }
}

export const filterPrices = (priceFilter) => {
    return {
        type: FILTER_PRICES,
        priceFilter: priceFilter,
    }
}

export const sortPrices = () => {
    return {
        type: SORT_PRICES,
    }
}

export const sortRating = () => {
    return {
        type: SORT_RATING,
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

/*QUERIES:
- page: NUMBER
- items: NUMBER
- filter: STRING 1-50, 51-100, 101-200
- sort: ENUM[Prices | Raiting ]*/