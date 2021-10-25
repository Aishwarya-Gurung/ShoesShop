import React from 'react'
import './card.css'
import { useHistory } from 'react-router';

const Card = ({product}) => {
    const history = useHistory();
    // console.log(product.image);
    const handleClick = () => {
        history.push("/singlePage", product)
    }

    return (
        <div className="Card-main-container">
            <div className="card-sub-container">
            {/* height="650px" width="650px" */}
           <div className="desc">
            <img src={product.image} className="card-image" />
            <div class="overlay" onClick={handleClick}>View details</div>
            </div>
         
            <h4 className="card-h4"><em>{product.ProductName}</em></h4>
            <p className="card-p">Brand:{product.brand}</p>
            <p className="card-p">Price: Rs{product.price}</p>
            <button class="card-button">Add to Cart</button>
            </div>

        </div>
    )
}

export default Card
