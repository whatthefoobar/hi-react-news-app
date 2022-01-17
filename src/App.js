import "./App.css";
import React, { useState, useEffect } from "react";
import NewsSection from "./components/NewsSection/NewsSection";
import SearchForm from "./components/SearchForm/SearchForm";
import Footer from "./components/Footer/Footer";

const App = () => {
  const [articles, setArticles] = useState([]);
  const [term, setTerm] = useState("everything");
  const [isLoading, setIsLoading] = useState("true");
  const [section, setSection] = useState("arts");
  const [topArticles, setTopArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const res = await fetch(
          `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${term}&api-key=${process.env.REACT_APP_NEWS_API_KEY}`
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
          `https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=${process.env.REACT_APP_NEWS_API_KEY}`
        );
        const data = await res.json();
        const topArticles = data.results;
        console.log(topArticles);
        // console.log(articles);
        setTopArticles(topArticles);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchTopArticles();
  }, []);

  // console.log(topArticles);
  // console.log("title", topArticles[0].title);
  // console.log("parag", topArticles[0].abstract);
  // console.log("img link", topArticles[0].multimedia[0].url);
  // console.log("id", topArticles[0].uri);
  // console.log("story url", topArticles[0].url);

  return (
    <>
      <div className="header__img">
        <div className="overlay">Get your daily news fix here</div>
      </div>

      <div className="articles__container">
        <div className="main-articles__container">
          <h2 className="main-articles__header">Top news</h2>
          <section className="main-articles__list">
            {topArticles.map((topArticle) => {
              return (
                <article className="main-article" key={topArticle.uri}>
                  <img
                    src={topArticle.multimedia[0].url}
                    alt="top news article"
                  />
                  <h2>{topArticle.title}</h2>
                  <p>{topArticle.abstract}</p>
                  <p>{topArticle.byline}</p>
                  <a
                    href={topArticle.url}
                    target="_blank"
                    className="list__link"
                  >
                    read more
                  </a>
                </article>
              );
            })}
          </section>
        </div>
        <section className="searchable-articles">
          <div className="searchable-articles__search">
            <SearchForm
              searchText={(text) => {
                setTerm(text); // prop function we declared here that we export to SearchForm
              }}
            />
            <h1 className="searchable-articles__intro">
              Viewing articles about {term}
            </h1>
          </div>

          {isLoading ? ( // if is not loading render this section
            <h1 className="loading"> Loading...</h1>
          ) : (
            <NewsSection
              articles={articles}
              searchText={(text) => {
                setTerm(text); // prop function we declared here that we export to SearchForm
              }}
            />
          )}
        </section>
        {/* footer here */}
        <Footer />
      </div>
    </>
  );
};

export default App;

{
  /* <section className="articles__most-popular-news">
            <h4>Most popular news</h4>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla modi
            excepturi non, commodi corrupti saepe voluptates hic quidem
            aspernatur quae obcaecati enim! Nulla quibusdam totam consequatur
            pariatur amet! Sed qui nihil ad non, perspiciatis est voluptatem
            aperiam quisquam repudiandae delectus placeat facilis molestias
            minima corporis accusantium eveniet expedita, assumenda soluta quia
            et dolorum ea ut totam at! Voluptates expedita numquam, dolor
            soluta, magnam architecto, nam distinctio facilis ut iste commodi a
            corrupti ipsam debitis quisquam. Quia nulla nesciunt velit inventore
            repudiandae? Voluptate cupiditate explicabo quam, eligendi minima
            qui ipsam quidem neque laudantium sed ullam ratione possimus aut
            aperiam, quia vitae, voluptates dolore repellat tempore eos at
            nesciunt? Beatae quod culpa nihil ducimus inventore quas. Quam
            nostrum corporis odio voluptates sunt!
          </section> */
}
