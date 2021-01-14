import React from "react";

import ArticleProvider from "./context/articleContext";
import Articles from "./containers/Articles";
import AddArticle from "./components/AddArticle/AddArticle";

function App() {
  return (
    <ArticleProvider ref={console.log("1 - PROVIDER IS READY")}>
      <AddArticle ref={console.log("2a - ADDARTICLE IS READY (async batched)")}/>
      <Articles ref={console.log("2b -ARTICLES IS READY (async batched)")}/>
    </ArticleProvider>
  );
}
export default App;