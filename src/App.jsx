import "./App.css";
import { useState, useEffect } from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

import LeftSectionNews from "./components/LeftSectionNews/LeftSectionNews";
import RightSectionNews from "./components/RightSectionNews/RightSectionNews";

const App = () => {
  const [term, setTerm] = useState("everything");
  const [section, setSection] = useState("books");

  const [articles, setArticles] = useState([]);
  const [topArticles, setTopArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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
        <LeftSectionNews
          section={section}
          setSection={setSection}
          isLoading={isLoading}
          topArticles={topArticles}
        />
        <RightSectionNews
          articles={articles}
          term={term}
          setTerm={setTerm}
          isLoading={isLoading}
        />
      </div>
      <Footer />
    </>
  );
};

export default App;
