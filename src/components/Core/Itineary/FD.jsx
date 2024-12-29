import React from "react";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";

function FD({ onBack }) {
  const FD = [
    {
      name: "Thailand",
      createdAt: "Created on Jan 15, 2024",
    },
    {
      name: "Manali",
      createdAt: "Created on Jan 15, 2024",
    },
  ];
  return (
    <div className="w-full px-40">
      <div className="flex items-center gap-4 justify-between w-full mt-10">
        <div className="flex items-center gap-2 cursor-pointer" onClick={onBack}>
          <FaRegArrowAltCircleLeft size={26} />
          <h1 className="text-2xl font-semibold">FD</h1>
        </div>
        <div className="p-2 rounded-lg text-white bg-black">New Itineary</div>
      </div>
      <div className="w-full bg-white p-2 rounded-lg mt-10">
        {FD.map((item, index) => (
          <div key={index} className="flex items-center gap-4 mt-2 p-2 justify-between">
            <div className="flex flex-col">
              <div className="font-bold text-lg">{item.name}</div>
              <div className="text-gray-500 text-sm">{item.createdAt}</div>
            </div>
            <div className="border-2 p-2 rounded-lg border-black font-semibold cursor-pointer">View</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FD;
