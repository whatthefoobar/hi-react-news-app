import "./App.css";
import React, { useState, useEffect } from "react";
import SearchableNews from "./components/SearchableNews/SearchableNews";
import SearchForm from "./components/SearchForm/SearchForm";
import Footer from "./components/Footer/Footer";
import MainArticles from "./components/MainArticles/MainArticles";
import Header from "./components/Header/Header";
import OptionSearchForm from "./components/OptionSearchForm/OptionSearchForm";
// interface IArticle {
//   abstract: string;
//   byLine: {
//     organization: null;
//     original: string;
//     person: [
//       {
//         firstname: string;
//         lastname: string;
//         middlename: null | string;
//         organization: string;
//         qualifier: null | string;
//         rank: number;
//         role: string;
//         title: null | string;
//       }
//     ];
//     document_type: string;
//   };
//   document_type: string;
//   headline: {
//     content_kicker: null;
//     kicker: null;
//     main: string;
//     name: null;
//     print_headline: string;
//     seo: null;
//     sub: null;
//   };
// }

const App = () => {
  const [articles, setArticles] = useState([]);
  const [term, setTerm] = useState<string>("everything");
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [section, setSection] = useState<string>("books");
  const [topArticles, setTopArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const res = await fetch(
          `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${term}&api-key=${
            import.meta.env.VITE_REACT_APP_NEWS_API_KEY
          }`
        );
        const data = await res.json();
        const articles = data.response.docs;
        // console.log(articles);
        setArticles(articles);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchArticles();
  }, [term]);

  useEffect(() => {
    const fetchTopArticles = async () => {
      try {
        const res = await fetch(
          `https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=${
            import.meta.env.VITE_REACT_APP_NEWS_API_KEY
          }`
        );
        const data = await res.json();
        const topArticles = data.results;
        // console.log(topArticles);
        setTopArticles(topArticles);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchTopArticles();
  }, [section]);

  return (
    <>
      <Header />
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
              searchText={(text) => {
                setTerm(text); // prop function we declared here that we export to SearchForm
              }}
            />
          )}
        </section>
      </div>

      <Footer />
    </>
  );
};

export default App;
