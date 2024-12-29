import React, { useState } from "react";
import { IoShareSocial } from "react-icons/io5";
import { CiCirclePlus } from "react-icons/ci";
import { RxCrossCircled } from "react-icons/rx";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMessage } from "react-icons/md";
import { FaClock } from "react-icons/fa6";
import { FaUserAlt } from "react-icons/fa";

function LeadDetails({ lead, onClose }) {
  const [showTransferPopup, setShowTransferPopup] = useState(false);

  const handleTransferLead = () => {
    setShowTransferPopup(true);
  };

  const handleCloseTransferPopup = () => {
    setShowTransferPopup(false);
  };

  const onlineEmployee = [
    {
      name: "John Doe",
      post: "Sales",
    },
    {
      name: "Micheal Doe",
      post: "Manager",
    },
  ];

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      {showTransferPopup ? (
        <div className="bg-white p-6 rounded-md shadow-md w-[50%] z-50 relative">
          <div className="flex justify-between items-center w-full mb-4">
            <h2 className="text-xl font-bold">Team Members</h2>
            <div
              className="cursor-pointer flex items-center bg-[#DCFCE7] gap-2 rounded-xl p-1 px-2"
              onClick={handleCloseTransferPopup}
            >
              <div className="h-2 w-2 rounded-full bg-[#22C55E] "></div>
              <p className="text-xs">Available</p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              {onlineEmployee.map((employee) => (
                <div className="flex items-center gap-2 justify-between">
                  <div className="flex gap-3 items-center">
                    <div className="bg-[#F3F4F6] rounded-full p-3 text-gray-500">
                      <FaUserAlt />
                    </div>
                    <div>
                      <p>{employee.name}</p>
                      <p className="text-gray-500">{employee.post}</p>
                    </div>
                  </div>
                  <div className="bg-[#03346E] p-2 rounded-2xl text-white px-3">
                    Transfer
                  </div>
                </div>
              ))}
            </div>
            <button
              className="bg-[#00BBFF] p-2 rounded-md text-white"
              onClick={handleCloseTransferPopup}
            >
              Back
            </button>
          </div>
        </div>
      ) : (
        <div className="bg-white p-6 rounded-md shadow-md w-[80%] z-50 relative">
          <div className="flex justify-between items-center w-full mb-4">
            <div className="flex flex-col">
              <p className="font-bold text-2xl">Package Details</p>
              <p>View and manage your travel package information</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-2 p-2 px-2 border-[#16A34A] border rounded-md">
                <IoShareSocial />
                <p>Share</p>
              </div>
              <div className="flex items-center gap-2 p-2 bg-[#03346E] text-white rounded-md">
                <CiCirclePlus />
                <p>Create EMI</p>
              </div>
              <div className="flex items-center gap-2 p-2 bg-[#03346E] text-white rounded-md">
                <CiCirclePlus />
                <p>Charges</p>
              </div>
              <div
                className="flex items-center cursor-pointer"
                onClick={onClose}
              >
                <RxCrossCircled size={24} />
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center w-full gap-3 relative ">
            <div className="bg-gray-050 p-2 w-1/4">
              <p>Package Information</p>
              <div className="flex flex-col mt-2">
                <p>Proposal Id</p>
                <p>456654018105250</p>
              </div>
              <div className="flex flex-col mt-2">
                <p>Destination</p>
                <p>Goa Trip</p>
              </div>
              <div className="flex flex-col mt-2">
                <p>Duration</p>
                <p>3D-2N</p>
              </div>
              <div className="flex flex-col mt-2">
                <p>Members</p>
                <p>2 Adults, 1 Child</p>
              </div>
              <div className="flex flex-col mt-2">
                <p>Price</p>
                <p>8,999 /-</p>
              </div>
              <div className="mt-2 rounded-xl text-center text-white bg-[#03346E] p-1">
                Get Code
              </div>
              <div className="mt-2 rounded-md text-center bg-white p-1 border-2 ">
                Generate Invoice
              </div>
            </div>
            <div className="p-2 w-3/4 flex flex-col justify-between relative gap-4">
              <div className="flex flex-col bg-gray-050 p-2 rounded-md border-2 border-gray-200">
                <div>Touch Points</div>
                <div className="flex items-center gap-2 mt-2 justify-between bg-white p-2">
                  <div className="flex items-center gap-2">
                    <div className="bg-[#DCFCE7] text-[#16A34A] p-2 rounded-full">
                      <FaPhoneAlt />
                    </div>
                    <div>
                      <div>Call by Employee</div>
                      <div>2:00 PM</div>
                    </div>
                  </div>
                  <div className="bg-[#DCFCE7] text-[#166534] px-3 rounded-xl">
                    Completed
                  </div>
                </div>
                <div className="flex items-center gap-2 mt-2 justify-between bg-white p-2">
                  <div className="flex items-center gap-2">
                    <div className="bg-[#DBEAFE] text-[#2563EB] p-2 rounded-full">
                      <MdOutlineMessage />
                    </div>
                    <div>
                      <div>Proposal Sent</div>
                      <div>2:00 PM</div>
                    </div>
                  </div>
                  <div className="bg-[#DBEAFE] text-[#1E40AF] px-3 rounded-xl">
                    Sent
                  </div>
                </div>
                <div className="flex items-center gap-2 mt-2 justify-between bg-white p-2">
                  <div className="flex items-center gap-2">
                    <div className="bg-[#FEF9C3] text-[#CA8A04] p-2 rounded-full">
                      <FaClock />
                    </div>
                    <div>
                      <div>Call by Employee</div>
                      <div>2:00 PM</div>
                    </div>
                  </div>
                  <div className="bg-[#FEF9C3] text-[#854D0E] px-3 rounded-xl">
                    Pending
                  </div>
                </div>
              </div>
              <div
                className="flex justify-center p-2 w-full px-20 border-2 cursor-pointer"
                onClick={handleTransferLead}
              >
                <p className="items-center text-center w-[80%]">
                  Transfer Lead
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default LeadDetails;
