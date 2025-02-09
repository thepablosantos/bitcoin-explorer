import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-gray-900 text-white z-10 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo / Nome do Projeto */}
        <Link to="/" className="text-2xl font-bold tracking-tight hover:text-btcOrange transition">
          Bitcoin Explorer
        </Link>

        {/* Menu desktop */}
        <ul className="hidden md:flex space-x-6 text-lg font-medium">
          <li>
            <Link to="/" className="hover:text-btcOrange transition">Dashboard</Link>
          </li>
          <li>
            <Link to="/wallet" className="hover:text-btcOrange transition">Wallet</Link>
          </li>
          <li>
            <Link to="/mining" className="hover:text-btcOrange transition">Mining</Link>
          </li>
          <li>
            <Link to="/explorer" className="hover:text-btcOrange transition">Explorer</Link>
          </li>
        </ul>

        {/* Botão hamburger - Mobile */}
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)}>
            <div className="w-6 h-0.5 bg-white mb-1"></div>
            <div className="w-6 h-0.5 bg-white mb-1"></div>
            <div className="w-6 h-0.5 bg-white"></div>
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      {open && (
        <ul className="md:hidden bg-gray-800 px-6 pb-4 space-y-2">
          <li>
            <Link
              onClick={() => setOpen(false)}
              to="/"
              className="block py-2 border-b border-gray-700 hover:text-btcOrange"
            >
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setOpen(false)}
              to="/wallet"
              className="block py-2 border-b border-gray-700 hover:text-btcOrange"
            >
              Wallet
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setOpen(false)}
              to="/mining"
              className="block py-2 border-b border-gray-700 hover:text-btcOrange"
            >
              Mining
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setOpen(false)}
              to="/explorer"
              className="block py-2 hover:text-btcOrange"
            >
              Explorer
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
