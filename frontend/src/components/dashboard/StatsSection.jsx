function StatsSection({ jobs, savedJobs }) {

    return (

        <div className="stats">

            <div className="stat-card">

                <span>
                    💼
                </span>

                <div>

                    <h2>
                        {jobs.length}
                    </h2>

                    <p>
                        Total Jobs
                    </p>

                </div>

            </div>


            <div className="stat-card">

                <span>
                    🎯
                </span>

                <div>

                    <h2>
                        —
                    </h2>

                    <p>
                        Matching Jobs
                    </p>

                </div>

            </div>


            <div className="stat-card">

                <span>
                    📄
                </span>

                <div>

                    <h2>
                        0
                    </h2>

                    <p>
                        Applications
                    </p>

                </div>

            </div>


            <div className="stat-card">

                <span>
                    ❤️
                </span>

                <div>

                    <h2>
                        {savedJobs.length}
                    </h2>

                    <p>
                        Saved Jobs
                    </p>

                </div>

            </div>

        </div>

    );

}

export default StatsSection;