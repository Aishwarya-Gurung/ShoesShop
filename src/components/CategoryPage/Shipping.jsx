import React from 'react'
import Navbar from "../../components/HomePage/Navbar"
import Footer from "../../components/HomePage/Footer"
import './shipping.css'

const Shipping = () => {
    return (
        <div className="shipping-conatiner">
            <Navbar />
            
            <div className="ship-container">
            <div className="shipping-sub-container">
            <h2 className="ship-h2">Checkout Form</h2>
                <div className="shippingForm">
                   
                    <label for="shippingaddress" className="ship-label">Shipping Address:</label>
                    <input type="text" name="shippingaddress" placeholder="Your address.."  className="ship-Input"/>
                </div>
                <div className="shippingForm">
                    <label for="deliverdate" className="ship-label">Deliver Date:</label>
                    <input type="date" name="deliveryDate" className="ship-Input-data"/>
                </div>
                    <button type="submit" value="Submit" className="ship-button">Order Now</button>
               
            </div>
            </div>
            <Footer />
        </div>
    )
}

export default Shipping
