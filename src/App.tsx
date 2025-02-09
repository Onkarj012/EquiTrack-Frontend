import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import DashboardPage from "./pages/Dashboard";
import PortfolioPage from "./pages/Portfolio";
import Analysis from "./pages/Analysis";
import Transaction from "./pages/Transactions";

const App = () => {
  return (
    <Router>
      <Navbar />

      <div className="pt-16 min-h-screen bg-gray-900 text-white font-lexend">
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/analysis" element={<Analysis />} />
          <Route path="/transactions" element={<Transaction />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
