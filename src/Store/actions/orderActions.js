import { PAYMENT, PAYMENT_FAIL } from './actions';

export const purchaseSuccess = (responseObj) => {
    return {
        type: PAYMENT,
        responseObj: responseObj,
    };
};

export const purchaseFail = (error) => {
    return {
        type: PAYMENT_FAIL,
        error: error,
    };
};

export const purchaseProducts = (orderData) => {

    return (dispatch) => {

        const url = 'http://localhost:8080/order'

        const request = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(orderData),
        };

        fetch(url, request)
            .then(response => response.json())
            .then(responseJSON => {
                console.log(responseJSON);
                console.log('entro al normal')
                dispatch(purchaseSuccess(responseJSON));
            })
            .catch(error => {
                console.log('entro al fail')
                dispatch(purchaseFail(error));
            })
    };
};
