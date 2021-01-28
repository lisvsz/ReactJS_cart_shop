import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';

import './Form.css';
import * as actions from '../../Store/actions/index';
import PaymentForm from './paymentForm/paymentForm';
import ProductsForm from './productsForm/productsForm';

const Form = (props) => {

    const {cartProducts, totalPrice, orderConfirmed, removeProductCart, purchaseProducts } = props;

    const [formIsValid, setFormIsValid] = useState(false);  // ambos formularios estan correctos
    const [orderData, setOrderData] = useState({});  // data de ambos formularios ya está completa
    /*useEffect( () => {
        if (orderConfirmed) {
            <Link to={'/success'} />
        }
    })*/
    const history = useHistory();

    const handlePaymentClick = () => {
        console.log('entro al handleClick, no if')
        if (formIsValid) {
            console.log('entró a handlePaymentClick')
            purchaseProducts(orderData)
        };
    };

    useEffect ( () => {
        if (orderConfirmed) {
            history.push('/success');
        };
    },[orderConfirmed, history])
    
    return (
        <div>
            <PaymentForm
                setFormIsValid = {setFormIsValid}
                setOrderData = {setOrderData}
            />
            <ProductsForm
                cartProducts = {cartProducts}
                totalPrice = {totalPrice}
                removeProductCart = {removeProductCart}
                handlePaymentClick = {handlePaymentClick}
            />
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        cartProducts: state.cartR.cart,
        totalPrice: state.cartR.totalPrice,
        orderConfirmed: state.orderR.orderConfirmed,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeProductCart: (productId, productPrice) => dispatch(actions.removeProductCart(productId,productPrice)),
        purchaseProducts: (orderData) => dispatch(actions.purchaseProducts(orderData)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);