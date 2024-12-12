import React, { useState } from "react";

function ChatSection() {
  const [messages, setMessages] = useState([
    {
      text: "Hello! How can I help you today?",
      type: "incoming",
      time: "10:30 AM",
    },
    {
      text: "I need some information about your services.",
      type: "outgoing",
      time: "10:32 AM",
    },
    {
      text: "Sure! Please let me know what you need.",
      type: "incoming",
      time: "10:33 AM",
    },
  ]);

  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const currentTime = new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });
      setMessages([
        ...messages,
        { text: newMessage, type: "outgoing", time: currentTime },
      ]);
      setNewMessage("");
    }
  };

  return (
    <div className="flex flex-col w-[60%] h-[90%] bg-[#EEF5FF] relative border-l border-gray-300">
      {/* Chat Header */}
      <div className="flex items-center justify-between bg-[#075E54] text-white px-4 py-3 shadow-md">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full bg-gray-200"></div>
          <div>
            <h3 className="text-lg font-semibold">John Doe</h3>
            <p className="text-sm">Online</p>
          </div>
        </div>
        <div className="flex space-x-4">
          <button className="text-xl">&#x260E;</button>
          <button className="text-xl">&#128247;</button>
          <button className="text-xl">&#8942;</button>
        </div>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex items-start space-x-2 ${
              message.type === "outgoing" ? "justify-end" : ""
            }`}
          >
            {message.type === "incoming" && (
              <div className="w-8 h-8 rounded-full bg-gray-300"></div>
            )}
            <div
              className={`${
                message.type === "outgoing" ? "bg-[#DCF8C6]" : "bg-white"
              } rounded-lg p-3 max-w-[70%] shadow-sm`}
            >
              <p>{message.text}</p>
              <span className="text-xs text-gray-400 block text-right">
                {message.time}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Chat Input */}
      <div className="bg-white -mt-40 px-4 py-2 border-t border-gray-300 flex items-center">
        <button className="text-xl text-gray-500 pr-2">&#128512;</button>
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          className="flex-1 border-none focus:ring-0 focus:outline-none px-2 text-sm"
          placeholder="Type a message"
        />
        <button
          onClick={handleSendMessage}
          className="text-lg text-[#075E54] pl-3 font-medium"
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default ChatSection;
