import React, { useState } from "react";

const SearchForm = ({ searchText }) => {
  const [text, setText] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    searchText(text);
  };

  return (
    <div>
      <form className="searchForm" conSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="e.g. politics"
          className="form__input"
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <button type="submit" className="form__button">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchForm;
