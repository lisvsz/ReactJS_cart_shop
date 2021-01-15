import React from 'react';
import { useLocation } from 'react-router-dom';
import './Header.css';
import globantShops from '../../assets/globant-shops.svg';
import cart from '../../assets/cart.svg';

const Header = (props) => {
    const location = useLocation();

    //Abrir y cerrar carrito
    //const [isOpen, setIsOpen] = useState(false)

    return (
        <header>
            <img src = {globantShops} alt="logo" />
            {location.pathname !== '/Payment' ? 
            <div className="on" onClick={props.clicked}>
                <img className="cartImg" src = {cart} alt="cart" />
                <div className="cartCounter">{props.productCounter}</div>
            </div>
            : null}
            
        </header>
    )
}

export default Header;