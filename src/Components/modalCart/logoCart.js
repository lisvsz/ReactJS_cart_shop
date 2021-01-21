import React from 'react';
import cart from '../../assets/cart.svg';
import './logoCart.css'

const ShoppingCartLogo = (props) => {

    return (
        <div>
            <div className="cartLogo" onClick={props.clicked}>
                <img className="cartImg" src = {cart} alt="cart" />
                <div className="cartCounter">{props.productCounter}</div>
            </div>
        </div>
    );
};

export default ShoppingCartLogo;