import React from "react";
import "./MainArticles.css";

const MainArticles = ({ topArticles }) => {
  return (
    <section className="main-articles__list">
      {topArticles.map((topArticle) => {
        console.log(topArticle);
        return (
          <div className="main-article" key={topArticle.uri}>
            {topArticle.multimedia ? (
              <div className="main-article__img">
                <img
                  src={topArticle.multimedia[0].url}
                  alt="top news article"
                />
                <a href="">{topArticle.section}</a>
              </div>
            ) : null}

            <div className="main-article__content">
              <h4>{topArticle.title}</h4>
              <p>{topArticle.abstract}</p>
              <p>{topArticle.byline}</p>
              {topArticle.url ? (
                <a href={topArticle.url} target="_blank" className="list__link">
                  read more
                </a>
              ) : null}
            </div>
          </div>
          // <article className="main-article" key={topArticle.uri}>
          //   {topArticle.multimedia ? (
          //     <img src={topArticle.multimedia[0].url} alt="top news article" />
          //   ) : null}
          //   {/* <img src={topArticle.multimedia[0].url} alt="top news article" /> */}
          //   <h2>{topArticle.title}</h2>
          //   <p>{topArticle.abstract}</p>
          //   <p>{topArticle.byline}</p>

          //   {topArticle.url ? (
          //     <a href={topArticle.url} target="_blank" className="list__link">
          //       read more
          //     </a>
          //   ) : null}
          // </article>
        );
      })}
    </section>
  );
};

export default MainArticles;
