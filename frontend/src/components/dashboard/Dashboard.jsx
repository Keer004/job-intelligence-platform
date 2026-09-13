import WelcomeSection from "./WelcomeSection";
import StatsSection from "./StatsSection";
import JobsSection from "./JobsSection";
import JobFilters from "../JobFilters";

function Dashboard({
    jobs,
    savedJobs,
    isSearching,
    searchText,
    clearSearch,
    toggleSaveJob
}) {

    return (

        <section className="content">

            <WelcomeSection />

            <StatsSection
                jobs={jobs}
                savedJobs={savedJobs}
            />

            <JobFilters />

            <JobsSection
                jobs={jobs}
                savedJobs={savedJobs}
                isSearching={isSearching}
                searchText={searchText}
                clearSearch={clearSearch}
                toggleSaveJob={toggleSaveJob}
            />

        </section>

    );

}

export default Dashboard;