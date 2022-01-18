import React, { useState } from "react";

const OptionSearchForm = ({ searchText }) => {
  const [text, setText] = useState("movies");
  const handleSubmit = (e) => {
    e.preventDefault();
    searchText(text);
  };
  return (
    <div>
      <form className="searchForm searchOptions" onSubmit={handleSubmit}>
        <label>Choose a news section: </label>

        <select
          className="form__input sections"
          name="sections"
          onChange={(e) => {
            setText(e.target.value);
            // console.log(e.target.value);
          }}
        >
          <option value="movies">movies</option>
          <option value="arts">arts</option>
          <option value="sports">sports</option>
          <option value="books">books</option>
          <option value="theater">theater</option>
          <option value="science">science</option>
          <option value="style">style</option>
          <option value="business">business</option>
          <option value="at-home">at-home</option>
        </select>
        <input className="form__button" type="submit" value="Submit"></input>
        {/* <input
          type="text"
          placeholder="e.g. politics"
          className="form__input"
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <button type="submit" className="form__button">
          Search
        </button> */}
      </form>
    </div>
  );
};

export default OptionSearchForm;
