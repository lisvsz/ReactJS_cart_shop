import { combineReducers } from 'redux';
import cartReducer from './cartReducer';
import fetchReducer from './fetchReducer';
import openCartReducer from './openCartReducer';

const rootReducer = combineReducers ({
    cartR: cartReducer,
    fetchR: fetchReducer,
    openCartR: openCartReducer
})

export default rootReducer;