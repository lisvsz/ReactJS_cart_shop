import React from 'react';
import './Shipped.css';
import success from '../../assets/success1.webp';

const Shipped = () => {
    return (
        <div className="successBox">
            <img className="success" src = {success} alt="success" />
            <p className="congrats">Congratulations! your order has shipped</p>
        </div>
    )
}

export default Shipped;