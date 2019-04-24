import * as React from "react";
import newsAPI from "newsapi";

const KeywordForm = () => {
  const newsapi = new newsAPI(process.env.REACT_APP_NEWSAPI_KEY);
  const [articles, setArticles] = React.useState([{ title: "roo" }]);

  React.useEffect(() => {
    newsapi.v2
      .everything({
        q: "Lebanon"
      })
      .then(response => {
        setArticles(response.articles);
      });
  }, []);

  return (
    <div>
      <h2>Add Keyword search</h2>
      {articles.map(article => {
        return <div key={article.title}>{article.title}</div>;
      })}
    </div>
  );
};

export { KeywordForm as default };
