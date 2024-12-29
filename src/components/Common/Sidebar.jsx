import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { FaUserTie } from "react-icons/fa";
import { FaComments } from "react-icons/fa";
import { FaChartLine } from "react-icons/fa";
import { FaCogs } from "react-icons/fa";
import { FaBroadcastTower } from "react-icons/fa";
import { CiMenuBurger } from "react-icons/ci";
import Profile from "../../assets/profile.png";

const menuItems = [
  { title: "Dashboard", icon: MdDashboard, link: "/" },
  { title: "Chats", icon: FaComments, link: "chats" },
  { title: "Leads", icon: FaChartLine, link: "leads" },
  { title: "Automation", icon: FaCogs, link: "automation" },
  { title: "Broadcast", icon: FaBroadcastTower, link: "broadcast" },
];

function Sidebar() {
  const navigation = useNavigate();
  const profileClick = () => {
    navigation("/profile");
  };
  return (
    <div className="h-screen w-[80px] bg-gray-900 text-white flex flex-col items-center py-5">
      <div className="text-2xl cursor-pointer mb-14">
        <CiMenuBurger />
      </div>
      <div onClick={profileClick} className="mb-14 cursor-pointer">
        <img src={Profile} alt="profile" className="w-12 h-12 rounded-full" />
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
