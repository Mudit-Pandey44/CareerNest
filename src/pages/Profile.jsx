import { useState, useEffect, useRef } from "react";

const Profile = () => {
  const fileRef = useRef(null);
  const cvRef = useRef(null);

  const [profilePic, setProfilePic] = useState("");
  const [cvName, setCvName] = useState("");

  const [data, setData] = useState({
    name: "",
    headline: "",
    email: "",
    phone: "",
    location: "",
    about: "",
    degree: "",
    college: "",
    year: "",
    company: "",
    role: "",
    duration: "",
    experienceDesc: "",
    skills: "",
  });

  useEffect(() => {
    const savedData = localStorage.getItem("profileFullData");
    const savedPic = localStorage.getItem("profilePic");
    const savedCV = localStorage.getItem("cvName");

    if (savedData) setData(JSON.parse(savedData));
    if (savedPic) setProfilePic(savedPic);
    if (savedCV) setCvName(savedCV);
  }, []);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const saveProfile = () => {
    localStorage.setItem("profileFullData", JSON.stringify(data));
    alert("Profile Saved Successfully ✅");
  };

  const handleImage = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      localStorage.setItem("profilePic", reader.result);
      setProfilePic(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleCV = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    if (file.type !== "application/pdf") {
      alert("Only PDF allowed");
      return;
    }

    localStorage.setItem("cvName", file.name);
    setCvName(file.name);
  };

  return (
    <div className="profile-main">
      {/* LEFT SIDE */}
      <div className="profile-left">
        <div className="profile-photo" onClick={() => fileRef.current.click()}>
          <img
            src={profilePic || "https://via.placeholder.com/150"}
            alt="profile"
          />
        </div>

        <input
          type="file"
          accept="image/*"
          ref={fileRef}
          style={{ display: "none" }}
          onChange={handleImage}
        />

        <h2>{data.name || "Your Name"}</h2>
        <p>{data.headline || "Your Headline"}</p>
        <p>{data.location || "Location"}</p>
      </div>

      {/* RIGHT SIDE */}
      <div className="profile-right">
        <section>
          <h3>Basic Information</h3>
          <input
            name="name"
            placeholder="Full Name"
            value={data.name}
            onChange={handleChange}
          />
          <input
            name="headline"
            placeholder="Professional Headline"
            value={data.headline}
            onChange={handleChange}
          />
          <input
            name="email"
            placeholder="Email"
            value={data.email}
            onChange={handleChange}
          />
          <input
            name="phone"
            placeholder="Phone"
            value={data.phone}
            onChange={handleChange}
          />
          <input
            name="location"
            placeholder="Location"
            value={data.location}
            onChange={handleChange}
          />
        </section>

        <section>
          <h3>About</h3>
          <textarea name="about" value={data.about} onChange={handleChange} />
        </section>

        <section>
          <h3>Resume</h3>
          {cvName ? <p>{cvName}</p> : null}
          <button onClick={() => cvRef.current.click()}>
            {cvName ? "Replace CV" : "Upload CV"}
          </button>
          <input
            type="file"
            accept="application/pdf"
            ref={cvRef}
            style={{ display: "none" }}
            onChange={handleCV}
          />
        </section>

        <section>
          <h3>Education</h3>
          <input
            name="degree"
            placeholder="Degree"
            value={data.degree}
            onChange={handleChange}
          />
          <input
            name="college"
            placeholder="College"
            value={data.college}
            onChange={handleChange}
          />
          <input
            name="year"
            placeholder="Year"
            value={data.year}
            onChange={handleChange}
          />
        </section>

        <section>
          <h3>Experience</h3>
          <input
            name="company"
            placeholder="Company"
            value={data.company}
            onChange={handleChange}
          />
          <input
            name="role"
            placeholder="Role"
            value={data.role}
            onChange={handleChange}
          />
          <input
            name="duration"
            placeholder="Duration"
            value={data.duration}
            onChange={handleChange}
          />
          <textarea
            name="experienceDesc"
            placeholder="Description"
            value={data.experienceDesc}
            onChange={handleChange}
          />
        </section>

        <section>
          <h3>Skills</h3>
          <input
            name="skills"
            placeholder="Comma separated skills"
            value={data.skills}
            onChange={handleChange}
          />
        </section>

        <button className="save-btn" onClick={saveProfile}>
          Save Profile
        </button>
      </div>
    </div>
  );
};

export default Profile;
