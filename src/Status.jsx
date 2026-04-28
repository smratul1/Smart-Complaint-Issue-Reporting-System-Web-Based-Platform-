import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Status() {
  const navigate = useNavigate();
  const [complaints, setComplaints] = useState([]);

  useEffect(() => {
    const storedComplaints = JSON.parse(localStorage.getItem("complaints") || "[]");
    setComplaints(storedComplaints);
  }, []);

  return (
    <div>
      <h2>✅ Complaint Status</h2>

      {complaints.length === 0 ? (
        <div style={{ background: "#ecf0f1", padding: "20px", borderRadius: "8px" }}>
          <p>No complaints to track yet.</p>
        </div>
      ) : (
        <div>
          {complaints.map((complaint) => (
            <div key={complaint.id} className="complaint-item">
              <h3>{complaint.title}</h3>
              <p>
                <strong>Category:</strong> {complaint.category}
              </p>
              <p>
                <strong>Submitted:</strong> {complaint.date}
              </p>
              <span
                className={
                  complaint.status === "Solved"
                    ? "status-badge status-solved"
                    : "status-badge status-pending"
                }
              >
                {complaint.status}
              </span>
            </div>
          ))}
        </div>
      )}

      <div
        style={{
          marginTop: "20px",
          padding: "15px",
          background: "#e8f4f8",
          borderRadius: "8px",
        }}
      >
        <p>
          <strong>Total:</strong> {complaints.length} | <strong>Pending:</strong>{" "}
          {complaints.filter((c) => c.status === "Pending").length} |{" "}
          <strong>Solved:</strong> {complaints.filter((c) => c.status === "Solved").length}
        </p>
      </div>

      <p
        onClick={() => navigate("/dashboard")}
        style={{ marginTop: "20px", textAlign: "center", cursor: "pointer" }}
      >
        ← Back to Dashboard
      </p>
    </div>
  );
}

export default Status;