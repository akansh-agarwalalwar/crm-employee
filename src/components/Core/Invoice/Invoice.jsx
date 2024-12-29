import React, { useState } from "react";
import DraftInvoice from "./DraftInvoice";
import DueInvoice from "./DueInvoice";
import CreateInvoice from "./CreateInvoice";

function Invoice() {
  const [showCreateItineary, setShowCreateItineary] = useState(false);
  const [showFD, setShowFD] = useState(false);
  const [setshowDraft, setSetshowDraft] = useState(false);

  const itinearyDetails = [
    {
      tripName: "Trip to Goa",
      createdAt: "Created on Jan 15, 2024",
      status: "Proposal Pending",
    },
    {
      tripName: "Trip to Goa",
      createdAt: "Created on Jan 15, 2024",
      status: "Proposal Approved",
    },
    {
      tripName: "Trip to Goa",
      createdAt: "Created on Jan 15, 2024",
      status: "Proposal Rejected",
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "Proposal Approved":
        return "bg-[#87FC90] text-[#16A34A]";
      case "Proposal Pending":
        return "bg-[#FEF9C3] text-[#854D0E]";
      case "Proposal Rejected":
        return "bg-[#FDD4D4] text-[#FF0000]";
      default:
        return "bg-white";
    }
  };

  if (showCreateItineary) {
    return <CreateInvoice onBack={() => setShowCreateItineary(false)} />;
  }

  if (showFD) {
    return <DueInvoice onBack={() => setShowFD(false)} />;
  }
  
  if (setshowDraft) {
    return <DraftInvoice onBack={() => setSetshowDraft(false)} />;
  }

  return (
    <div className="w-full flex justify-center px-60 flex-col overflow-y-auto scrollbar-hide">
      <div className="w-full p-4 justify-between items-center flex">
        <h1 className="font-bold text-xl">All Itineary</h1>
        <div className="flex gap-4">
          <button
            className="bg-black text-white p-2 rounded-lg items-center"
            onClick={() => setShowCreateItineary(true)}
          >
            New Invoice
          </button>
          <button
            className="border-black border-2 p-2 rounded-lg items-center"
            onClick={() => setSetshowDraft(true)}
          >
            Draft Invoice
          </button>
          <button
            className="border-black border-2 p-2 rounded-lg items-center"
            onClick={() => setShowFD(true)}
          >
            Due Amounts
          </button>
        </div>
      </div>
      <div className="w-full">
        {itinearyDetails.map((item, index) => (
          <div key={index} className="bg-white p-4 shadow-sm w-full">
            <div className="flex justify-between items-center">
              <h2 className="font-bold text-lg">{item.tripName}</h2>
              <div
                className={`text-sm p-1 rounded-xl ${getStatusColor(
                  item.status
                )}`}
              >
                {item.status}
              </div>
              <div className="flex gap-4">
                <button className="border-black p-2 rounded-lg items-center border-2">
                  Edit
                </button>
                <button className="border-black p-2 rounded-lg items-center border-2">
                  View
                </button>
              </div>
            </div>
            <div className="text-gray-500 text-sm">{item.createdAt}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Invoice;
