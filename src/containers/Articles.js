import React, { useContext, useState, useEffect } from "react";

import { ArticleContext } from "../context/articleContext";
import Article from "../components/Article/Article";

const Articles = () => {
  const { articles } = useContext(ArticleContext);
  console.log("ARTICLES ARE READY", articles)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    console.log("this gets called all the time")
  })

  useEffect(() => {
    console.log("this gets called once")
  }, [])

  useEffect(() => {
    console.log("this gets called when articles loads and then when it changes")
  }, [articles])

  useEffect(() => {
    console.log("LOADING =", loading)
    if (!loading) {
       setLoading(true)
        }
    }, [loading]
  )

  useEffect(() => {
    console.log("ARTICLES DETECTED BY USEEFFECT - 1", articles)
    if (articles) {
      console.log("ARTICLES DETECTED BY USEEFFECT - 2", articles)
      }
    }, [articles]
  )


  return (
    <div>
      {articles && <div ref={console.log("ARTICLES READY IN DOM")}>ARTICLES READY</div>}
      {articles.map(article => (
        <Article key={article.id} article={article} />
      ))}
    </div>
  );
};

export default Articles;
