// src/App.jsx
import { Routes, Route } from 'react-router-dom'; // Remove Link if Navbar handles it
import './App.css';

// Import Layout component
import Layout from './components/Layout/Layout';

// Import page components
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import DashboardPage from './pages/DashboardPage';
// Import other pages later...
// import PostTripPage from './pages/PostTripPage';
// import BrowseTripsPage from './pages/BrowseTripsPage';

function App() {
  return (
    <Routes>
      {/* Wrap page routes within the Layout route */}
      <Route path="/" element={<Layout />}>
        {/* Child routes rendered via <Outlet> in Layout */}
        <Route index element={<HomePage />} /> {/* index route for '/' */}
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="dashboard" element={<DashboardPage />} />
        {/* <Route path="post-trip" element={<PostTripPage />} /> */}
        {/* <Route path="browse-trips" element={<BrowseTripsPage />} /> */}

        {/* Add a catch-all route for 404 Not Found */}
        <Route path="*" element={<h2>Page Not Found</h2>} />
      </Route>
    </Routes>
  );
}

export default App;