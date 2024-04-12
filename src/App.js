import React  from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import ScrollTop from './Components/Scrolltop'
import Navbar from './Components/Navbar/Navbar';
import './App.css';
import LandingPage from "./Pages/LandingPage/LandingPage";
import LogIn from "./Pages/LogIn/LogIn";
import SignUp from "./Pages/SignUp/SignUp";
import Dashboard from "./Pages/Dashboard/Dashboard";

const Layout = () =>{


  return(
    <div className="main">
      <ScrollTop />
      <Navbar />
      <Outlet/>
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
        element:<LandingPage/>,
      },

      {
        path:"/",
        element:<LandingPage/>,
      },

      {
        path:"/signUP",
        element:<SignUp/>,
      },

      {
        path:"/login",
        element:<LogIn/>,
      },

      {
        path:"/dashboard",
        element:<Dashboard/>,
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

