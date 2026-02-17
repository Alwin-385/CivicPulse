import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Dashboard.css";

function CitizenDashboard() {
  const navigate = useNavigate();

  return (
    <div className="dashboard-content">
      <h1>Citizen Dashboard</h1>

      <div className="cards">
        <div className="card" onClick={() => navigate("/submit-complaint")}>
          Submit Complaint
        </div>

        <div className="card" onClick={() => navigate("/complaint-status")}>
          Track Complaint
        </div>
      </div>
    </div>
  );
}

export default CitizenDashboard;
