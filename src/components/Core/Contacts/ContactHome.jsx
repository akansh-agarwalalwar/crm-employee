import React from "react";
import { FaFileImport, FaPlus, FaRegEdit } from "react-icons/fa";
import { IoIosCopy } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { AiOutlineSearch } from "react-icons/ai";

function ContactHome() {
  const contacts = [
    {
      name: "John Doe",
      contactNumber: "123456789",
      createdAt: "12/12/2022",
    },
    {
      name: "Narendra",
      contactNumber: "122346789",
      createdAt: "22/12/2012",
    },
  ];

  return (
    <div className="w-full h-full flex justify-center overflow-y-auto px-8 py-5">
      <div className="bg-white p-6 rounded-md w-full">
        <div className="flex w-full justify-between items-center mb-4">
          <div className="flex items-center">
            <div className="relative w-full">
              <input
                type="text"
                className="w-full p-2 pl-10 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="Search here"
              />
              <AiOutlineSearch className="absolute top-2.5 left-3 text-gray-400" />
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 border border-gray-500 px-4 py-2 rounded-md ">
              <FaFileImport />
              Import
            </button>
            <button className="flex items-center gap-2 border border-gray-500 px-4 py-2 rounded-md ">
              <FaFileImport />
              Export
            </button>
            <button className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-700">
              <FaPlus />
              Create Contact
            </button>
          </div>
        </div>

        <table className="w-full border-collapse bg-white text-left text-sm text-gray-600 shadow-sm">
          <thead className=" text-gray-800 font-medium">
            <tr>
              <th className="px-4 py-3 border-b">Name</th>
              <th className="px-4 py-3 border-b">Contact Number</th>
              <th className="px-4 py-3 border-b">Created At</th>
              <th className="px-4 py-3 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact, index) => (
              <tr
                key={index}
                className={`hover:bg-gray-50 ${
                  index % 2 === 0 ? "bg-gray-50" : "bg-white"
                }`}
              >
                <td className="px-4 py-3 border-b">{contact.name}</td>
                <td className="px-4 py-3 border-b">{contact.contactNumber}</td>
                <td className="px-4 py-3 border-b">{contact.createdAt}</td>
                <td className="px-4 py-3 border-b flex gap-2">
                  <button
                    className="p-2 text-blue-500 hover:bg-blue-50 rounded-md"
                    title="Edit"
                  >
                    <FaRegEdit />
                  </button>
                  <button
                    className="p-2 text-green-500 hover:bg-green-50 rounded-md"
                    title="Copy"
                  >
                    <IoIosCopy />
                  </button>
                  <button
                    className="p-2 text-red-500 hover:bg-red-50 rounded-md"
                    title="Delete"
                  >
                    <MdDelete />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ContactHome;
