import React from 'react';
import './Filters.css';

const Filters = (props) => {

    const { sortProducts} = props;

    return (
        <div className = "filters">
            <div className="categories">
                <div className="filterBasic">
                    <h2>Filters:</h2>
                            <label>
                                <input type="checkbox" name="basicsCheck"/> Basics
                            </label>
                </div>
                <br/>
                <div className="filterPrice">
                    <h2>Prices:</h2>
                            <label>
                                <input type="radio" name="button" value="$1 - $50" /> $1 - $50
                            </label><br/>

                            <label>
                                <input type="radio" name="button" value="$51 - $100" /> $51 - $100
                            </label><br/>

                            <label>
                                <input type="radio" name="button" value="$101 - $200" /> $101 - $200
                            </label>
                </div>
                <br/>
                <div className="sortProducts">
                    <h2>Sort by:</h2>
                        <select value={sortProducts} name="price">
                            <option value="price">Price</option>
                            <option value="rating">Rating</option>
                        </select>
                </div>
            </div>
            <div className = "v1"></div>
        </div>
    )
}

export default Filters;