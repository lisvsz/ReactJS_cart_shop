import React from 'react';
import { connect } from 'react-redux';
import { filterBasics, filterBasicsRemove, filterPrices, sortRatingPrices, sortRemove } from '../../Store/actions/index';
import './Filters.css';

const Filters = (props) => {

    const { basicsClick, basicsClickRemove, sortOptionClick, sortOptionClickRemove, filterPrices } = props;

    //Filter basics
    const basicsChecked = (event) => {
        console.log('basicsCheck')
        if (event.target.checked) {
            basicsClick('basics');
            console.log('click básico')
        } else {
            basicsClickRemove();
            console.log('fuera')
        }
    }

    //Sort Rating
    const sortHigherPrice = (event) => {
        console.log('entra a función sortHigherPrice')
        console.log(event)
        if(event.target.value === 'Prices') {
            sortOptionClick(event.target.value);
            console.log('higher price first :D')
        } else if (event.target.value === 'Rating') {
            sortOptionClick(event.target.value);
            console.log('higher rating first :D')
        } else {
            sortOptionClickRemove();
        }
    }

    //Filter range prices
    const filterRangePrices = (event) => {
        console.log(event.target.value);
        console.log('selecciono filtro precios :D')
        filterPrices(event.target. value);
    }

    return (
        <div className = "filters">
            <div className="categories">
                <div className="filterBasic">
                    <h2>Filters:</h2>
                            <label>
                                <input type="checkbox" name="basicsCheck" onChange={basicsChecked}/> Basics
                            </label>
                </div>
                <br/>
                <div className="filterPrice">
                    <h2>Prices:</h2>
                            <label>
                                <input type="radio" name="priceRange" value="1_to_50" onChange={filterRangePrices}/> $1 - $50
                            </label><br/>

                            <label>
                                <input type="radio" name="priceRange" value="51_to_100" onChange={filterRangePrices} /> $51 - $100
                            </label><br/>

                            <label>
                                <input type="radio" name="priceRange" value="101_to_200" onChange={filterRangePrices}/> $101 - $200
                            </label>
                </div>
                <br/>
                <div className="sortProducts">
                    <h2>Sort by:</h2>
                        <select name="price" onChange={sortHigherPrice}>
                            <option value="default"></option>
                            <option value="Prices">Price</option>
                            <option value="Rating">Rating</option>
                        </select>
                </div>
            </div>
            <div className = "v1"></div>
        </div>
    )
}

/*const mapStateToProps = (state) => { //rootreducer
    return {
        basics: state.fetchR.basics,
        rating: state.fetchR.rating,
        pricesRange: state.fetchR.pricesRange,
        filteredProducts: state.fetchR.filteredProducts,
        filterPrices: state.fetchR.filterPrices,
    }
}*/

const mapDispatchToProps = dispatch => {
    return {
        basicsClick: (filterOption) => dispatch(filterBasics(filterOption)),
        basicsClickRemove: () => dispatch(filterBasicsRemove()),
        sortOptionClick: (sortOption) => dispatch(sortRatingPrices(sortOption)),
        sortOptionClickRemove: () => dispatch(sortRemove()),
        filterPrices: (priceFilter) => dispatch(filterPrices(priceFilter)),
    }
}

export default connect(null, mapDispatchToProps)(Filters);