import JobCard from "./JobCard";

function SavedJobs({ savedJobs, onToggleSave }) {

    return (
        <section className="jobs-section">

            <div className="section-header">

                <div>
                    <h2>Saved Jobs</h2>

                    <p>
                        Jobs you've saved for later.
                    </p>
                </div>

            </div>

            {savedJobs.length === 0 ? (

                <div className="empty-state">

                    <h3>No saved jobs yet</h3>

                    <p>
                        Save jobs you're interested in and they'll appear here.
                    </p>

                </div>

            ) : (

                savedJobs.map((job) => (

                    <JobCard
                        key={job.id}
                        job={job}
                        onToggleSave={onToggleSave}
                        isSaved={true}
                    />

                ))

            )}

        </section>
    );
}

export default SavedJobs;