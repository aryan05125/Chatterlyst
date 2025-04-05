// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import ForgotPassword from "./pages/ForgotPassword"; // ✅ NEW
import Dashboard from "./pages/Dashboard";           // ✅ NEW
import MoodDetector from "./pages/MoodDetector";
import ChatGroups from "./pages/ChatGroups";
import ChatRoom from "./pages/ChatRoom";
import VideoCallPage from "./pages/VideoCallPage";
import GameZone from "./pages/GameZone";
import GamePage from "./pages/GamePage";
import ProfilePage from "./pages/ProfilePage";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/forgot-password" element={<ForgotPassword />} /> {/* ✅ */}
        <Route path="/dashboard" element={<Dashboard />} /> {/* ✅ */}
        <Route path="/mood" element={<MoodDetector />} />
        <Route path="/chat-groups" element={<ChatGroups />} />
        <Route path="/chat-room" element={<ChatRoom />} />
        <Route path="/video-call" element={<VideoCallPage />} />
        <Route path="/games" element={<GameZone />} />
        <Route path="/game-page" element={<GamePage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
      <Footer />
    </Router>
  );
}
