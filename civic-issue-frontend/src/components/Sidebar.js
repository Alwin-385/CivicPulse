import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <h2>Admin Panel</h2>

      <ul>
        <li>
          <Link to="/admin">Issue Status Board</Link>
        </li>

        <li>
          <Link to="/manage-complaints">Manage Complaints</Link>
        </li>

        <li>
          <Link to="/manage-departments">Manage Departments</Link>
        </li>

        <li>
          <Link to="/manage-staff">Manage Field Staff</Link>
        </li>

        <li>
          <Link to="/reports">Reports</Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
