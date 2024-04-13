// App.js
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import LandingPage from './Pages/LandingPage/LandingPage';
import LogIn from './Pages/LogIn/LogIn';
import SignUp from './Pages/SignUp/SignUp';
import Dashboard from './Pages/Dashboard/Dashboard';
import './App.css';



const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <LandingPage /> },
      { path: '/signup', element: <SignUp /> },
      { path: '/login', element: <LogIn /> },
      { path: '/dashboard', element: <Dashboard /> },
      // Add more routes for additional pages here
    ]
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

