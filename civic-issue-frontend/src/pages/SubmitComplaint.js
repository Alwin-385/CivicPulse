import React, { useState } from "react";
import "../styles/Form.css";

function SubmitComplaint() {
  const [description, setDescription] = useState("");

  return (
    <div className="form-container">
      <h2>Submit Complaint</h2>

      <input type="text" placeholder="Location" />

      <select>
        <option>Select Department</option>
        <option>KSEB</option>
        <option>PWD</option>
      </select>

      <textarea
        placeholder="Describe the Issue"
        value={description}                      // <-- use the state variable
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>

      <input type="file" />

      <button>Submit Complaint</button>
    </div>
  );
}

export default SubmitComplaint;
