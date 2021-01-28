import React, { useState } from 'react';
import './Header.css';
import ShoppingCartLogo from '../../Components/modalCart/logoCart';
import globantShops from '../../assets/globant-shops.svg';
import { useLocation } from 'react-router-dom';
import { connect } from 'react-redux';

const Header = (props) => {

    const { clicked, productCounter } = props;
    const location = useLocation();

    return (
        <header>
            <img src = {globantShops} alt="logo" />
            {location.pathname === '/ordering' || location.pathname === '/success' ?
            null
            : <ShoppingCartLogo clicked={clicked} productCounter={productCounter} />}
        </header>
    );
}

const mapStateToProps = (state) => {
    return {
        productCounter: state.cartR.productCounter,
    }
}

export default connect(mapStateToProps)(Header);