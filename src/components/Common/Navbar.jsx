import React from "react";
import { Link, useLocation } from "react-router-dom";
import { MdNotificationsNone } from "react-icons/md";
const data = [

  {
    title: "contacts",
    link: "/contacts",
  },
  {
    title: "invoice",
    link: "/invoice",
  },
  {
    title: "itinerary",
    link: "/itinerary",
  },
];

function Navbar() {
  const location = useLocation();
  return (
    <nav className="h-[10vh] w-full flex justify-between items-center text-white bg-gray-900 p-2">
      <div></div>
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
                {/* <item.icon className="text-[20px]" /> */}
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
