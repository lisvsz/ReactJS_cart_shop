import React from 'react';
import './Header.css';
import globantShops from '../../assets/globant-shops.svg';
import cart from '../../assets/cart.svg';

const Header = (props) => {
    return (
        <header>
            <img src = {globantShops} alt="logo" />
            <div onClick={props.clicked}>
                <img className="cartImg" src = {cart} alt="cart" />
                <div className="cartCounter">1</div>
            </div>
        </header>
    )
}

export default Header;