import React from "react";
import SearchForm from "../SearchForm/SearchForm";
import SingleNews from "../SingleNews/SingleNews";

function NewsSection({ articles }) {
  return (
    <div className="articles__container">
      <section className="articles__section content">
        {articles.map((article) => {
          return <SingleNews key={article._id} article={article} />;
        })}
      </section>
    </div>
  );
}

export default NewsSection;
