// src/pages/SignupPage.jsx
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faEnvelope,
  faLock,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function SignupPage() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignup = (e) => {
    e.preventDefault();
    alert(`Signing up with:\n${JSON.stringify(formData, null, 2)}`);
    // API call logic will go here
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-200 to-pink-300 px-4">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-8 animate-fade-in">
        <h2 className="text-3xl font-bold text-center text-purple-700 mb-6 flex items-center justify-center gap-2">
          <FontAwesomeIcon icon={faUserPlus} />
          Create Your Account
        </h2>

        <form onSubmit={handleSignup} className="space-y-5">
          {/* Username */}
          <div className="flex items-center border-b-2 border-purple-300 py-2">
            <FontAwesomeIcon icon={faUser} className="text-purple-500 mr-3" />
            <input
              type="text"
              name="username"
              placeholder="Username"
              required
              value={formData.username}
              onChange={handleChange}
              className="w-full outline-none bg-transparent text-gray-700"
            />
          </div>

          {/* Email */}
          <div className="flex items-center border-b-2 border-purple-300 py-2">
            <FontAwesomeIcon icon={faEnvelope} className="text-purple-500 mr-3" />
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full outline-none bg-transparent text-gray-700"
            />
          </div>

          {/* Password */}
          <div className="flex items-center border-b-2 border-purple-300 py-2">
            <FontAwesomeIcon icon={faLock} className="text-purple-500 mr-3" />
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
              value={formData.password}
              onChange={handleChange}
              className="w-full outline-none bg-transparent text-gray-700"
            />
          </div>

          {/* Signup Button */}
          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-full font-semibold transition"
          >
            Sign Up
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-4">
          Already have an account?{" "}
          <a href="/login" className="text-purple-600 font-medium hover:underline">
            Login here
          </a>
        </p>
      </div>
    </div>
  );
}
