import React from "react";
import { Bar } from "react-chartjs-2";

const Charts = () => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "User Growth",
        data: [10, 20, 50, 80, 120, 200],
        backgroundColor: "rgba(54, 162, 235, 0.6)",
      },
    ],
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-4">User Growth</h3>
      <Bar data={data} />
    </div>
  );
};

export default Charts;
