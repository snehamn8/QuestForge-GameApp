import React from "react";
import "./Leaderboard.css";

const players = [
  { rank: 1, name: "ShadowWarrior", score: 9800, avatar: "🥇" },
  { rank: 2, name: "PixelHunter", score: 8700, avatar: "🥈" },
  { rank: 3, name: "CyberNinja", score: 7600, avatar: "🥉" },
  { rank: 4, name: "LegendMaster", score: 6900, avatar: "🎮" },
  { rank: 5, name: "StealthGamer", score: 6200, avatar: "🎮" }
];

const Leaderboard = () => {
  return (
    <div className="leaderboard-container">
      <h2 className="leaderboard-title">🏆 Leaderboard</h2>
      <ul className="leaderboard-list">
        {players.map((player, index) => (
          <li key={index} className={`player-item rank-${player.rank}`}>
            <span className="avatar">{player.avatar}</span>
            <span className="player-name">{player.name}</span>
            <span className="player-score">{player.score} pts</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Leaderboard;