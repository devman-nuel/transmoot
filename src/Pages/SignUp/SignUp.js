import React from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css';

const SignUp = () => {
 
  
  return (
    <div className='sign-con'>
      <div className='sign-left'>
        <img src='https://res.cloudinary.com/dxnukbo0u/image/upload/v1712796905/9bfa7b67994815.5b4dc2c29ce03_ovvuwm.jpg' alt='' />
      </div>

      <div className='sign-right'>
        <img src='https://res.cloudinary.com/dxnukbo0u/image/upload/v1712796881/Transmoot_Logo_aib80n.png' alt='' />
        <p>Create an account to get started </p>

        <div className='login-box'>
          <label>Enter Email Address</label>
          <input type="email"  />
          <label>Enter Password</label>
          <input type="password"  />
          <Link className='auth-btn' to="/login" > <button >Sign Up</button></Link>

          <p className='centered-text'>Already have an account? <Link to="/logIn" className='colored-sign'>Login</Link></p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
