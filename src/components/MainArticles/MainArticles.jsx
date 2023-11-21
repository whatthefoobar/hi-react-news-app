import { useState } from "react";
import "./MainArticles.css";
import Pagination from "../Pagination/Pagination";

const MainArticles = ({ topArticles }) => {
  const itemsPerPage = 3; // Number of items per page
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = topArticles.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  return (
    <>
      <section className="main-articles__list">
        {currentItems.map((topArticle) => {
          return (
            <div className="main-article" key={topArticle.uri}>
              {topArticle.multimedia ? (
                <div className="main-article__img">
                  <img
                    src={topArticle.multimedia[1].url}
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
      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(topArticles.length / itemsPerPage)}
        onPageChange={paginate}
      />
    </>
  );
};

export default MainArticles;
