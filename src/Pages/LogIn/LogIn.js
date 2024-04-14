import React from 'react';
import { Link } from 'react-router-dom';
import './LogIn.css';

const LogIn = () => {


  return (
    <div className='auth-con'>
      <div className='auth-left'>
        <img src='https://res.cloudinary.com/dxnukbo0u/image/upload/v1712796905/9bfa7b67994815.5b4dc2c29ce03_ovvuwm.jpg' alt='' />
      </div>

      <div className='auth-right'>
        <img src='https://res.cloudinary.com/dxnukbo0u/image/upload/v1713129613/Transmoot_the_logo_o8au8z.png' alt='' />
        <p>Log in to your account to continue </p>

        <div className='login-box'>
          <label>Enter Email Address</label>
          <input type="email" placeholder='e.g: user@gmail.com'  />
          <label>Enter Password</label>
          <input type="password" placeholder='Enter password here'  />
           <Link className='auth-btn' to="/dashboard" > <button >Log In</button></Link>
         

          <p className='centered-text'>Don’t have an account? <Link to="/signUp" className='colored-sign'>Create an account</Link></p>

        
        </div>
      </div>
    </div>
  );
};

export default LogIn;
