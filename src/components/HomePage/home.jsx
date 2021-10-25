import React from 'react'
import "./home.css"
import Navbar from "./Navbar"
import Carousel from './Carousel'
import Footer from './Footer'
import MenWomen from './MenWomen'
import Brand from './Brand'
import SomeProducts from './SomeProducts'

const home = () => {
    return (
      <div className="home-main-Container">
          <Navbar />
          <Carousel />
          <MenWomen />
          <Brand />
          <SomeProducts />
         <Footer />
         
        </div>
    )
}

export default home
