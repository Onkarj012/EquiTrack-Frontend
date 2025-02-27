import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import DashboardPage from "./pages/Dashboard";
import PortfolioPage from "./pages/Portfolio";
import Analysis from "./pages/Analysis";
import Transaction from "./pages/Transactions";
import Login from "./pages/Login"; // Import Login Page

const App = () => {
  return (
    <Router>
      <div className="pt-16 min-h-screen bg-gray-900 text-white font-lexend">
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/analysis" element={<Analysis />} />
          <Route path="/transactions" element={<Transaction />} />
          <Route path="/login" element={<Login />} /> {/* Add Login Route */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
