import React from "react";
import { FaPlay } from "react-icons/fa";
import { TbCaravan } from "react-icons/tb";
import { FaClock } from "react-icons/fa6";
import { TiTick } from "react-icons/ti";

function HistoryBroad() {
  const task = [
    {
      name: "Total Tasks",
      number: "248",
      color: "bg-[#FEFCE8]",
      text_color: "text-[#854D0E]",
    },
    {
      name: "Active Tasks",
      number: "78",
      color: "bg-[#FEFCE8]",
      text_color: "text-[#854D0E]",
    },
    {
      name: "Completed",
      number: "108",
      color: "bg-gray-050",
      text_color: "text-black",
    },
  ];

  const details = [
    {
      name: "Start",
      number: "3",
      icon: <FaPlay className="text-[#16A34A]" />,
      text_color: "text-[#166534]",
      color: "bg-[#D1FAE5]",
    },
    {
      name: "Delivery",
      number: "3",
      icon: <TbCaravan className="text-[#2563EB]" />,
      text_color: "text-[#1E3A8A]",
      color: "bg-[#DBEAFE]",
    },
    {
      name: "Regular",
      number: "3",
      icon: <FaClock className="text-[#EA580C]" />,
      text_color: "text-[#9A3412]",
      color: "bg-[#FFEDD5]",
    },
    {
      name: "New",
      number: "3",
      icon: "+",
      text_color: "text-[#854D0E]",
      color: "bg-[#FEF9C3]",
    },
    {
      name: "Failed",
      number: "3",
      icon: "x",
      text_color: "text-[#B91C1C]",
      color: "bg-[#FEE2E2]",
    },
    {
      name: "Success",
      number: "3",
      icon: <TiTick className="text-[#16A34A]" />,
      text_color: "text-[#166534]",
      color: "bg-[#D1FAE5]",
    },
  ];

  return (
    <div className="px-40 w-full flex flex-col">
      <div className="flex w-full justify-between items-center mb-6">
        <div className="flex items-center gap-3">
          <p className="font-bold text-lg">Data flow filter</p>
          <div className="bg-gray-200 p-2 rounded-2xl flex items-center gap-2">
            <div className="h-2 w-2 bg-[#22C55E] rounded-full"></div>
            <p className="text-xs font-semibold">Active</p>
          </div>
        </div>
        <div>
          <button className="bg-[#22C55E] text-white font-bold py-2 px-4 rounded focus:outline-none hover:bg-[#1DAF4A] transition-all duration-300">
            + New Template
          </button>
        </div>
      </div>
      <div className="flex w-full justify-between gap-14 mb-6">
        {task.map((item, index) => (
          <div
            key={index}
            className={`flex flex-row justify-between w-full items-center ${item.color} p-4 rounded-md`}
          >
            <p className={`text-sm font-bold ${item.text_color}`}>
              {item.name}
            </p>
            <p className={`text-lg font-bold ${item.text_color}`}>
              {item.number}
            </p>
          </div>
        ))}
      </div>
      <div className="flex w-full flex-wrap justify-between gap-5">
        {details.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col items-center ${item.color} p-4 rounded-md w-[30%]`}
          >
            <div className="text-2xl mb-2">{item.icon}</div>
            <p className={`text-sm font-bold ${item.text_color}`}>{item.name}</p>
            <p className={`text-lg font-bold ${item.text_color}`}>{item.number}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HistoryBroad;
