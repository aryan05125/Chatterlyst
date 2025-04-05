import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faSignInAlt,
  faUserPlus,
  faTachometerAlt,
  faUnlock,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-purple-700 text-white px-6 py-4 shadow-lg">
      <div className="flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold tracking-wide">
          Moodify
        </Link>

        {/* Hamburger Icon */}
        <button
          className="md:hidden text-white text-xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-4">
          <Link to="/" className="hover:text-yellow-300">
            <FontAwesomeIcon icon={faHome} /> Home
          </Link>
          <Link to="/login" className="hover:text-yellow-300">
            <FontAwesomeIcon icon={faSignInAlt} /> Login
          </Link>
          <Link to="/signup" className="hover:text-yellow-300">
            <FontAwesomeIcon icon={faUserPlus} /> Signup
          </Link>
          <Link to="/forgot-password" className="hover:text-yellow-300">
            <FontAwesomeIcon icon={faUnlock} /> Forgot
          </Link>
          <Link to="/dashboard" className="hover:text-yellow-300">
            <FontAwesomeIcon icon={faTachometerAlt} /> Dashboard
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mt-4 flex flex-col space-y-2">
          <Link to="/" className="hover:text-yellow-300" onClick={() => setMenuOpen(false)}>
            <FontAwesomeIcon icon={faHome} /> Home
          </Link>
          <Link to="/login" className="hover:text-yellow-300" onClick={() => setMenuOpen(false)}>
            <FontAwesomeIcon icon={faSignInAlt} /> Login
          </Link>
          <Link to="/signup" className="hover:text-yellow-300" onClick={() => setMenuOpen(false)}>
            <FontAwesomeIcon icon={faUserPlus} /> Signup
          </Link>
          <Link to="/forgot-password" className="hover:text-yellow-300" onClick={() => setMenuOpen(false)}>
            <FontAwesomeIcon icon={faUnlock} /> Forgot
          </Link>
          <Link to="/dashboard" className="hover:text-yellow-300" onClick={() => setMenuOpen(false)}>
            <FontAwesomeIcon icon={faTachometerAlt} /> Dashboard
          </Link>
        </div>
      )}
    </nav>
  );
}
