import { ADD_PAGE, FILTER_BASICS, FILTER_PRICES, SORT_PRICES } from  '../actions/actions'; 

const initialState = {
    page : 1,
}

const filterReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PAGE: {
            return {
                ...state,
                page: state.page + 1,
            }
        }
    }
    return state;
}

export default filterReducer;