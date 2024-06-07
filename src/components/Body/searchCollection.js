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
      clearTimeout(clearTimeoutRef.current);
      setShows([]);
      return;
    }

    try {
      const response = await axios.get(`${SEARCH_API_URL}${query}`);

      const showsData = response.data.map((result) => result.show);
      setShows(showsData);
    } catch (error) {
      console.error("Error fetching data from TVMaze", error);
    }
  };

  const handleInputChange = (event) => {
    const newQuery = event.target.value;
    setQuery(newQuery);

    if (clearTimeoutRef.current) {
      clearTimeout(clearTimeoutRef.current);
    }

    if (newQuery.trim() === "") {
      clearTimeoutRef.current = setTimeout(() => {
        setShows([]);
      }, 2000);
    }
  };

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
              onChange={handleInputChange}
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
          </div>
        ))}
      </div>
    </div>
  );
}
