import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function History() {
  const navigate = useNavigate();
  const [resolvedComplaints, setResolvedComplaints] = useState([]);

  useEffect(() => {
    const storedComplaints = JSON.parse(localStorage.getItem("complaints") || "[]");
    const resolved = storedComplaints.filter((c) => c.status === "Solved");
    setResolvedComplaints(resolved);
  }, []);

  return (
    <div>
      <h2>📜 History</h2>

      {resolvedComplaints.length === 0 ? (
        <div style={{ background: "#ecf0f1", padding: "20px", borderRadius: "8px" }}>
          <p>No resolved complaints yet.</p>
        </div>
      ) : (
        <div>
          {resolvedComplaints.map((complaint) => (
            <div key={complaint.id} className="complaint-item">
              <h3>{complaint.title}</h3>
              <p>
                <strong>Category:</strong> {complaint.category}
              </p>
              <p>
                <strong>Resolved:</strong> {complaint.date}
              </p>
              <span className="status-badge status-solved">✅ Solved</span>
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

export default History;