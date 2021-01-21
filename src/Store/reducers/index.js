import { combineReducers } from 'redux';
import cartReducer from './cartReducer';
import fetchReducer from './fetchReducer';

const rootReducer = combineReducers ({
    cartR: cartReducer,
    fetchR: fetchReducer,
})

export default rootReducer;