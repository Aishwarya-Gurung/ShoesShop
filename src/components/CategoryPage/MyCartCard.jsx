import React, { useState, useEffect } from 'react';

import { useHistory } from 'react-router';
import axios from 'axios';
import './myCart.css'
export const MyCartCard = ({product}) => {

    const history = useHistory();
    const data = product;
    const [quantity, setQuantity] = useState(data.quantity)
    // const handleClick = () => {
    //     history.push("/products", data)
    // }

    // const updateQuantity = async() => {
        
    // }

    const decreaseQuantity = () => {
        setQuantity(quantity - 1);
    }

    const increaseQuantity = () => {
        setQuantity(quantity + 1);
    }

    useEffect(()=>{
        axios.put(`http://localhost:4000/updateCart/cartId=${data.cartProductId.cartId}/productId=${data.product.productId}/quantity=${quantity}`)
        .then(res => {
            console.log(res, "posted");
        })
        .catch(err => {
            console.log(err, "error");
        })
    },[quantity]);

    return (
        // <div className="myCart-main-container">
        //      <div className="myCart-sub-container">
        //      {/* height="650px" width="650px" */}
        //     <div className="descOne">
        //      {/* <img src={data.product.image}  height="200px" width="250px"className="myCart-image" /> */}
        //      {/* <div class="overlayOne">View details</div> */}
        //      </div>
          
        //      <h2 className="myCart-h4"><em>{data.product.productName}</em></h2>
        //      <p className="myCart-p">Brand: {data.product.brand}</p>
        //      <p className="myCart-p">Price: Rs {data.product.price}</p>
        //      <p className="myCart-p">{quantity}</p>
        //      <div className="icons">
            
        //      <i className="bi bi-plus" onClick={increaseQuantity}></i>
        //      <i className="bi bi-dash" onClick={decreaseQuantity}></i>
        //      </div>
        //      <button class="mycart-button">Delete cart</button>
        //      </div>
 
        //  </div>
                


                
                    
                <tr>
                    <td>{data.product.productName}</td>
                    <td>
                    <div className="icons">
            
                    <i className="bi bi-plus" onClick={increaseQuantity}></i>
                    {quantity}
                     <i className="bi bi-dash" onClick={decreaseQuantity}></i>
                 </div>
                    </td>
                    <td><button class="mycart-button">Delete product</button></td>
                </tr>
                
                
    )
}