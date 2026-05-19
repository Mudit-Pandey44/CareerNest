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
    // validation
    if (mode === "signup" && form.name.trim() === "") {
      setError("Name is required");
      return;
    }

    if (!form.email.includes("@")) {
      setError("Enter a valid email");
      return;
    }

    if (form.password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    // SIGNUP
    if (mode === "signup") {
      localStorage.setItem("user", JSON.stringify(form));

      setSuccess("Signup successful ✅");

      setTimeout(() => {
        setMode("login");
      }, 1000);
    }

    // LOGIN
    else {
      const savedUser = JSON.parse(localStorage.getItem("user"));

      if (
        savedUser &&
        savedUser.email === form.email &&
        savedUser.password === form.password
      ) {
        localStorage.setItem("loggedInUser", JSON.stringify(savedUser));

        setSuccess("Login successful ✅");

        setTimeout(() => {
          navigate("/");
        }, 1000);
      } else {
        setError("Invalid email or password");
      }
    }
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
