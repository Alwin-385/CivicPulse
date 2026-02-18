import React from "react";
import AdminLayout from "../layouts/AdminLayout";
import { FaCheckCircle, FaClock, FaTasks } from "react-icons/fa";

function AdminDashboard() {
  return (
    <AdminLayout>
      <h1>Issue Status Board</h1>

      <div className="cards">
        <div className="card">
          <FaTasks size={30} />
          <h3>Total Complaints</h3>
          <p>120</p>
        </div>

        <div className="card">
          <FaClock size={30} />
          <h3>Pending</h3>
          <p>45</p>
        </div>

        <div className="card">
          <FaCheckCircle size={30} />
          <h3>Resolved</h3>
          <p>75</p>
        </div>
      </div>
    </AdminLayout>
  );
}

export default AdminDashboard;
