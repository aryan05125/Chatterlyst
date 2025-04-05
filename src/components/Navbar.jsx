// src/components/Navbar.jsx
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faSignInAlt, faUserPlus, faTachometerAlt, faUnlock } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  return (
    <nav className="bg-purple-700 text-white px-6 py-4 shadow-lg flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold tracking-wide">Moodify</Link>
      <div className="space-x-4">
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
    </nav>
  );
}
