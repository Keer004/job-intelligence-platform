function JobFilters() {

    return (

        <section className="job-filters">

            <div className="filter-header">

                <div>
                    <h2>Find your next opportunity</h2>

                    <p>
                        Filter jobs based on your skills and preferences.
                    </p>
                </div>

            </div>


            {/* Job Title */}

            <div className="filter-group">

                <label>
                    Job Title
                </label>

                <input
                    type="text"
                    placeholder="e.g. Java Backend Engineer"
                />

            </div>


            {/* Filters Row */}

            <div className="filter-row">


                {/* Skills */}

                <div className="filter-group">

                    <label>
                        Skills
                    </label>

                    <select>

                        <option>
                            Select skills
                        </option>

                        <option>
                            Java
                        </option>

                        <option>
                            Spring Boot
                        </option>

                        <option>
                            React
                        </option>

                        <option>
                            Kafka
                        </option>

                        <option>
                            Redis
                        </option>

                        <option>
                            Docker
                        </option>

                        <option>
                            Kubernetes
                        </option>

                        <option>
                            PostgreSQL
                        </option>

                    </select>

                </div>


                {/* Location */}

                <div className="filter-group">

                    <label>
                        Location
                    </label>

                    <select>

                        <option>
                            Any location
                        </option>

                        <option>
                            Hyderabad
                        </option>

                        <option>
                            Bangalore
                        </option>

                        <option>
                            Chennai
                        </option>

                        <option>
                            Pune
                        </option>

                        <option>
                            Mumbai
                        </option>

                        <option>
                            Delhi
                        </option>

                        <option>
                            Remote
                        </option>

                    </select>

                </div>


                {/* Experience */}

                <div className="filter-group">

                    <label>
                        Experience
                    </label>

                    <select>

                        <option>
                            Any experience
                        </option>

                        <option>
                            0–1 years
                        </option>

                        <option>
                            1–2 years
                        </option>

                        <option>
                            2–4 years
                        </option>

                        <option>
                            4–6 years
                        </option>

                        <option>
                            6–10 years
                        </option>

                        <option>
                            10+ years
                        </option>

                    </select>

                </div>


                {/* Work Mode */}

                <div className="filter-group">

                    <label>
                        Work Mode
                    </label>

                    <select>

                        <option>
                            Any
                        </option>

                        <option>
                            Remote
                        </option>

                        <option>
                            Hybrid
                        </option>

                        <option>
                            On-site
                        </option>

                    </select>

                </div>

            </div>


            {/* Search Button */}

            <div className="filter-actions">

                <button className="filter-search-button">
                    🔍 Search Jobs
                </button>

            </div>

        </section>

    );

}

export default JobFilters;