//import React, {useEffect, useState} from 'react';

/* HOOK VERSION
const displayProducts = () => {

    //Defino estados de 
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
//}

//export default displayProducts;

// CLASS VERSION

import { Component } from 'react';

import Product from '../../Components/product/Product';

class DisplayProducts extends Component {
    constructor(props) {
        super(props);
        this.state = { products: [], filteredProducts: [] };
    }
    
    componentWillMount() {
        fetch(`http://localhost:8080/products`).then(res => res.json())
        .then(data => this.setState({
            products: data.products,
            filteredProducts: data.products,
        }));
    }

    render () {
        return (
        <div>
            <h1> Our products: </h1>
                <div className = "productsGrid">
                <Product products={this.state.filteredProducts} /*handleAddToCart={this.handleAddToCart}*/ />
                </div>
        </div>
        )
    }
}

export default DisplayProducts;










