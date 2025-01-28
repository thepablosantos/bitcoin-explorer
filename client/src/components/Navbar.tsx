import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white p-4 flex justify-between items-center shadow-md">
      <h1 className="text-xl font-bold">Bitcoin Explorer</h1>
      <div className="space-x-6">
        <Link to="/" className="hover:text-gray-400">Dashboard</Link>
        <Link to="/wallet" className="hover:text-gray-400">Wallet</Link>
        <Link to="/mining" className="hover:text-gray-400">Mining</Link>
        <Link to="/explorer" className="hover:text-gray-400">Explorer</Link>
      </div>
    </nav>
  );
};

export default Navbar;
