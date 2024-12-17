import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import Header from "./Header";
import Sidebar from "./Sidebar";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Analytics = () => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
      {
        label: "Users Gained",
        data: [100, 200, 300, 400, 500],
        backgroundColor: "rgba(75, 192, 192, 0.6)",
      },
    ],
  };

  return (
    <div>
      <Header />
      <Sidebar />
      <main style={{ marginLeft: "220px", padding: "20px" }}>
        <h2>Analytics</h2>
        <Bar data={data} options={{ responsive: true, plugins: { legend: { position: "top" } } }} />
      </main>
    </div>
  );
};

export default Analytics;
