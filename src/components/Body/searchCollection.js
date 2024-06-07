import React, { useState, useRef } from "react";
import axios from "axios";
import "./searchCollection.css";
import { CiSearch } from "react-icons/ci";

const SEARCH_API_URL = `https://api.tvmaze.com/search/shows?q=`;

export default function SearchCollection() {
  const [query, setQuery] = useState("");
  const [shows, setShows] = useState([]);
  const clearTimeoutRef = useRef(null);

  const handleSearch = async (event) => {
    event.preventDefault();
    if (query.trim() === "") {
      clearTimeout(clearTimeoutRef.current); // Clear any existing timeout
      setShows([]); // Clear the shows if the search query is empty
      return;
    }

    try {
      const response = await axios.get(`${SEARCH_API_URL}${query}`);
      // Extract the shows data from the response
      const showsData = response.data.map((result) => result.show);
      setShows(showsData);
    } catch (error) {
      console.error("Error fetching data from TVMaze", error);
    }
  };

  const handleInputChange = (event) => {
    const newQuery = event.target.value;
    setQuery(newQuery);

    // Clear any existing timeout
    if (clearTimeoutRef.current) {
      clearTimeout(clearTimeoutRef.current);
    }

    // Clear the shows if the search query is empty after a delay
    if (newQuery.trim() === "") {
      clearTimeoutRef.current = setTimeout(() => {
        setShows([]);
      }, 2000); // Adjust the delay as needed (3000 ms = 3 seconds)
    }
  };

  // Log the query for debugging
  console.log("Search Query:", query);

  return (
    <div className="searchCollection">
      <div className="wrapper">
        <div className="search-item">
          <div className="search-title">Collect your favourites</div>
          <form className="search" onSubmit={handleSearch}>
            <CiSearch className="search-icon" />
            <input
              type="text"
              placeholder="Search title and add to grid"
              value={query}
              onChange={handleInputChange} // Use handleInputChange here
              className="search-input"
            />
          </form>
        </div>
      </div>
      <div className="show-container">
        {shows.map((show) => (
          <div className="show-card" key={show.id}>
            <div className="movie-card">
              <img src={show.image?.medium} alt={show.name} />
              <div className="movie-details">
                <h2>{show.name}</h2>
                <p>{show.type}</p>
              </div>
            </div>

            {/* Add more details if needed */}
          </div>
        ))}
      </div>
    </div>
  );
}
