import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Common/Navbar";
import Sidebar from "../components/Common/Sidebar";

function Dashboard() {
  return (
    <div className="w-full flex h-screen">
      <div className="flex flex-col w-full">
        <Navbar />
        <Sidebar />
      </div>
      <Outlet />
    </div>
  );
}

export default Dashboard;
