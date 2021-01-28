import { PAYMENT } from '../actions/actions';

const initialState = {
    orderConfirmed: false,
}

const purchaseSuccess = (state, action) => {
    let confirmed = false;
    const message = action.orderData.message;
    console.log('message', message)

    if(message === 'success') {
        confirmed = true;
    };

    return {
        ...state,
        orderConfirmed: confirmed,
    }
}

const orderReducer = (state = initialState, action) => {
    switch (action.type) {
        case PAYMENT:
            return purchaseSuccess(state, action)
            
        default: return state
    };
};

export default orderReducer;