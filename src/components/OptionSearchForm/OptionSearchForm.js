import React, { useState } from "react";

const OptionSearchForm = ({ searchText }) => {
  const [text, setText] = useState("books");
  const handleSubmit = (e) => {
    e.preventDefault();
    searchText(text);
  };
  return (
    <form className="searchForm searchOptions" onSubmit={handleSubmit}>
      <label>Choose a news section: </label>

      <select
        className="form__input sections"
        name="sections"
        onChange={(e) => {
          setText(e.target.value);
        }}
      >
        <option value="books">books</option>
        <option value="movies">movies</option>
        <option value="arts">arts</option>
        <option value="sports">sports</option>
        <option value="theater">theater</option>
        <option value="science">science</option>
        <option value="style">style</option>
        <option value="business">business</option>
        <option value="at-home">at-home</option>
      </select>
      <input className="form__button" type="submit" value="Submit"></input>
    </form>
  );
};

export default OptionSearchForm;
