import React, {Component } from 'react';
import './Product.css';
import star  from '../../assets/star-rate.svg';
import comment from '../../assets/comment.png';

/*const Product = (props) => {

    const { productImg, productName, /*productRate,*/ /*productCom, productPrice, productBasic} = props;

    return (
        <div className="productCard">
            {productBasic? <div className="basicLabel">BASIC</div> : <div className="noBasicLabel"></div>}
            <img className="productImg" src = {productImg} alt="productImg" />
            <div className ="productInfo">
                <h3>{productName}</h3> <br></br>
                <img className="star" src = {star} alt="star" />
                <img className="star" src = {star} alt="star" />
                <img className="star" src = {star} alt="star" />
                <img className="star" src = {star} alt="star" />
                <img className="star" src = {star} alt="star" />
                <p>{productCom}</p><img className="comment" src = {comment} alt="comment" />
                <p className="price">${productPrice}</p>
            </div>
            <button className="btnDetails">See details</button>
            <button className="btnAddCart">Add to cart</button>
        </div>
    )
} */

//Class version

export default class Product extends Component {
    render() {
        return (
        <div className="productCard">
            {this.props.products.map(product => {
            <div>
                {product.basics? <div className="basicLabel">BASIC</div> : <div className="noBasicLabel"></div>}
                <img className="productImg" src = {product.img} alt="productImg" />
                <div className ="productInfo">
                    <h3>{product.name}</h3> <br></br>
                    <img className="star" src = {star} alt="star" />
                    <img className="star" src = {star} alt="star" />
                    <img className="star" src = {star} alt="star" />
                    <img className="star" src = {star} alt="star" />
                    <img className="star" src = {star} alt="star" />
                    <p>{product.comments}</p><img className="comment" src = {comment} alt="comment" />
                    <p className="price">${product.price}</p>
                </div>
                <button className="btnDetails">See details</button>
                <button className="btnAddCart">Add to cart</button>
            </div> })
        }
        </div>
    )}
}
