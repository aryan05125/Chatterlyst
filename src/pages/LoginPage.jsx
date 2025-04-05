// src/pages/LoginPage.jsx
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLock,
  faSignInAlt,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { loginUser } from "../utils/api";

export default function LoginPage() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await loginUser(form);
    setMessage(res.msg || res.detail || "Login attempt completed.");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-200 to-blue-300 px-4">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-8 animate-fade-in">
        <h2 className="text-3xl font-bold text-center text-indigo-700 mb-6 flex items-center justify-center gap-2">
          <FontAwesomeIcon icon={faSignInAlt} />
          Login to Moodify
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Email */}
          <div className="flex items-center border-b-2 border-indigo-300 py-2">
            <FontAwesomeIcon icon={faEnvelope} className="text-indigo-500 mr-3" />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full outline-none bg-transparent text-gray-700"
            />
          </div>

          {/* Password */}
          <div className="flex items-center border-b-2 border-indigo-300 py-2">
            <FontAwesomeIcon icon={faLock} className="text-indigo-500 mr-3" />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              required
              className="w-full outline-none bg-transparent text-gray-700"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-full font-semibold transition"
          >
            Login
          </button>
        </form>

        {message && (
          <p className="text-center text-sm text-red-600 mt-4">{message}</p>
        )}

        <p className="text-center text-sm text-gray-600 mt-4">
          Don’t have an account?{" "}
          <a href="/signup" className="text-indigo-600 font-medium hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}
