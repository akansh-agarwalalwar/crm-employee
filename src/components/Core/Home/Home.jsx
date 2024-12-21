import React, { useState } from "react";
import SideBar from "./SideBar";
import ChatSection from "./ChatSection";
import RightSideBar from "./RightSideBar";
import Navbar from "../../Common/Navbar";

function Home() {
  const [selectedChat, setSelectedChat] = useState({
    phoneNumber: "",
    phoneNumberId: "",
  });

  return (
    <div className="flex flex-row h-[90vh]">
      <SideBar setSelectedChat={setSelectedChat} />
      <ChatSection key={selectedChat.phoneNumber} selectedChat={selectedChat} />
      <RightSideBar />
    </div>
  );
}

export default Home;
