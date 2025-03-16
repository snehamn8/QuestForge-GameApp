import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import dungeonBg from "./assets/dungeon.jpg";
import "./Game.css";

const questions = [
  {
    question: "You wake up in a dark dungeon. A door is locked in front of you. What's the key made of?",
    options: ["Gold", "Silver", "Iron", "Wood"],
    answer: "Iron",
  },
  {
    question: "A torch lights up, revealing a puzzle on the wall. Solve: 5 + 3 x 2?",
    options: ["16", "11", "10", "13"],
    answer: "11",
  },
  {
    question: "A shadowy figure asks you a riddle: 'I speak without a mouth and hear without ears. What am I?'",
    options: ["Echo", "Shadow", "Wind", "Memory"],
    answer: "Echo",
  },
  {
    question: "You find an ancient scroll with a coded message: What is the capital of Atlantis?",
    options: ["Poseidonia", "Atlantica", "Neptune", "Oceana"],
    answer: "Poseidonia",
  },
  {
    question: "A monstrous guardian blocks the exit! Solve: 12 / 4 + 3?",
    options: ["3", "6", "7", "5"],
    answer: "6",
  }
];

const Game = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [message, setMessage] = useState("");
  const [health, setHealth] = useState(3);
  const [timeLeft, setTimeLeft] = useState(10);

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0) {
      setMessage("Time's up! You lost 1 HP.");
      setHealth((prevHealth) => Math.max(0, prevHealth - 1));
      setTimeout(() => nextQuestion(), 1000);
    }
  }, [timeLeft]);

  const handleAnswer = (option) => {
    if (option === questions[currentQuestion].answer) {
      setScore(score + 1);
      setMessage("Correct! The path ahead clears.");
    } else {
      setMessage("Wrong! A trap is triggered. You lost 1 HP!");
      setHealth((prevHealth) => Math.max(0, prevHealth - 1));
    }
    setTimeout(() => nextQuestion(), 1000);
  };

  const nextQuestion = () => {
    if (currentQuestion + 1 < questions.length && health > 0) {
      setCurrentQuestion(currentQuestion + 1);
      setMessage("");
      setTimeLeft(10);
    } else {
      setGameOver(true);
    }
  };

  return (
    <div className="game-container">
      {!gameOver && health > 0 ? (
        <motion.div
          className="question-box"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2>{questions[currentQuestion].question}</h2>
          <p className="timer">Time Left: {timeLeft}s</p>
          <p className="health">Health: {health} ❤️</p>
          <div className="options-container">
            {questions[currentQuestion].options.map((option, index) => (
              <motion.button
                key={index}
                className="option-btn"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => handleAnswer(option)}
              >
                {option}
              </motion.button>
            ))}
          </div>
          <p className="message">{message}</p>
        </motion.div>
      ) : (
        <div className="game-over">
          <h2>{health > 0 ? "You've Escaped the Dungeon!" : "You perished in the dungeon..."}</h2>
          <p>Your Score: {score} / {questions.length}</p>
          <motion.button 
            className="restart-btn" 
            whileHover={{ scale: 1.1 }} 
            onClick={() => {
              setCurrentQuestion(0);
              setScore(0);
              setGameOver(false);
              setHealth(3);
              setMessage("");
              setTimeLeft(10);
            }}
          >
            Play Again
          </motion.button>
        </div>
      )}
    </div>
  );
};

export default Game;
