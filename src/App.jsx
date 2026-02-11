import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Auth from "./pages/Auth";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import JobDetails from "./components/JobDetails";
import SavedJobs from "./pages/SavedJobs";

import Profile from "./pages/Profile";

/* ====== BIG JOB DATA (36 JOBS = 6 PAGES) ====== */
const jobsData = [
  {
    company: "Google",
    title: "Frontend Intern",
    location: "Remote",
    salary: "₹15,000",
    time: "1 day ago",
    type: "Remote",
    level: "Internship",
  },
  {
    company: "Amazon",
    title: "UI Designer",
    location: "Bangalore",
    salary: "₹60,000",
    time: "2 days ago",
    type: "Part Time",
    level: "Senior",
  },
  {
    company: "Microsoft",
    title: "React Developer",
    location: "Hyderabad",
    salary: "₹8 LPA",
    time: "Hiring",
    type: "Full Time",
    level: "Mid",
  },
  {
    company: "Infosys",
    title: "Web Intern",
    location: "Noida",
    salary: "₹10,000",
    time: "3 days ago",
    type: "Onsite",
    level: "Fresher",
  },
  {
    company: "TCS",
    title: "Java Dev",
    location: "Pune",
    salary: "₹4 LPA",
    time: "New",
    type: "Full Time",
    level: "Junior",
  },
  {
    company: "Wipro",
    title: "Backend Intern",
    location: "Remote",
    salary: "₹12,000",
    time: "2 days ago",
    type: "Remote",
    level: "Internship",
  },

  {
    company: "Zoho",
    title: "Software Engineer",
    location: "Chennai",
    salary: "₹6 LPA",
    time: "Hiring",
    type: "Onsite",
    level: "Mid",
  },
  {
    company: "Flipkart",
    title: "Frontend Dev",
    location: "Remote",
    salary: "₹25,000",
    time: "1 day ago",
    type: "Remote",
    level: "Junior",
  },
  {
    company: "Swiggy",
    title: "UI Designer",
    location: "Bangalore",
    salary: "₹40,000",
    time: "Urgent",
    type: "Contract",
    level: "Mid",
  },
  {
    company: "Zomato",
    title: "Product Intern",
    location: "Remote",
    salary: "₹8,000",
    time: "New",
    type: "Remote",
    level: "Internship",
  },
  {
    company: "Paytm",
    title: "React Dev",
    location: "Delhi",
    salary: "₹5 LPA",
    time: "2 days ago",
    type: "Full Time",
    level: "Mid",
  },
  {
    company: "Startup",
    title: "MERN Dev",
    location: "Remote",
    salary: "₹20,000",
    time: "Today",
    type: "Remote",
    level: "Beginner",
  },

  {
    company: "Google",
    title: "UI Engineer",
    location: "Remote",
    salary: "₹10 LPA",
    time: "New",
    type: "Remote",
    level: "Senior",
  },
  {
    company: "Amazon",
    title: "Frontend Engineer",
    location: "Delhi",
    salary: "₹12 LPA",
    time: "1 day ago",
    type: "Full Time",
    level: "Mid",
  },
  {
    company: "Microsoft",
    title: "SDE Intern",
    location: "Hyderabad",
    salary: "₹25,000",
    time: "Hiring",
    type: "Internship",
    level: "Intern",
  },
  {
    company: "Infosys",
    title: "Support Engineer",
    location: "Noida",
    salary: "₹3 LPA",
    time: "New",
    type: "Full Time",
    level: "Junior",
  },
  {
    company: "TCS",
    title: "Cloud Engineer",
    location: "Mumbai",
    salary: "₹6 LPA",
    time: "3 days ago",
    type: "Full Time",
    level: "Mid",
  },
  {
    company: "Wipro",
    title: "Data Analyst",
    location: "Pune",
    salary: "₹5 LPA",
    time: "Hiring",
    type: "Onsite",
    level: "Mid",
  },

  {
    company: "Zoho",
    title: "Backend Dev",
    location: "Chennai",
    salary: "₹7 LPA",
    time: "New",
    type: "Onsite",
    level: "Senior",
  },
  {
    company: "Flipkart",
    title: "Product Designer",
    location: "Bangalore",
    salary: "₹9 LPA",
    time: "2 days ago",
    type: "Full Time",
    level: "Mid",
  },
  {
    company: "Swiggy",
    title: "Growth Intern",
    location: "Remote",
    salary: "₹12,000",
    time: "Today",
    type: "Internship",
    level: "Beginner",
  },
  {
    company: "Zomato",
    title: "Marketing Exec",
    location: "Delhi",
    salary: "₹4 LPA",
    time: "New",
    type: "Full Time",
    level: "Junior",
  },
  {
    company: "Paytm",
    title: "QA Tester",
    location: "Noida",
    salary: "₹3.5 LPA",
    time: "Hiring",
    type: "Onsite",
    level: "Junior",
  },
  {
    company: "Startup",
    title: "Content Writer",
    location: "Remote",
    salary: "₹18,000",
    time: "1 day ago",
    type: "Remote",
    level: "Beginner",
  },

  {
    company: "Google",
    title: "DevOps Engineer",
    location: "Remote",
    salary: "₹18 LPA",
    time: "New",
    type: "Full Time",
    level: "Senior",
  },
  {
    company: "Amazon",
    title: "HR Recruiter",
    location: "Bangalore",
    salary: "₹6 LPA",
    time: "Hiring",
    type: "Full Time",
    level: "Mid",
  },
  {
    company: "Microsoft",
    title: "Tech Support",
    location: "Hyderabad",
    salary: "₹4 LPA",
    time: "2 days ago",
    type: "Onsite",
    level: "Junior",
  },
  {
    company: "Infosys",
    title: "Python Dev",
    location: "Remote",
    salary: "₹5 LPA",
    time: "New",
    type: "Remote",
    level: "Mid",
  },
  {
    company: "TCS",
    title: "Business Analyst",
    location: "Mumbai",
    salary: "₹7 LPA",
    time: "Hiring",
    type: "Full Time",
    level: "Senior",
  },
  {
    company: "Startup",
    title: "Social Media Manager",
    location: "Remote",
    salary: "₹22,000",
    time: "Today",
    type: "Remote",
    level: "Beginner",
  },
];

