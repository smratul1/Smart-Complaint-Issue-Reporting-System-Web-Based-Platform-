import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddComplaint() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [category, setCategory] = useState("Other");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const submit = () => {
    if (!title.trim()) {
      setError("Please enter a complaint title");
      return;
    }
    if (!details.trim()) {
      setError("Please enter complaint details");
      return;
    }
    if (title.length < 5) {
      setError("Title must be at least 5 characters long");
      return;
    }

    const complaint = {
      id: Date.now(),
      title,
      details,
      category,
      date: new Date().toLocaleDateString(),
      status: "Pending",
    };

    const complaints = JSON.parse(localStorage.getItem("complaints") || "[]");
    complaints.push(complaint);
    localStorage.setItem("complaints", JSON.stringify(complaints));

    setSuccess(true);
    setTitle("");
    setDetails("");
    setCategory("Other");
    setError("");

    setTimeout(() => {
      navigate("/list");
    }, 2000);
  };

  return (
    <div className="box">
      <h2>➕ Add Complaint</h2>

      {error && <p style={{ color: "#e74c3c", marginBottom: "15px" }}>{error}</p>}
      {success && (
        <p style={{ color: "#27ae60", marginBottom: "15px" }}>
          ✅ Complaint submitted successfully!
        </p>
      )}

      <input
        placeholder="Complaint Title"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
          setError("");
        }}
      />

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        style={{ width: "100%", padding: "12px", marginBottom: "15px", borderRadius: "5px" }}
      >
        <option>Water Issue</option>
        <option>Road Problem</option>
        <option>Street Light</option>
        <option>Sanitation</option>
        <option>Other</option>
      </select>

      <textarea
        placeholder="Details of your complaint..."
        value={details}
        onChange={(e) => {
          setDetails(e.target.value);
          setError("");
        }}
        rows="6"
        style={{ width: "100%", padding: "12px", marginBottom: "15px", fontFamily: "inherit" }}
      />

      <button onClick={submit}>Submit Complaint</button>

      <p onClick={() => navigate("/dashboard")} style={{ textAlign: "center", marginTop: "15px" }}>
        ← Back to Dashboard
      </p>
    </div>
  );
}

export default AddComplaint;