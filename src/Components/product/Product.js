import React, {useEffect, useState} from 'react';
import './Product.css';
import star  from '../../assets/star-rate.svg';
import comment from '../../assets/comment.png';
import coffee from '../../assets/coffee.jpg';

const Product = () => {

    const [product, setProduct] = useState([])

    useEffect (() => {
        productInfo()
    }, [])

    const productInfo = async () => {
        const data = await fetch(`http://localhost:8080/products`)
        const dataProducts = await data.json()
        //console.log(dataProducts.products[0].img) image
        //console.log(dataProducts.products[0].name) name
        //console.log(dataProducts.products[0].rate) rate
        //console.log(dataProducts.products[0].comments) comments
        //console.log(dataProducts.products[0].price) price
        setProduct(dataProducts)
    }

    /*const productInfoCard = {
        image: product.dataProducts[0].products.img,
        /*name: product.dataProducts.products.name,
        rate: product.dataProducts.products.rate,
        comments: product.dataProducts.products.comments,
        price: product.dataProducts.products.price,*/
    //} 

    return (
        <div className="productCard">
            <img className="productImg" src = {coffee} alt="coffee" />
            <div className ="productInfo">
                <h3>Coffee Maker</h3> <br></br>
                <img className="star" src = {star} alt="star" />
                <img className="star" src = {star} alt="star" />
                <img className="star" src = {star} alt="star" />
                <img className="star" src = {star} alt="star" />
                <img className="star" src = {star} alt="star" />
                2<img className="comment" src = {comment} alt="comment" />
                <p className="price">$105</p>
            </div>
            <button className="btnDetails">See details</button>
            <button className="btnAddCart">Add to cart</button>
        </div>
    )
}

export default Product;