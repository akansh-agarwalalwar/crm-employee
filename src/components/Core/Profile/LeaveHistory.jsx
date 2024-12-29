import React from "react";
import { useNavigate } from "react-router-dom";

function LeaveHistory() {
  const navigate = useNavigate();

  const leaves = [
    {
      id: 1,
      name: "John Doe",
      duration: "02",
      startDate: "2022-08-01",
      endDate: "2022-08-05",
      type: "Sick Leave",
      reason: "Flu",
      action: "Approved",
    },
    {
      id: 2,
      name: "Jane Smith",
      duration: "02",
      startDate: "2022-09-10",
      endDate: "2022-09-12",
      type: "Casual Leave",
      reason: "Personal Work",
      action: "Approved",
    },
    {
      id: 3,
      name: "Alice Johnson",
      duration: "02",
      startDate: "2022-10-15",
      endDate: "2022-10-20",
      type: "Vacation",
      reason: "Family Trip",
      action: "Pending",
    },
    {
      id: 4,
      name: "Alice Johnson",
      duration: "02",
      startDate: "2022-10-15",
      endDate: "2022-10-20",
      type: "Vacation",
      reason: "Family Trip",
      action: "Pending",
    },
    {
      id: 5,
      name: "Alice Johnson",
      duration: "02",
      startDate: "2022-10-15",
      endDate: "2022-10-20",
      type: "Vacation",
      reason: "Family Trip",
      action: "Approved",
    },
    {
      id: 6,
      name: "Alice Johnson",
      duration: "02",
      startDate: "2022-10-15",
      endDate: "2022-10-20",
      type: "Vacation",
      reason: "Family Trip",
      action: "Declined",
    },
    {
      id: 7,
      name: "Alice Johnson",
      duration: "02",
      startDate: "2022-10-15",
      endDate: "2022-10-20",
      type: "Vacation",
      reason: "Family Trip",
      action: "Declined",
    },
    {
      id: 8,
      name: "Alice Johnson",
      duration: "02",
      startDate: "2022-10-15",
      endDate: "2022-10-20",
      type: "Vacation",
      reason: "Family Trip",
      action: "Approved",
    },
    {
      id: 9,
      name: "Alice Johnson",
      duration: "02",
      startDate: "2022-10-15",
      endDate: "2022-10-20",
      type: "Vacation",
      reason: "Family Trip",
      action: "Pending",
    },
    {
      id: 10,
      name: "Alice Johnson",
      duration: "02",
      startDate: "2022-10-15",
      endDate: "2022-10-20",
      type: "Vacation",
      reason: "Family Trip",
      action: "Approved",
    },
    
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "Pending":
        return "bg-[#FF9933] text-white";
      case "Declined":
        return "bg-red-500 text-white";
      case "Approved":
        return "bg-[#60D669] text-white";
      default:
        return "";
    }
  };

  return (
    <div className="h-auto bg-white p-4 rounded-lg shadow-md mb-5">
      <div className="flex justify-between items-center w-full mb-2">
        <h2 className="text-xl font-bold mb-4">Leave History</h2>
        <button
          className="bg-[#FFC20E] p-2 rounded-xl text-white px-8"
          onClick={() => navigate("/apply-leave")}
        >
          Apply Leave
        </button>
      </div>
      <div>
        <table
          className="w-full border-separate"
          style={{ borderSpacing: "0 10px" }}
        >
          <thead className="bg-[#E3EDF9]">
            <tr>
              <th className="border-gray-200 px-4 py-2 text-center font-semibold text-gray-600">
                Name
              </th>
              <th className="border-gray-200 px-4 py-2 text-center font-semibold text-gray-600">
                Duration
              </th>
              <th className="border-gray-200 px-4 py-2 text-center font-semibold text-gray-600">
                Start Date
              </th>
              <th className="border-gray-200 px-4 py-2 text-center font-semibold text-gray-600">
                End Date
              </th>
              <th className="border-gray-200 px-4 py-2 text-center font-semibold text-gray-600">
                Type
              </th>
              <th className="border-gray-200 px-4 py-2 text-center font-semibold text-gray-600">
                Reasons
              </th>
              <th className="border-gray-200 px-4 py-2 text-center font-semibold text-gray-600">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {leaves.map((leave, index) => (
              <tr
                key={leave.id}
                className={`${index % 2 !== 0 ? "bg-[#E3EDF9]" : ""}`}
              >
                <td className="px-4 py-2 text-center">{leave.name}</td>
                <td className="px-4 py-2 text-center">{leave.duration}</td>
                <td className="px-4 py-2 text-center">{leave.startDate}</td>
                <td className="px-4 py-2 text-center">{leave.endDate}</td>
                <td className="px-4 py-2 text-center">{leave.type}</td>
                <td className="px-4 py-2 text-center">{leave.reason}</td>
                <td
                  className={`px-4 py-2 text-center p-2 rounded-md ${getStatusColor(
                    leave.action
                  )}`}
                >
                  {leave.action}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default LeaveHistory;
