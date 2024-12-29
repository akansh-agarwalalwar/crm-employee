import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosArrowRoundDown } from "react-icons/io";
import { IoIosArrowRoundUp } from "react-icons/io";
import { FaCalendarAlt } from "react-icons/fa";
import { FaRegNoteSticky } from "react-icons/fa6";
import { IoCheckmark } from "react-icons/io5";

function Followup({ lead, onClose }) {
  const [activeTab, setActiveTab] = useState("Incoming");
  const [selectedRadio, setSelectedRadio] = useState("");

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-md shadow-md w-1/3 z-50">
        <div className="flex justify-between items-center w-full mb-4">
          <h2 className="text-xl font-bold">Follow Up</h2>
          <div className="cursor-pointer" onClick={onClose}>
            <RxCross2 />
          </div>
        </div>
        <div className="flex justify-center w-full">
          <div className="bg-[#888888] flex items-center p-2 rounded-md text-white cursor-pointer px-28">
            <FaPhoneAlt className="text-xl" />
            <p className="ml-2">Call</p>
          </div>
        </div>
        <div className="flex justify-center items-center mt-4 gap-4 text-black">
          <div
            className={`flex items-center cursor-pointer ${
              activeTab === "Incoming" ? "underline underline-offset-8" : ""
            }`}
            onClick={() => setActiveTab("Incoming")}
          >
            <IoIosArrowRoundDown />
            <p className="ml-2">Incoming</p>
          </div>
          <div
            className={`flex items-center cursor-pointer ${
              activeTab === "Upcoming" ? "underline underline-offset-8" : ""
            }`}
            onClick={() => setActiveTab("Upcoming")}
          >
            <IoIosArrowRoundUp />
            <p className="ml-2">Upcoming</p>
          </div>
        </div>
        <div className="flex justify-center items-center mt-4 gap-4 text-black">
          <div className="flex items-center gap-2">
            <input
              type="radio"
              checked={selectedRadio === "Answered"}
              onChange={() => setSelectedRadio("Answered")}
            />
            <p>Answered</p>
          </div>
          <div className="flex items-center gap-2">
            <input
              type="radio"
              checked={selectedRadio === "Unanswered"}
              onChange={() => setSelectedRadio("Unanswered")}
            />
            <p>Unanswered</p>
          </div>
          <div className="flex items-center gap-2">
            <input
              type="radio"
              checked={selectedRadio === "Not Reachable"}
              onChange={() => setSelectedRadio("Not Reachable")}
            />
            <p>Not Reachable</p>
          </div>
        </div>
        <div className="flex flex-col gap-4 mt-4 justify-center items-center w-full cursor-pointer">
          <div className="flex justify-center items-center gap-4 w-full">
            <div className="bg-gray-050 p-2 rounded-md w-full text-center">
              Today
            </div>
            <div className="bg-gray-050 p-2 rounded-md w-full text-center">
              Tommorrow
            </div>
          </div>
          <div className="flex justify-center items-center gap-4 w-full">
            <div className="bg-gray-050 p-2 rounded-md w-full text-center">
              After 2 days
            </div>
            <div className="bg-gray-050 p-2 rounded-md w-full text-center">
              In 1 month
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 mt-6 justify-center items-center w-full cursor-pointer">
          <div className="flex justify-center items-center gap-4 w-full">
            <div className="bg-[#22C55E] p-2 rounded-md w-full text-white text-center flex items-center justify-center">
              <FaPhoneAlt className="text-xl" />
              <p className="ml-2">Call</p>
            </div>
            <div className="bg-[#3B82F6] p-2 rounded-md w-full text-white text-center flex items-center justify-center">
              <FaCalendarAlt />
              <p className="ml-2">Schedule Call</p>
            </div>
          </div>
          <div className="flex justify-center items-center gap-4 w-full ">
            <div className="bg-[#EAB308] p-2 rounded-md w-full text-white text-center flex items-center justify-center">
              <FaRegNoteSticky />
              <p className="ml-2">Add Notes</p>
            </div>
            <div className="bg-[#A855F7] p-2 rounded-md w-full text-white text-center flex items-center justify-center">
              <IoCheckmark />
              <p className="ml-2">Mark Complete</p>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center mt-6 gap-4 cursor-pointer">
          <div className="bg-[#03346E] p-2 rounded-md w-full text-white text-center">
            Save Follow Up
          </div>
          <div
            className="bg-gray-050 p-2 rounded-md w-full text-center"
            onClick={onClose}
          >
            Cancel
          </div>
        </div>
      </div>
    </div>
  );
}

export default Followup;
