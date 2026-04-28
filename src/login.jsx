import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (!email || !password) {
      setError("Please fill in all fields");
      return;
    }
    if (!email.includes("@")) {
      setError("Please enter a valid email");
      return;
    }
    localStorage.setItem("user", JSON.stringify({ email }));
    navigate("/dashboard");
  };

  return (
    <div className="box">
      <h2>🔐 Login</h2>

      {error && <p style={{ color: "red", marginBottom: "15px" }}>{error}</p>}

      <input
        placeholder="Email"
        type="email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
          setError("");
        }}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
          setError("");
        }}
      />

      <button onClick={handleLogin}>Login</button>

      <p onClick={() => navigate("/register")}>Don't have an account? Register here</p>
    </div>
  );
}

export default Login;