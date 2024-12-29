import React, { useState } from "react";
import { FaFileExport } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoArrowUndo } from "react-icons/io5";
import { IoIosArrowDropdown } from "react-icons/io";
import Followup from "./Followup";
import LeadDetails from "./LeadDetails";
import CreateLead from "./CreateLead";

function LeadHome() {
  const [showFollowup, setShowFollowup] = useState(false);
  const [packageDetails, setPackageDetails] = useState(false);
  const [createLead, setCreateLead] = useState(false);
  const [selectedLead, setSelectedLead] = useState(null);

  const leadsDetails = [
    {
      leadName: "John Doe",
      leadEmail: "124ad@gmail.com",
      leadPhone: "1234567890",
      queries: "12",
      status: "Proposal Approved",
      lastUpdated: "10/10/2022",
      owner: "John Doe",
    },
    {
      leadName: "Jane Smith",
      leadEmail: "jane.smith@gmail.com",
      leadPhone: "0987654321",
      queries: "8",
      status: "Proposal Pending",
      lastUpdated: "11/11/2022",
      owner: "Jane Smith",
    },
    {
      leadName: "Alice Johnson",
      leadEmail: "alice.johnson@gmail.com",
      leadPhone: "1122334455",
      queries: "5",
      status: "Proposal Rejected",
      lastUpdated: "12/12/2022",
      owner: "Alice Johnson",
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "Proposal Pending":
        return "bg-[#DBEAFE] text-[#1E40AF]";
      case "Proposal Approved":
        return "bg-[#DCFCE7] text-[#166534]";
      case "Proposal Rejected":
        return "bg-[#FEE2E2] text-[#991B1B]";
      default:
        return "bg-white";
    }
  };

  const handleFollowUpClick = (lead) => {
    setSelectedLead(lead);
    setShowFollowup(true);
  };

  const handlePackageDetails = (lead) => {
    setSelectedLead(lead);
    setPackageDetails(true);
  };

  const handleCreateLead = () => {
    setCreateLead(true);
  };

  return (
    <div className="relative w-full flex px-20 h-[90vh] flex-col mt-5 overflow-y-auto scrollbar-hide">
      {createLead ? (
        <CreateLead />
      ) : (
        <div
          className={`w-full flex flex-col ${showFollowup ? "blur-sm" : ""} ${
            packageDetails ? "blur-sm" : ""
          }`}
        >
          <div className="w-full flex justify-between items-center border p-2 bg-white">
            <div className="flex items-center gap-4 ">
              <p className="font-semibold text-2xl">Leads</p>
              <p className="bg-gray-100 p-1 rounded-xl w-12 text-center text-lg font-semibold">
                300
              </p>
            </div>
            <div className="flex gap-3">
              <div>
                <input
                  type="text"
                  placeholder="Search Leads..."
                  className="p-2 border-2 rounded-md"
                />
              </div>
              <div className="flex gap-2 items-center border-2 p-2 rounded-md">
                <FaFileExport />
                <p>Export</p>
              </div>
              <div
                className="flex gap-2 items-center bg-black text-white p-2 rounded-md cursor-pointer"
                onClick={handleCreateLead}
              >
                <FaPlus />
                <p>Create Lead</p>
              </div>
            </div>
          </div>
          <table className="w-full bg-white rounded-md">
            <thead className="bg-gray-050 border">
              <tr>
                <th className="p-2 text-center">Lead Name</th>
                <th className="p-2 text-center">Lead Email</th>
                <th className="p-2 text-center">Lead Phone</th>
                <th className="p-2 text-center">Queries</th>
                <th className="p-2 text-center">Status</th>
                <th className="p-2 text-center">Last Updated</th>
                <th className="p-2 text-center">Owner</th>
                <th className="p-2 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {leadsDetails.map((lead, index) => (
                <tr key={index} className="border border-gray-200">
                  <td className="p-2 text-center">{lead.leadName}</td>
                  <td className="p-2 text-center">{lead.leadEmail}</td>
                  <td className="p-2 text-center">{lead.leadPhone}</td>
                  <td className="p-2 text-center">{lead.queries}</td>
                  <td className="p-2 text-center">
                    <span
                      className={`px-2 py-1 rounded-xl text-sm ${getStatusColor(
                        lead.status
                      )}`}
                    >
                      {lead.status}
                    </span>
                  </td>
                  <td className="p-2 text-center">{lead.lastUpdated}</td>
                  <td className="p-2 text-center">{lead.owner}</td>
                  <td className="p-2 flex gap-2 text-gray-600 cursor-pointer items-center justify-center">
                    <div className="flex items-center gap-2 text-[#16A34A] border-[#16A34A] border p-2 rounded-md">
                      <FaPhoneAlt />
                      <p>Call</p>
                    </div>
                    <div
                      className="flex items-center gap-2 text-white bg-[#EF4444] p-2 rounded-md"
                      onClick={() => handleFollowUpClick(lead)}
                    >
                      <IoArrowUndo />
                      <p>Follow Up</p>
                    </div>
                    <IoIosArrowDropdown
                      className="text-[#FFC20E] cursor-pointer"
                      size={34}
                      onClick={() => handlePackageDetails(lead)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {showFollowup && (
        <Followup lead={selectedLead} onClose={() => setShowFollowup(false)} />
      )}
      {packageDetails && (
        <LeadDetails
          lead={selectedLead}
          onClose={() => setPackageDetails(false)}
        />
      )}
    </div>
  );
}

export default LeadHome;
