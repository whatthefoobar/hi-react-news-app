import "./MainArticles.css";

const MainArticles = ({ topArticles }) => {
  return (
    <section className="main-articles__list">
      {topArticles.slice(0, 10).map((topArticle) => {
        // console.log(topArticle);
        return (
          <div className="main-article" key={topArticle.uri}>
            {topArticle.multimedia ? (
              <div className="main-article__img">
                <img
                  src={topArticle.multimedia[0].url}
                  alt="top news article"
                />
                {/* <a href="">{topArticle.section}</a> */}
              </div>
            ) : null}

            <div className="main-article__content">
              <h4>{topArticle.title}</h4>
              <p>{topArticle.abstract}</p>
              <p>{topArticle.byline}</p>
              {topArticle.url ? (
                <a
                  href={topArticle.url}
                  target="_blank"
                  rel="noreferrer"
                  className="list__link"
                >
                  Full article
                </a>
              ) : null}
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default MainArticles;
