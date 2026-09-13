function JobCard({ job, onToggleSave, isSaved }) {

    return (
        <div className="job-card">

            <div className="match">
                —
                <span>Match</span>
            </div>

            <div className="job-information">

                <h3>{job.title}</h3>

                <p className="company">
                    {job.company}
                </p>

                <div className="job-meta">

                    <span>
                        📍 {job.location || "Remote"}
                    </span>

                    <span>
                        💼 Full-time
                    </span>

                    <span>
                        🏢 {job.source}
                    </span>

                </div>

            </div>

            <div className="job-actions">

                <button
                    className="save-button"
                    onClick={() => onToggleSave(job)}
                >
                    {isSaved ? "♥ Saved" : "♡ Save"}
                </button>

                <button
                    className="view-button"
                    onClick={() => window.open(
                        job.jobUrl,
                        "_blank",
                        "noopener,noreferrer"
                    )}
                >
                    View Job →
                </button>

            </div>

        </div>
    );
}

export default JobCard;