
import './register.css'
import { Link } from "react-router-dom";
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router';

const Register = () => {
  const history = useHistory();
    const [register, setRegister] = useState({customerName: '',customerAddress:'', customerPhone:'', customerEmail:'', customerPassword:''});

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setRegister({ ...register, [name]: value });
    };

    const postCustomer = async() => {
        await axios.post(`http://localhost:4000/saveCustomer`, register)
          .then(res => {
              // alert(res, 'posted');
              if(res.data.status >= 5 && res.data.status <= 10){
                alert(res.data.statusMessage)
            }
            else{
                alert("registered");
                history.push('/login');
            }
          })
          .catch(err => {
              alert(err, 'error');
              console.log(err);
          })
    }

    const fetchCustomer = async()=> {
        await axios.get(`http://localhost:4000/customer`)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        postCustomer();
        
        console.log(register);
    }
    

    return (
        <div className="signin-container">
      <div className="singin-form">
        <img src="https://www.pinclipart.com/picdir/big/164-1640714_user-symbol-interface-contact-phone-set-add-sign.png" className="signin-img" />
        <h1 className="login-heading">Sign Up</h1>
        <form>
            <div className="input-container">
            
        <input type="text" className="input-box" placeholder="user name" name="customerName" value={register.customerName} onChange={ handleChange}/>
        </div>
          <input type="email" className="input-box" placeholder="email" name="customerEmail" value={register.customerEmail} onChange={ handleChange}/>
          <input type="tel" className="input-box" placeholder="phone number" name="customerPhone" value={register.customerPhone} onChange={ handleChange}/>
          <input type="text" className="input-box" placeholder="address" name="customerAddress" value={register.customerAddress} onChange={ handleChange}/>
          <input type="password" className="input-box" placeholder="password" name="customerPassword" value={register.customerPassword} onChange={ handleChange}/>
        
          <p className="register-p"><span><input type="checkbox" /></span>I agree to the terms of services.</p>
        
          <button type="button" className="signin-btn" onClick={ handleSubmit}>Signup</button>
          <p>Already have an account?<Link to="/login"  className="signin-link">Log In</Link></p>
        </form>
      </div>
    </div>
     
    )
}

export default Register
