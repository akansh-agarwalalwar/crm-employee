import React from "react";
import personalImage from "../../../../assets/personalImage.png";

function PersonalDetails() {
  return (
    <div className="h-[470px] flex overflow-y-auto scrollbar-hide flex-col w-full p-4 ">
      <div className="w-full flex flex-col items-center">
        <div className="flex w-full p-2 text-right">
          <p className="text-right flex w-full text-gray-600">ID: 1234567890</p>
        </div>
        <div className="flex flex-col items-center">
          <img
            src={personalImage}
            alt="Personal Image"
            className="h-32 w-32 rounded-full border-2 border-gray-300"
          />
          <div className="flex flex-col text-center mt-4 gap-1">
            <p className="text-black">Employee Name</p>
            <p className="font-bold text-2xl text-gray-800">John Doe</p>
          </div>
          <div className="flex flex-col text-center mt-4 gap-1">
            <p className="text-black">Department</p>
            <p className="font-bold text-2xl text-gray-800">
              Design & Marketing
            </p>
          </div>
          <div className="flex flex-row justify-around w-full mt-12 gap-32">
            <div className="flex flex-col text-center">
              <p className="text-black">Job Title</p>
              <p className="font-bold text-xl text-gray-800">UI/UX Designer</p>
            </div>
            <div className="flex flex-col text-center">
              <p className="text-black">Job Category</p>
              <p className="font-bold text-xl text-gray-800">Full Time</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PersonalDetails;
