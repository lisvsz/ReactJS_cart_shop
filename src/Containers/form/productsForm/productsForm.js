import React from 'react';
import ProductCartCard from '../../../Components/product/productCartCard'

import './productsForm.css';

const ProductsForm = (props) => {

    const {cartProducts, totalPrice, removeProductCart, handlePaymentClick } = props;

    return (
    <div className="listProducts">
        <p>Products:</p>
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
        <p>Subtotal: <span className="subtotalList">${totalPrice}</span></p>
        <button className="btnPay" onClick={handlePaymentClick}>Pay Now</button>
    </div>
    )
}

export default ProductsForm;