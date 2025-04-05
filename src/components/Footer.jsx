// src/components/Footer.jsx
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-5 px-6 mt-10 shadow-inner">
      <div className="flex justify-between items-center flex-wrap text-sm">
        <p>&copy; 2025 MoodVerse. All rights reserved.</p>
        <div className="space-x-4 text-xl">
          <a href="https://facebook.com" target="_blank" rel="noreferrer"
            className="hover:text-blue-500 hover:drop-shadow-lg hover:scale-110 transition duration-300">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer"
            className="hover:text-pink-500 hover:drop-shadow-lg hover:scale-110 transition duration-300">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer"
            className="hover:text-sky-400 hover:drop-shadow-lg hover:scale-110 transition duration-300">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="https://wa.me" target="_blank" rel="noreferrer"
            className="hover:text-green-400 hover:drop-shadow-lg hover:scale-110 transition duration-300">
            <FontAwesomeIcon icon={faWhatsapp} />
          </a>
        </div>
      </div>
    </footer>
  );
}
