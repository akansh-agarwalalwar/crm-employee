import React, { useState, useEffect } from "react";
import axios from "axios";
import { BiSearch } from "react-icons/bi";
import { MdArrowDropDown } from "react-icons/md";
import profile from "../../../assets/profile.svg";
import { useNavigate } from "react-router-dom";
function Sidebar({ setSelectedChat }) {
  const [phoneNumbers, setPhoneNumbers] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("http://localhost:4000/api/whatsapp/getChats")
      .then((response) => {
        setPhoneNumbers(response.data);
      })
      .catch((error) => {
        console.error("Error fetching phone numbers:", error);
      });
  }, []);

  
  return (
    <div className="w-[14%] flex flex-col bg-white border-r border-gray-200">
      <div className="p-2 border-gray-200">
        <div className="flex items-center rounded-lg px-4 py-2 border-2">
          <BiSearch className="text-gray-500" fontSize={20} />
          <input
            type="text"
            placeholder="Search chats"
            className="ml-2 w-full bg-transparent focus:outline-none text-sm text-gray-600"
          />
        </div>
      </div>
      <div className="p-2">
        <div className="w-full bg-white border rounded-lg shadow-sm p-3">
          <select className="w-full text-sm text-gray-600 cursor-pointer">
            <option value="all">All Chats</option>
            <option value="unread">Unread</option>
            <option value="open">Open</option>
            <option value="blocked">Blocked</option>
          </select>
        </div>
      </div>
      <hr className="border-gray-200" />
      <div className="flex-1 overflow-y-auto">
        {phoneNumbers.map((item, index) => (
          <div
            key={index}
            onClick={() =>
              setSelectedChat({
                phoneNumber: item.phoneNumber,
                phoneNumberId: item.phoneNumberId,
              })
            }
            className="flex items-center gap-3 p-4 cursor-pointer hover:bg-gray-200 transition"
          >
            <div className="bg-blue-500 text-white w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold">
              {/* {item.phoneNumber[0]?.toUpperCase()} */}C
            </div>
            <div className="flex-1">
              <h2 className="text-gray-800 font-medium">{item.phoneNumber}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
