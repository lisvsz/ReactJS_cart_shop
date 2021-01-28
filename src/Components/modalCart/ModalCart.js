import React from 'react';
import './ModalCart.css';
import close from '../../assets/close.png';
import ProductCartCard from '../product/productCartCard';
import * as actions from '../../Store/actions/index';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const ModalCart = ( props ) => {
    
    const { cartProducts, removeProductCart, closed, totalPrice } = props;

    let attachedClasses = [ 'modalCart', 'closeCart'];
    if (props.open) {
        attachedClasses = [ 'modalCart', 'openCart'];
    }

    return (
        <div>
            { props.open ? <div className='back-drop' onClick={closed}></div> : null }
            <div className={attachedClasses.join(' ')}>
                <div className="modalCard">
                    <img className="btnClose" src = {close} onClick={closed} alt="btnClose" />
                    <p className="cartTitle">Cart:</p>
                    <p>Subtotal: <span className="subtotalList">${totalPrice}</span></p>
                    <Link to={'/ordering'}>
                        <button className="btnProceedPay" onClick={closed}>Proceed to payment</button>
                    </Link>
                    <div>
                    {cartProducts.map((product) => {
                        return (
                            <ProductCartCard 
                                key={product.id}
                                productBasics={product.basics}
                                productImg={product.img}
                                productName={product.name}
                                productPrice={product.price}
                                removeProductCart={() => removeProductCart(product.id, product.price)}
                            />
                        )
                    })}
                    </div>

                    <p>Subtotal: <span className="subtotalList">${totalPrice}</span></p>
                    <Link to={'/ordering'}>
                        <button className="btnProceedPay" onClick={closed}>Proceed to payment</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        cartProducts: state.cartR.cart,
        totalPrice: state.cartR.totalPrice,       
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeProductCart: (productId, productPrice) => dispatch(actions.removeProductCart(productId, productPrice)), //action// debe llamarse igual en el reducer que el action?
    }
}

export default connect (mapStateToProps, mapDispatchToProps)(ModalCart);