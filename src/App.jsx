import React, { useState } from "react";
import { BrowserRouter, Routes, Route, useNavigate, useLocation } from "react-router-dom";

import Login from "./login";
import Register from "./register";
import Dashboard from "./dashboard";
import AddComplaint from "./addcomlaint";
import ComplaintList from "./ComplaintList";
import Status from "./Status";
import Admin from "./Admin";
import History from "./History";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const isLoggedIn = location.pathname !== "/" && location.pathname !== "/register";

  return (
    isLoggedIn && (
      <div className="navbar">
        <h1>📋 Complaint Management System</h1>
        <nav>
          <button onClick={() => navigate("/dashboard")}>Dashboard</button>
          <button onClick={() => navigate("/")}>Logout</button>
        </nav>
      </div>
    )
  );
}

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/add" element={<AddComplaint />} />
        <Route path="/list" element={<ComplaintList />} />
        <Route path="/status" element={<Status />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/history" element={<History />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;