import React, {useEffect} from 'react'
import Navbar from "../../components/HomePage/Navbar"
import Footer from "../../components/HomePage/Footer"
// import './men.css'
import './myCart.css'
import { MyCartCard } from './MyCartCard'

import { useState} from "react";
import axios from 'axios';

const MyCart = () => {
    // const [mcollection, setMcollection] = useState([1,2,3,4,5,6,7,8]);

    const [products, setProducts] = useState([]);
    const [quantity, setQuantity] = useState(products.quantity)

    const api = `http://localhost:4000/cart`;

    const fetchProduct = () => {
        axios.get(api)
        .then(res => {
            const data = res.data[0].cartProducts;
            setProducts(data); 
        })
        .catch(err => {
            console.log(err);
        })
    }
    const decreaseQuantity = () => {
        setQuantity(quantity - 1);
    }

    const increaseQuantity = () => {
        setQuantity(quantity + 1);
    }

    useEffect(()=>{
        fetchProduct();
    },[])


    return (
        <div className="cart-main-container">
        <Navbar />
        <div className="cart-sub-container">
            <h1 className="cart-h1">My Cart</h1>
            <hr className="cart-hr"/>
           
            <table class="w3-table-all">
                <thead>
                    <tr class="w3-red">
                        <th>ProductName</th>
                        <th>Quantity</th>
                        <th>Action</th>
                    </tr>
                </thead>
                    {products.map(item=>{
                            return (
                                    <MyCartCard key={item.id} product={item}/>
                            )
                        })} 
            </table>
         
         <hr className="Cart-checkout-hr"/>
         <button class="checkout-button">checkout</button>
         
        </div>
        <Footer />
       
    </div>
    )
}

export default MyCart
