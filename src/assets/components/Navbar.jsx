import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useUser } from "../components/Authentication/UserContext";
import { Home, Package, Info, Phone, User, Bell, Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import logoImage from "../../assets/img/servicelogo.svg";

const Navbar = () => {
  const { user, setUser } = useUser();
  const [userProfile, setUserProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (user?.token) {
      setLoading(true);
      fetch("https://servicehub-api.onrender.com/users/me", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          setUserProfile(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching user profile:", error);
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, [user]);

  useEffect(() => {
    setIsMenuOpen(false); // Auto close on route change
  }, [location.pathname]);

  const handleLogout = () => {
    setUser(null);
    localStorage.clear();
    navigate("/login");
  };

  const navItems = [
    { to: "/", icon: <Home className="w-5 h-5" />, label: "Home" },
    { to: "/services", icon: <Package className="w-5 h-5" />, label: "Services" },
    { to: "/aboutus", icon: <Info className="w-5 h-5" />, label: "About" },
    { to: "/contact", icon: <Phone className="w-5 h-5" />, label: "Contact" },
  ];

  return (
    <motion.nav
      className="bg-green-900/90 backdrop-blur-md text-white fixed w-full z-50 shadow-md"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 120, damping: 20 }}
    >
      <div className="max-w-screen-xl mx-auto flex flex-wrap items-center justify-between px-4 py-3">
        {/* Logo Section */}
        <motion.div
          className="flex items-center gap-2 cursor-pointer"
          whileHover={{ rotate: [0, -5, 5, -5, 0] }}
          transition={{ duration: 0.5 }}
        >
          <img src={logoImage} alt="Logo" className="w-10 h-10" />
          <Link
            to="/"
            className="text-2xl font-bold text-white hover:text-lime-400 transition"
          >
            Service Hub
          </Link>
        </motion.div>

        {/* Hamburger Button */}
        <button
          className="md:hidden text-white bg-green-700 p-2 rounded-md"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-6 items-center justify-center">
          {navItems.map(({ to, icon, label }) => (
            <Link
              key={label}
              to={to}
              className={`flex items-center gap-2 text-sm hover:text-green-300 transition ${
                location.pathname === to ? "text-green-300 font-medium" : ""
              }`}
            >
              {icon}
              <span>{label}</span>
            </Link>
          ))}
        </div>

        {/* Desktop Profile/Auth */}
        <div className="hidden md:flex items-center gap-4 justify-center">
          <div className="relative">
            <Bell className="w-5 h-5 hover:text-green-300" />
            <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full animate-ping" />
          </div>
          {user ? (
            <div className="flex items-center gap-3">
              <span className="text-sm">{userProfile?.name || user.name}</span>
              <Link to="/profile">
                <User className="w-6 h-6 hover:text-green-300" />
              </Link>
              <button
                onClick={handleLogout}
                className="bg-green-700 hover:bg-green-800 px-4 py-1 rounded-md text-sm text-white"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="flex gap-3 justify-center items-center">
              <Link to="/login" className="hover:text-green-300 text-sm">
                Login
              </Link>
              <Link
                to="/signup"
                className="bg-lime-500 hover:bg-lime-600 text-white font-bold px-4 py-2 rounded-full shadow-md"
              >
                Sign Up
              </Link>
            </div>
          )}
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="w-full mt-4 md:hidden flex flex-col gap-4 bg-green-800/95 p-4 rounded-lg shadow-lg">
            {navItems.map(({ to, icon, label }) => (
              <Link
                key={label}
                to={to}
                className={`flex items-center gap-3 p-2 rounded hover:bg-green-700 ${
                  location.pathname === to ? "bg-green-700" : ""
                }`}
              >
                {icon}
                {label}
              </Link>
            ))}
            <div className="border-t border-green-600 pt-4">
              {user ? (
                <>
                  <div className="flex items-center gap-2 mb-2">
                    <User className="w-5 h-5" />
                    <span>{userProfile?.name || user.name}</span>
                  </div>
                  <button
                    onClick={handleLogout}
                    className="w-full bg-green-700 hover:bg-green-800 text-white py-2 rounded-md"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <div className="flex flex-col gap-3">
                  <Link to="/login" className="text-center hover:text-green-300">
                    Login
                  </Link>
                  <Link
                    to="/signup"
                    className="bg-lime-500 hover:bg-lime-600 text-white font-bold py-2 rounded-full shadow-md text-center"
                  >
                    Sign Up
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
