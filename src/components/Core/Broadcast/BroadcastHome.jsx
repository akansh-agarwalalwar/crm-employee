import React, { useState } from "react";
import HistoryBroad from "./HistoryBroad";
import ScheduledBroad from "./ScheduledBroad";
import TemplateBroad from "./TemplateBroad";

function BroadcastHome() {
  const [activeTab, setActiveTab] = useState("Broadcast History");
  const tabs = [
    {
      name: "Broadcast History",
      component: <HistoryBroad />,
    },
    {
      name: "Scheduled Broadcast",
      component: <ScheduledBroad />,
    },
    {
      name: "Template Message",
      component: <TemplateBroad />,
    },
  ];

  const activeComponent = tabs.find((tab) => tab.name === activeTab)?.component;

  return (
    <div className="w-full flex flex-col h-auto overflow-y-auto scrollbar-hide">
      <div className="w-full flex gap-10 p-4 justify-center px-16">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(tab.name)}
            className={`px-4 py-3 rounded-2xl font-medium w-full ${
              activeTab === tab.name
                ? "bg-[#FFC20E] text-white"
                : "bg-gray-050 text-black"
            } transition-all duration-300`}
          >
            {tab.name}
          </button>
        ))}
      </div>
      <div className="w-full mt-5 p-4">{activeComponent}</div>
    </div>
  );
}

export default BroadcastHome;
