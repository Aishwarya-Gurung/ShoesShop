import React from 'react'

const Carousel = () => {
    return (
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
            {[0,1,2,3,4,5].map((value, index)=>
                <button key={`slider${index}`} type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={value} className={(value === 0 )?"active":""} aria-current={(value === 0 )?"true":"false"} aria-label={`Slide ${value+1}`}></button>
            )}
        </div>
        <div className="carousel-inner">
            <div className="carousel-item active">
                <img src="./images/shoe1.jpg" height="830px" width="100vw" className="d-block w-100" alt="banner-sixth-img" />
            </div>
            <div className="carousel-item">
                <img src="./images/shoe.jpg" height="830px" width="100vw" className="d-block w-100" alt="banner-second-img"/>
            </div>
            <div className="carousel-item">
                <img src="./images/shoe4.jpg" height="830px" width="100vw"  className="d-block w-100" alt="banner-third-img"/>
            </div>
            <div className="carousel-item">
                <img src="./images/im.jpg" height="830px" width="100vw"  className="d-block w-100" alt="banner-fourth-img"/>
            </div>
            <div className="carousel-item">
                <img src="./images/im1.jpg" height="830px" width="100vw" className="d-block w-100" alt="banner-fifth-img"/>
            </div>
            <div className="carousel-item">
                <img src="./images/im2.jpg" height="830px" width="100vw" className="d-block w-100" alt="banner-first-img"/>
            </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
    </div>
    )
}

export default Carousel
