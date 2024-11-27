import React from "react";

const MovementValue = ({ value, bgColor }) => {
  return (
    <div
      style={{
        padding: "20px",
        backgroundColor: bgColor, // Dynamically set background color
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        borderRadius: "8px",
        flex: "1",
      }}
    >
      <h3 style={{ color: "#555" }}>Movement Value</h3>
      <p style={{ fontSize: "18px", fontWeight: "bold" }}>{value}</p>
    </div>
  );
};

export default MovementValue;





