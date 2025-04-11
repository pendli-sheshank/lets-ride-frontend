// src/services/authService.js
import apiClient from './api'; // Import the configured axios instance

/**
 * Logs in a user.
 * @param {object} credentials - Object containing email and password.
 * @param {string} credentials.email - User's email.
 * @param {string} credentials.password - User's password.
 * @returns {Promise<object>} - Promise resolving to the response data (e.g., { token, user })
 */
export const loginUser = async (credentials) => {
  try {
    // Adjust the endpoint '/auth/login' if your backend uses a different path
    const response = await apiClient.post('/auth/login', credentials);
    // Assuming your backend returns data like { token: "...", user: {...} }
    // Adjust based on your actual backend response structure
    return response.data;
  } catch (error) {
    // Enhance error handling based on your backend's error structure
    console.error('Login API error:', error.response || error.message);
    const message = error.response?.data?.message || error.message || 'Login failed';
    throw new Error(message); // Re-throw a more specific error message
  }
};

/**
 * Registers a new user. (Placeholder for later)
 * @param {object} userData - Object containing user registration details.
 * @returns {Promise<object>}
 */
export const registerUser = async (userData) => {
  try {
    // Adjust endpoint and data structure as needed for your register API
    // const response = await apiClient.post('/auth/register', userData);
    // return response.data;
    console.log('Register function called with:', userData);
    // Replace with actual API call later
    await new Promise(resolve => setTimeout(resolve, 500));
    return { message: 'Registration successful (placeholder)' };
  } catch (error) {
    console.error('Register API error:', error.response || error.message);
    const message = error.response?.data?.message || error.message || 'Registration failed';
    throw new Error(message);
  }
};

// Add other auth-related functions here later (e.g., logout, getCurrentUser)