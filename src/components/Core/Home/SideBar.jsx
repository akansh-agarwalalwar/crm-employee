import React from "react";
import { BiSearch } from "react-icons/bi";
import { FiFilter } from "react-icons/fi";
import { MdArrowDropDown, MdEdit } from "react-icons/md";
import { leads } from "../../../Data/LeadsDemo";
import { GoDotFill } from "react-icons/go";

function SideBar() {
  return (
    <div className="w-[20%] flex flex-col items-center  bg-white h-full">
      <div className=" w-full flex items-center flex-col gap-3 p-4">
        <div className="flex gap-4 items-center">
          <button className="bg-[#0D92F4] w-[200px] rounded-xl flex p-4 text-white items-center gap-3">
            New Message
            <MdEdit />
          </button>
          <button className="bg-gray-200 text-gray-700 p-2 rounded-lg">
            <BiSearch fontSize={28} />
          </button>
        </div>
        <div className="flex gap-4 items-center">
          <button className="bg-[#0d94f420] w-[200px] rounded-xl flex p-4 text-gray-500 items-center justify-between gap-3">
            New{" "}
            <span className="px-2 text-center bg-red-500 text-white rounded-full ">
              1
            </span>
            <MdArrowDropDown fontSize={24} />
          </button>
          <button className=" text-gray-700 p-2 rounded-lg">
            <FiFilter fontSize={28} />
          </button>
        </div>
      </div>

      <hr className="w-full border-gray-200 border-2 mx-2 my-4" />
      <div>
        {leads.map((item, index) => (
          <div
            key={index}
            className="w-full flex items-center text-start justify-between gap-3 p-4"
          >
            <div className=" relative">
              <img
                src={item.image}
                alt="profilePic"
                className="w-[40px] rounded-full h-[40px]"
              />
              <GoDotFill className=" absolute bottom-0 -right-1 text-[#60D669]" />
            </div>
            <div>
              <h2 className="text-[#808080] font-bold text-[18px]">
                {item.companyName}
              </h2>
              <p className="text-[#666666] text-[12px]">
                {item.date}
                {"  "}
                {item.time}
              </p>
              <p className="text-[#666666] font-medium text-[12px]">hello</p>
            </div>
            <button className=" rounded-lg bg-gray-100 p-2 text-blue-300">
              Open
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SideBar;
