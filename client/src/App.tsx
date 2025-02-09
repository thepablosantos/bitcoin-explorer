import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Dashboard from './pages/Dashboard';
import Wallet from './pages/Wallet';
import Mining from './pages/Mining';
import Explorer from './pages/Explorer';

function App() {
  return (
    <BrowserRouter>
      {/* Flex container para que o Footer fique no final */}
      <div className="flex flex-col min-h-screen bg-gray-900 text-white">
        <Navbar />
        {/* Espaço para não ficar atrás da navbar fixa */}
        <div className="pt-16 flex-grow">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/wallet" element={<Wallet />} />
            <Route path="/mining" element={<Mining />} />
            <Route path="/explorer" element={<Explorer />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
