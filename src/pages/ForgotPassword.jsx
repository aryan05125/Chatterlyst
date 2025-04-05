// src/pages/ForgotPassword.jsx
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelopeOpenText, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Reset link sent to: ${email}`);
    // API call to send reset email
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-yellow-200 to-orange-300 px-4">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-8 animate-fade-in">
        <h2 className="text-2xl font-bold text-center text-orange-600 mb-6 flex items-center justify-center gap-2">
          <FontAwesomeIcon icon={faEnvelopeOpenText} />
          Forgot Password
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="flex items-center border-b-2 border-orange-300 py-2">
            <FontAwesomeIcon icon={faEnvelopeOpenText} className="text-orange-500 mr-3" />
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
              className="w-full outline-none bg-transparent text-gray-700"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-full font-semibold transition"
          >
            <FontAwesomeIcon icon={faPaperPlane} className="mr-2" />
            Send Reset Link
          </button>
        </form>
      </div>
    </div>
  );
}
