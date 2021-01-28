import React, { useState, useEffect } from 'react';
import './paymentForm.css';
import ShippingForm from '../../../Components/form/shippingForm';
import CardForm from '../../../Components/form/cardForm';

const PaymentForm = (props) => {

    const { setFormIsValid, setOrderData } = props;

    const [shippingDataIsValid, setShippingDataIsValid] = useState(false); // si campos estan ok, listos para enviarse, válidos
    const [cardDataIsValid, setCardDataIsValid] = useState(false);

    const [shippingData, setShippingData] = useState ({}); //orden empaquetado, información
    const [cardData, setCardData] = useState ({});

    useEffect ( () => {
        if (shippingDataIsValid && cardDataIsValid) {
            setFormIsValid(true);
            setOrderData({
                shippingData: {
                    ...shippingData, //es un objeto con toda la información de shippingData.
                },
                creditCardData: ({
                    ...cardData,
                })
            });
        } else {
            setFormIsValid(false);
        }
    }, [ shippingDataIsValid, setFormIsValid, setOrderData, shippingData, cardDataIsValid, cardData])//VARIABLES QUE USO en la primera parte del useEffect, normalmente son las mismas *Hya excepciones

    return (
        <div className="formContainer">
        <form className="formBox">
            <ShippingForm 
                setShippingDataIsValid = { setShippingDataIsValid}
                setShippingData = { setShippingData }
            />
            <br/>
            <CardForm 
                setCardDataIsValid = { setCardDataIsValid }
                setCardData = { setCardData }
            />
        </form>
        </div>
    );
}

export default PaymentForm;