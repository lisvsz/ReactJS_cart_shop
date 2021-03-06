import { combineReducers } from 'redux';
import cartReducer from './cartReducer';
import fetchReducer from './fetchReducer';
import orderReducer from './orderReducer';

const rootReducer = combineReducers ({
    cartR: cartReducer,
    fetchR: fetchReducer,
    orderR: orderReducer,
})

export default rootReducer;