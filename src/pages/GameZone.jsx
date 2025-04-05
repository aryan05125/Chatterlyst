// src/pages/GameZone.jsx
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGamepad,
  faHandRock,
  faBrain,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

export default function GameZone() {
  const navigate = useNavigate();

  const games = [
    {
      title: "Rock Paper Scissors",
      icon: faHandRock,
      bg: "from-yellow-400 to-orange-500",
    },
    {
      title: "Tic Tac Toe",
      icon: faTimes,
      bg: "from-pink-500 to-red-400",
    },
    {
      title: "Memory Match",
      icon: faBrain,
      bg: "from-green-400 to-lime-500",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-indigo-100 p-6">
      <h1 className="text-4xl font-bold text-center text-indigo-700 mb-8 animate-pulse">
        <FontAwesomeIcon icon={faGamepad} className="mr-3" />
        Game Zone
      </h1>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {games.map((game, index) => (
          <div
            key={index}
            onClick={() => navigate(`/game/${game.title.replace(/\s/g, "").toLowerCase()}`)}
            className={`bg-gradient-to-br ${game.bg} rounded-2xl p-6 shadow-xl transform hover:scale-105 transition cursor-pointer flex flex-col items-center justify-center text-white`}
          >
            <FontAwesomeIcon icon={game.icon} className="text-5xl mb-4" />
            <h2 className="text-xl font-semibold">{game.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}
