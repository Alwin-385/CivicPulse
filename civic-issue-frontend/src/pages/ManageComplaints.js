import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import "../styles/Dashboard.css";

function ManageComplaints() {

  const complaints = [
    { id: 101, user: "Arjun", dept: "KSEB", status: "Pending" },
    { id: 102, user: "Meera", dept: "PWD", status: "In Progress" },
  ];

  const [search, setSearch] = useState("");

  const filteredComplaints = complaints.filter((c) =>
    c.user.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="dashboard-container">
      <Sidebar />

      <div className="dashboard-content">
        <h1>Manage Complaints</h1>

        <p>Total Complaints: {complaints.length}</p>

        <input
          type="text"
          placeholder="Search by User"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ padding: "8px", marginBottom: "15px", width: "250px" }}
        />

        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>User</th>
              <th>Department</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {filteredComplaints.map((c) => (
              <tr key={c.id}>
                <td>{c.id}</td>
                <td>{c.user}</td>
                <td>{c.dept}</td>
                <td>
                  <span className={`status ${c.status.toLowerCase().replace(" ", "-")}`}>
                    {c.status}
                  </span>
                </td>
                <td>
                  <button className="small-btn">Assign</button>
                  <button className="small-btn">Update</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ManageComplaints;
