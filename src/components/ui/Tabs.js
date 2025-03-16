// src/Components/ui/Tabs.js
import React, { useState } from "react";

export const TabsList = ({ children }) => {
  return <div style={{ display: "flex", gap: "10px" }}>{children}</div>;
};

export const TabsTrigger = ({ label, active, onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{
        padding: "10px",
        background: active ? "#ff7300" : "#444",
        color: "white",
        border: "none",
        cursor: "pointer",
      }}
    >
      {label}
    </button>
  );
};

const Tabs = ({ tabs = [] }) => {
  const [activeTab, setActiveTab] = useState(0);

  if (!tabs.length) {
    return <div>No tabs available</div>; // Fallback UI
  }

  return (
    <div>
      <TabsList>
        {tabs.map((tab, index) => (
          <TabsTrigger
            key={index}
            label={tab.label}
            active={activeTab === index}
            onClick={() => setActiveTab(index)}
          />
        ))}
      </TabsList>
      <div>{tabs[activeTab]?.content || "No content available"}</div>
    </div>
  );
};

export default Tabs;
