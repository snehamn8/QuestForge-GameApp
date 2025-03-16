import React, { useState } from "react";
import "./Rules.css";

const Rules = () => {
  const [showTextRules, setShowTextRules] = useState(false);
  const [showTutorial, setShowTutorial] = useState(false);

  return (
    <div className="rules-container">
      <h2 className="rules-header">Game Rules</h2>
      
      <div className="rules-buttons">
        <button onClick={() => setShowTutorial(true)} className="rules-btn">
          📺 Interactive Tutorial
        </button>
        <button onClick={() => setShowTextRules(true)} className="rules-btn">
          📜 Text-Based Rules
        </button>
      </div>

      {showTutorial && (
        <div className="rules-content">
          <h3>🎮 Interactive Tutorial</h3>
          <p>Watch a quick demo on how to play the game! 🚀</p>
          <button onClick={() => setShowTutorial(false)} className="close-btn">Close</button>
        </div>
      )}

      {showTextRules && (
        <div className="rules-content">
          <h3>📖 Game Rules</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel metus scelerisque, fermentum nulla eget, consequat velit.</p>
          <button onClick={() => setShowTextRules(false)} className="close-btn">Close</button>
        </div>
      )}
    </div>
  );
};

export default Rules;
