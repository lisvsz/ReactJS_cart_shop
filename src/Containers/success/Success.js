import React from 'react';
import './Success.css';
import success from '../../assets/success1.webp';

const Success = () => {
    return (
        <div className="successBox">
            <img className="success" src = {success} alt="success" />
            <p className="congrats">Congratulations! your order has shipped</p>
        </div>
    )
}

export default Success;