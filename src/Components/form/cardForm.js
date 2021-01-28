import React, { useState, useEffect } from 'react';
import './cardForm.css';

const CardForm = (props) => {

    const { setCardData, setCardDataIsValid } = props;

    const [cardNumber, setCardNumber] = useState(null);
    const [fullName, setFullName] = useState(null);
    const [expDate, setExpDate] = useState(null);
    const [cvv, setCvv] = useState(null);

    const[inputCardNumber, setInputCardNumber] = useState(false);
    const[inputFullName, setInputFullName] = useState(false);
    const[inputExpDate, setInputExpDate] = useState(false);
    const[inputCvv, setInputCvv] = useState(false);

    const creditCardValidate = (ccnumber) => {
        fetch(`http://localhost:8080/validate/creditcard/${ccnumber}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => {
                return response.json();
            })
            .then(responseJson => {
                if (responseJson.message === 'success') {
                    setInputCardNumber(true);
                } else {
                    setInputCardNumber(false);
                };
            })
    };

    useEffect(() => {
        const timeId = setTimeout(() => creditCardValidate(cardNumber), 1000);
        return () => clearTimeout(timeId);
    }, [cardNumber]);

    useEffect(() => {
        const validateCardForm = () => {
            if (inputCardNumber && inputFullName && inputExpDate && inputCvv) {
                setCardDataIsValid(true);
                setCardData ({  //value 
                    creditCard: cardNumber,
                    cvv: cvv,
                    expDate: expDate,
                    fullName: fullName,
                });
            } else {
                setCardDataIsValid(false);
            };
        };
        validateCardForm();
    }, [inputCardNumber, inputFullName, inputExpDate, inputCvv])

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        if (name === 'cardNumber') {
            setCardNumber(value);
            if (value.length > 16) {
                setInputCardNumber(true);
            } else {
                setInputCardNumber(false);
            }
        }
        if (name === 'fullName') {
            setFullName(value);
            if (value.length > 5) {
                setInputFullName(true);
            } else {
                setInputFullName(false);
            }
        }
        if (name === 'expDate') {
            setExpDate(value);
            if (value.length >= 4) {
                setInputExpDate(true);
            } else {
                setInputExpDate(false);
            }
        }
        if(name === 'cvv') {
            setCvv(value);
            if(value.length === 3) { //regex
                setInputCvv(true);
            } else {
                setInputCvv(false);
            }
        }
    }

    return (
    <fieldset className="cardForm">
        <legend>Credit Card data:</legend>
        <br/>
        <div>
            <div>
                <label>Credit Card Number</label> <br/>
                <input type="number" name="cardNumber" value={cardNumber} onChange={handleChange} required />
            </div>
            <br/>

            <div>
            <label>Full Name</label> <br/>
            <input type="text" name="fullName" value={fullName} onChange={handleChange} required />
            </div>
            <br/>

            <label>Exp. Date</label><br/>
            <input type="text" name="expDate" value={expDate} onChange={handleChange} required />
        </div>

        <div>
            <br/><br/><br/><br/><br/><br/><br/>
            <label>CVV</label><br/>
            <input type="number" name="cvv" value={cvv} onChange={handleChange} required />
        </div>
    </fieldset>
    )
};

export default CardForm;