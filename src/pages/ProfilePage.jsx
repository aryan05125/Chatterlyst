// src/pages/ProfilePage.jsx
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faSmile,
  faComments,
  faGamepad,
  faEdit,
  faSignOutAlt,
  faCamera,
} from "@fortawesome/free-solid-svg-icons";

export default function ProfilePage() {
  const user = {
    name: "Aryan",
    email: "aryan@example.com",
    bio: "Frontend Developer | Gamer | Mood Matcher 😎",
    moodHistory: ["😊 Happy", "😡 Angry", "😢 Sad", "😎 Chill"],
    chatCount: 154,
    gamesPlayed: 32,
    avatar: "https://i.pravatar.cc/150?img=12",
  };

  const handleLogout = () => {
    alert("Logout logic yaha aayega!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-100 to-indigo-200 py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl p-8">
        {/* Profile Picture */}
        <div className="flex flex-col items-center mb-6 relative">
          <img
            src={user.avatar}
            alt="profile"
            className="w-32 h-32 rounded-full object-cover border-4 border-indigo-500 shadow-lg"
          />
          <button className="absolute top-24 right-1 bg-indigo-600 text-white p-2 rounded-full shadow-md hover:bg-indigo-700 transition">
            <FontAwesomeIcon icon={faCamera} />
          </button>
          <h2 className="text-3xl font-bold text-indigo-700 mt-4 flex items-center gap-2">
            <FontAwesomeIcon icon={faUser} />
            {user.name}
          </h2>
          <p className="text-gray-600">{user.email}</p>
        </div>

        {/* Bio + Edit */}
        <div className="bg-indigo-100 p-4 rounded-xl text-center mb-6 shadow-inner">
          <p className="text-gray-700 italic">{user.bio}</p>
          <button className="mt-2 text-sm text-indigo-600 hover:underline flex items-center justify-center gap-1">
            <FontAwesomeIcon icon={faEdit} />
            Edit Bio
          </button>
        </div>

        {/* Stats Section */}
        <div className="grid sm:grid-cols-2 gap-6 text-center mb-8">
          <div className="bg-yellow-100 rounded-xl p-5 shadow hover:scale-105 transition">
            <FontAwesomeIcon icon={faSmile} className="text-3xl text-yellow-600 mb-2" />
            <h3 className="text-xl font-semibold text-gray-800">Mood History</h3>
            <ul className="mt-2 text-gray-700">
              {user.moodHistory.map((mood, i) => (
                <li key={i}>{mood}</li>
              ))}
            </ul>
          </div>

          <div className="bg-pink-100 rounded-xl p-5 shadow hover:scale-105 transition">
            <FontAwesomeIcon icon={faComments} className="text-3xl text-pink-600 mb-2" />
            <h3 className="text-xl font-semibold text-gray-800">Chats Joined</h3>
            <p className="text-2xl mt-2 text-gray-700">{user.chatCount}</p>
          </div>

          <div className="bg-green-100 rounded-xl p-5 shadow hover:scale-105 transition">
            <FontAwesomeIcon icon={faGamepad} className="text-3xl text-green-600 mb-2" />
            <h3 className="text-xl font-semibold text-gray-800">Games Played</h3>
            <p className="text-2xl mt-2 text-gray-700">{user.gamesPlayed}</p>
          </div>
        </div>

        {/* Logout */}
        <div className="text-center mt-4">
          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-full shadow-lg transition font-semibold flex items-center justify-center gap-2"
          >
            <FontAwesomeIcon icon={faSignOutAlt} />
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
