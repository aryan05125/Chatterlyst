// src/pages/VideoCallPage.jsx
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMicrophone,
  faVideo,
  faPhoneSlash,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

export default function VideoCallPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-indigo-100 flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold text-indigo-700 mb-6 animate-pulse">
        <FontAwesomeIcon icon={faVideo} className="mr-2" />
        Live Video Call
      </h1>

      {/* Video Box */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
        <div className="bg-black w-72 h-48 sm:w-96 sm:h-56 rounded-2xl overflow-hidden shadow-lg relative flex items-center justify-center">
          <FontAwesomeIcon icon={faUser} className="text-white text-6xl opacity-40" />
          <p className="absolute bottom-2 left-2 text-white text-sm font-medium">You</p>
        </div>
        <div className="bg-black w-72 h-48 sm:w-96 sm:h-56 rounded-2xl overflow-hidden shadow-lg relative flex items-center justify-center">
          <FontAwesomeIcon icon={faUser} className="text-white text-6xl opacity-40" />
          <p className="absolute bottom-2 left-2 text-white text-sm font-medium">Friend</p>
        </div>
      </div>

      {/* Controls */}
      <div className="flex gap-6">
        <button className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:scale-110 transition">
          <FontAwesomeIcon icon={faMicrophone} />
        </button>
        <button className="bg-blue-500 text-white p-4 rounded-full shadow-lg hover:scale-110 transition">
          <FontAwesomeIcon icon={faVideo} />
        </button>
        <button className="bg-red-600 text-white p-4 rounded-full shadow-lg hover:scale-110 transition animate-bounce">
          <FontAwesomeIcon icon={faPhoneSlash} />
        </button>
      </div>
    </div>
  );
}
