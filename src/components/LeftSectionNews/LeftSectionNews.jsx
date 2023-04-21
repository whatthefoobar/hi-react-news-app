import React from "react";
import OptionSearchForm from "../OptionSearchForm/OptionSearchForm";
import MainArticles from "../MainArticles/MainArticles";

const LeftSectionNews = ({ topArticles, setSection, section, isLoading }) => {
  const changeSectionTerm = (text) => {
    setSection(text);
  };
  return (
    <div className="main-articles__container">
      <OptionSearchForm
        className="main-articles__search"
        searchText={changeSectionTerm}
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
  );
};

export default LeftSectionNews;
