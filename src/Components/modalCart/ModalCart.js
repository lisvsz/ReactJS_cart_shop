import React from 'react';
import './ModalCart.css';
import { Link } from 'react-router-dom';

import coffee from '../../assets/coffee.jpg';
import recycleBin from '../../assets/recycle-bin.png';
import close from '../../assets/close.png';

const ModalCart = ( props ) => {
    
    let attachedClasses = [ 'modalCart', 'close'];
    if (props.open) {
        attachedClasses = [ 'modalCart', 'open'];
    }

    return (
        <div>
            { props.open ? <div className='back-drop' onClick={props.closed}></div> : null }
            {/*{ show? <div onClick={closeModalHandler} className="back-drop"></div> : null }*/}
            <div className={attachedClasses.join(' ')}>
            <div className="modalCart">
                <div className="modalCard">
                    <img className="btnClose" src = {close} alt="btnClose" />
                    <p className="cartTitle">Cart:</p>
                    <p>Subtotal: <span className="subtotalList">$105</span></p>
                    <button className="btnProceedPay">Proceed to payment</button>
                    <div className="productSelected">                        
                        <img className="productListImg" src = {props.img} alt="product" />
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
                    <Link to={'/ordering'}>
                        <button className="btnProceedPay">Proceed to payment</button>
                    </Link>
                </div>
            </div>
            </div>
        </div>
    )
}

export default ModalCart;