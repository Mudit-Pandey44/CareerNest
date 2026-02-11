import Card from "../components/Card";
import { useNavigate } from "react-router-dom";

function SavedJobs({ jobsData, savedJobs, toggleSave }) {
  const navigate = useNavigate();

  const savedOnly = jobsData.filter((job, index) => savedJobs.includes(index));

  return (
    <div className="saved-page">
      <div className="saved-header">
        <h1>Saved Jobs</h1>
        <p>Jobs you have bookmarked for later review</p>
      </div>

      {/* <h1>💾 Saved Jobs</h1> */}

      {savedOnly.length === 0 ? (
        <div className="empty-saved">
          <h2>No saved jobs yet</h2>
          <p>
            You haven’t saved any jobs. Browse jobs and click <b>Save</b> to add
            them here.
          </p>

          <a href="/" className="browse-btn">
            Browse Jobs
          </a>
        </div>
      ) : (
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
      )}
    </div>
  );
}

export default SavedJobs;
