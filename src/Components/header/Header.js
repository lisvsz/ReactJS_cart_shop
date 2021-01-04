import React from 'react';
import './Header.css';
import globantShops from '../../assets/globant-shops.svg';
import cart from '../../assets/cart.svg';

const Header = () => {
    return (
        <header>
            <img src = {globantShops} alt="logo" />
            <img src = {cart} alt="cart" />
        </header>
    )
}

export default Header;