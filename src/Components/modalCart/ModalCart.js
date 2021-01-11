import React from 'react';
import './ModalCart.css';
import { connect } from 'react-redux';

import coffee from '../../assets/coffee.jpg';
import recycleBin from '../../assets/recycle-bin.png';
import close from '../../assets/close.png';

const ModalCart = () => {
    return (
        <div className="modalCart">
            <div className="modalCard">
                <img className="btnClose" src = {close} alt="btnClose" />
                <p className="cartTitle">Cart:</p>
                <p>Subtotal: <span className="subtotalList">$105</span></p>
                <button className="btnProceedPay">Proceed to payment</button>
                <div className="productSelected">                        
                    <img className="productListImg" src = {coffee} alt="product" />
                    <p className="productListName">Coffee Maker</p>
                    <p className="productListPrice">$105</p>
                    <img className="deleteProduct" src = {recycleBin} alt="trash" />
                </div>
                <div className="productSelected">                        
                    <img className="productListImg" src = {coffee} alt="product" />
                    <p className="productListName">Coffee Maker</p>
                    <p className="productListPrice">$105</p>
                    <img className="deleteProduct" src = {recycleBin} alt="trash" />
                </div>
                <p>Subtotal: <span className="subtotalList">$105</span></p>
                <button className="btnProceedPay">Proceed to payment</button>
            </div>
        </div>
    )
}

export default ModalCart;