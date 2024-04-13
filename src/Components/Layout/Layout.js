// Layout.js
import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';
import Header from '../Header/Header';
import ScrollTop from '../Scrolltop'; // Import the ScrollTop component
import './Layout.css';

const Layout = () => {
  const location = useLocation();
  const hideSidebarAndHeader = ['/', '/signup', '/login'].includes(location.pathname.toLowerCase());

  return (
    <div className="layout">
      <ScrollTop /> {/* Render the ScrollTop component */}
      {!hideSidebarAndHeader && <Sidebar />}
      <div className="page-content">
        {!hideSidebarAndHeader && <Header />}
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;

