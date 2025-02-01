import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import ArrowSvg from "../../../assets/arrow.svg";
import LeaveHistory from "./LeaveHistory";
import ViewPayslip from "./ViewPayslip";
import Events from "./Events";
import Overview from "./Overview";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const [activeTab, setActiveTab] = useState(null);
  const navigation = useNavigate();
  const tabs = [
    {
      title: "Overview",
    },
    {
      title: "Leave",
    },
    {
      title: "View Payslip",
    },
    {
      title: "Events",
    },
  ];

  const handleEdit = () => {
    navigation("/profile/edit-profile");
  };

  return (
    <div className="w-full h-full relative">
      <div
        className="w-full h-32 bg-gradient-to-r from-blue-500 to-violet-400 flex items-center justify-between px-2 md:px-8 shadow-md rounded-md"
        style={{
          background: "linear-gradient(110deg, #193288 27%, #060C22 72%)",
        }}
      >
        <div className="flex items-center gap-4">
          <div className="bg-white p-4 rounded-full shadow-lg">
            <FaUser className="text-blue-500 text-3xl" />
          </div>
          <div className="flex flex-col">
            <h1 className="text-2xl md:text-4xl text-white font-semibold">
              Akansh Agarwal
            </h1>
            <h2 className="text-xl md:text-2xl text-white font-semibold">
              Full Stack Developer
            </h2>
          </div>
        </div>
        <div className="flex items-center mr-28">
          <button
            onClick={handleEdit}
            className="bg-[#FFC20E] text-black font-semibold py-2 px-8 md:px-16 rounded-md shadow-lg"
          >
            Edit Profile
          </button>
          <div className="absolute right-0 hidden md:block">
            <img src={ArrowSvg} alt="Arrow" className="w-20 h-20 md:w-40 md:h-40" />
          </div>
        </div>
      </div>
      <div className="p-4 md:p-8 w-full flex justify-center">
        <div className="flex flex-col md:flex-row gap-4 md:gap-24">
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(tab.title)}
              className={`w-auto text-left px-6 md:px-10 py-2 text-sm font-medium ${
                activeTab === tab.title
                  ? "bg-[#00BBFF] text-white"
                  : "bg-[#03346E] hover:bg-blue-600 text-white"
              } rounded-3xl transition-all duration-300 shadow-lg`}
            >
              {tab.title}
            </button>
          ))}
        </div>
      </div>
      {activeTab === "Leave" ? (
        <LeaveHistory />
      ) : activeTab === "View Payslip" ? (
        <ViewPayslip />
      ) : activeTab === "Events" ? (
        <Events />
      ) : (
        <Overview />
      )}
    </div>
  );
}

export default Dashboard;
