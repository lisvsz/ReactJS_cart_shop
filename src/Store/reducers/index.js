import { combineReducers } from 'redux';
import cartReducer from './cartReducer';
import fetchReducer from './fetchReducer';
import filtersReducer from './filtersReducer';
import openCartReducer from './openCartReducer';

const rootReducer = combineReducers ({
    cartR: cartReducer,
    fetchR: fetchReducer,
    filtersR: filtersReducer,
    openCartR: openCartReducer
})

export default rootReducer;