/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useEffect } from "react";
import "../App.css";

const api =
  "https://newsapi.org/v2/everything?q=nasa&from=2023-03-26&sortBy=publishedAt&apiKey=ab8745cc1feb40fa8e5c80c24012dceb";

function Articles() {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    fetch(api)
      .then((res) => res.json())
      .then((data) => setArticles(data.articles))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      {articles.map((article) => {
        const { title, urlToImage, url } = article;

        return (
          <div
            key={article.id}
            onClick={() => window.open(url, "_blank").focus()}
          >
            <img src={urlToImage} className="articles_css" alt={title} />
            <h3>{title}</h3>
          </div>
        );
      })}
    </div>
  );
}

export default Articles;
