import React from 'react'
import Slider from "react-slick";
import './brand.css';


const Brand = () => {
    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true
      };
    return (
        <div className="brand-mainContainer">
          <div>
          <h1 className="brand-heading"><em>Our Brands</em></h1>
            <hr className="brand-hr" />
          </div>
            
           
        <Slider {...settings}>
          <div className="brand-subContainer">
          <img src="https://www.ilearnlot.com/wp-content/uploads/2018/03/Nike-Creating-a-Global-Brand-Image-in-Case-Study-ilearnlot.jpg" height="230px" width="557" />
          </div>
          <div className="brand-subContainer">
          <img src="https://benextbrand.com/wp-content/uploads/2020/05/14-Adidas-History-Brand-Value-and-Brand-Strategy.jpg" height="230px" width="557" />
          </div>
          <div className="brand-subContainer">
          <img src="https://www.newbusinessage.com/img/news/20171206012846_GoldStar_logo%20(1).jpg" height="230px" width="557" />
          </div>
          <div className="brand-subContainer">
          <img src="https://turbologo.com/articles/wp-content/uploads/2019/11/Puma-logo.png.webp" height="230px" width="557" />
          
          </div>
          <div className="brand-subContainer">
          <img src="https://www.pngitem.com/pimgs/m/599-5994007_fila-logos-brands-and-logotypes-fila-logo-black.png" height="230px" width="557" />
          </div>
          <div className="brand-subContainer">
          <img src="https://www.seekpng.com/png/detail/764-7640764_logo-converse-shoes-vector-converse.png" height="230px" width="557" />
          </div>
        </Slider>
        </div>
    )
}

export default Brand
