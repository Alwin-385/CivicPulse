import React from "react";
import Sidebar from "../components/Sidebar";
import "../styles/Dashboard.css";

function AdminDashboard() {
  return (
    <div className="dashboard-container">
      <Sidebar />

      <div className="dashboard-content">
        <h1>Issue Status Board</h1>

        <div className="cards">
          <div className="card">Total Complaints: 120</div>
          <div className="card">Pending: 45</div>
          <div className="card">In Progress: 30</div>
          <div className="card">Resolved: 45</div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
