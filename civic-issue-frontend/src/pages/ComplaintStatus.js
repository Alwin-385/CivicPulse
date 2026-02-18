import React, { useState } from "react";
import "../styles/Dashboard.css";

function ComplaintStatus() {
  const [search, setSearch] = useState("");

  const complaints = [
    { id: 1, dept: "KSEB", status: "Pending" },
    { id: 2, dept: "PWD", status: "Resolved" },
  ];

  const filtered = complaints.filter(c =>
    c.id.toString().includes(search)
  );

  return (
    <div className="dashboard-content">
      <h1>Track Complaints</h1>

      <input
        type="text"
        placeholder="Search by Complaint ID"
        onChange={(e) => setSearch(e.target.value)}
      />

      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Department</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {filtered.map((c) => (
            <tr key={c.id}>
              <td>{c.id}</td>
              <td>{c.dept}</td>
              <td>
                <span className={`status ${c.status.toLowerCase()}`}>
                  {c.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ComplaintStatus;
