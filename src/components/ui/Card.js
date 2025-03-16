import React from "react";

const Card = ({ children }) => {
  return (
    <div
      style={{
        background: "#2a2a2a",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(255, 255, 255, 0.2)",
        margin: "10px",
      }}
    >
      {children}
    </div>
  );
};

export default Card;
