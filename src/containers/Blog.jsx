import React from "react";
import "../assets/styles/blog.css";
import { Article } from "../cmps/Article";
import blog01 from "../assets/imgs/blog01.png";
import blog02 from "../assets/imgs/blog02.png";
import blog03 from "../assets/imgs/blog03.png";
import blog04 from "../assets/imgs/blog04.png";
import blog05 from "../assets/imgs/blog05.png";

export const Blog = () => {
  return (
    <div className="blog section__padding" id="blog">
      <div className="blog-heading">
        <h1 className="gradient__text">
          A lot is happening, We are blogging about it.
        </h1>
      </div>
      <div className="blog-container">
        <div className="blog-container-groupA">
          <Article
            imgUrl={blog01}
            date={"Sep 26, 2021"}
            title={"GPT-3 and Open AI is the future. Let us exlore how it is?"}
          />
        </div>
        <div className="blog-container-groupB">
          <Article
            imgUrl={blog02}
            date={"Sep 26, 2021"}
            title={"GPT-3 and Open AI is the future. Let us exlore how it is?"}
          />
          <Article
            imgUrl={blog03}
            date={"Sep 26, 2021"}
            title={"GPT-3 and Open AI is the future. Let us exlore how it is?"}
          />
          <Article
            imgUrl={blog04}
            date={"Sep 26, 2021"}
            title={"GPT-3 and Open AI is the future. Let us exlore how it is?"}
          />
          <Article
            imgUrl={blog05}
            date={"Sep 26, 2021"}
            title={"GPT-3 and Open AI is the future. Let us exlore how it is?"}
          />
        </div>
      </div>
    </div>
  );
};
