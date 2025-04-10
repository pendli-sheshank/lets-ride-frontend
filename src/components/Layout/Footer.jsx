// src/components/Layout/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer style={{ marginTop: '50px', borderTop: '1px solid #ccc', paddingTop: '10px', textAlign: 'center' }}>
      <p>&copy; {new Date().getFullYear()} Let's Ride. All rights reserved.</p>
    </footer>
  );
};

export default Footer;