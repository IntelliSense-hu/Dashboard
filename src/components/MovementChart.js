import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register chart components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const MovementChart = ({ data }) => {
  const chartData = {
    labels: data.map((_, idx) => `Point ${idx + 1}`),
    datasets: [
      {
        label: "Movement Over Time",
        data: data,
        borderColor: "blue",
        backgroundColor: "rgba(0, 0, 255, 0.1)",
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false, // Allow the chart to adjust its aspect ratio based on the container's size
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div
      style={{
        padding: "20px",
        backgroundColor: "#fff",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        borderRadius: "12px",
        width: "100%", // Full width to make it responsive
        height: "400px", // Fixed height to ensure consistency
        maxWidth: "100%", // Ensure chart does not exceed container width
        margin: "0 auto", // Center the chart horizontally
      }}
    >
      <Line data={chartData} options={options} />
    </div>
  );
};

export default MovementChart;
