import React from 'react';
import './productCartCard.css';
import recycleBin from '../../assets/recycle-bin.png';


const ProductCartCard = (props) => {
    return (
        <div className="productSelected">                        
            <img className="productListImg" src = {props.productImg} alt="product" />
            <p className="productListName">{props.productName}</p>
            <p className="productListPrice">${props.productPrice}</p>
            <img className="deleteProduct" src = {recycleBin} alt="trash" onClick={props.productRemoved} />
        </div>
    )
}

export default ProductCartCard;