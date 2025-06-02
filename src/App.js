import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/auth/LoginPage';
import LandingPage from './pages/renterPages/LandingPage';
import RegisterPage from './pages/renterPages/RegisterPage';
import HomePage from './pages/renterPages/HomePage';

import TraderRegisterPage from './pages/tradePages/TraderRegisterPage';
import TraderHomePage from './pages/tradePages/TraderHomePage';

function App() {
  return (
    <Router>
      <Routes>
        {/* Auth Routes */}
        <Route path="/login" element={<LoginPage />} />

        {/* Renter Routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/home" element={<HomePage />} />

        {/* Trader Routes */}
        <Route path="/trader/register" element={<TraderRegisterPage />} />
        <Route path="/trader/home" element={<TraderHomePage />} />
        
      </Routes>
    </Router>
  );
}

export default App;
