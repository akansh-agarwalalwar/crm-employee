import React from "react";
import { MdDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";

function KeywordAction() {
  const tables = [
    {
      keyword: "Packages",
      triggered: "4",
      replyMaterial: "Goa, Paris trips",
    },
    {
      keyword: "Issue",
      triggered: "1",
      replyMaterial: "Related Payments, Invoice",
    },
    {
      keyword: "Status",
      triggered: "3",
      replyMaterial: "Trip Status, Payment Status",
    },
  ];
  return (
    <div className="flex flex-col w-full px-40 py-10">
      <div className="border bg-white p-4 rounded-t-md flex justify-between items-center shadow-md">
        <p className="font-semibold text-lg">Add Keyword Action List</p>
        <div className="flex gap-2">
          <input
            type="text"
            className="p-2 rounded-md border-2 focus:outline-none focus:border-[#16A34A] transition-all duration-300"
            placeholder="Search Here"
          />
          <button className="bg-[#16A34A] p-2 rounded-md text-white font-bold hover:bg-[#15803D] transition-all duration-300">
            + Add Keyword
          </button>
        </div>
      </div>
      <table className="w-full bg-white rounded-md shadow-md">
        <thead className="border">
          <tr>
            <th className="p-2 text-left">Keyword</th>
            <th className="p-2 text-left">Triggered</th>
            <th className="p-2 text-left">Reply Material</th>
            <th className="p-2 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {tables.map((table, index) => (
            <tr key={index} className="border border-gray-200">
              <td className="p-2">{table.keyword}</td>
              <td className="p-2">{table.triggered}</td>
              <td className="p-2">{table.replyMaterial}</td>
              <td className="p-2">
                <div className="flex gap-2 text-gray-600">
                  <FaRegEdit className="cursor-pointer hover:text-blue-500 transition-all duration-300" />
                  <MdDelete className="cursor-pointer hover:text-red-500 transition-all duration-300" />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default KeywordAction;
