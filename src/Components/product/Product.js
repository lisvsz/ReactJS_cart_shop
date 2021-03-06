import  React from 'react';
import  { Link } from 'react-router-dom';
import './Product.css';
import star  from '../../assets/star-rate.svg';
import comment from '../../assets/comment.png';

const Product = (props) => {

    const { productImg, productName, productCom, productPrice, productBasics, productId} = props;

    return (
        <div className="productCard">
            {productBasics? <div className="basicLabel">BASIC</div> : null}
            <img className="productImg" src = {productImg} alt="productImg" />
            <div className ="productInfo">
                <p className="productName">{productName}</p>
                <div className="starComm">
                    <img className="star" src = {star} alt="star" />
                    <img className="star" src = {star} alt="star" />
                    <img className="star" src = {star} alt="star" />
                    <img className="star" src = {star} alt="star" />
                    <img className="star" src = {star} alt="star" />
                    <p className="productCom">{productCom}</p><img className="comment" src = {comment} alt="comment" />
                </div>
                <p className="productPrice">${productPrice}</p>
            </div>
            <Link to={`/product/${productId}`}>
                <button className="btnDetails">See details</button>
            </Link>
            <button className="btnAddCart" onClick={props.productAdded}>Add to cart</button>
        </div>
    )
} 

export default Product;

//Class version
// export default class Product extends Component {
//     render() {
//         return (
//         <div className="productCard">
//             {this.props.products.map(product => {
//             <div>
//                 {product.basics? <div className="basicLabel">BASIC</div> : <div className="noBasicLabel"></div>}
//                 <img className="productImg" src = {product.img} alt="productImg" />
//                 <div className ="productInfo">
//                     <h3>{product.name}</h3> <br></br>
//                     <img className="star" src = {star} alt="star" />
//                     <img className="star" src = {star} alt="star" />
//                     <img className="star" src = {star} alt="star" />
//                     <img className="star" src = {star} alt="star" />
//                     <img className="star" src = {star} alt="star" />
//                     <p>{product.comments}</p><img className="comment" src = {comment} alt="comment" />
//                     <p className="price">${product.price}</p>
//                 </div>
//                 <button className="btnDetails">See details</button>
//                 <button className="btnAddCart">Add to cart</button>
//             </div> })
//         }
//         </div>
//     )}
// }
