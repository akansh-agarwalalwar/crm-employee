import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/Logo.png";
import { RiInboxArchiveFill } from "react-icons/ri";
import { LuRadioTower } from "react-icons/lu";
import { RiContactsBookFill } from "react-icons/ri";
import { TbSettingsUp } from "react-icons/tb";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdNotificationsNone } from "react-icons/md";
import { GoDotFill } from "react-icons/go";
import user from "../../assets/user.png";
import { CiMenuBurger } from "react-icons/ci";
const data = [
  {
    title: "team inbox",
    icon: RiInboxArchiveFill,
    link: "/",
  },
  {
    title: "contacts",
    icon: LuRadioTower,
    link: "/contacts",
  },
  {
    title: "invoice",
    icon: RiContactsBookFill,
    link: "/calendar",
  },
  {
    title: "itinerary",
    icon: TbSettingsUp,
    link: "/itinerary",
  },
];

function Navbar() {
  const location = useLocation();
  return (
    <nav className="h-[70px] w-full flex justify-between items-center text-white bg-gray-900 p-2">
      <div className="text-2xl ml-5 cursor-pointer">
        <CiMenuBurger />
      </div>
      <ul className="flex justify-between items-center h-full px-4">
        {data.map((item, index) => {
          const isActive = location.pathname === item.link;
          return (
            <li key={index} className="flex items-center mx-4 justify-center ">
              <Link
                to={item.link}
                className={`flex items-center mx-4 gap-4 font-semibold justify-center capitalize ${
                  isActive ? "text-[#00BBFF]" : "text-white"
                }`}
              >
                <item.icon className="text-[20px]" />
                {item.title}
              </Link>
            </li>
          );
        })}
        {/* <HiMenuAlt3 className="text-xs text-white cursor-pointer" /> */}
      </ul>
      <div className="flex items-center justify-start gap-5">
        <MdNotificationsNone className="text-xl text-gray-500 cursor-pointer" />
        <div className="text-start font-semibold w-full flex flex-row gap-10 items-center justify-center">
          <h3 className="text-xs">Connected</h3>
          <h2 className="text-[#00BBFF] text-sm">+91-9817761746</h2>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;