import React from "react";
import SearchForm from "../SearchForm/SearchForm";
import SearchableNews from "../SearchableNews/SearchableNews";

const RightSectionNews = ({ term, setTerm, isLoading, articles }) => {
  return (
    <section className="searchable-articles">
      <SearchForm
        className="searchable-articles__search"
        searchText={(text) => {
          setTerm(text); // prop function we declared here that we export to SearchForm
        }}
      />
      <h1 className="searchable-articles__intro">
        Viewing articles about {term}
      </h1>

      {isLoading ? ( // if is not loading render this section
        <h1 className="loading"> Loading...</h1>
      ) : (
        <SearchableNews
          articles={articles}
          searchText={(text) => {
            setTerm(text); // prop function we declared here that we export to SearchForm
          }}
        />
      )}
    </section>
  );
};

export default RightSectionNews;
