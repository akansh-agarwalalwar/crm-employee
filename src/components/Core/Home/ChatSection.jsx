import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { BsSend, BsPaperclip } from "react-icons/bs";
import { MdDelete } from "react-icons/md";

function ChatSection({ selectedChat }) {
  const [chats, setChats] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const chatEndRef = useRef(null);

  useEffect(() => {
    let interval;

    if (selectedChat.phoneNumber) {
      const fetchChatHistory = () => {
        axios
          .get(
            `http://localhost:4000/api/whatsapp/history/${selectedChat.phoneNumber}`
          )
          .then((response) => {
            setChats(response.data.chats || []);
            scrollToBottom();
          })
          .catch((error) => {
            console.error("Error fetching WhatsApp chat history:", error);
          });
      };
      fetchChatHistory();
      interval = setInterval(fetchChatHistory, 10000);
    }
    return () => {
      clearInterval(interval);
    };
  }, [selectedChat]);

  useEffect(() => {
    scrollToBottom();
  }, [chats]);

  const handleSendMessage = () => {
    if (newMessage.trim() !== "" && selectedChat.phoneNumber) {
      axios
        .post("http://localhost:4000/api/whatsapp/send", {
          to: selectedChat.phoneNumber,
          message: newMessage,
          phoneNumberId: selectedChat.phoneNumberId,
        })
        .then(() => {
          setChats((prevChats) => [
            ...prevChats,
            {
              id: Date.now(),
              from: "me",
              message: newMessage,
              createdAt: new Date().toISOString(),
            },
          ]);
          setNewMessage("");
          scrollToBottom();
        })
        .catch((error) => {
          console.error("Error sending WhatsApp message:", error);
        });
    }

    if (selectedFile && selectedChat.phoneNumber) {
      const formData = new FormData();
      formData.append("file", selectedFile);
      formData.append("to", selectedChat.phoneNumber);
      formData.append("phoneNumberId", selectedChat.phoneNumberId);

      axios
        .post("http://localhost:4000/api/whatsapp/send-file", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then(() => {
          setChats((prevChats) => [
            ...prevChats,
            {
              id: Date.now(),
              from: "me",
              message: `Sent a file: ${selectedFile.name}`,
              createdAt: new Date().toISOString(),
            },
          ]);
          setSelectedFile(null);
          scrollToBottom();
        })
        .catch((error) => {
          console.error("Error sending file:", error);
        });
    }
  };

  const handleDeleteFile = () => {
    setSelectedFile(null);
  };

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const formatDateGroup = (date) => {
    const today = new Date();
    const messageDate = new Date(date);

    const isToday = today.toDateString() === messageDate.toDateString();
    const isYesterday =
      new Date(today.setDate(today.getDate() - 1)).toDateString() ===
      messageDate.toDateString();

    if (isToday) return "Today";
    if (isYesterday) return "Yesterday";
    return messageDate.toLocaleDateString();
  };

  const groupedChats = chats.reduce((groups, chat) => {
    const group = formatDateGroup(chat.createdAt);
    if (!groups[group]) {
      groups[group] = [];
    }
    groups[group].push(chat);
    return groups;
  }, {});

  return (
    <div className="flex flex-col w-[60%] bg-[#EEF5FF] relative border-l border-gray-300">
      <div className="flex items-center w-full justify-center bg-[#075E54] text-white px-4 py-3 shadow-md">
        <h3 className="text-lg font-semibold text-center">
          {selectedChat.phoneNumber || "Select a chat"}
        </h3>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-3 scrollbar-hide">
        {Object.entries(groupedChats).map(([date, chats]) => (
          <div key={date}>
            <div className=" text-gray-500 my-2 w-full justify-center p-1 flex items-center">
              <div className="w-auto p-2 bg-white text-center rounded-md">
                {date}
              </div>
            </div>
            {chats.map((chat, index) => (
              <div
                key={index}
                className={`flex ${
                  chat.empId === "server" || chat.to
                    ? "justify-end"
                    : "justify-start"
                }`}
              >
                <div
                  className={`p-3 rounded-lg shadow-sm mb-2 ${
                    chat.empId === "server" || chat.to
                      ? "bg-[#DCF8C6]"
                      : "bg-white"
                  }`}
                >
                  <p>{chat.to || chat.from}</p>
                  <p className="text-xs text-gray-400 text-right">
                    {new Date(chat.createdAt).toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ))}
        <div ref={chatEndRef} />
      </div>

      <div className="bg-white px-4 py-2 border-t border-gray-300 flex items-center">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          className="flex-1 px-3 py-2 rounded-lg border border-gray-300"
          placeholder="Type a message"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSendMessage();
            }
          }}
        />
        <label className="ml-3 cursor-pointer">
          <BsPaperclip size={20} />
          <input
            type="file"
            onChange={(e) => setSelectedFile(e.target.files[0])}
            className="hidden"
          />
        </label>
        <button
          onClick={handleSendMessage}
          className="ml-3 px-4 py-2 bg-blue-500 text-white rounded-lg"
        >
          <BsSend size={16} />
        </button>
      </div>
      {selectedFile && (
        <div className="bg-white px-4 py-2 border-t border-gray-300 flex items-center">
          <p className="flex-1">{selectedFile.name}</p>
          <button
            onClick={handleSendMessage}
            className="ml-3 px-4 py-2 bg-blue-500 text-white rounded-lg"
          >
            Send File
          </button>
          <button
            onClick={handleDeleteFile}
            className="ml-3 px-4 py-2 bg-red-500 text-white rounded-lg"
          >
            <MdDelete size={16} />
          </button>
        </div>
      )}
    </div>
  );
}

export default ChatSection;
