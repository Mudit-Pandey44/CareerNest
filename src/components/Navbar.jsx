import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import defaultAvatar from "../assets/default-avatar.png";

function Navbar({ search, setSearch }) {
  const navigate = useNavigate();
  const [profilePic, setProfilePic] = useState("");

  // ✅ USER GET
  const user = JSON.parse(localStorage.getItem("user"));

  // logout function
  const logout = () => {
    localStorage.removeItem("user");
    window.location.reload();
  };

  useEffect(() => {
    const loadImage = () => {
      const savedPic = localStorage.getItem("profilePic");
      setProfilePic(savedPic);
    };

    loadImage();
    window.addEventListener("storage", loadImage);

    return () => {
      window.removeEventListener("storage", loadImage);
    };
  }, []);

  return (
    <nav className="navbar">
      {/* Left - Logo */}
      <div className="nav-left">
        <h2 onClick={() => navigate("/")} style={{ cursor: "pointer" }}>
          CareerNest
        </h2>
      </div>

      {/* Center - Search */}
      <div className="nav-center">
        <input
          type="text"
          placeholder="Search jobs..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button>Search</button>
      </div>

      <div className="nav-right">
        <Link to="/">Home</Link>
        <a href="#cards">Jobs</a>
        <a href="#contact">Contact</a>
        <a href="/saved">Saved Jobs</a>

        {/* ✅ LOGIN / USER SECTION */}
        {user ? (
          <>
            <span>Hi, {user.name} 👋</span>{" "}
            <button onClick={logout}>Logout</button>
          </>
        ) : (
          <a href="/auth">Login / Signup</a>
        )}

        {/* Profile Circle */}
        <div className="profile-circle" onClick={() => navigate("/profile")}>
          <img src={profilePic ? profilePic : defaultAvatar} alt="profile" />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
