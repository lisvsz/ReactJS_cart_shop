import React from 'react';
import './productCartCard.css';
import recycleBin from '../../assets/recycle-bin.png';


const ProductCartCard = (props) => {

    const { productBasics, productImg, productName, productPrice, removeProductCart } = props;

    return (
        <div className="productSelected">                        
            <div className="productImgLabel">
                {productBasics? <div className="basicLabelCart">BASICS</div> : null }
                <img className="productListImg" src = {productImg} alt="product" />
            </div>
            <p className="productListName">{productName}</p>
            <p className="productListPrice">${productPrice}</p>
            <img className="deleteProduct" src = {recycleBin} alt="trash" onClick={removeProductCart} />
        </div>
    )
}

export default ProductCartCard;