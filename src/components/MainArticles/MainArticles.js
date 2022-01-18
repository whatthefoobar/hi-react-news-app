import React from "react";

const MainArticles = ({ topArticles }) => {
  return (
    <div>
      {/* <h2 className="main-articles__header">Top news</h2> */}
      <section className="main-articles__list">
        {topArticles.map((topArticle) => {
          // console.log(topArticle);
          return (
            <article className="main-article" key={topArticle.uri}>
              {topArticle.multimedia ? (
                <img
                  src={topArticle.multimedia[0].url}
                  alt="top news article"
                />
              ) : null}
              {/* <img src={topArticle.multimedia[0].url} alt="top news article" /> */}
              <h2>{topArticle.title}</h2>
              <p>{topArticle.abstract}</p>
              <p>{topArticle.byline}</p>

              {topArticle.url ? (
                <a href={topArticle.url} target="_blank" className="list__link">
                  read more
                </a>
              ) : null}
            </article>
          );
        })}
      </section>
    </div>
  );
};

export default MainArticles;
