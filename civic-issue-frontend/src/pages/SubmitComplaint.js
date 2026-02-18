import React, { useState } from "react";
import "../styles/Form.css";

function SubmitComplaint() {
  const [description, setDescription] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = () => {
    if (!description) {
      alert("Please enter description");
      return;
    }

    setSuccess(true);
    setDescription("");
  };

  return (
    <div className="form-container">
      <h2>Submit Complaint</h2>

      {success && (
        <div className="success-msg">
          Complaint submitted successfully!
        </div>
      )}

      <input type="text" placeholder="Location" />

      <select>
        <option>Select Department</option>
        <option>KSEB</option>
        <option>PWD</option>
      </select>

      <textarea
        placeholder="Describe the Issue"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <input type="file" />

      <button onClick={handleSubmit}>Submit Complaint</button>
    </div>
  );
}

export default SubmitComplaint;
