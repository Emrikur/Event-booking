import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/SearchBar.css";

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    const params = new URLSearchParams();

    if (searchTerm) params.set("query", searchTerm);
    if (category) params.set("category", category);

    navigate(`/events?${params.toString()}`);
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
          aria-label="Choose category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">All categories</option>
          <option value="wellness">Wellness</option>
          <option value="food & drink">Food & Drink</option>
          <option value="music">Music</option>
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
