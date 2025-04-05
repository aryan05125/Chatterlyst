// src/pages/Dashboard.jsx
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSmile,
  faUsers,
  faGamepad,
  faVideo,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function Dashboard() {
  const features = [
    { icon: faSmile, label: "Mood Detector", path: "/mood" },
    { icon: faUsers, label: "Chat Groups", path: "/chat-groups" },
    { icon: faVideo, label: "Video Call", path: "/video-call" },
    { icon: faGamepad, label: "Game Zone", path: "/games" },
    { icon: faUserCircle, label: "Profile", path: "/profile" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 p-8">
      <h1 className="text-4xl font-bold text-center text-purple-700 mb-10">
        Welcome to Moodify Dashboard 🎉
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <Link
            to={feature.path}
            key={index}
            className="bg-white rounded-xl shadow-lg p-6 text-center hover:scale-105 transition transform duration-300 animate-fade-in"
          >
            <FontAwesomeIcon icon={feature.icon} className="text-purple-500 text-4xl mb-4" />
            <h3 className="text-xl font-semibold text-gray-700">{feature.label}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
}
