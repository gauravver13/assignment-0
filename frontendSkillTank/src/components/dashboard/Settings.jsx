import React, { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { toast } from "react-toastify";

const Settings = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  const handleThemeToggle = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.body.className = newTheme;
    toast.info(`Switched to ${newTheme} mode`);
  };

  return (
    <div>
      <Header />
      <Sidebar />
      <main style={{ marginLeft: "220px", padding: "20px" }}>
        <h2>Settings</h2>
        <section>
          <h3>Theme</h3>
          <button onClick={handleThemeToggle}>
            Switch to {theme === "light" ? "Dark" : "Light"} Mode
          </button>
        </section>
      </main>
    </div>
  );
};

export default Settings;
