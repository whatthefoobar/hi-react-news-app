import React from "react";
import SearchForm from "../SearchForm/SearchForm";
import SingleNews from "../SingleNews/SingleNews";

function SearchableNews({ articles }) {
  return (
    <div className="searchable-articles__container">
      <section className="articles__section content">
        {articles.map((article) => {
          return <SingleNews key={article._id} article={article} />;
        })}
      </section>
    </div>
  );
}

export default SearchableNews;
