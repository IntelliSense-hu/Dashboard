import React, { useState, useEffect } from "react";
import RoomStatus from "./components/RoomStatus";
import MovementValue from "./components/MovementValue";
import MovementChart from "./components/MovementChart";

const App = () => {
  const [roomOccupied, setRoomOccupied] = useState(false);
  const [movementValue, setMovementValue] = useState(0);
  const [movementData, setMovementData] = useState([]);

  useEffect(() => {
    // Mock data fetch or WebSocket simulation
    const interval = setInterval(() => {
      const isOccupied = Math.random() > 0.5;
      const movement = Math.floor(Math.random() * 100);
      setRoomOccupied(isOccupied);
      setMovementValue(movement);
      setMovementData((prev) => [...prev.slice(-9), movement]); // Keep last 10 points
    }, 2000); // Fetch data every 2 seconds

    return () => clearInterval(interval); // Cleanup
  }, []);

  // Dynamically set the background colors based on room status
  const backgroundColor = roomOccupied ? "#e0f7fa" : "#ffebee"; // Light blue for occupied, light red for not
  const roomStatusBgColor = roomOccupied ? "#4caf50" : "#f44336"; // Green for occupied, red for not
  const movementValueBgColor = roomOccupied ? "#b3e5fc" : "#f5f5f5"; // Blue for occupied, neutral for not

  return (
    <div
      style={{
        fontFamily: "Roboto, sans-serif",
        padding: "20px",
        textAlign: "center",
        backgroundColor: backgroundColor,
        minHeight: "100vh", 
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      {/* Header */}
      <header
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "30px",
          paddingBottom: "20px",
          borderBottom: "2px solid #ddd",
        }}
      >
        <img
          src="/img/img_v3_02h0_9b113e11-9018-4510-8b42-269531ad25ix.webp" 
          alt="Company Logo"
          style={{
            marginRight: "20px",
            borderRadius: "50%",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            height:"100px",
          }}
        />
        <h1 style={{ color: "#333", fontSize: "30px", fontWeight: "bold" }}>
          Intellisense Occupancy Detection
        </h1>
      </header>

      {}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: "20px",
          marginBottom: "30px",
          flexWrap: "wrap", 
          width: "100%",
          maxWidth: "80%", 
          margin: "0 auto",
        }}
      >
        {}
        <div style={{ flex: 1 }}>
          <RoomStatus occupied={roomOccupied} bgColor={roomStatusBgColor} />
        </div>
        <div style={{ flex: 1 }}>
          <MovementValue value={movementValue} bgColor={movementValueBgColor} />
        </div>
      </div>

      {/* Chart */}
      <div
        style={{// Same as combined width of both blocks
          maxWidth: "80%",
          margin: "0 auto",
        }}
      >
        <MovementChart data={movementData} />
      </div>
    </div>
  );
};

export default App;

