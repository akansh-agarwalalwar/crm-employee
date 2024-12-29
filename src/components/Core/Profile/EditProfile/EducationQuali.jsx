import React, { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import AddAcademic from "./AddAcademic";

function EducationQuali() {
  const [showAddAcademic, setShowAddAcademic] = useState(false);

  if (showAddAcademic) {
    return <AddAcademic onBack={() => setShowAddAcademic(false)} />;
  }

  return (
    <div className="w-full p-4 ">
      <div className="w-full justify-between flex items-center">
        <p className="font-semibold">Academic Records</p>
        <div
          className="items-center p-2 bg-[#00BBFF] text-white cursor-pointer"
          onClick={() => setShowAddAcademic(true)}
        >
          <FaPlus />
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col mt-4 bg-[#E3EDF9] px-5 py-3 rounded-lg ">
          <p>Jimma University</p>
          <p className="text-xs text-gray-400">B.Sc in Computer Science</p>
        </div>
      </div>
    </div>
  );
}

export default EducationQuali;
