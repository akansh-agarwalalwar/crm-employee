import React from "react";
import { MdOutlineArrowCircleLeft } from "react-icons/md";
import { BsFillSendFill } from "react-icons/bs";

function CreateLead() {
  return (
    <div className="flex w-full justify-center px-40 overflow-y-auto ">
      <MdOutlineArrowCircleLeft size={40} className="mt-4" />
      <div className="bg-white p-4 rounded-md shadow-md w-full h-auto overflow-y-auto scrollbar-hide ">
        <div className="flex w-full justify-between items-center">
          <p className="text-xl font-semibold">Create Lead</p>
          <p className="border-2 p-2 rounded-md px-5 text-sm">
            Proposal ID: 1234567890
          </p>
        </div>
        <div>Please fill in the information below to create a new lead.</div>
        <div className="flex flex-col gap-4 mt-4">
          <div className="flex flex-col">
            <label>
              First Name<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Enter Full Name"
              className="w-full border-2 p-1 rounded-md"
            />
            <p className="text-xs text-gray-500">
              Enter your first and last name
            </p>
          </div>
          <div className="flex flex-col">
            <label>
              Email Address<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="example@example.com"
              className="w-full border-2 p-1 rounded-md"
            />
            <p className="text-xs text-gray-500">
              We'll never share your email with anyone else
            </p>
          </div>
          <div className="flex flex-col">
            <label>
              Phone Number<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="example@example.com"
              className="w-full border-2 p-1 rounded-md"
            />
            <p className="text-xs text-gray-500">Format: (XXX) XXX-XXXX</p>
          </div>
          <div className="flex items-center gap-4 w-full">
            <div className="flex flex-col w-full">
              <label>
                Select Query Type<span className="text-red-500">*</span>
              </label>
              <select className="w-full border-2 p-1 rounded-md">
                <option className="text-gray-500 text-sm">
                  Select Query Type
                </option>
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
                <option value="3">Option 3</option>
              </select>
            </div>
            <div className="flex flex-col w-full">
              <label>
                Query Date<span className="text-red-500">*</span>
              </label>
              <input
                type="date"
                placeholder="example@example.com"
                className="w-full border-2 p-1 rounded-md"
              />
            </div>
          </div>
          <div className="flex items-center gap-4 w-full">
            <div className="flex flex-col w-full">
              <label>
                Adult Member<span className="text-red-500">*</span>
              </label>
              <select className="w-full border-2 p-1 rounded-md">
                <option className="text-gray-500 text-sm">
                  Select Adult Member
                </option>
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
                <option value="3">Option 3</option>
              </select>
            </div>
            <div className="flex flex-col w-full">
              <label>Kids</label>
              <select className="w-full border-2 p-1 rounded-md">
                <option className="text-gray-500 text-sm">
                  Select Adult Member
                </option>
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
                <option value="3">Option 3</option>
              </select>
            </div>
          </div>
          <div className="">
            <label className="">Query Details</label>
            <input
              type="text"
              className="border-2 p-1 rounded-md w-full"
              placeholder="Enter any additional information about the lead..."
            />
          </div>
          <div className="">
            <label className="">Attachments</label>
            <input
              type="file"
              className="border-2 p-1 rounded-md w-full"
              placeholder="Enter any additional information about the lead..."
            />
          </div>
          <div className="flex w-full justify-center">
            <div className="bg-black text-white items-center gap-2 flex p-2 rounded-md">
              <BsFillSendFill />
              <button className="text-sm text-white py-2">
                Submit Lead
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateLead;
