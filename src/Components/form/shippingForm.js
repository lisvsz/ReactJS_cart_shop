import React, { useState, useEffect} from 'react';
import './shippingForm.css';

const ShippingForm = (props) => {

    const { setShippingData, setShippingDataIsValid } = props;

    const [nameUser, setNameUser] = useState(null);
    const [lastName, setLastName] = useState(null);
    const [address, setAddress] = useState(null);
    const [city, setCity] = useState(null);
    const [stateUser, setStateUser] = useState(null);
    const [zipCode, setZipCode] = useState(null);
    const [phoneNumber, setPhoneNumber] = useState(null);

    const [inputName, setInputName] = useState(false);
    const [inputLastName, setInputLastName] = useState(false);
    const [inputAddress, setInputAddress] = useState(false);
    const [inputCity, setInputCity] = useState(false);
    const [inputState, setInputState] = useState(false);
    const [inputZipCode, setInputZipCode] = useState(false);
    const [inputPhoneNumber, setInputPhoneNumber] = useState(false);

    //Validación en componente porque no se reutilizará
    const zipCodeValidate = (zipcode) => {  
        fetch(`http://localhost:8080/validate/zipcode/${zipcode}`, {
            method: 'POST',                 // no hay body, sólo se pide un query param
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => {
                return response.json();
            })
            .then(responseJson => {
                if(responseJson.message === 'success') {
                    setInputZipCode(true);
                } else {
                    setInputZipCode(false);
                };
            })
            .catch(error => console.log(error));
    }   

    //Buena práctica - validación cada cierto tiempo
    useEffect(() => {
        const timeId = setTimeout(() => zipCodeValidate(zipCode), 1000);
        return () => clearTimeout(timeId);
    }, [zipCode]);

    useEffect ( () => {
        const validateShippingForm = () => {
            console.log(inputName, inputLastName, inputAddress, inputCity, inputState, inputPhoneNumber, inputZipCode)
            if(inputName, inputLastName, inputAddress, inputCity, inputState, inputPhoneNumber, inputZipCode) {
                setShippingDataIsValid(true);
                setShippingData ({
                    address: address,
                    city: city,
                    state: stateUser,
                    phoneNumber: phoneNumber,
                    fullName: `${nameUser} ${lastName}`, 
                    zipCode: zipCode,
                });
            } else {
                setShippingDataIsValid(false);
            };
        };
        validateShippingForm();
    }, [inputName, inputLastName, inputAddress, inputCity, inputState, inputPhoneNumber, inputZipCode])

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        if(name === "name") {
            setNameUser(value);
            if(value.length > 2) {
                setInputName(true);
                console.log('nombre correcto');
            } else {
                setInputName(false);
            };
        };

        if( name === "address") {
            setAddress(value);
            if(value.length > 5) {
                setInputAddress(true);
                console.log('dirección correcta');
            } else {
                setInputAddress(false);
            };
        };

        if (name === "state") {
            setStateUser(value);
            if(value.length > 2) {
                setInputState(true);
                console.log('estado correcto');
            } else {
                setInputState(false);
            };
        };

        if(name === "telephone")  {
            setPhoneNumber(value);
            if(value.length > 8) {
                setInputPhoneNumber(true);
                console.log('teléfono correcto');
            } else {
                setInputPhoneNumber(false);
            };
        };

        if(name === "lastName")  {
            setLastName(value);
            if(value.length > 3) {
                setInputLastName(true);
                console.log('apellido correcto');
            } else {
                setInputLastName(false);
            };
        };

        if(name === "city")  {
            setCity(value);
            if(value.length > 2) {
                setInputCity(true);
                console.log('ciudad correcta');
            } else {
                setInputCity(false);
            };
        };

        if(name === "zipCode") {
            setZipCode(value);
            if(value.length === 5 ) {
                setInputZipCode(true);
                console.log('zip correcto');
            } else {
                setInputZipCode(false);
            };
        }
    }

    return(
        <fieldset className="shippingForm">
        <legend>Shipping Data:</legend><br/>
        <div>
            <div>
                <label>Name</label><br/>
                <input type="text" name="name" value={nameUser} onChange={handleChange} required />
            </div>
            <br/>
            <div>
                <label>Address</label><br/>
                <input type="text" name="address" value={address} onChange={handleChange} required />
            </div>
            <br/>
            <div>
                <label>State</label><br/>
                <input type="text" name="state" value={stateUser} onChange={handleChange}  required />
            </div>
            <br/>
            <div>
                <label>Phonenumber</label><br/>
                <input type="tel" name="telephone" value={phoneNumber} onChange={handleChange}  required />
            </div>
        </div>

        <div>
            <div>
                <label>Last Name</label><br/>
                <input type="text" name="lastName" value={lastName} onChange={handleChange}  required />
                <br/>
            </div>
            <br/>
            <div>
                <label>City</label><br/>
                <input type="text" name="city" value={city} onChange={handleChange}  required />
                <br/>                    
            </div>
            <br/>
            <div>
                <label>Zip Code</label><br/>
                <input type="text" name="zipCode" value={zipCode} onChange={handleChange} required /> {/* forma alternativa // onChange={ (e) => setZipCode(e.target.value)} */}
                <br/>
            </div>
        </div>
    </fieldset>
    );
};

export default ShippingForm;