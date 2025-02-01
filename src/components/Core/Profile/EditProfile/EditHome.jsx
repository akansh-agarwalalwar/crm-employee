import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PersonalDetails from "./PersonalDetails";
import ContactDetails from "./ContactDetails";
import EducationQuali from "./EducationQuali";
import Jobdetails from "./Jobdetails";
import Idcard from "./idcard";

function EditHome() {
  const [activeTab, setActiveTab] = useState("Personal Details");
  const navigate = useNavigate();
  const tabs = [
    {
      name: "Personal Details",
      component: <PersonalDetails />,
    },
    {
      name: "Contact Details",
      component: <ContactDetails />,
    },
    {
      name: "Educational Qualifications",
      component: <EducationQuali />,
    },
    {
      name: "Job Details",
      component: <Jobdetails />,
    },
    {
      name: "ID Card",
      component: <Idcard />,
    },
  ];

  const activeComponent = tabs.find((tab) => tab.name === activeTab)?.component;

  return (
    <div className="relative h-screen bg-[#EEF5FF]">
      <div className="px-20 mt-5">
        <div className="w-full flex bg-white p-4 rounded-md">
          <p className="font-semibold">
            <span
              className="cursor-pointer hover:underline"
              onClick={() => navigate("/")}
            >
              Dashboard
            </span>{" "}
            &gt;{" "}
            <span
              className="cursor-pointer hover:underline"
              onClick={() => navigate("/profile")}
            >
              Profile
            </span>{" "}
            &gt;
            <span
              className="cursor-pointer hover:underline"
              onClick={() => navigate("/profile/edit-profile")}
            >
              {" "}
              Edit Profile &gt; {activeTab}
            </span>
          </p>
        </div>
        <div className="w-full flex flex-row gap-10">
          <div className="h-[400px] p-5 rounded-md w-1/4 bg-white shadow-md mt-10 overflow-y-auto">
            {tabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(tab.name)}
                className={`w-full px-4 py-5 text-sm font-medium text-center mb-3 ${
                  activeTab === tab.name
                    ? "bg-[#FFC20E] text-white"
                    : "bg-gray-050 text-black"
                } rounded-md transition-all duration-300`}
              >
                {tab.name}
              </button>
            ))}
          </div>
          <div className="h-auto p-2 rounded-md w-3/4 bg-white shadow-md mt-10">
            {activeComponent}
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditHome;
