import React, {useEffect, useState} from 'react';
import './DisplayProducts.css';
import Filters from '../../Components/filters/Filters';
import Product from '../../Components/product/Product';

//HOOK VERSION
const DisplayProducts = () => {

    //Defino estados de producto, filtros
    const [products, setProducts] = useState([])
    const [filters, setFilters] = useState([])

    useEffect (() => {
        fetch(`http://localhost:8080/products`)
            .then(response => {
                return response.json();
            })
            .then(responseJSON => {
                // setResponse(responseJSON)
                setProducts(responseJSON.products);
            })
    }, [])

    return (
        <div className ="productsBox">
            <Filters
            />
            <div>
                <h1 className="productsTitle">Our products:</h1>
                <div className="productsGrid">
                    {products.map ( product => {
                        return(
                        <Product 
                        productImg={product.img}
                        productName={product.name}
                        productCom={product.comments}
                        productPrice={product.price}
                        productBasic={product.basics}
                        />
                        )
                    })
                    }
                </div>
            </div>
        </div>
    )
}

export default DisplayProducts;

//CLASS VERSION

//import React,{ Component } from 'react';

// import Product from '../../Components/product/Product';

// class DisplayProducts extends Component {
//     constructor(props) {
//         super(props);
//         this.state = { products: [], filteredProducts: [] };
//     }
    
//     componentWillMount() {
//         fetch(`http://localhost:8080/products`).then(res => res.json())
//         .then(data => this.setState({
//             products: data.products,
//             filteredProducts: data.products,
//         }));
//     }

//     render () {
//         return (
//         <div>
//             <h1 className="productsTitle"> Our products: </h1>
//                 <div className = "productsGrid">
//                 <Product products={this.state.filteredProducts} /*handleAddToCart={this.handleAddToCart}*/ />
//                 </div>
//         </div>
//         )
//     }
// }

// export default DisplayProducts;










