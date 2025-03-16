import React from "react";

const Avatar = ({ src }) => {
  return (
    <img
      src={src || "default-avatar.png"}
      alt="User Avatar"
      style={{
        width: "50px",
        height: "50px",
        borderRadius: "50%",
        border: "2px solid #ffcc00",
      }}
    />
  );
};

export default Avatar;
