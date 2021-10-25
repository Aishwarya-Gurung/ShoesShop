import React from 'react'
import './menWomen.css'
import { Link } from "react-router-dom";

const MenWomen = () => {
    return (
        <div className="menWomen-mainContainer">
            <div className="menWomen-subContainer">
               <h1 className="menwomen-heading"> Men Collection</h1>
               <hr  height=""/>
               <p>There are many variations of passages of Lorem Ipsum availale, but the majority have suffered alteration in some form, by injected humour, or randomised There are many variations</p>
               <Link to="/men"><img src="https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/2213827/2018/5/23/7bf1ffe1-e008-4983-9ced-f6e8779ac9db1527076259729-INVICTUS-Men-Brown-Formal-Shoes-4951527076259696-1.jpg" height="650px" width="650px" className="image" /></Link>
            </div>
            <div className="menWomen-subContainer">
            <h1 className="menwomen-heading"> Women Collection</h1>
               <hr />
               <p>There are many variations of passages of Lorem Ipsum availale, but the majority have suffered alteration in some form, by injected humour, or randomised There are many variations</p>
               <Link to="/women"><img src="https://images.yaoota.com/p4_rLtR5v6G3OHcsCoSObs5UTB8=/trim/yaootaweb-production-ke/media/crawledproductimages/23978c91e3250c5d553090abb7143978039de9a4.jpg" height="650px" width="650px" className="image" /></Link>
            </div>
            
            
        </div>
    )
}

export default MenWomen
