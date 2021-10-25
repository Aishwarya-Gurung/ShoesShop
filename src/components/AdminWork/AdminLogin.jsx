
import "./adminlogin.css";
import { Link } from "react-router-dom";
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router';

const AdminLogin = () => {

  const history = useHistory();
  const [adminData, setAdminData]= useState();
  const[adminInput, setAdminInput]=useState({email:'',password:''});
  const [isFormSubmitted, setFormSubmitted] = useState(false);

  const changeHandler=(e)=>{
    let fieldName = e.target.type
    adminInput[fieldName] = e.target.value;
    setAdminInput({...adminInput})
  }

  const SubmitHandler=(e)=>{
    e.preventDefault();
    setFormSubmitted(true);
    fetchAdminData();
  
  }

  const validate=()=>{
    console.log(adminData)
    if(adminData.status === 0){
      
      alert(adminData.statusMessage);
    }
    else{
      history.push({pathname:"/product"});
      // alert("successful");
       
    }
  }

  const fetchAdminData=()=>{  
    // Make a request for a user with a given ID
    axios.get(`http://localhost:4000/admin/login?adminEmail=${adminInput.email}&adminPassword=${adminInput.password}`)
      .then((response) => {
        // let adminResponse = response.data[0];//ayeko data save gareko
        // let adminInfo={adminId: adminResponse.adminId, adminEmail: adminResponse.email, adminPassword: adminResponse.adminPassword}//takin needed
        // setAdminData(adminInfo);//set
        setAdminData(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log("Error -> ",error);
      });
  }
  useEffect(()=>{
    if(isFormSubmitted){
        validate();
        setFormSubmitted(false);
    }
},[adminData]);

    return (
       
     <div className="login-container">
        <div className="singup-form">
            <img src="https://www.pinclipart.com/picdir/big/164-1640714_user-symbol-interface-contact-phone-set-add-sign.png" className="signin-img" />
            <h1 className="login-heading">Admin Login</h1>

            <form onSubmit={(e)=>SubmitHandler(e)}>
                <input type="email" className="input-box" placeholder="email" value={adminInput.email} onChange={(e)=>changeHandler(e)} />
                <input type="password" className="input-box" placeholder="password" value={adminInput.password} onChange={(e)=>changeHandler(e)} />
                <button type="submit" className="sign-btn">Login</button>
            </form>
         </div>
    </div>
     
     
    )
}

export default AdminLogin
