import React from "react";
import "./Profile.css";

const Profile = () => {
  const user = {
    name: "Player One",
    rank: "Diamond",
    level: 35,
    gold: 1250,
    avatar: "images/avatar.jpg",
    friends: ["Gamer123", "WarriorX", "Legend99"],
  };

  return (
    <div className="profile-container">
      {/* User Info Section */}
      <div className="profile-header">
        <img src={user.avatar} alt="User Avatar" className="avatar" />
        <h2>{user.name}</h2>
        <p>Rank: <span className="highlight">{user.rank}</span></p>
        <p>Level: <span className="highlight">{user.level}</span></p>
        <p>Gold: <span className="highlight">{user.gold} 💰</span></p>
      </div>

      {/* Friends & Community Section */}
      <div className="friends-section">
        <h3>Friends & Community</h3>
        <ul>
          {user.friends.map((friend, index) => (
            <li key={index}>{friend}</li>
          ))}
        </ul>
      </div>

      {/* Profile Actions */}
      <div className="profile-actions">
        <button className="edit-btn">Edit Profile</button>
        <button className="settings-btn">Settings</button>
      </div>
    </div>
  );
};

export default Profile;
