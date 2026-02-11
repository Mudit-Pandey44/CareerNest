import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Navbar({ search, setSearch }) {
  const navigate = useNavigate();
  const [profilePic, setProfilePic] = useState("");

  // Jab component load ho ya localStorage change ho
  useEffect(() => {
    const loadImage = () => {
      const savedPic = localStorage.getItem("profilePic");
      setProfilePic(savedPic);
    };

    loadImage();

    // storage event listener (agar dusre tab me change ho)
    window.addEventListener("storage", loadImage);

    return () => {
      window.removeEventListener("storage", loadImage);
    };
  }, []);

  return (
    <nav className="navbar">
      {/* Left - Logo */}
      <div className="nav-left">
        <h2>CareerNest</h2>
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

      {/* Right - Links */}
      <div className="nav-right">
        <Link to="/">Home</Link>
        <a href="#cards">Jobs</a>
        <a href="#contact">Contact</a>

        {/* <Link to="/jobs">Jobs</Link>
        <Link to="/contact">Contact</Link> */}

        <a href="/saved">Saved Jobs</a>
        <a href="/auth">Login / Signup</a>
        {/* Profile Circle */}
        <div className="profile-circle" onClick={() => navigate("/profile")}>
          <img
            src={profilePic || "https://via.placeholder.com/40"}
            alt="profile"
          />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
