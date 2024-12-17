import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <nav style={{ width: "200px", padding: "20px", background: "#f8f9fa" }}>
      <ul style={{ listStyle: "none", padding: 0 }}>
        <li>
          <Link to="/overview">Overview</Link>
        </li>
        <li>
          <Link to="/analytics">Analytics</Link>
        </li>
        <li>
          <Link to="/settings">Settings</Link>
        </li>
        <li>
          <button
            onClick={() => {
              localStorage.removeItem("token");
              window.location.href = "/login";
            }}
          >
            Logout
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
