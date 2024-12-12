import React from "react";
import SideBar from "./SideBar";
import ChatSection from "./ChatSection";
import RightSideBar from "./RightSideBar";
import Navbar from "../../Common/Navbar";

function Home() {
  return (
    <div className="flex flex-col bg-white">
      <div>
        <Navbar />
      </div>
      <div className="flex flex-row h-screen ">
        <SideBar />
        <ChatSection />
        <RightSideBar />
      </div>
    </div>
  );
}

export default Home;
