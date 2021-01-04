    import React from 'react';
    import './Form.css';
    import coffee from '../../assets/coffee.jpg';
    import recycleBin from '../../assets/recycle-bin.png';

    const Form = () => {
        return (
            <div className="formContainer">
                <form className="formBox">
                    <fieldset className="shippingForm">
                        <legend>Shipping Data</legend><br/>

                        <div>
                            <div>
                                <label>Name</label><br/>
                                <input type="text" name="name" placeholder="Nombre" required />
                            </div>
                            <br/>
                            <div>
                                <label>Address</label><br/>
                                <input type="text" name="address" placeholder="Dirección" required />
                            </div>
                            <br/>
                            <div>
                                <label>State</label><br/>
                                <input type="text" name="state" placeholder="Estado" required />
                            </div>
                            <br/>
                            <div>
                                <label>Phonenumber</label><br/>
                                <input type="tel" name="telephone" placeholder="Teléfono" required />
                            </div>
                        </div>

                        <div>
                            <div>
                                <label>Last Name</label><br/>
                                <input type="text" name="last name" placeholder="Apellido" required />
                                <br/>
                            </div>
                            <br/>
                            <div>
                                <label>City</label><br/>
                                <input type="text" name="city" placeholder="Ciudad" required />
                                <br/>                    
                            </div>
                            <br/>
                            <div>
                                <label>Zip Code</label><br/>
                                <input type="text" name="zip code" placeholder="Código postal" required />
                                <br/>
                            </div>
                        </div>
                    </fieldset>
                    <br/>
                    <fieldset className="cardForm">
                        <legend>Credit Card data</legend>
                        <br/>

                        <div>
                            <div>
                                <label>Credit Card Number</label> <br/>
                                <input type="number" name="cardnumber" placeholder="Card" tabindex="16" required />
                            </div>
                            <br/>

                            <div>
                            <label>Full Name</label> <br/>
                            <input type="text" name="name" placeholder="Nombre Completo" required />
                            </div>
                            <br/>

                            <label>Exp. Date</label><br/>
                            <input type="text" name="exp. date" placeholder="exp. date" tabindex="5" required />
                        </div>

                        <div>
                            <br/><br/><br/><br/><br/><br/><br/>
                            <label>CVV</label><br/>
                            <input type="number" name="cvv" placeholder="CVV" tabindex="3" required />
                        </div>

                    </fieldset>
                </form>
                <div className="listProducts">
                    <p>Products:</p>
                    <div className="productSelected">                        
                        <img className="productListImg" src = {coffee} alt="product" />
                        <p className="productListName">Coffee Maker</p>
                        <p className="productListPrice">$105</p>
                        <img className="deleteProduct" src = {recycleBin} alt="trash" />
                    </div>
                    <p>Subtotal: <span className="subtotalList">$105</span></p>
                    <button className="btnPay">Pay Now</button>
                </div>
            </div>
        )
    }

    export default Form;