import React from "react";
import SingleNews from "../SingleNews/SingleNews";
import "./SearchableNews.css";

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
