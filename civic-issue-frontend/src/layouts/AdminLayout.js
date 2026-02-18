import React from "react";
import Sidebar from "../components/Sidebar";
import "../styles/Dashboard.css";

function AdminLayout({ children }) {
  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="dashboard-content">
        {children}
      </div>
    </div>
  );
}

export default AdminLayout;
