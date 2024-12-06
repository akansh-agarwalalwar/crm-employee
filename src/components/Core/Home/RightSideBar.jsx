import React from "react";
import { FaWhatsapp, FaTrash, FaEdit } from "react-icons/fa";
import { AiOutlinePlus, AiOutlineRollback } from "react-icons/ai";
import { IoIosRadioButtonOn } from "react-icons/io";

const RightSideBar = () => {
  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-4">
      {/* Header Section */}
      <div className="flex items-center space-x-4">
        <div className="relative">
          <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center text-2xl font-bold text-white">
            C
          </div>
          <IoIosRadioButtonOn className="absolute bottom-0 right-0 text-green-500 text-lg" />
        </div>
        <div>
          <h2 className="text-lg font-semibold">Costumer Y</h2>
          <p className="text-sm text-gray-500">Available</p>
        </div>
        <div className="ml-auto flex space-x-2">
          <FaWhatsapp className="text-green-500 text-2xl cursor-pointer" />
          <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center cursor-pointer">
            <span className="text-gray-500 text-xl">...</span>
          </div>
        </div>
      </div>

      {/* Basic Information */}
      <div>
        <h3 className="text-gray-700 font-medium">Basic Informations</h3>
        <div className="flex items-center space-x-2 mt-2">
          <p className="text-sm text-gray-700">Phone Number: +91 4521882146</p>
          <span className="ml-2">🇮🇳</span>
        </div>
      </div>

      {/* Edit Information */}
      <div>
        <h3 className="text-gray-700 font-medium">Edit Information</h3>
        <div className="space-y-2 mt-2">
          <div className="flex items-center justify-between bg-gray-100 p-2 rounded-lg">
            <label className="text-gray-600">Name</label>
            <input
              type="text"
              value="Minakshi Sharma"
              className="bg-transparent focus:outline-none"
            />
            <FaTrash className="text-red-500 cursor-pointer" />
          </div>
          <div className="flex items-center justify-between bg-gray-100 p-2 rounded-lg">
            <label className="text-gray-600">Package</label>
            <input
              type="text"
              value="New York"
              className="bg-transparent focus:outline-none"
            />
            <FaTrash className="text-red-500 cursor-pointer" />
          </div>
        </div>
        <textarea
          placeholder="Write Detailed Description.."
          className="w-full bg-gray-100 p-2 rounded-lg mt-4 resize-none focus:outline-none"
        ></textarea>
        <button className="w-full bg-blue-500 text-white py-2 rounded-lg mt-4">
          Save Details
        </button>
      </div>

      {/* Create Notes */}
      <div>
        <h3 className="text-gray-700 font-medium">Create Notes</h3>
        <div className="flex items-center bg-gray-100 p-2 rounded-lg mt-2">
          <input
            type="text"
            placeholder="Create Notes"
            className="bg-transparent w-full focus:outline-none"
          />
          <FaTrash className="text-red-500 cursor-pointer ml-2" />
          <AiOutlineRollback className="text-blue-500 cursor-pointer ml-2" />
        </div>
      </div>
    </div>
  );
};

export default RightSideBar;
