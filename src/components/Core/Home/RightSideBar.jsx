import React from "react";
import { FaWhatsapp, FaTrash, FaEdit } from "react-icons/fa";
import { AiOutlinePlus, AiOutlineRollback } from "react-icons/ai";
import { IoIosRadioButtonOn } from "react-icons/io";

const RightSideBar = () => {
  return (
    <div className="p-6 max-w-md mx-auto bg-white shadow-md space-y-4 border-l border-gray-300">
      {/* Header Section */}
      <div className="flex items-center space-x-4">
        <div className="relative">
          <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center text-2xl font-bold text-white">
            C
          </div>
          <IoIosRadioButtonOn className="absolute bottom-0 right-0 text-green-500 text-lg" />
        </div>
        <div className="flex w-full flex-col">
          <h2 className="text-lg font-semibold">Costumer Y</h2>
          <p className="text-sm text-gray-500">Available</p>
        </div>
      </div>

      {/* Basic Information */}
      <div>
        <h3 className="text-gray-700 font-medium">Basic Informations</h3>
        <div className="flex items-center space-x-2 mt-2">
          <p className="text-sm text-gray-700">Phone Number: +91 4521882146</p>
        </div>
      </div>

      <div>
        <h3 className="text-gray-700 font-medium">Edit Information</h3>
        <div className="space-y-2 mt-2">
          <div className="flex items-center justify-between gap-4">
            <label className="text-gray-600 border-2 bg-white p-2 rounded-xl w-full">
              Name
            </label>
            <input
              type="text"
              value="Minakshi Sharma"
              className="bg-gray-100 text-black p-2 border-2 rounded-xl w-full"
            />
            <FaTrash className="text-red-500 cursor-pointer" size={36} />
          </div>
          <div className="flex items-center justify-between gap-4">
            <label className="text-gray-600 border-2 bg-white p-2 rounded-xl w-full">
              Package
            </label>
            <input
              type="text"
              value="New York"
              className="bg-gray-100 text-black p-2 border-2 rounded-xl w-full"
            />
            <FaTrash className="text-red-500 cursor-pointer" size={36} />
          </div>
        </div>
        <textarea
          placeholder="Write Detailed Description.."
          className="w-full border-2 p-2 rounded-lg mt-4 resize-none focus:outline-none h-36"
        ></textarea>
        <button className="w-full bg-blue-500 text-white py-2 rounded-lg mt-4">
          Save Details
        </button>
      </div>

      <div>
        <h3 className="text-gray-700 font-medium">Create Notes</h3>
        <div className="flex items-center p-2 rounded-lg">
          <input
            placeholder="Create Notes"
            className="w-full border-2 p-2 rounded-lg h-10"
          />
          <FaTrash className="text-red-500 cursor-pointer ml-2" />
          <AiOutlineRollback className="text-blue-500 cursor-pointer ml-2" />
        </div>
      </div>
    </div>
  );
};

export default RightSideBar;
