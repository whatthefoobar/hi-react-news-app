import { useState } from "react";
import MainArticles from "../MainArticles/MainArticles";
import OptionSearchForm from "../OptionSearchForm/OptionSearchForm";
import SearchableNews from "../SearchableNews/SearchableNews";
import SearchForm from "../SearchForm/SearchForm";

const AllArticles = ({
  articles,
  topArticles,
  term,
  setTerm,
  section,
  setSection,
  isLoading,
}) => {
  return (
    <div className="articles__container">
      <div className="main-articles__container">
        <OptionSearchForm
          className="main-articles__search"
          searchText={(text: string) => {
            setSection(text); // prop function we declared here that we export to SearchForm
          }}
        />
        <h1 className="main-articles__intro">
          Viewing top stories about {section}
        </h1>

        {isLoading ? ( // if is not loading render this section
          <h1 className="loading"> Loading...</h1>
        ) : (
          <MainArticles topArticles={topArticles} />
        )}
      </div>
      <section className="searchable-articles">
        <SearchForm
          className="searchable-articles__search"
          searchText={(text: string) => {
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
            searchText={(text: string) => {
              setTerm(text); // prop function we declared here that we export to SearchForm
            }}
          />
        )}
      </section>
    </div>
  );
};

export default AllArticles;
