import React from "react";

function Jobdetails() {
  return (
    <div className="w-full p-4">
      <div className="flex flex-row w-full justify-between">
        <p className="font-bold">Documents</p>
        <div className="bg-[#253D90] text-white rounded-lg p-2">
          Upload Documents
        </div>
      </div>
      <div className="flex flex-col gap-2 mt-4 bg-[#E3EDF9] p-4 rounded-lg cursor-pointer">
        <p className="font-semibold">Degree.pdf</p>
        <p>Uploaded At: 2024-12-12</p>
      </div>
    </div>
  );
}

export default Jobdetails;
