import React from "react";
import "./SearchComponent.css";

const SearchComponent = ({ onSearch }) => {
  return (
    <div className="search-component">
      <label htmlFor="searchId" className="search-label">
        Search
      </label>
      <input
        id="searchId"
        data-testid="searchId"
        className="search-input"
        type="search"
        placeholder="Enter here to search"
        onChange={onSearch}
      />
    </div>
  );
};

export default SearchComponent;
