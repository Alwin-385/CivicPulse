import React from "react";
import "../styles/Dashboard.css";

function ComplaintStatus() {
  const complaints = [
    { id: 1, dept: "KSEB", status: "Pending" },
    { id: 2, dept: "PWD", status: "Resolved" },
  ];

  return (
    <div className="dashboard-content">
      <h1>Complaint Status Tracking</h1>

      <table className="table">
        <thead>
          <tr>
            <th>Complaint ID</th>
            <th>Department</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {complaints.map((c) => (
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
