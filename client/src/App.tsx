import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Importe suas páginas
import Dashboard from "./pages/Dashboard";
import Wallet from "./pages/Wallet";
import Mining from "./pages/Mining";
import Explorer from "./pages/Explorer";

function App() {
  return (
    <BrowserRouter>
      {/* Flex container pra o layout ocupar toda a tela */}
      <div className="flex flex-col min-h-screen bg-darkGray text-white">
        {/* Navbar fixa no topo */}
        <Navbar />

        {/* Espaço para não ficar encoberto pela navbar (que é fixed) */}
        <div className="pt-16 flex-grow">
          <main className="max-w-7xl mx-auto px-6 py-6">
            <Routes>
              <Route path="/Dashboard" element={<Dashboard />} />
              <Route path="/wallet" element={<Wallet />} />
              <Route path="/mining" element={<Mining />} />
              <Route path="/explorer" element={<Explorer />} />
            </Routes>
          </main>
        </div>

        {/* Footer no final */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
