import React, { useState } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  useNavigate
} from "react-router-dom";
import ScrollTop from './Components/Scrolltop';
import Navbar from './Components/Navbar/Navbar';
import SignUp from './Pages/SignUp/SignUp';
import LogIn from './Pages/LogIn/LogIn';
import LandingPage from './Pages/LandingPage/LandingPage';
import Dashboard from "./Pages/Dashboard/Dashboard";
import './App.css';

// Create a context for managing authentication state
const AuthContext = React.createContext();

const Layout = () =>{
  return(
    <div className="main">
      <ScrollTop />
      <Navbar />
      <Outlet/>
    </div>
  )
}

const PrivateRoute = ({ element, ...rest }) => {
  const { isAuthenticated } = React.useContext(AuthContext);
  const navigate = useNavigate();

  // Redirect to login if not authenticated
  if (!isAuthenticated) {
    navigate("/logIn");
    return null;
  }

  return React.cloneElement(element, { ...rest });
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children:[
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/dashboard",
        element: <PrivateRoute element={<Dashboard />} />,
      },
      {
        path: "/signUp",
        element: <SignUp />,
      },
      {
        path: "/logIn",
        element: <LogIn />,
      },
    ]
  },
]);

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Define functions for handling authentication
  const login = () => {
    // Perform authentication logic
    setIsAuthenticated(true);
  };

  const logout = () => {
    // Perform logout logic
    setIsAuthenticated(false);
  };

  return (
    <div className="App">
      <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
        <RouterProvider router={router} />
      </AuthContext.Provider>
    </div>
  );
}

export default App;
