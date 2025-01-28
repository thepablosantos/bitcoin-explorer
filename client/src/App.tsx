import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Dashboard from "./pages/Dashboard";
import Wallet from "./pages/Wallet";
import Mining from "./pages/Mining";
import Explorer from "./pages/Explorer";

const App = () => {
  return (
    <Router>
      <div className="bg-gray-800 text-white min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow p-6">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/wallet" element={<Wallet />} />
            <Route path="/mining" element={<Mining />} />
            <Route path="/explorer" element={<Explorer />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
