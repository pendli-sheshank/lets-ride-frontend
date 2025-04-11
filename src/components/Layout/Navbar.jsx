// src/components/Layout/Navbar.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
// Adjust the relative path to go up from 'Layout' and into 'styles'
import styles from '../../styles/components/Navbar.module.css';

const Navbar = () => {
  const getNavLinkClass = ({ isActive }) => {
    return isActive ? `${styles.navLink} ${styles.activeNavLink}` : styles.navLink;
  };

  return (
    <nav className={styles.navbar}>
     <NavLink to="/" className={styles.logo}> {/* Use styles.logo */}
        Let's Ride
      </NavLink>
      <NavLink to="/" className={getNavLinkClass}>Home</NavLink>
      <NavLink to="/dashboard" className={getNavLinkClass}>Dashboard</NavLink>
      {/* Add conditional links based on login status later */}
      <NavLink to="/login" className={getNavLinkClass}>Login</NavLink>
      <NavLink to="/register" className={getNavLinkClass}>Register</NavLink>           
    </nav>
  );
};

export default Navbar;