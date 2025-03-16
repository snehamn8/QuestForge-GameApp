import React, { useState } from "react";
import Home from "./Home";
import Leaderboard from "./Leaderboard";
import Rules from "./Rules";
import Profile from "./Profile";
import MarketPlace from "./Marketplace";
import "./App.css";

function App() {
  const [currentPage, setCurrentPage] = useState("Home"); // Ensure it's "Home" (capital H)

  const renderPage = () => {
    switch (currentPage) {
      case "Leaderboard":
        return <Leaderboard />;
      case "Rules":
        return <Rules />;
      case "Profile":
        return <Profile />;
      case "MarketPlace":
        return <MarketPlace />;
      default:
        return <Home setCurrentPage={setCurrentPage} />; // Pass setCurrentPage as a prop
    }
  };

  return (
    <div>
      {/* Navigation Menu */}
      <nav>
        <button onClick={() => setCurrentPage("Home")}>Home</button>
        <button onClick={() => setCurrentPage("Leaderboard")}>Leaderboard</button>
        <button onClick={() => setCurrentPage("Rules")}>Rules</button>
        <button onClick={() => setCurrentPage("MarketPlace")}>Marketplace</button>
        <button onClick={() => setCurrentPage("Profile")}>Profile</button>
      </nav>

      {/* Render Selected Page */}
      {renderPage()}
    </div>
  );
}

export default App;
