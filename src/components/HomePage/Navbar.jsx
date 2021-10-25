import React from 'react'
import "./navbar.css"
import { Link } from "react-router-dom";

const navbar = () => {
    return (
        <div>
        
           {/* <img src="./images/logo1.png" alt="company logo" width="200px" height="50px" className="d-inline-block "/> */}
           <nav class="navbar navbar-expand-lg navbar-light bg-dark">
  <div class="container-fluid">
  <img src="./images/logo1.png" alt="company logo" width="200px" height="50px" className="d-inline-block "/> 
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link to="/" class="nav-link active" aria-current="page"><i class="bi bi-house-door-fill"></i>Home</Link>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Category
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link to="/men" class="dropdown-item">Men Shoes</Link></li>
            <li><Link to="/women" class="dropdown-item">Women Shoes</Link></li>
            {/* <li><hr class="dropdown-divider" /></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li> */}
          </ul>
         </li>
         <li class="nav-item">
         <Link to="/register" class="nav-link"><i class="bi bi-person-plus-fill"></i>Signup</Link>
        </li>
        <li class="nav-item">
        <Link to="/login" class="nav-link"><i class="bi bi-box-arrow-in-right"></i>Login</Link>
        </li>
        {/* <li class="nav-item">
        <Link to="/myAccount" class="nav-link"><i class="bi bi-person-circle"></i>MyAccount</Link>
        </li> */}
        {/* <li class="nav-item">
        <a class="nav-link waves-effect waves-light" href="#"><i class="fas fa-text-width"></i></a>
         
        </li> */}
        <li class="nav-item">
          <Link to="/myCart" class="nav-link"><i class="bi bi-cart2"></i>My Cart</Link>
        </li>
    
      </ul>
      {/* <div className="cartLogo">
      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-cart2" viewBox="0 0 16 16">
  <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
</svg>
<p className="cartP">AddToCart</p>
</div> */}
      
      {/* <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>  */}
     
  
    </div>
  </div>
</nav>
        </div>
    )
}

export default navbar
