import React from "react";
import { FaArrowLeftLong } from "react-icons/fa6";

function AddAcademic({ onBack }) {
  return (
    <div className="w-full p-4 overflow-y-auto scrollbar-hide">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-2 cursor-pointer" onClick={onBack}>
          <FaArrowLeftLong size={20} />
          <h1 className="text-xl font-bold">Add Academic</h1>
        </div>
        <div className="text-white bg-[#03346E] p-2 rounded-lg cursor-pointer">
          Take Approval
        </div>
      </div>
      <div className="flex flex-row gap-4 w-full mt-2">
        <div className="flex flex-col gap-2 w-full">
          <label className="font-semibold">Institution Name</label>
          <input
            type="text"
            placeholder="Enter Institution Name"
            className="p-2 bg-[#E3EDF9] rounded-lg"
          />
        </div>
        <div className="flex flex-col gap-2 w-full">
          <label className="font-semibold">Department</label>
          <input
            type="text"
            placeholder="Sales Department"
            className="p-2 bg-[#E3EDF9] rounded-lg"
          />
        </div>
      </div>
      <div className="flex flex-row gap-4 w-full mt-2">
        <div className="flex flex-col gap-2 w-full">
          <label className="font-semibold">Course</label>
          <input
            type="text"
            placeholder="Enter Course Name"
            className="p-2 bg-[#E3EDF9] rounded-lg"
          />
        </div>
        <div className="flex flex-col gap-2 w-full">
          <label className="font-semibold">Location</label>
          <input
            type="text"
            placeholder="Enter Location"
            className="p-2 bg-[#E3EDF9] rounded-lg"
          />
        </div>
      </div>
      <div className="flex flex-row gap-4 w-full mt-2">
        <div className="flex flex-col gap-2 w-full">
          <label className="font-semibold">Start Date</label>
          <input
            type="date"
            placeholder="Enter Course Name"
            className="p-2 bg-[#E3EDF9] rounded-lg"
          />
        </div>
        <div className="flex flex-col gap-2 w-full">
          <label className="font-semibold">End Date</label>
          <input
            type="date"
            placeholder="Enter Location"
            className="p-2 bg-[#E3EDF9] rounded-lg"
          />
        </div>
      </div>
      <div className="flex flex-col gap-2 w-full mt-4">
        <p>Description</p>
        <div className="bg-[#E3EDF9] rounded-lg p-2">
          <ul className="list-disc pl-5 text-xs">
            <li>
              Gathering and evaluating product requirements, in collaboration
              with product managers and the developers
            </li>
            <li>
              Illustrating design ideas using storyboards, process flows, and
              sitemaps.
            </li>
            <li>
              Designing graphic user interface pages and elements, like menus,
              tabs, and widgets.
            </li>
            <li>
              Design wireframes, mockups, storyboards, and fully interactive
              prototype design.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AddAcademic;
