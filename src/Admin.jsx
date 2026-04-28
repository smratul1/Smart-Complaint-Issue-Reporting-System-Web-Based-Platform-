import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Admin() {
  const navigate = useNavigate();
  const [complaints, setComplaints] = useState([]);

  useEffect(() => {
    const storedComplaints = JSON.parse(localStorage.getItem("complaints") || "[]");
    setComplaints(storedComplaints);
  }, []);

  const resolveComplaint = (id) => {
    const updatedComplaints = complaints.map((complaint) =>
      complaint.id === id ? { ...complaint, status: "Solved" } : complaint
    );
    setComplaints(updatedComplaints);
    localStorage.setItem("complaints", JSON.stringify(updatedComplaints));
    alert("Complaint marked as solved!");
  };

  const pendingComplaints = complaints.filter((c) => c.status === "Pending");

  return (
    <div>
      <h2>👨‍💼 Admin Panel</h2>

      <div
        style={{
          marginBottom: "20px",
          padding: "15px",
          background: "#fff3cd",
          borderRadius: "8px",
          border: "1px solid #ffc107",
        }}
      >
        <p>
          <strong>📊 Statistics:</strong>
        </p>
        <p>Total Complaints: {complaints.length}</p>
        <p>Pending: {pendingComplaints.length}</p>
        <p>Resolved: {complaints.filter((c) => c.status === "Solved").length}</p>
      </div>

      {pendingComplaints.length === 0 ? (
        <div style={{ background: "#ecf0f1", padding: "20px", borderRadius: "8px" }}>
          <p>✅ All complaints have been resolved!</p>
        </div>
      ) : (
        <div>
          <h3 style={{ marginTop: "20px" }}>Pending Complaints</h3>
          {pendingComplaints.map((complaint) => (
            <div key={complaint.id} className="complaint-item">
              <h4>{complaint.title}</h4>
              <p>
                <strong>Category:</strong> {complaint.category}
              </p>
              <p>
                <strong>Date:</strong> {complaint.date}
              </p>
              <p>
                <strong>Details:</strong> {complaint.details}
              </p>
              <button
                onClick={() => resolveComplaint(complaint.id)}
                style={{ background: "#27ae60" }}
              >
                ✅ Mark as Resolved
              </button>
            </div>
          ))}
        </div>
      )}

      <p
        onClick={() => navigate("/dashboard")}
        style={{ marginTop: "20px", textAlign: "center", cursor: "pointer" }}
      >
        ← Back to Dashboard
      </p>
    </div>
  );
}

export default Admin;