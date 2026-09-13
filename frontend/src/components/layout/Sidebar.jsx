function Sidebar({ currentPage, setCurrentPage }) {

    return (
        <aside className="sidebar">

            <div className="logo">

                <div className="logo-icon">
                    💼
                </div>

                <div>
                    <h2>Job Intelligence</h2>
                    <span>Find. Match. Track. Grow.</span>
                </div>

            </div>

            <nav className="navigation">

                <div
                    className={`nav-item ${
                        currentPage === "dashboard" ? "active" : ""
                    }`}
                    onClick={() => setCurrentPage("dashboard")}
                >
                    📊 Dashboard
                </div>

                <div className="nav-item">
                    🔍 Find Jobs
                </div>

                <div className="nav-item">
                    📋 My Applications
                </div>

                <div
                    className={`nav-item ${
                        currentPage === "saved" ? "active" : ""
                    }`}
                    onClick={() => setCurrentPage("saved")}
                >
                    🔖 Saved Jobs
                </div>

                <div className="nav-item">
                    👤 My Profile
                </div>

                <div className="nav-item">
                    📈 Insights
                </div>

                <div className="nav-item">
                    ⚙️ Settings
                </div>

            </nav>

        </aside>
    );
}

export default Sidebar;