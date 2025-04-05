// src/pages/HomePage.jsx
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSmile,
  faRobot,
  faGamepad,
  faVideo,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 text-gray-800 px-6 py-10">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 animate-bounce text-indigo-700">
          Welcome to MoodVerse 🎭
        </h1>
        <p className="text-lg text-gray-600">
          Scan your mood, chat, play, and connect with the world 🌐
        </p>
      </div>

      {/* Mood Scanner Button */}
      <div className="flex justify-center mb-10">
        <button className="bg-indigo-600 text-white px-6 py-3 rounded-full font-semibold text-lg hover:bg-indigo-700 hover:scale-105 transition transform duration-300 shadow-lg">
          <FontAwesomeIcon icon={faSmile} className="mr-2" />
          Start Mood Scan
        </button>
      </div>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <FeatureCard
          icon={faUsers}
          title="Join Chat Groups"
          description="Talk with people of similar mood instantly."
        />
        <FeatureCard
          icon={faGamepad}
          title="Play Mini-Games"
          description="Play fun games alone or with friends."
        />
        <FeatureCard
          icon={faVideo}
          title="Video Calls"
          description="Start a face-to-face call with your mood match."
        />
        <FeatureCard
          icon={faRobot}
          title="AI Mood Bot"
          description="Smart suggestions based on your emotion."
        />
        <FeatureCard
          icon={faSmile}
          title="Mood Based Avatar"
          description="Avatar changes with your emotion!"
        />
      </div>
    </div>
  );
}

// FeatureCard Component
function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl hover:scale-105 transition-all duration-300">
      <div className="text-4xl text-indigo-600 mb-4">
        <FontAwesomeIcon icon={icon} />
      </div>
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
}
