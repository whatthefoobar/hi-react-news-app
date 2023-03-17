import React from "react";
import "./SingleNews.css";

// https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=LucXp4UZ3Uv9BUyOVQjiCM6Xy6j6TLaC
//for img urls put https://static01.nyt.com/ in front of url

const SingleNews = ({ article }) => {
  // console.log(article);
  return (
    <article className="searchable-article">
      {article.multimedia.length !== 0 ? (
        <div className="searchable-article__img">
          <img
            src={`https://static01.nyt.com/${article.multimedia[1].url}`}
            alt="news"
          />
          <button>{article.section_name}</button>
        </div>
      ) : null}

      {/* why img url has issues on search? */}
      <h2 className="article__header">{article.headline.main}</h2>
      <p>{article.abstract}</p>
      <p>{article.lead_paragraph}</p>
      <ul className="searchable-article__list">
        <li>
          <span className="searchable-article__list__span">By: </span>
          {article.byline.original}
        </li>
        <li>
          <span className="searchable-article__list__span">News Desk: </span>
          {article.news_desk}
        </li>
        <li>
          <span className="searchable-article__list__span">Section Name: </span>
          {article.section_name}
        </li>
      </ul>
      <a
        href={article.web_url}
        target="_blank"
        rel="noreferrer"
        className="searchable-article__list__link"
      >
        Full article
      </a>
    </article>
  );
};

export default SingleNews;
