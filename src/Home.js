import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaPlay, FaTrophy, FaBook, FaShoppingCart, FaUser } from "react-icons/fa";
import Leaderboard from "./Leaderboard";
import Rules from "./Rules";
import Marketplace from "./Marketplace";
import Profile from "./Profile";
import Game from "./Game";
import "./Home.css"; 

const Home = () => {
  const [currentPage, setCurrentPage] = useState("Home"); // Use "Home" instead of "home"

  const renderPage = () => {
    switch (currentPage) {
      case "leaderboard":
        return <Leaderboard />;
      case "rules":
        return <Rules />;
      case "marketplace":
        return <Marketplace />;
      case "profile":
        return <Profile />;
      case "play":
        return <Game />;
      default:
        return (
          <div className="home-container">
            {/* Background Animation */}
            <div className="background-animation"></div>

            {/* Hero Section */}
            <motion.div
              className="hero-section"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1>Welcome to <span className="highlight">QuestForge</span></h1>
              <p>Embark on an epic gaming adventure. Compete, win, and rise to glory!</p>
            </motion.div>

            {/* Main Menu */}
            <div className="menu-container">
              <motion.button className="menu-btn play" whileHover={{ scale: 1.1 }} onClick={() => setCurrentPage("play")}>
                <FaPlay /> Play Game
              </motion.button>
              <motion.button className="menu-btn leaderboard" whileHover={{ scale: 1.1 }} onClick={() => setCurrentPage("leaderboard")}>
                <FaTrophy /> Leaderboard
              </motion.button>
              <motion.button className="menu-btn rules" whileHover={{ scale: 1.1 }} onClick={() => setCurrentPage("rules")}>
                <FaBook /> Rules
              </motion.button>
              <motion.button className="menu-btn marketplace" whileHover={{ scale: 1.1 }} onClick={() => setCurrentPage("marketplace")}>
                <FaShoppingCart /> Marketplace
              </motion.button>
              <motion.button className="menu-btn profile" whileHover={{ scale: 1.1 }} onClick={() => setCurrentPage("profile")}>
                <FaUser /> Profile
              </motion.button>
            </div>

            {/* Featured Section */}
            <div className="features-section">
              <motion.div className="feature-card" whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                <h3>🎮 Play and Win</h3>
                <p>Compete with top players and climb the leaderboard!</p>
              </motion.div>
              <motion.div className="feature-card" whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                <h3>🏆 Unlock Achievements</h3>
                <p>Earn rewards and showcase your skills.</p>
              </motion.div>
              <motion.div className="feature-card" whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                <h3>🛒 Marketplace</h3>
                <p>Trade and buy exclusive in-game items.</p>
              </motion.div>
            </div>

            {/* Testimonials Section */}
            <div className="testimonials">
              <h2>🌟 What Players Say</h2>
              <div className="testimonial-card">
                <p>“QuestForge is an absolute game-changer! Love the competitive leaderboard.”</p>
                <h4>- ShadowWarrior</h4>
              </div>
              <div className="testimonial-card">
                <p>“The UI is smooth, and the game mechanics are top-notch!”</p>
                <h4>- CyberNinja</h4>
              </div>
            </div>

            {/* Footer */}
            <footer className="footer">
              <p>&copy; 2025 QuestForge. All rights reserved.</p>
              <p>Follow us: <span>🎮 Twitter | 📘 Facebook | 📷 Instagram</span></p>
            </footer>
          </div>
        );
    }
  };

  return <div>{renderPage()}</div>;
};

export default Home;
