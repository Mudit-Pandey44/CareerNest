import Card from "../components/Card";
import { BookmarkCheck } from "lucide-react";

function SavedJobs({ jobsData, savedJobs, toggleSave }) {
  const savedOnly = jobsData.filter((job, index) => savedJobs.includes(index));

  return (
    <div className="saved-page">
      {/* HERO */}

      <div className="saved-hero">
        <div className="saved-overlay"></div>

        <div className="saved-content">
          <div className="saved-icon">
            <BookmarkCheck size={42} />
          </div>

          <h1>Your Saved Jobs</h1>

          <p>
            Easily manage and access all your bookmarked opportunities in one
            place.
          </p>
        </div>
      </div>

      {/* EMPTY STATE */}

      {savedOnly.length === 0 ? (
        <div className="empty-saved">
          <h2>No Saved Jobs Yet</h2>

          <p>Browse jobs and save opportunities to review and apply later.</p>

          <a href="/" className="browse-btn">
            Browse Jobs
          </a>
        </div>
      ) : (
        <>
          {/* STATS */}

          <div className="saved-stats">
            <div className="saved-stat-card">
              <h2>{savedOnly.length}</h2>

              <p>Saved Opportunities</p>
            </div>

            <div className="saved-stat-card">
              <h2>500+</h2>

              <p>Partner Companies</p>
            </div>

            <div className="saved-stat-card">
              <h2>24/7</h2>

              <p>Career Access</p>
            </div>
          </div>

          {/* JOBS */}

          <div className="card-container">
            {savedOnly.map((job, index) => (
              <Card
                key={index}
                index={index}
                {...job}
                saved={true}
                onSave={toggleSave}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default SavedJobs;
