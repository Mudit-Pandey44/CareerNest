import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Auth() {
  const navigate = useNavigate();

  const [mode, setMode] = useState("login");

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
    setSuccess("");
  }

  function handleSubmit() {
    if (mode === "signup" && form.name.trim() === "") {
      return setError("Name is required");
    }

    if (!form.email.includes("@")) {
      return setError("Enter a valid email");
    }

    if (form.password.length < 6) {
      return setError("Password must be at least 6 characters");
    }

    setSuccess(mode === "login" ? "Login successful ✅" : "Account created ✅");

    navigate("/");
  }

  return (
    <div className="auth-page">
      {/* <button className="back-btn" onClick={() => navigate("/")}>
        ← Back to Home
      </button> */}
      <div className="auth-card">
        {/* Tabs */}
        <div className="auth-tabs">
          <button
            className={mode === "login" ? "active" : ""}
            onClick={() => setMode("login")}
          >
            Login
          </button>
          <button
            className={mode === "signup" ? "active" : ""}
            onClick={() => setMode("signup")}
          >
            Signup
          </button>
        </div>

        <h2>{mode === "login" ? "Welcome Back" : "Create Account"}</h2>

        {mode === "signup" && (
          <input
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
          />
        )}

        <input
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
        />

        <input
          name="password"
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
        />

        {error && <p className="auth-error">{error}</p>}
        {success && <p className="auth-success">{success}</p>}

        <button className="auth-main-btn" onClick={handleSubmit}>
          {mode === "login" ? "Login" : "Signup"}
        </button>
      </div>
    </div>
  );
}

export default Auth;
