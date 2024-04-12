// LandingPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className='landingpage'>
      <div className='landingleft'>
        <img src='https://res.cloudinary.com/dxnukbo0u/image/upload/v1712796905/9bfa7b67994815.5b4dc2c29ce03_ovvuwm.jpg' alt=''></img>      
      </div>

      <div className='landingright'>
        <img src='https://res.cloudinary.com/dxnukbo0u/image/upload/v1712796881/Transmoot_Logo_aib80n.png' alt=''></img>
        <p>Say hello to our powerful media tool powered by Transmoot API. You can now create visual experiences for personal use or business. </p>

        <div className='auth-details'>
          <p className='centered-text'>Don’t have an account? <Link to="/signUp" className='colored-sign'>Create an account</Link></p>
          <span>Or</span>
          <Link to="/logIn"><button> Sign in into an existing account</button></Link>
        </div>
      </div> 
    </div>
  );
};

export default LandingPage;