export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS'
export const FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE'
export const ADD_PAGE = 'ADD_PAGE'

export const FILTER_BASICS = 'FILTER_BASICS'
export const FILTER_BASICS_REMOVE = 'FILTER_BASICS_REMOVE'
export const FILTER_PRICES = 'FILTER_PRICES'
export const SORT_PRICES = 'SORT_PRODUCTS'
export const SORT_RATING = 'SORT_RATING'
export const SORT_RATING_REMOVE = 'SORT_RATING_REMOVE'

export const ADD_PRODUCT = 'ADD_PRODUCT' 
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT'
export const GET_TOTALS = 'GET_TOTALS' // $ y cantidad

export const OPEN_CART = 'OPEN_CART'
export const CLOSE_CART = 'CLOSE_CART'

//TOTAL_PRODUCTS

//4 fetch
//1 fetch_products: invocar todo el proceso del fetch desde el componente. Inicia el fetch, la trae pero no la asigna.
//2 fetch products start: proceso del inicio de fetch, se usa para cambiar el estado de un loading, cambiar de esta cargando o no. Mostrar spinner
// 3 fetch products success: ahi es donde manda a llamar , recibe la respuesta del fetch como payload y ahi es cuando cambia el estado los productos. Parto mi código, xq no podria hacer un loading. xq si hago el fetch en uno, cuando intercambio el estado de cargar y no cargar. Como lo divido, no habria error
// 4 fetch products fail: mando llamar fetch, try catch y si es exitoso, mando a dispatch success.


