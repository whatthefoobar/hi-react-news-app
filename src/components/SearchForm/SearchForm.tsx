import React, { useState } from "react";
import "./SearchForm.css";

const SearchForm = ({ searchText }) => {
  const [text, setText] = useState("");
  const handleSubmit = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    searchText(text);
  };

  return (
    <form className="searchForm" onSubmit={(e) => handleSubmit}>
      <input
        type="text"
        placeholder="e.g. politics"
        className="form__input"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setText(e.target.value);
        }}
      />
      <button type="submit" className="form__button">
        Search
      </button>
    </form>
  );
};

export default SearchForm;
