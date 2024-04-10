// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import SignUp from './Pages/SignUp/SignUp';
import LogIn from './Pages/LogIn/LogIn';
import Home from './Pages/Home/Home';
import LandingPage from './Pages/LandingPage/LandingPage';
import PrivateRoute from './Components/PrivateRoute'; // Import the PrivateRoute component
import { useAuth } from './Authentication/Supabase/Supabase'; // Import the useAuth hook

const AppRoutes = () => {
  const { user } = useAuth();

  

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signin" element={<LogIn />} />
      <PrivateRoute path="/home" element={<Home />} isAuthenticated={user !== null} />
      <Navigate to="/" />
    </Routes>
  );
}

const App = () => {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
};

export default App;
