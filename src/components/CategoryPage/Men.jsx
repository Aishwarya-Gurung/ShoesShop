
import Navbar from "../../components/HomePage/Navbar"
import Footer from "../../components/HomePage/Footer"
import './men.css'
import Card from '../../components/CategoryPage/Card'

import axios from 'axios';
import React, { useState, useEffect } from 'react'


const Men = () => {
    const [mcollection, setMcollection] = useState([]);

    const api = `http://localhost:4000/categoryById/1`;

    const fetchProduct = () => {
        axios.get(api)
        .then(res => {
            const data = res.data.products;
            setMcollection(data); 
        })
        .catch(err => {
            console.log(err);
        })
    }

    useEffect(()=>{
        fetchProduct();
    },[])
    return (
        <div className="Men-main-container">
            <Navbar />
            <div className="men-sub-container">
                <h1 className="men-h1">Men's Collection</h1>
                <hr className="men-hr"/>
                <div className="men-card">
           
             {mcollection.map((mcollect, index) => {
                 return <Card key={mcollect.id} product={mcollect}/>
             })}
             </div>
            </div>
            <Footer />
           
        </div>
    )
}

export default Men
