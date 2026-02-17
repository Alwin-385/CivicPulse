import React from "react";
import Sidebar from "../components/Sidebar";
import "../styles/Dashboard.css";

function ManageDepartments() {
  const departments = ["KSEB", "PWD"];

  return (
    <div className="dashboard-container">
      <Sidebar />

      <div className="dashboard-content">
        <h1>Manage Departments</h1>

        <ul className="list-box">
          {departments.map((dept, index) => (
            <li key={index}>{dept}</li>
          ))}
        </ul>

        <button className="main-btn">Add Department</button>
      </div>
    </div>
  );
}

export default ManageDepartments;
