import React from "react";
import "../assets/styles/article.css";

export const Article = ({ imgUrl, date, title }) => {
  return (
    <div className="blog-container-article">
      <div className="blog-container-article-image">
        <img src={imgUrl} alt="blog image" />
      </div>
      <div className="blog-container-article-content">
        <div>
          <p>{date}</p>
          <h4>{title}</h4>
        </div>
        <p>Read Full Article</p>
      </div>
    </div>
  );
};
