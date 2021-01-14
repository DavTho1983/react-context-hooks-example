import React, { useContext, useEffect } from "react";

import { ArticleContext } from "../context/articleContext";
import Article from "../components/Article/Article";

const Articles = () => {
  const { articles } = useContext(ArticleContext);
  console.log("ARTTICLES ARE READY", articles)

  useEffect(() => {
    console.log("this gets called all the time")
  })

  useEffect(() => {
    console.log("this gets called once")
  }, [])

  useEffect(() => {
    console.log("this gets called when articles loads and then when it changes")
  }, [articles])


  return (
    <div>
      {articles.map(article => (
        <Article key={article.id} article={article} />
      ))}
    </div>
  );
};

export default Articles;
