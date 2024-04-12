import React, { useState } from 'react';
import supabase from '../../Authentication/Supabase/Supabase';
import { Link } from 'react-router-dom';
import './SignUp.css';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleSignUp = async () => {
    const { error } = await supabase.auth.signUp({ email, password });
    if (error) {
      setError(error.message);
      setSuccess(false);
    } else {
      setSuccess(true);
      setError(null);
    }
  };
  
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
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <label>Enter Password</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <button onClick={handleSignUp}>Sign Up</button>

          <p className='centered-text'>Already have an account? <Link to="/logIn" className='colored-sign'>Login</Link></p>

          {error && <div className="error-popup">{error}</div>}
          {success && <div className="success-popup">Sign up successful!</div>}
        </div>
      </div>
    </div>
  );
};

export default SignUp;
