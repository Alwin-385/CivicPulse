import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import AdminDashboard from "./pages/AdminDashboard";
import CitizenDashboard from "./pages/CitizenDashboard";
import SubmitComplaint from "./pages/SubmitComplaint";
import ManageComplaints from "./pages/ManageComplaints";
import ManageDepartments from "./pages/ManageDepartments";
import ManageStaff from "./pages/ManageStaff";
import Reports from "./pages/Reports";
import ComplaintStatus from "./pages/ComplaintStatus";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/citizen" element={<CitizenDashboard />} />
        <Route path="/submit-complaint" element={<SubmitComplaint />} />
        <Route path="/manage-complaints" element={<ManageComplaints />} />
        <Route path="/manage-departments" element={<ManageDepartments />} />
        <Route path="/manage-staff" element={<ManageStaff />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/complaint-status" element={<ComplaintStatus />} />
        
      </Routes>
    </Router>
  );
}

export default App;
