import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleRegister = () => {
    if (!name || !email || !password || !confirmPassword) {
      setError("Please fill in all fields");
      return;
    }
    if (!email.includes("@")) {
      setError("Please enter a valid email");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    localStorage.setItem("user", JSON.stringify({ name, email }));
    alert("Registration successful!");
    navigate("/");
  };

  return (
    <div className="box">
      <h2>📝 Register</h2>

      {error && <p style={{ color: "red", marginBottom: "15px" }}>{error}</p>}

      <input
        placeholder="Full Name"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
          setError("");
        }}
      />
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
      <input
        type="password"
        placeholder="Confirm Password"
        value={confirmPassword}
        onChange={(e) => {
          setConfirmPassword(e.target.value);
          setError("");
        }}
      />

      <button onClick={handleRegister}>Register</button>

      <p onClick={() => navigate("/")}>Already have an account? Login here</p>
    </div>
  );
}

export default Register;