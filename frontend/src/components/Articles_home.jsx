/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useEffect } from "react";
import "../App.css";

const api = "https://api.spaceflightnewsapi.net/v3/articles";

function Articles() {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    fetch(api)
      .then((res) => res.json())
      .then((data) => setArticles(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      {articles?.map((article) => {
        const { title, imageUrl, url } = article;

        return (
          <div
            id="article-container"
            key={article.id}
            onClick={() => window.open(url, "_blank").focus()}
          >
            <img src={imageUrl} className="articles_css" alt={title} />
            <div id="titleArticles">
              <h3>{title}</h3>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Articles;
