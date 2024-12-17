import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Overview = () => {
  return (
    <div>
      <Header />
      <Sidebar />
      <main style={{ marginLeft: "220px", padding: "20px" }}>
        <h2>Dashboard Overview</h2>
        <p>Welcome to the SaaS Dashboard! Use the sidebar to navigate.</p>
      </main>
    </div>
  );
};

export default Overview;
