import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css";

function Login() {
  const navigate = useNavigate();
  const [role, setRole] = useState("");

  const handleLogin = () => {
    if (role === "admin") navigate("/admin");
    else if (role === "citizen") navigate("/citizen");
    else alert("Please select role");
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Smart Civic Issue Reporting System</h2>

        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />

        <select onChange={(e) => setRole(e.target.value)}>
          <option value="">Select Role</option>
          <option value="admin">Admin</option>
          <option value="citizen">Citizen</option>
        </select>

        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
}

export default Login;
