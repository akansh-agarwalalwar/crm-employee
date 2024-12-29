import React from "react";
import { FaFileInvoice } from "react-icons/fa";
import { FaClock } from "react-icons/fa6";
import { TiTick } from "react-icons/ti";
import { RxCross2 } from "react-icons/rx";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { FaEye } from "react-icons/fa";
import { FaDownload } from "react-icons/fa6";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function HomeDashboard() {
  const menuitems = [
    {
      label: "Total Leads",
      icon: <FaFileInvoice />,
      number: "1234",
      bgColor: "bg-[#03346E]",
      iconColor: "text-white",
    },
    {
      label: "Pending",
      icon: <FaClock />,
      number: "42",
      bgColor: "bg-[#FEF9C3]",
      iconColor: "text-[#CA8A04]",
    },
    {
      label: "Approved",
      icon: <TiTick />,
      number: "12",
      bgColor: "bg-[#DCFCE7]",
      iconColor: "text-[#16A34A]",
    },
    {
      label: "Rejected",
      icon: <RxCross2 />,
      number: "50",
      bgColor: "bg-[#FEE2E2]",
      iconColor: "text-[#DC2626]",
    },
  ];

  const data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Leads",
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: true,
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        tension: 0.4,
        pointBackgroundColor: "rgba(75, 192, 192, 1)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgba(75, 192, 192, 1)",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        // position: 'top',
      },
      title: {
        // display: true,
        // text: 'Leads Overview (Last 7 Months)',
      },
    },
  };

  const recentLeads = [
    {
      id: "LEAD-2024-001",
      date: "2024-01-15",
      amount: "$500",
      status: "Pending",
    },
    {
      id: "LEAD-2024-002",
      date: "2024-01-16",
      amount: "$750",
      status: "Approved",
    },
    {
      id: "LEAD-2024-003",
      date: "2024-01-17",
      amount: "$300",
      status: "Rejected",
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "Approved":
        return "text-[#16A34A] bg-[#DCFCE7]";
      case "Pending":
        return "text-[#CA8A04] bg-[#FEF9C3]";
      case "Rejected":
        return "bg-[#FEE2E2] text-[#DC2626]";
      default:
        return "text-gray-500";
    }
  };

  return (
    <div className="flex w-full overflow-y-auto scrollbar-hide flex-col px-40 bg-white">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4 ">
        {menuitems.map((item, index) => (
          <div
            key={index}
            className="p-4 rounded-lg flex items-center justify-between bg-white border-2 border-[#E5E7EB]"
          >
            <div className="flex items-center gap-2">
              <div
                className={`p-2 rounded-full ${item.bgColor} ${item.iconColor}`}
              >
                {item.icon}
              </div>
              <div>
                <p className="text-gray-800 font-semibold">{item.label}</p>
                <p className="text-gray-800 text-lg">{item.number}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex gap-4 justify-between mt-4">
        <div className="bg-white p-4 rounded-md flex flex-col gap-4 w-2/3 border-2 border-[#E5E7EB]">
          <h1 className="font-semibold">Leads Overview</h1>
          <Line data={data} options={options} />
        </div>
        <div className="bg-white p-4 rounded-md flex flex-col gap-4 w-1/3 border-2 border-[#E5E7EB]">
          <h1 className="font-semibold">Recent Activity</h1>
          <div className="flex gap-4 items-center">
            <div className="p-2 rounded-full bg-[#FEE2E2] text-[#03346E]">
              <FaFileInvoice />
            </div>
            <div className="flex flex-col">
              <div className="font-semibold text-sm">
                Lead #LEAD-2024-001 created
              </div>
              <div className="text-xs">2 Hours Ago</div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 mt-4 p-4 rounded-md bg-white mb-4 border-2 border-[#E5E7EB]">
        <h1 className="font-semibold">Recent Leads</h1>
        <table className="w-full text-left">
          <thead>
            <tr>
              <th className="px-4 py-2 border-b text-[#6B7280]">Lead ID</th>
              <th className="px-4 py-2 border-b text-[#6B7280]">Date</th>
              <th className="px-4 py-2 border-b text-[#6B7280]">Amount</th>
              <th className="px-4 py-2 border-b text-[#6B7280]">Status</th>
              <th className="px-4 py-2 border-b text-[#6B7280]">Actions</th>
            </tr>
          </thead>
          <tbody>
            {recentLeads.map((lead, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="px-4 py-2 border-b font-semibold"># {lead.id}</td>
                <td className="px-4 py-2 border-b text-[#6B7280]">{lead.date}</td>
                <td className="px-4 py-2 border-b text-[#111827]" >{lead.amount}</td>
                <td className="px-4 py-2 border-b">
                  <span className={`px-3 py-1 rounded-xl ${getStatusColor(lead.status)}`}>
                    {lead.status}
                  </span>
                </td>
                <td className="px-4 py-2 border-b gap-2 text-[#6B7280]">
                  <button className="hover:underline">
                    <FaEye />
                  </button>
                  <button className="hover:underline ml-4">
                    <FaDownload />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default HomeDashboard;
