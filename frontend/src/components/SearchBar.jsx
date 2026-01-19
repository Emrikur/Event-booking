import { useState } from "react";

import "../styles/SearchBar.css";
import { useContext } from "react";
import { EventContext } from "../context/EventContext";
import { Link } from "react-router-dom";

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("");
  const { filterEvents } = useContext(EventContext);

  function handleSubmit(event) {
    event.preventDefault();
    filterEvents(searchTerm, category);
  }

  const onSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    filterEvents(value, category);
  };

  const onCategoryClick = (e) => {
    const value = e.target.value;
    setCategory(value);
    filterEvents(searchTerm, value);
  };

  return (
    <section className="search-bar">
      <form role="Search form" className="search-bar__container" onSubmit={handleSubmit}>
        <input
          className="search-bar__input"
          type="text"
          placeholder="Search for events..."
          value={searchTerm}
          onChange={onSearchChange}
        />

        <select
          className="search-bar__select"
          aria-label="Choose category"
          value={category}
          onChange={onCategoryClick}
        >
          <option value="">All categories</option>
          <option value="wellness">Wellness</option>
          <option value="food & drink">Food & Drink</option>
          <option value="music">Music</option>
          <option value="sports">Sports</option>
          <option value="social">Social</option>
          <option value="workshop">Workshop</option>
        </select>
        <Link to="/events">
          <button type="submit" className="search-bar__button">
            Search
          </button>
        </Link>
      </form>
    </section>
  );
}

export default SearchBar;
