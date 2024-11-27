import React from "react";

const RoomStatus = ({ occupied, bgColor }) => {
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
      <h3 style={{ color: "#fff" }}>Room Status</h3>
      <p style={{ fontSize: "18px", color: "#fff" }}>
        {occupied ? "Occupied" : "Not Occupied"}
      </p>
    </div>
  );
};

export default RoomStatus;


