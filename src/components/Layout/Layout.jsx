// src/components/Layout/Layout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar'; // Import Navbar
import Footer from './Footer'; // Import Footer

const Layout = () => {
  return (
    <div>
      <Navbar /> {/* Use Navbar component */}
      <main style={{ padding: '20px' }}>
        <Outlet />
      </main>
      <Footer /> {/* Use Footer component */}
    </div>
  );
};

export default Layout;