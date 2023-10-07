import React, { useState } from "react";
import SingleNews from "../SingleNews/SingleNews";
import "./SearchableNews.css";
import Pagination from "../Pagination/Pagination";

function SearchableNews({ articles }) {
  const itemsPerPage = 3; // Number of items per page
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = articles.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="searchable-articles__container">
      <section className="articles__section content">
        {currentItems.map((article) => {
          return <SingleNews key={article._id} article={article} />;
        })}
        <Pagination
          currentPage={currentPage}
          totalPages={Math.ceil(articles.length / itemsPerPage)}
          onPageChange={paginate}
        />
      </section>
    </div>
  );
}

export default SearchableNews;
