import React, { useState } from 'react';
import './Header.css';
import ShoppingCartLogo from '../../Components/modalCart/logoCart';
import globantShops from '../../assets/globant-shops.svg';
import { useLocation } from 'react-router-dom';

const Header = (props) => {

    const location = useLocation();

    return (
        <header>
            <img src = {globantShops} alt="logo" />
            {location.pathname === '/ordering' || location.pathname === '/success' ?
            null
            : <ShoppingCartLogo clicked={props.clicked} productCounter={props.productCounter} />}
        </header>
    );
}

export default Header;