import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import supabase from '../../Authentication/Supabase/Supabase';
import { Link } from 'react-router-dom';
import './LogIn.css';

const LogIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // Log Supabase URL and public key
  console.log('Supabase URL:', process.env.REACT_APP_SUPABASE_URL);
  console.log('Supabase Public Key:', process.env.REACT_APP_SUPABASE_PUBLIC_KEY);

  console.log(supabase);

  console.log(typeof supabase.auth.signIn === 'function'); 

  const handleLogIn = async () => {
    try {
      const { user, error } = await supabase.auth.signIn({ email, password });
      if (error) {
        setError(error.message);
        
      } else {
        console.log('User signed in successfully:', user);
        // Redirect to dashboard upon successful login
        navigate('/dashboard');
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className='auth-con'>
      <div className='auth-left'>
        <img src='https://res.cloudinary.com/dxnukbo0u/image/upload/v1712796905/9bfa7b67994815.5b4dc2c29ce03_ovvuwm.jpg' alt='' />
      </div>

      <div className='auth-right'>
        <img src='https://res.cloudinary.com/dxnukbo0u/image/upload/v1712796881/Transmoot_Logo_aib80n.png' alt='' />
        <p>Log in to your account to continue </p>

        <div className='login-box'>
          <label>Enter Email Address</label>
          <input type="email" placeholder='e.g: user@gmail.com' value={email} onChange={(e) => setEmail(e.target.value)} />
          <label>Enter Password</label>
          <input type="password" placeholder='Enter password here' value={password} onChange={(e) => setPassword(e.target.value)} />
          <button onClick={handleLogIn}>Log In</button>

          <p className='centered-text'>Don’t have an account? <Link to="/signUp" className='colored-sign'>Create an account</Link></p>

          {error && <div className="error-popup">{error}</div>}
        </div>
      </div>
    </div>
  );
};

export default LogIn;
