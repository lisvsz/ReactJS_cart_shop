import React from 'react';
import './Filters.css';

const Filters = () => {
    return (
        <div className = "filters">
            <div className="categories">
                <h2>Filters:</h2> <br/>
                    <label>
                        <input type="checkbox" name="check"/> Basics
                    </label><br/>
                <h2>Prices:</h2> <br/>
                    <label>
                        <input type="radio" name="button" value="$1 - $50" /> $1 - $50
                    </label>    
                    <label>
                        <input type="radio" name="button" value="$51 - $100" /> $51 - $100
                    </label>
                    <label>
                        <input type="radio" name="button" value="$101 - $200" /> $101 - $200
                    </label><br/> 
                <h2>Sort by:</h2> <br/>
                    <select name="menu">
                        <option value="price">Price</option>
                        <option value="rating">Rating</option>
                    </select>
            </div>
            <div className = "v1"></div>
        </div>
    )
}

export default Filters;