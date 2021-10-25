
import Card from '../../components/CategoryPage/Card'
import './someProducts.css'

import axios from 'axios';
import React, { useState, useEffect } from 'react'

const SomeProducts = () => {
    const [details, setDetails] = useState([]);

    const api = `http://localhost:4000/product`;

    const fetchProduct = () => {
        axios.get(api)
        .then(res => {
            const data = res.data;
            setDetails(data); 
        })
        .catch(err => {
            console.log(err);
        })
    }

    useEffect(()=>{
        fetchProduct();
    },[])
    return (
        <div className="someProducts-main-container">
            <div>
            <h1 className="someProducts-h1">Some Products</h1>
            <hr className="someProducts-hr" />
            </div>
        
         <div className="some-card">
           
             {details.slice(0,8).map((detail, index) => {
                 return <Card key={detail.id} product={detail}/>
             })}
             </div>
       
         
         
        </div>
    )
}

export default SomeProducts
