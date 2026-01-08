import { useState } from "react";

import "../styles/SearchBar.css";

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    // Handle  search logic here

    console.log("Searching for:", searchTerm, "in category:", category);
  }

  return (
    <section className="search-bar">
      <form className="search-bar__container" onSubmit={handleSubmit}>
        <input
          className="search-bar__input"
          type="text"
          placeholder="Search for events..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select
          className="search-bar__select"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">All categories</option>
          <option value="wellness">Wellness</option>
          <option value="food">Food & Drink</option>
          <option value="music">Music</option>
          <option value="sports">Sports</option>
          <option value="social">Social</option>
          <option value="workshop">Workshop</option>
        </select>
        <button type="submit" className="search-bar__button">
          Search
        </button>
      </form>
    </section>
  );
}

export default SearchBar;
