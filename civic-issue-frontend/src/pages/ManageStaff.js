import React from "react";
import Sidebar from "../components/Sidebar";
import "../styles/Dashboard.css";

function ManageStaff() {
  const staff = [
    { name: "Rahul", dept: "KSEB" },
    { name: "Sneha", dept: "PWD" },
  ];

  return (
    <div className="dashboard-container">
      <Sidebar />

      <div className="dashboard-content">
        <h1>Manage Field Staff</h1>

        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Department</th>
            </tr>
          </thead>
          <tbody>
            {staff.map((s, index) => (
              <tr key={index}>
                <td>{s.name}</td>
                <td>{s.dept}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <button className="main-btn">Add Staff</button>
      </div>
    </div>
  );
}

export default ManageStaff;
