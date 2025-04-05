// src/pages/ChatRoom.jsx
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPaperPlane,
  faUserCircle,
  faComments,
} from "@fortawesome/free-solid-svg-icons";

export default function ChatRoom() {
  const [messages, setMessages] = useState([
    { id: 1, user: "Aryan", text: "Hey! How are you feeling today?", isMe: true },
    { id: 2, user: "Yogesh", text: "A little happy, just scanned 😄", isMe: false },
  ]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;
    const newMessage = {
      id: Date.now(),
      user: "You",
      text: input,
      isMe: true,
    };
    setMessages([...messages, newMessage]);
    setInput("");
    // TODO: Socket emit here later
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 p-4 flex flex-col">
      <h1 className="text-3xl font-bold text-center text-indigo-700 mb-4">
        <FontAwesomeIcon icon={faComments} className="mr-2" />
        Mood Chat Room
      </h1>

      <div className="flex-1 overflow-y-auto mb-4 space-y-4 px-2 sm:px-8">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${msg.isMe ? "justify-end" : "justify-start"}`}
          >
            {!msg.isMe && (
              <FontAwesomeIcon
                icon={faUserCircle}
                className="text-3xl text-indigo-600 mr-2"
              />
            )}
            <div
              className={`px-4 py-2 rounded-xl max-w-xs sm:max-w-md ${
                msg.isMe
                  ? "bg-indigo-600 text-white rounded-br-none"
                  : "bg-white text-gray-800 rounded-bl-none"
              } shadow-md`}
            >
              <p className="text-sm font-medium">{msg.user}</p>
              <p>{msg.text}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Chat Input */}
      <div className="flex items-center gap-2 p-2 border-t bg-white rounded-xl shadow-lg">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
          className="flex-1 px-4 py-2 rounded-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />
        <button
          onClick={sendMessage}
          className="bg-indigo-600 text-white px-4 py-2 rounded-full hover:bg-indigo-700 transition"
        >
          <FontAwesomeIcon icon={faPaperPlane} />
        </button>
      </div>
    </div>
  );
}
