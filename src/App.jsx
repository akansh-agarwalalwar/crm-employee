import React, { useEffect } from "react";
import { Route, Routes, Navigate, Outlet } from "react-router-dom";
import Dashboard from "./Screens/Dashboard";
import Home from "./components/Core/Home/Home";
import Login from "./components/Auth/Login";
import ProfileHome from "./components/Core/Profile/ProfileHome";
import ApplyLeave from "./components/Core/Profile/Leave/ApplyLeave";
import EditHome from "./components/Core/Profile/EditProfile/EditHome";
import BroadcastHome from "./components/Core/Broadcast/BroadcastHome";
import AutomationHome from "./components/Core/Automation/AutomationHome";
import LeadHome from "./components/Core/Leads/LeadHome";
import ContactHome from "./components/Core/Contacts/ContactHome";
import Itineary from "./components/Core/Itineary/Itineary";
import HomeDashboard from "./Screens/HomeDashboard";
import Invoice from "./components/Core/Invoice/Invoice";
import { useSelector, useDispatch } from "react-redux";
import { clearUser } from "./Redux/UserSlice";

function App() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.profile);

  useEffect(() => {
    if (!user) {
      dispatch(clearUser());
    }
  }, [user, dispatch]);

  return (
    <div className="bg-[#F5F5F5] overflow-hidden h-dvh w-full">
      <Routes>
        <Route path="/" element={user ? <Dashboard /> : <Navigate to="/login" replace />}>
          <Route index element={<HomeDashboard />} />
          <Route path="chats" element={<Home />} />
          <Route path="broadcast" element={<BroadcastHome />} />
          <Route path="automation" element={<AutomationHome />} />
          <Route path="leads" element={<LeadHome />} />
          <Route path="contacts" element={<ContactHome />} />
          <Route path="itinerary" element={<Itineary />} />
          <Route path="invoice" element={<Invoice />} />
          <Route path="profile">
            <Route index element={<ProfileHome />} />
            <Route path="edit-profile" element={<EditHome />} />
          </Route>
          <Route path="apply-leave" element={<ApplyLeave />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
