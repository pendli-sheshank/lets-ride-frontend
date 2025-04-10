// src/App.jsx
import { Routes, Route, Link } from 'react-router-dom'; // Import routing components
import './App.css';

// Import page components
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import DashboardPage from './pages/DashboardPage';

function App() {
  return (
    <div>
      {/* Basic Navigation (temporary) */}
      <nav>
        <Link to="/">Home</Link> |{' '}
        <Link to="/login">Login</Link> |{' '}
        <Link to="/register">Register</Link> |{' '}
        <Link to="/dashboard">Dashboard</Link>
      </nav>
      <hr />

      {/* Define Routes */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        {/* Add other routes here later (e.g., for posting/Browse trips) */}
      </Routes>
    </div>
  );
}

export default App;