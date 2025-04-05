// src/pages/ChatGroups.jsx
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSmile,
  faSadTear,
  faGrinStars,
  faAngry,
  faComments,
} from "@fortawesome/free-solid-svg-icons";

const chatGroups = [
  {
    name: "Happy Vibes",
    icon: faSmile,
    color: "bg-yellow-100",
    mood: "Happy",
  },
  {
    name: "Feeling Blue",
    icon: faSadTear,
    color: "bg-blue-100",
    mood: "Sad",
  },
  {
    name: "Excited Souls",
    icon: faGrinStars,
    color: "bg-pink-100",
    mood: "Excited",
  },
  {
    name: "Angry Arena",
    icon: faAngry,
    color: "bg-red-100",
    mood: "Angry",
  },
];

export default function ChatGroups() {
  return (
    <div className="min-h-screen bg-gradient-to-tr from-white to-blue-50 p-6">
      <h1 className="text-3xl sm:text-4xl font-bold text-center text-indigo-700 mb-10 animate-bounce">
        <FontAwesomeIcon icon={faComments} className="mr-2" />
        Join a Mood Group Chat
      </h1>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {chatGroups.map((group, index) => (
          <div
            key={index}
            className={`rounded-2xl shadow-xl p-6 transition-transform hover:scale-105 hover:shadow-2xl ${group.color}`}
          >
            <div className="text-4xl text-indigo-600 mb-4">
              <FontAwesomeIcon icon={group.icon} />
            </div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              {group.name}
            </h2>
            <p className="text-gray-600 mb-4">
              Chat with people feeling {group.mood.toLowerCase()}!
            </p>
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-full font-medium hover:bg-indigo-700 transition">
              Join Group
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
