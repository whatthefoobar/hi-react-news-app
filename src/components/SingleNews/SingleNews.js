import React from "react";

// https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=LucXp4UZ3Uv9BUyOVQjiCM6Xy6j6TLaC
//for img urls put https://static01.nyt.com/ in front of url

const SingleNews = ({ article }) => {
  return (
    <article className="article">
      {article.multimedia.length !== 0 ? (
        <img
          src={`https://static01.nyt.com/${article.multimedia[1].url}`}
          alt="news"
        />
      ) : null}

      {/* why img url has issues on search? */}
      <h2 className="article__header">{article.headline.main}</h2>
      <p>{article.abstract}</p>
      <p>{article.lead_paragraph}</p>
      <ul className="article__list">
        <li>
          <span className="list__span">By: </span>
          {article.byline.original}
        </li>
        <li>
          <span className="list__span">News Desk: </span>
          {article.news_desk}
        </li>
        <li>
          <span className="list__span">Section Name: </span>
          {article.section_name}
        </li>
        <li>
          <span className="list__span">Word Count: </span>
          {article.word_count}
        </li>
      </ul>
      <a href={article.web_url} target="_blank" className="list__link">
        Web resource
      </a>
    </article>
  );
};

export default SingleNews;
