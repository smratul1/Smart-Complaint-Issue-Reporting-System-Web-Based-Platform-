import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      setUser(JSON.parse(userData));
    } else {
      navigate("/");
    }
  }, [navigate]);

  return (
    <div>
      <h2>📊 Dashboard</h2>
      <p style={{ marginBottom: "20px" }}>
        Welcome, {user?.name || user?.email || "User"}! 👋
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "15px" }}>
        <button onClick={() => navigate("/add")} style={{ padding: "20px" }}>
          ➕ Submit Complaint
        </button>
        <button onClick={() => navigate("/list")} style={{ padding: "20px" }}>
          📋 View Complaints
        </button>
        <button onClick={() => navigate("/status")} style={{ padding: "20px" }}>
          ✅ Check Status
        </button>
        <button onClick={() => navigate("/history")} style={{ padding: "20px" }}>
          📜 History
        </button>
        <button onClick={() => navigate("/admin")} style={{ padding: "20px" }}>
          👨‍💼 Admin Panel
        </button>
        <button onClick={() => navigate("/")} style={{ padding: "20px", background: "#e74c3c" }}>
          🚪 Logout
        </button>
      </div>

      <div style={{ marginTop: "30px", padding: "20px", background: "#ecf0f1", borderRadius: "8px" }}>
        <h3>📌 Quick Stats</h3>
        <p>Total Complaints: 5</p>
        <p>Resolved: 3</p>
        <p>Pending: 2</p>
      </div>
    </div>
  );
}

export default Dashboard;