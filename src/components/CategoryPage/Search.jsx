import React from 'react'
import Navbar from "../../components/HomePage/Navbar"
import Footer from "../../components/HomePage/Footer"
import './men.css'
import Card from '../../components/CategoryPage/Card'
import { useState} from "react";
const Search = () => {
    const [mcollection, setMcollection] = useState([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]);
    return (
        <div className="Men-main-container">
            <Navbar />
            <div className="men-sub-container">
                <h1 className="men-h1">Search Results</h1>
                <hr className="men-hr"/>
                <div className="men-card">
           
             {mcollection.map((mcollect, index) => {
                 return <Card />
             })}
             </div>
            </div>
            <Footer />
           
        </div>
    )
}

export default Search
