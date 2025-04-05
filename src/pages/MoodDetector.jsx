// src/pages/MoodDetector.jsx
import { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSmile,
  faAngry,
  faSadTear,
  faGrinStars,
  faCamera,
} from "@fortawesome/free-solid-svg-icons";

export default function MoodDetector() {
  const videoRef = useRef(null);
  const [isScanning, setIsScanning] = useState(false);
  const [mood, setMood] = useState("");

  useEffect(() => {
    if (isScanning) {
      startCamera();
    }
  }, [isScanning]);

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      videoRef.current.srcObject = stream;
    } catch (err) {
      console.error("Camera access denied", err);
    }
  };

  const handleScan = () => {
    // TODO: Connect to backend / ML logic here
    const mockMoods = ["Happy", "Sad", "Excited", "Angry"];
    const randomMood = mockMoods[Math.floor(Math.random() * mockMoods.length)];
    setMood(randomMood);
  };

  const getMoodIcon = (mood) => {
    switch (mood) {
      case "Happy":
        return faSmile;
      case "Sad":
        return faSadTear;
      case "Angry":
        return faAngry;
      case "Excited":
        return faGrinStars;
      default:
        return faSmile;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-bl from-pink-100 to-blue-100 text-gray-800 flex flex-col items-center py-10 px-4">
      <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-indigo-700 animate-pulse">
        Scan Your Mood 🎭
      </h1>

      {/* Camera Preview */}
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-4 mb-6">
        <video
          ref={videoRef}
          autoPlay
          playsInline
          className="rounded-md border border-gray-300 w-full h-64 object-cover"
        />
      </div>

      {/* Buttons */}
      {!isScanning ? (
        <button
          onClick={() => setIsScanning(true)}
          className="bg-indigo-600 text-white px-6 py-3 rounded-full font-semibold text-lg hover:bg-indigo-700 hover:scale-105 transition duration-300 shadow-lg"
        >
          <FontAwesomeIcon icon={faCamera} className="mr-2" />
          Start Scanning
        </button>
      ) : (
        <button
          onClick={handleScan}
          className="bg-purple-600 text-white px-6 py-3 rounded-full font-semibold text-lg hover:bg-purple-700 hover:scale-105 transition duration-300 shadow-lg"
        >
          Detect Mood Again
        </button>
      )}

      {/* Detected Mood Result */}
      {mood && (
        <div className="mt-8 text-center">
          <FontAwesomeIcon
            icon={getMoodIcon(mood)}
            className="text-6xl text-yellow-500 animate-bounce mb-3"
          />
          <h2 className="text-2xl font-bold text-indigo-800">
            You are feeling: <span className="text-pink-600">{mood}</span>
          </h2>
        </div>
      )}
    </div>
  );
}
