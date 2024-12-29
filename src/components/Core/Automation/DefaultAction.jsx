import React from "react";
import { FaClock } from "react-icons/fa6";
import { FaMoon } from "react-icons/fa";

function DefaultAction() {
  return (
    <div className="flex flex-col w-full px-52">
      <div className="flex justify-between">
        <p className="font-bold text-2xl">Current Working Hours</p>
        <div className="flex gap-3 p-2 rounded-lg bg-[#16A34A] text-white items-center">
          <FaClock size={16} className="" />
          <p className="">Set Working Hours</p>
        </div>
      </div>
      <div className="mt-10 font-semibold">
        <p>Non-working Hours Response</p>
      </div>
      <div className="mt-7 bg-gray-050 p-2 rounded-md">
        <div className="flex w-full items-center"> 
          <FaMoon size={16} className="mr-3 text-[#9CA3AF]" />
          <p>When it is not working hours, reply the following:</p>
        </div>
        <div className="ml-7">
            <p className="text-[#3B82F6]">Set Material &gt;</p>
        </div>
      </div>
    </div>
  );
}

export default DefaultAction;
