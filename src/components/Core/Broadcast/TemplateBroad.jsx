import React from "react";
import { CiSearch } from "react-icons/ci";
import { FaFileAlt } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";
import { FaCopy } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

function TemplateBroad() {
  const templates = [
    {
      templateName: "Welcome Message",
      category: "Marketing",
      status: "Draft",
      lastUpdated: "2024-12-15",
    },
    {
      templateName: "Promotion Offer",
      category: "Sales",
      status: "Approved",
      lastUpdated: "2024-11-20",
    },
    {
      templateName: "Newsletter",
      category: "HR",
      status: "Rejected",
      lastUpdated: "2024-10-05",
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "Draft":
        return "bg-[#DBEAFE] text-[#1E40AF]";
      case "Rejected":
        return "bg-[#FEE2E2] text-[#991B1B]";
      case "Approved":
        return "bg-[#DCFCE7] text-[#166534]";
      default:
        return "bg-white";
    }
  };

  return (
    <div className="flex w-full h-auto flex-col px-80">
      <div className="flex w-full justify-between gap-10 mb-6">
        <div className="flex relative items-center w-full">
          <CiSearch className="absolute left-3 text-gray-400" />
          <input
            type="text"
            className="border w-full pl-10 p-2 text-sm rounded-md focus:outline-none focus:border-[#22C55E] transition-all duration-300"
            placeholder="Search Templates..."
          />
        </div>
        <button className="bg-[#22C55E] p-2 rounded-md text-white font-bold hover:bg-[#1DAF4A] transition-all duration-300">
          + New Template
        </button>
      </div>
      <table className="w-full bg-white rounded-md shadow-sm">
        <thead className="text-[#6B7280]">
          <tr>
            <th className="p-2 text-left">Template Name</th>
            <th className="p-2 text-left">Category</th>
            <th className="p-2 text-left">Status</th>
            <th className="p-2 text-left">Last Updated</th>
            <th className="p-2 text-left">Action</th>
          </tr>
        </thead>
        <tbody>
          {templates.map((template, index) => (
            <tr key={index} className="border-b border-gray-200">
              <td className="p-4 flex items-center gap-2">
                <div className="bg-[#F3F4F6] p-2 rounded-md">
                  <FaFileAlt className="text-gray-400" />
                </div>
                <span className="font-semibold">{template.templateName}</span>
              </td>
              <td className="p-2 text-[#9CA3AF]">{template.category}</td>
              <td className="p-2">
                <span className={`px-2 py-1 rounded-xl text-sm ${getStatusColor(template.status)}`}>
                  {template.status}
                </span>
              </td>
              <td className="p-2 text-[#9CA3AF]">{template.lastUpdated}</td>
              <td className="p-2 flex text-[#9CA3AF] cursor-pointer">
                <FaRegEdit />
                <FaCopy className="ml-2" />
                <MdDelete className="ml-2" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TemplateBroad;