function App() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  const [savedJobs, setSavedJobs] = useState(
    JSON.parse(localStorage.getItem("savedJobs")) || [],
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [search, category]);

  function toggleSave(index) {
    let updated;

    if (savedJobs.includes(index)) {
      updated = savedJobs.filter((id) => id !== index);
    } else {
      updated = [...savedJobs, index];
    }

    setSavedJobs(updated);
    localStorage.setItem("savedJobs", JSON.stringify(updated));
  }

  const jobsPerPage = 6;

  const filteredJobs = jobsData.filter((job) => {
    const matchSearch =
      job.company.toLowerCase().includes(search.toLowerCase()) ||
      job.title.toLowerCase().includes(search.toLowerCase()) ||
      job.location.toLowerCase().includes(search.toLowerCase());

    const matchCategory = category === "All" || job.type === category;

    return matchSearch && matchCategory;
  });

  const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);
  const startIndex = (currentPage - 1) * jobsPerPage;
  const paginatedJobs = filteredJobs.slice(
    startIndex,
    startIndex + jobsPerPage,
  );

  return (
    <BrowserRouter>
      <Navbar search={search} setSearch={setSearch} />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />

              <div className="filters">
                {["All", "Remote", "Full Time", "Internship", "Part Time"].map(
                  (btn) => (
                    <button
                      key={btn}
                      className={category === btn ? "active" : ""}
                      onClick={() => {
                        setCategory(btn);
                        setCurrentPage(1);
                      }}
                    >
                      {btn}
                    </button>
                  ),
                )}
              </div>

              <p className="job-count">
                Showing <span>{filteredJobs.length}</span> jobs out of{" "}
                <span>{jobsData.length}</span>
              </p>

              <section id="cards" className="section card-container">
                {paginatedJobs.map((job, index) => (
                  <Card
                    key={index}
                    index={startIndex + index}
                    {...job}
                    saved={savedJobs.includes(startIndex + index)}
                    onSave={toggleSave}
                  />
                ))}
              </section>

              {/* Pagination */}
              <div className="pagination">
                {/* Back */}
                <button
                  disabled={currentPage === 1}
                  onClick={() => setCurrentPage((p) => p - 1)}
                >
                  ← Back
                </button>

                {/* Page Numbers */}
                {(() => {
                  let start = Math.max(1, currentPage - 1);
                  let end = Math.min(totalPages, start + 2);

                  // adjust if less than 3 pages shown
                  if (end - start < 2) {
                    start = Math.max(1, end - 2);
                  }

                  const pages = [];
                  for (let i = start; i <= end; i++) {
                    pages.push(
                      <button
                        key={i}
                        className={currentPage === i ? "active" : ""}
                        onClick={() => setCurrentPage(i)}
                      >
                        {i}
                      </button>,
                    );
                  }

                  return pages;
                })()}

                {/* Next */}
                <button
                  disabled={currentPage === totalPages}
                  onClick={() => setCurrentPage((p) => p + 1)}
                >
                  Next →
                </button>
              </div>

              <Contact />
              <Footer />
            </>
          }
        />
        <Route path="/auth" element={<Auth />} />

        <Route path="/job/:index" element={<JobDetails jobs={jobsData} />} />

        <Route
          path="/saved"
          element={
            <SavedJobs
              jobsData={jobsData}
              savedJobs={savedJobs}
              toggleSave={toggleSave}
            />
          }
        />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
