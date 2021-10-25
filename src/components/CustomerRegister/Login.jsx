import React, {useState} from 'react'
import './login.css'
import { Link } from "react-router-dom";
import axios from 'axios';
import { useHistory } from 'react-router';

const Login = () => {
  const history = useHistory();
    const [login, setLogin] = useState({customerEmail: '',customerPassword:''});

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setLogin({ ...login, [name]: value });
    };

    const loginCustomer=()=>{
      // Make a request for a user with a given ID
      axios.get(`http://localhost:4000/customer/login?customerEmail=${login.customerEmail}&customerPassword=${login.customerPassword}`)
          .then((response) => {
          // handle success
              console.log("Login");
              console.log(response);
              if(response.data.status === 0){
                  alert(response.data.statusMessage)
              }
              else{
                  // alert("WELcome");
                  history.push('/');
              }
          })
          .catch(function (error) {
          // handle error
          console.log("Error -> ",error);
          });
  }

  const handleSubmit=(e)=>{
      e.preventDefault();
      console.log("Submitted");
      loginCustomer();
  }
    return (
        <div className="login-container">
        <div className="singup-form">
          <img src="https://www.pinclipart.com/picdir/big/164-1640714_user-symbol-interface-contact-phone-set-add-sign.png" className="signin-img" />
          <h1 className="login-heading">Log In</h1>
          <form onSubmit={handleSubmit}>
            <input type="email" className="input-box" placeholder="email" name="customerEmail" value={login.customerEmail} onChange={ handleChange}/>
            <input type="password" className="input-box" placeholder="password" name="customerPassword" value={login.customerPassword} onChange={ handleChange}/>
            {/* <p><span><input type="checkbox"/></span>I agree to the terms of services</p> */}
            <button  className="sign-btn" type="submit" >Login</button>
            <p>Don't have an account?<Link to="/register"  className="signin-link" href="#">Sign Up</Link></p>
          </form>
        </div>
      </div>

    )
}

export default Login
