import React, { useState } from "react";
import { FaUserGroup } from "react-icons/fa6";
import { ImLeaf } from "react-icons/im";
import Dashboard from "./Dashboard";
import Incentives from "./Incentives";

function ProfileHome() {
  const [tab, setTab] = useState("profile");

  return (
    <div className="flex flex-col items-center h-full gap-10 w-full overflow-y-auto scrollbar-hide bg-[#EEF5FF]">
      <div className="flex flex-row gap-8 justify-center border-gray-200 pb-4 mt-6">
        <div
          className={`flex flex-row gap-3 items-center cursor-pointer transition-all duration-300 ${
            tab === "profile"
              ? "text-blue-500 border-blue-500 border-b-2"
              : "text-gray-600 hover:text-blue-500"
          }`}
          onClick={() => setTab("profile")}
        >
          <FaUserGroup size={24} />
          <span className="mt-2 text-sm font-semibold">Profile</span>
        </div>
        <div
          className={`flex flex-row gap-3 items-center cursor-pointer transition-all duration-300 ${
            tab === "incentives"
              ? "text-green-500 border-green-500 border-b-2"
              : "text-gray-600 hover:text-green-500"
          }`}
          onClick={() => setTab("incentives")}
        >
          <ImLeaf size={24} />
          <span className="mt-2 text-sm font-semibold">Incentives</span>
        </div>
      </div>
      <div className="w-full max-w-7xl">
        {tab === "profile" && <Dashboard />} 
        {tab === "incentives" && <Incentives />}
      </div>
    </div>
  );
}

export default ProfileHome;
