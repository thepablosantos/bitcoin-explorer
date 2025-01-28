// src/components/Layout.tsx
import React from 'react';
import { NavLink } from 'react-router-dom';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white flex flex-col">
        <div className="p-4 text-2xl font-bold border-b border-gray-700">Bitcoin Explorer</div>
        <nav className="flex-grow p-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `block py-2 px-4 rounded-md ${isActive ? 'bg-gray-700' : 'hover:bg-gray-700'}`
            }
          >
            Dashboard
          </NavLink>
          <NavLink
            to="/wallet"
            className={({ isActive }) =>
              `block py-2 px-4 rounded-md ${isActive ? 'bg-gray-700' : 'hover:bg-gray-700'}`
            }
          >
            Wallet
          </NavLink>
          <NavLink
            to="/mining"
            className={({ isActive }) =>
              `block py-2 px-4 rounded-md ${isActive ? 'bg-gray-700' : 'hover:bg-gray-700'}`
            }
          >
            Mining
          </NavLink>
          <NavLink
            to="/explorer"
            className={({ isActive }) =>
              `block py-2 px-4 rounded-md ${isActive ? 'bg-gray-700' : 'hover:bg-gray-700'}`
            }
          >
            Explorer
          </NavLink>
        </nav>
        <footer className="p-4 border-t border-gray-700 text-sm">
          &copy; 2025 Bitcoin Explorer
        </footer>
      </aside>

      {/* Main Content */}
      <main className="flex-grow bg-gray-100 p-6 overflow-auto">
        {children}
      </main>
    </div>
  );
};

export default Layout;
