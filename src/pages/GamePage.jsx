// src/pages/GamePage.jsx
import { useParams, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHandRock,
  faTimes,
  faBrain,
  faPlayCircle,
} from "@fortawesome/free-solid-svg-icons";

const gameDetails = {
  rockpaperscissors: {
    title: "Rock Paper Scissors",
    icon: faHandRock,
    rules: [
      "Rock beats Scissors",
      "Scissors beats Paper",
      "Paper beats Rock",
    ],
    bg: "from-yellow-200 to-orange-200",
  },
  tictactoe: {
    title: "Tic Tac Toe",
    icon: faTimes,
    rules: [
      "2 Players take turns",
      "Make a line of 3 symbols",
      "First to complete a line wins",
    ],
    bg: "from-pink-200 to-red-200",
  },
  memorymatch: {
    title: "Memory Match",
    icon: faBrain,
    rules: [
      "Flip 2 cards at a time",
      "Find all matching pairs",
      "Complete in least tries",
    ],
    bg: "from-green-200 to-lime-200",
  },
};

export default function GamePage() {
  const { gameId } = useParams();
  const navigate = useNavigate();
  const game = gameDetails[gameId];

  if (!game) {
    return (
      <div className="text-center py-20 text-xl font-semibold text-red-600">
        Game not found!
      </div>
    );
  }

  return (
    <div className={`min-h-screen bg-gradient-to-br ${game.bg} p-6`}>
      <div className="max-w-2xl mx-auto bg-white rounded-3xl shadow-2xl p-8 text-center">
        <FontAwesomeIcon icon={game.icon} className="text-6xl text-indigo-600 mb-4" />
        <h1 className="text-3xl font-bold text-indigo-700 mb-2">{game.title}</h1>
        <p className="text-gray-600 mb-4">Game Rules:</p>
        <ul className="text-left list-disc list-inside mb-6 text-gray-700">
          {game.rules.map((rule, i) => (
            <li key={i}>{rule}</li>
          ))}
        </ul>

        <button
          onClick={() => alert("Game Start Logic Aayega Yahaan 🔥")}
          className="bg-indigo-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-indigo-700 transition flex items-center justify-center gap-2"
        >
          <FontAwesomeIcon icon={faPlayCircle} />
          Start Game
        </button>
      </div>
    </div>
  );
}
