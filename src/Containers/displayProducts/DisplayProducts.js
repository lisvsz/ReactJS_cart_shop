import React, {useEffect} from 'react';
import './DisplayProducts.css';
import Filters from '../../Components/filters/Filters';
import Product from '../../Components/product/Product';
import { connect } from 'react-redux';
import * as actions from '../../Store/actions/index';
import useScrollState from '../../myHooks/myHooks';

//HOOK VERSION
const DisplayProducts = (props) => {

    const { fetchProducts, addPage, products, response, page } = props;
    const [responseRef, setResponseRef] = useScrollState(response);
    
    //Data products
    useEffect (() => {
        fetchProducts(page);
    }, [fetchProducts, page])
    
    //Scroll
    useEffect (() => {
        setResponseRef(response)
    }, [response, setResponseRef]);

    function scrolling (event) {
        
        const { scrollTop, clientHeight, scrollHeight } = event.srcElement.documentElement;
        
        if (Math.ceil(scrollHeight - scrollTop) === clientHeight) {
            /*console.log("response", responseRef.current);
            console.log("response.currentPage ", responseRef.current.currentPage);
            console.log("response.pages", responseRef.current.pages);
            console.log("!response.currentPage === response.pages", !(responseRef.current.currentPage === responseRef.current.pages));
    
            if (!(responseRef.current.currentPage === responseRef.current.pages)) {
                addPage();
            };*/
            console.log(responseRef.current.currentPage)
            if (!(responseRef.current.currentPage === responseRef.current.pages)) {
                addPage();
            }
        };

        console.log('response',scrollTop);
        console.log('response', responseRef);
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

const mapStateToProps = (state) => { //rootreducer
    return {
        products: state.fetchR.products,
        response: state.fetchR.response,
        page: state.filtersR.page,
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        fetchProducts: () => dispatch(actions.fetchProducts()),
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










