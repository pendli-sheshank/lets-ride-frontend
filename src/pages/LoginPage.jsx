// src/pages/LoginPage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { loginUser } from '../services/authService'; // Import the login function
// We will import an Auth Context hook later
// import { useAuth } from '../context/AuthContext';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate(); // Initialize useNavigate
  // const { login } = useAuth(); // Get login function from context later

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');
    setLoading(true);

    if (!email || !password) {
      setError('Please enter both email and password.');
      setLoading(false);
      return;
    }

    try {
      // --- Make the actual API Call ---
      console.log('Attempting login with:', { email }); // Don't log password
      const responseData = await loginUser({ email, password });
      console.log('Login successful:', responseData);

      // --- Handle Successful Login (Next Steps) ---
      // 1. Store the token (e.g., JWT) securely
      //    Example: localStorage.setItem('authToken', responseData.token);
      if (responseData.token) {
         localStorage.setItem('authToken', responseData.token); // Example: Store token
         console.log("Token stored in localStorage");

         // 2. Update global application state (using Context/Redux/Zustand)
         //    Example: login(responseData.user, responseData.token); // Call context function later

         // 3. Redirect to the dashboard or appropriate page
         navigate('/dashboard'); // Redirect on success!

      } else {
         // Handle cases where backend might succeed but not return a token?
         setError('Login succeeded but no token received.');
      }
      // --- End Handle Success ---

    } catch (err) {
      // Error is already processed in authService, just display it
      console.error('Login failed:', err.message);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // ... (keep the form structure the same as before) ...
  // Remember to import Link from react-router-dom for the register link
  // Replace <a href="/register"> with <Link to="/register">

  return (
     // ... JSX for the form ...
     // Make sure to replace the simple anchor tag for registration:
     <p style={{marginTop: '15px'}}>
        Don't have an account?{' '}
        <Link to="/register">Register here</Link> {/* Use Link component */}
     </p>
     // ... rest of the form JSX ...
  );
};

export default LoginPage;