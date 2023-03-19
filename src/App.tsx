import "./App.css";
import { useState, useEffect } from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import AllArticles from "./components/AllArticles/AllArticles";
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
  const [term, setTerm] = useState<string>("everything");
  const [section, setSection] = useState<string>("books");

  const [articles, setArticles] = useState([]);
  const [topArticles, setTopArticles] = useState([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

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
      <AllArticles
        articles={articles}
        topArticles={topArticles}
        term={term}
        setTerm={setTerm}
        section={section}
        setSection={setSection}
        isLoading={isLoading}
      />
      <Footer />
    </>
  );
};

export default App;
