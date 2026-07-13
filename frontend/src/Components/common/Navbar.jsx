// src/components/Navbar.jsx
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import {
  FaPiggyBank,
  FaInfoCircle,
  FaHandshake,
  FaEnvelopeOpenText,
  FaRss,
} from "react-icons/fa";
import { useAuth } from "../../context/AuthContext";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const { isAuthenticated, logout } = useAuth();

  const navItems = [
    { name: "Services", path: "/services", icon: <FaHandshake size={18} /> },
    { name: "Contact", path: "/contact", icon: <FaEnvelopeOpenText size={18} /> },
    { name: "BlogPage", path: "/blogs", icon: <FaRss size={18} /> },
    ...(isAuthenticated
      ? [{ name: "Dashboard", path: "/dashboard", icon: <FaInfoCircle size={18} /> }]
      : []),
  ];

  return (
    <nav className="backdrop-blur-md bg-slate-900/80 border-b border-slate-800 fixed w-full top-0 left-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 text-xl font-semibold text-white hover:text-cyan-400 transition-all"
        >
          <FaPiggyBank size={22} className="text-cyan-400" />
          <h5 className="text-2xl font-extrabold">
            Smart<span className="text-teal-400">Expend</span>
          </h5>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 items-center">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                to={item.path}
                className={`flex items-center gap-2 font-medium transition-all duration-200 hover:text-cyan-400 ${
                  location.pathname === item.path
                    ? "text-cyan-400"
                    : "text-slate-200"
                }`}
              >
                {item.icon}
                {item.name}
              </Link>
            </li>
          ))}

          {!isAuthenticated ? (
            <Link
              to="/signup"
              className="ml-6 bg-cyan-500 text-slate-900 px-4 py-2 rounded-full hover:bg-cyan-400 transition-all duration-200"
            >
              Get Started
            </Link>
          ) : (
            <button
              onClick={logout}
              className="ml-6 bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-400 transition-all duration-200"
            >
              Logout
            </button>
          )}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-slate-200 hover:text-cyan-400 transition"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <ul className="md:hidden bg-slate-900/95 backdrop-blur-md shadow-lg flex flex-col items-center space-y-5 py-6 border-t border-slate-800">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                to={item.path}
                onClick={() => setMenuOpen(false)}
                className={`flex items-center gap-2 text-lg font-medium transition-all duration-200 hover:text-cyan-400 ${
                  location.pathname === item.path
                    ? "text-cyan-400"
                    : "text-slate-200"
                }`}
              >
                {item.icon}
                {item.name}
              </Link>
            </li>
          ))}

          {!isAuthenticated ? (
            <Link
              to="/signup"
              onClick={() => setMenuOpen(false)}
              className="bg-cyan-500 text-slate-900 px-5 py-2 rounded-full hover:bg-cyan-400 transition-all duration-200"
            >
              Get Started
            </Link>
          ) : (
            <button
              onClick={() => {
                logout();
                setMenuOpen(false);
              }}
              className="bg-red-500 text-white px-5 py-2 rounded-full hover:bg-red-400 transition-all duration-200"
            >
              Logout
            </button>
          )}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
