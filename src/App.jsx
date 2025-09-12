import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import "./StonePaperScissors.css";

const choices = [
  { name: "Rock", emoji: "🪨", color: "btn-danger" },
  { name: "Paper", emoji: "📄", color: "btn-primary" },
  { name: "Scissors", emoji: "✂️", color: "btn-success" },
];

const getResult = (user, computer) => {
  if (user === computer) return "It's a Tie! 🤝";
  if (
    (user === "Rock" && computer === "Scissors") ||
    (user === "Paper" && computer === "Rock") ||
    (user === "Scissors" && computer === "Paper")
  ) {
    return "🎉 You Win!";
  }
  return "💻 Computer Wins!";
};

export default function StonePaperScissors() {
  const [userChoice, setUserChoice] = useState("");
  const [computerChoice, setComputerChoice] = useState("");
  const [result, setResult] = useState("");
  const [score, setScore] = useState({ user: 0, computer: 0 });

  const playGame = (choice) => {
    const computer = choices[Math.floor(Math.random() * choices.length)].name;
    const gameResult = getResult(choice, computer);

    setUserChoice(choice);
    setComputerChoice(computer);
    setResult(gameResult);

    if (gameResult.includes("You Win")) {
      setScore((prev) => ({ ...prev, user: prev.user + 1 }));
    } else if (gameResult.includes("Computer Wins")) {
      setScore((prev) => ({ ...prev, computer: prev.computer + 1 }));
    }
  };

  return (
    <div className="game-container text-center">
      <h1 className="game-title">🌟 Stone Paper Scissors 🌟</h1>

      <div className="d-flex justify-content-center gap-4 mb-4 fs-4">
        <div className="score-box shadow-sm bg-warning rounded-pill px-4 py-2">
          🧑 You: {score.user}
        </div>
        <div className="score-box shadow-sm bg-warning rounded-pill px-4 py-2">
          💻 Computer: {score.computer}
        </div>
      </div>

      <div className="d-flex flex-wrap justify-content-center gap-3 mb-4">
        {choices.map((choice) => (
          <button
            key={choice.name}
            onClick={() => playGame(choice.name)}
            className={`btn ${choice.color} px-4 py-2 choice-button`}
          >
            {choice.emoji} {choice.name}
          </button>
        ))}
      </div>

      {userChoice && (
        <div className="result-box shadow-lg">
          <p>
            You chose: <strong>{userChoice}</strong>
          </p>
          <p>
            Computer chose: <strong>{computerChoice}</strong>
          </p>
          <h2>{result}</h2>
        </div>
      )}
    </div>
  );
}
