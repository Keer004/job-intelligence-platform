import JobCard from "../JobCard";

function JobsSection({
    jobs,
    savedJobs,
    isSearching,
    searchText,
    clearSearch,
    toggleSaveJob
}) {

    return (

        <section className="jobs-section">

            <div className="section-header">

                <div>

                    <h2>
                        {isSearching
                            ? `Search Results for "${searchText}"`
                            : "Recommended for You"
                        }
                    </h2>

                    <p>
                        {isSearching
                            ? `${jobs.length} jobs found`
                            : "Jobs that match your skills and preferences."
                        }
                    </p>

                </div>

                {isSearching && (

                    <button onClick={clearSearch}>
                        Clear Search
                    </button>

                )}

                <button>
                    View All →
                </button>

            </div>


            {jobs.length === 0 ? (

                <div className="no-results">

                    <h3>
                        No jobs found
                    </h3>

                    <p>
                        Try searching for another job title or keyword.
                    </p>

                </div>

            ) : (

                jobs.map((job) => (

                    <JobCard
                        key={job.id}
                        job={job}
                        onToggleSave={toggleSaveJob}
                        isSaved={savedJobs.some(
                            (savedJob) =>
                                savedJob.id === job.id
                        )}
                    />

                ))

            )}

        </section>

    );

}

export default JobsSection;