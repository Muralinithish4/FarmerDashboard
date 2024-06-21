import React from "react";
import './NavButtons.css'
const NavButtons = () => {
  const buttons = [
    { label: "Survey", zIndex: 10 },
    { label: "Survey Name", zIndex: 9 },
    { label: "Team", zIndex: 8 },
    { label: "FO", zIndex: 7 },
    { label: "Farmer", zIndex: 6, active: true },
  ];

  return (
    <div className="nav-container">
      {buttons.map((button, index) => (
        <button
          key={index}
          style={{
            boxShadow: "0px 4px 7.4px #0000001A",
            zIndex: button.zIndex,
            borderRadius: "7px",
            padding: "10px 20px",
            fontSize: "15px",
          }}
          className={`nav-button ${button.active ? "active" : ""}`}
        >
          {button.label}
        </button>
      ))}
    </div>
  );
};

export default NavButtons;
