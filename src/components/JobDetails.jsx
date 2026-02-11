import { useParams, Link } from "react-router-dom";
import { useState } from "react";

/* Logos import */
import google from "../assets/logos/google.png";
import amazon from "../assets/logos/amazon.png";
import microsoft from "../assets/logos/microsoft.png";
import infosys from "../assets/logos/infosys.png";
import tcs from "../assets/logos/tcs.png";
import wipro from "../assets/logos/wipro.png";
import zoho from "../assets/logos/zoho.png";
import flipkart from "../assets/logos/flipkart.png";
import swiggy from "../assets/logos/swiggy.png";
import zomato from "../assets/logos/zomato.png";
import paytm from "../assets/logos/paytm.png";
import startup from "../assets/logos/startup.png";

/* Logo mapping */
const logos = {
  Google: google,
  Amazon: amazon,
  Microsoft: microsoft,
  Infosys: infosys,
  TCS: tcs,
  Wipro: wipro,
  Zoho: zoho,
  Flipkart: flipkart,
  Swiggy: swiggy,
  Zomato: zomato,
  Paytm: paytm,
  Startup: startup,
};

function JobDetails({ jobs }) {
  const { index } = useParams();
  const job = jobs[index];

  const [submitted, setSubmitted] = useState(false);

  const [file, setFile] = useState(null);
  const [error, setError] = useState("");

  if (!job) return <h2 style={{ padding: "40px" }}>Job not found</h2>;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  function handleFileChange(e) {
    const selected = e.target.files[0];

    if (!selected) return;

    if (selected.size > 10 * 1024 * 1024) {
      setError("File must be less than 10MB");
      return;
    }

    setFile(selected);
    setError("");
  }

  return (
    <div className="job-details">
      <div className="job-card">
        {/* Logo */}
        <img src={logos[job.company]} alt={job.company} className="job-logo" />

        <h1>{job.title}</h1>
        <h2>{job.company}</h2>

        {/* Job info */}
        <div className="job-info">
          <p>
            <strong>📍 Location:</strong> {job.location}
          </p>
          <p>
            <strong>💰 Salary:</strong> {job.salary}
          </p>
          <p>
            <strong>🕒 Type:</strong> {job.type}
          </p>
          <p>
            <strong>🎯 Level:</strong> {job.level}
          </p>
        </div>

        {/* Apply form */}
        <h3 className="form-title">Apply for this job</h3>

        {!submitted ? (
          <form className="apply-form" onSubmit={handleSubmit}>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <div className="resume-upload">
              <label className="upload-label">
                Upload your resume (max 5MB)
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  hidden
                  required
                  disabled={file !== null}
                  onChange={handleFileChange}
                />
              </label>

              {file && <p className="file-name">📄 {file.name}</p>}
              {error && <p className="error-text">{error}</p>}
            </div>

            <textarea placeholder="Tell me about yourself" rows="4" required />

            <button type="submit" className="apply-btn">
              Submit Application
            </button>
          </form>
        ) : (
          <div className="success-msg">
            🎉 Application submitted successfully!
          </div>
        )}

        {/* Back button */}
        <Link to="/">
          {/* <button className="back-btn">← Back to Jobs</button> */}
        </Link>
      </div>
    </div>
  );
}

export default JobDetails;
