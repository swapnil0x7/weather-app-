import React from "react";
import './searchPage.css';

function SearchPage() {
  return (
    <div>
      <h1>Search Page</h1>
      <input type="text" placeholder="Enter city name" />
      <button>Search</button>
      {/* Display search results */}
    </div>
  );
}

export default SearchPage;
