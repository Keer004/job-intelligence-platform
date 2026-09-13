function Header({
    searchText,
    setSearchText,
    handleSearch
}) {

    return (

        <header className="header">

            <div className="search-container">

                <span>
                    🔍
                </span>

                <input
                    type="text"
                    placeholder="Search jobs, companies, or skills..."
                    value={searchText}
                    onChange={(event) =>
                        setSearchText(event.target.value)
                    }
                    onKeyDown={(event) => {

                        if (event.key === "Enter") {
                            handleSearch();
                        }

                    }}
                />

            </div>

            <div className="location">
                📍 Hyderabad
            </div>

            <button
                className="search-button"
                onClick={handleSearch}
            >
                Search
            </button>

            <div className="profile">

                <div className="avatar">
                    K
                </div>

                <div>

                    <strong>
                        Keerthika
                    </strong>

                    <span>
                        Software Engineer
                    </span>

                </div>

            </div>

        </header>

    );
}

export default Header;