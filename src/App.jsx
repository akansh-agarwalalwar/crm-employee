import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./Screens/Dashboard";
import Home from "./components/Core/Home/Home";
function App() {
  return (
    <div className="bg-[#F5F5F5] overflow-hidden h-dvh w-full">
      <Routes>
        <Route path="/" element={<Dashboard />}>
          {/* <Route index element={<Home />} />/ */}
        </Route>
        <Route path="/chats" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
