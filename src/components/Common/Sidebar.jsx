import React from "react";
import { Link } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { FaUserTie } from "react-icons/fa";
import { FaComments } from "react-icons/fa";
import { FaChartLine } from "react-icons/fa";
import { FaCogs } from "react-icons/fa";
import { FaBroadcastTower } from "react-icons/fa";
import { CiMenuBurger } from "react-icons/ci";

const menuItems = [
  { title: "Dashboard", icon: MdDashboard, link: "/" },
  { title: "Employee", icon: FaUserTie, link: "employee" },
  { title: "Chats", icon: FaComments, link: "chats" },
  { title: "Leads", icon: FaChartLine, link: "/" },
  { title: "Automation", icon: FaCogs, link: "/" },
  { title: "Broadcast", icon: FaBroadcastTower, link: "/" },
];

function Sidebar() {
  return (
    <div className="h-screen w-[80px] bg-gray-900 text-white flex flex-col items-center py-5">
      <div className="text-2xl cursor-pointer mb-14">
        <CiMenuBurger />
      </div>
      {menuItems.map((item, index) => (
        <Link
          key={index}
          to={item.link}
          className="flex flex-col items-center justify-center mb-8 hover:text-blue-500"
        >
          <item.icon className="text-3xl mb-1" />
          <span className="text-xs font-medium">{item.title}</span>
        </Link>
      ))}
    </div>
  );
}

export default Sidebar;