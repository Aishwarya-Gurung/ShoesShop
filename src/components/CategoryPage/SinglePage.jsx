import React from 'react'
import './singlePgae.css'
import Navbar from "../../components/HomePage/Navbar"
import Footer from "../../components/HomePage/Footer"
import { useHistory } from 'react-router';

const SinglePage = () => {
    const history = useHistory();
    const data = history.location.state;
    return (
        <div className="singlePage-main-container">
              <Navbar />
            <div className="singlePage-sub-container">
                <div className="singlePage-image-container">
                <img src={data.image}  height="400px" width="500px"className="singlePage-image" />
                </div>
                <div className="SinglePage-info-container">
                    <h2 className="singlePage-h1">{data.productName}</h2>
                    <p className="singlePage-P">Brand: {data.brand}</p>
                    <p className="singlePage-color">Color: {data.color}</p>
                    <p className="singlePage-size">Size(EU): {data.size}</p>
                    <p className="singlePage-Price">Price: Rs {data.price}</p>
                    {/* <p className="singlePage-category">Category: {data.ca}</p> */}
                    <p className="singlePage-type">Type: {data.type}</p>
                    <p className="singlePage-description">Description: {data.description}</p>
                    <button class="card-button-single">Add to Cart</button>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default SinglePage
