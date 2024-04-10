import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import ScrollTop from './Components/Scrolltop'
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Home from './Pages/Home/Home';
import SignUp from './Pages/SignUp/SignUp';
import LogIn from './Pages/LogIn/LogIn';
import LandingPage from './Pages/LandingPage/LandingPage';
import './App.css';

const Layout = () =>{


  return(
    <div className="main">
      <ScrollTop />
      <Navbar />
      <Outlet/>
      <Footer />
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children:[
      {
        path:"/",
        element:<Home/>,
      },

      {
        path:"/landingPage",
        element:<LandingPage/>,
      },

      {
        path:"/signUp",
        element:<SignUp/>,
      },

      {
        path:"/logIn",
        element:<LogIn/>,
      },

     
    ]
  },

])

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />    
    </div>
  );
}

export default App;

