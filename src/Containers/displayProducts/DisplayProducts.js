import React, {useEffect} from 'react';
import './DisplayProducts.css';
import Filters from '../../Components/filters/Filters';
import Product from '../../Components/product/Product';
import { connect } from 'react-redux';
import * as actions from '../../Store/actions/index';
import useScrollState from '../../myHooks/myHooks';

//HOOK VERSION
const DisplayProducts = (props) => {

    const { fetchProducts, addPage, products, response, page, rating, pricesRange, filteredProducts, filterPrices} = props;
    const [responseRef, setResponseRef] = useScrollState(response);
    
    //Data products
    useEffect (() => {
        fetchProducts(page, rating, pricesRange, filteredProducts, filterPrices);
    }, [fetchProducts, page,  rating, pricesRange, filteredProducts, filterPrices])

    //Filter
    let productsToRender = [];

    if (pricesRange) {
        productsToRender = filteredProducts;
    } else {
        productsToRender = products;
    }
    
    //Scroll
    useEffect (() => {
        setResponseRef(response)
    }, [response, setResponseRef]);

    function scrolling (event) {
        
        const { scrollTop, clientHeight, scrollHeight } = event.srcElement.documentElement;

        console.log('entro al evento')
        
        if (Math.ceil(scrollHeight - scrollTop) === clientHeight) {
            console.log('entro al primer if')
            if (!(responseRef.current.currentPage === responseRef.current.pages)) {
                console.log('entro a cambiar pagina')
                addPage();
            }
        };
    }

    useEffect(() => {
        if (window) {
            window.addEventListener('scroll', scrolling);
        }
        return () => {
            window.removeEventListener('scroll', scrolling);
        }
    }, [])

    return (
        <div className ="productsBox">
            <Filters
            />
            <div>
                <h1 className="productsTitle">Our products:</h1>
                <div className="productsGrid">
                    {productsToRender.map(( product => {
                        return(
                        <Product 
                        productImg={product.img}
                        productName={product.name}
                        productCom={product.comments}
                        productPrice={product.price}
                        productBasic={product.basics}
                        //Falta rating
                        />
                        )
                    })
                    )}
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => { //rootreducer
    return {
        products: state.fetchR.products,
        response: state.fetchR.response,
        page: state.fetchR.page,
        basics: state.fetchR.basics,
        rating: state.fetchR.rating,
        pricesRange: state.fetchR.pricesRange,
        filteredProducts: state.fetchR.filteredProducts,
        filterPrices: state.fetchR.filterPrices,
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        fetchProducts: (page, basics, rating, pricesRange, filteredProducts, filterPrices) => dispatch(actions.fetchProducts(page, basics, rating, pricesRange, filteredProducts, filterPrices)),
        addPage: () => dispatch(actions.addPage()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DisplayProducts);

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










