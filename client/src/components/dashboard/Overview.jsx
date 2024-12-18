import React from "react";
import Header from "../Header";
import Sidebar from "../Sidebar";
import Widgets from "../Widgets";
import Charts from "../Charts";

const Overview = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 bg-gray-100 p-6">
        <Header />
        <div className="my-4">
          <Widgets />
        </div>
        <Charts />
      </div>
    </div>
  );
};

export default Overview;
