// src/services/api.js
import axios from 'axios';

// Retrieve the base URL from environment variables
// Make sure you have VITE_API_BASE_URL defined in your .env file
const apiBaseUrl = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080/api';
// Using http://localhost:8080/api as a fallback for local dev if .env is not set

const apiClient = axios.create({
  baseURL: apiBaseUrl,
  headers: {
    'Content-Type': 'application/json',
    // You can add other default headers here if needed
  },
});

// Optional: Add interceptors for handling requests or responses globally
// For example, automatically adding the auth token to headers
// apiClient.interceptors.request.use(config => {
//   const token = localStorage.getItem('authToken');
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }
//   return config;
// }, error => {
//   return Promise.reject(error);
// });

export default apiClient;