// import React from 'react'
import Navbar from "../../components/HomePage/Navbar"
import Footer from "../../components/HomePage/Footer"
import './men.css'
import Card from '../../components/CategoryPage/Card'
import axios from 'axios';
import React, { useState, useEffect } from 'react'

const Women = () => {
    const [wcollection, setWcollection] = useState([]);

    const api = `http://localhost:4000/categoryById/3`;

    const fetchProduct = () => {
        axios.get(api)
        .then(res => {
            const data = res.data.products;
            setWcollection(data); 
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
            <h1 className="men-h1">Women's Collection</h1>
            <hr className="men-hr"/>
            <div className="men-card">
       
         {wcollection.map((wcollect, index) => {
             return <Card key={wcollect.id} product={wcollect}/>
         })}
         </div>
        </div>
        <Footer />
        </div>
    )
}

export default Women
