import React from "react";
import { CiSearch } from "react-icons/ci";
import { FaRegUserCircle } from "react-icons/fa";

function ScheduledBroad() {
  const contactList = [
    {
      icon: <FaRegUserCircle />,
      name: "John Doe",
      contactNumber: "1234567890",
    },
    {
      icon: <FaRegUserCircle />,
      name: "Jane Smith",
      contactNumber: "0987654321",
    },
    {
      icon: <FaRegUserCircle />,
      name: "Alice Johnson",
      contactNumber: "1122334455",
    },
    {
      icon: <FaRegUserCircle />,
      name: "Bob Brown",
      contactNumber: "6677889900",
    },
    {
      icon: <FaRegUserCircle />,
      name: "Charlie Davis",
      contactNumber: "2233445566",
    },
  ];

  return (
    <div className="px-80 w-full flex flex-col">
      <div className="flex w-full justify-between items-center mb-6">
        <div className="flex w-full items-center relative">
          <CiSearch className="absolute left-3 text-gray-400" />
          <input
            type="search"
            placeholder="Search"
            className="border-2 w-[70%] pl-10 pr-4 py-2 rounded-md focus:outline-none focus:border-[#22C55E] transition-all duration-300"
          />
        </div>
        <div className="ml-4 flex items-center">
          <button className="bg-[#22C55E] text-white font-bold py-2 px-4 rounded focus:outline-none hover:bg-[#1DAF4A] transition-all duration-300 text-sm">
            Send Now
          </button>
        </div>
      </div>
      <div>
        <div className="bg-[#22C55E] text-white w-full justify-between flex p-2 rounded-t-md">
          <p>Name</p>
          <p>Contact Number</p>
        </div>
        {contactList.map((contact, index) => (
          <div
            key={index}
            className="flex justify-between items-center p-2 border border-gray-200"
          >
            <div className="flex items-center gap-2">
              {contact.icon}
              <p>{contact.name}</p>
            </div>
            <p>{contact.contactNumber}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ScheduledBroad;
