import React from "react";
import Sidebar from "../components/Sidebar";
import "../styles/Dashboard.css";

function Reports() {
  return (
    <div className="dashboard-container">
      <Sidebar />

      <div className="dashboard-content">
        <h1>Reports</h1>

        <div className="cards">
          <div className="card">Total Complaints: 200</div>
          <div className="card">Resolved This Month: 150</div>
          <div className="card">Pending Issues: 50</div>
        </div>
      </div>
    </div>
  );
}

export default Reports;
