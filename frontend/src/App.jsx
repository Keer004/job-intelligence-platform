import { useEffect, useState } from "react";

import { getJobs, searchJobs } from "./services/jobApi";

import "./App.css";

import Sidebar from "./components/layout/Sidebar";
import Header from "./components/layout/Header";
import Dashboard from "./components/dashboard/Dashboard";
import SavedJobs from "./components/SavedJobs";


function App() {

    const [jobs, setJobs] = useState([]);

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState("");

    const [savedJobs, setSavedJobs] = useState([]);

    const [currentPage, setCurrentPage] = useState("dashboard");

    const [searchText, setSearchText] = useState("");

    const [isSearching, setIsSearching] = useState(false);


    // =========================
    // Load jobs
    // =========================

    useEffect(() => {

        const loadJobs = async () => {

            try {

                const data = await getJobs();

                setJobs(data.content);

            } catch (error) {

                console.error(error);

                setError("Failed to load jobs");

            } finally {

                setLoading(false);

            }

        };

        loadJobs();

    }, []);


    // =========================
    // Save / Unsave job
    // =========================

    const toggleSaveJob = (job) => {

        setSavedJobs((currentSavedJobs) => {

            const alreadySaved = currentSavedJobs.some(
                (savedJob) => savedJob.id === job.id
            );

            if (alreadySaved) {

                return currentSavedJobs.filter(
                    (savedJob) => savedJob.id !== job.id
                );

            }

            return [...currentSavedJobs, job];

        });

    };


    // =========================
    // Search
    // =========================

    const handleSearch = async () => {

        if (!searchText.trim()) {
            return;
        }

        try {

            setLoading(true);
            setError("");
            setIsSearching(true);

            const data = await searchJobs(searchText);

            setJobs(data.content);

        } catch (error) {

            console.error(error);

            setError("Failed to search jobs");

        } finally {

            setLoading(false);

        }

    };


    // =========================
    // Clear search
    // =========================

    const clearSearch = async () => {

        setSearchText("");
        setIsSearching(false);
        setError("");

        try {

            setLoading(true);

            const data = await getJobs();

            setJobs(data.content);

        } catch (error) {

            console.error(error);

            setError("Failed to load jobs");

        } finally {

            setLoading(false);

        }

    };


    // =========================
    // Loading
    // =========================

    if (loading) {

        return <h2>Loading jobs...</h2>;

    }


    // =========================
    // Error
    // =========================

    if (error) {

        return <h2>{error}</h2>;

    }


    // =========================
    // Application UI
    // =========================

    return (

        <div className="app">

            <Sidebar
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
            />


            <main className="main">

                <Header
                    searchText={searchText}
                    setSearchText={setSearchText}
                    handleSearch={handleSearch}
                />


                {currentPage === "dashboard" && (

                    <Dashboard
                        jobs={jobs}
                        savedJobs={savedJobs}
                        isSearching={isSearching}
                        searchText={searchText}
                        clearSearch={clearSearch}
                        toggleSaveJob={toggleSaveJob}
                    />

                )}


                {currentPage === "saved" && (

                    <section className="content">

                        <SavedJobs
                            savedJobs={savedJobs}
                            onToggleSave={toggleSaveJob}
                        />

                    </section>

                )}

            </main>

        </div>

    );

}

export default App;