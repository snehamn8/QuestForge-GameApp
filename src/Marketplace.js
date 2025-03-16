import React from "react";
import "./Marketplace.css";

const MarketPlace = () => {
  const items = [
    {
      id: 1,
      name: "Epic Sword",
      price: 500,
      image: "/images/sword.png",
    },
    {
      id: 2,
      name: "Legendary Shield",
      price: 750,
      image: "/images/shield.png",
    },
    {
      id: 3,
      name: "Magic Potion",
      price: 300,
      image: "/images/potion.png",
    },
    {
      id: 4,
      name: "Knight Armor",
      price: 1000,
      image: "/images/armor.png",
    },
  ];

  return (
    <div className="marketplace-container">
      <h2 className="marketplace-title">Game Marketplace</h2>
      <div className="marketplace-items">
        {items.map((item) => (
          <div key={item.id} className="market-item">
            <img src={item.image} alt={item.name} className="item-image" />
            <h3 className="item-name">{item.name}</h3>
            <p className="item-price">💰 {item.price} Gold</p>
            <button className="buy-button">Buy Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarketPlace;
