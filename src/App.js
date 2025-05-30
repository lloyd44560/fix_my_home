import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/renterPages/LandingPage';
import LoginPage from './pages/renterPages/LoginPage';
import RegisterPage from './pages/renterPages/RegisterPage';
import HomePage from './pages/renterPages/HomePage';

import TraderLoginPage from './pages/tradePages/TraderLoginPage';
import TraderRegisterPage from './pages/tradePages/TraderRegisterPage';
import TraderHomePage from './pages/tradePages/TraderHomePage';

function App() {
  return (
    <Router>
      <Routes>
        {/* Renter Routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/home" element={<HomePage />} />
        {/* Trader Routes */}
        <Route path="/trader/login" element={<TraderLoginPage />} />
        <Route path="/trader/register" element={<TraderRegisterPage />} />
        <Route path="/trader/home" element={<TraderHomePage />} />
        
      </Routes>
    </Router>
  );
}

export default App;
