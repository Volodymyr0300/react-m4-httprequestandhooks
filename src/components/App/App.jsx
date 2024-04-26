import { useEffect, useState } from "react";
import axios from "axios";
import ArticleList from "./ArticleList/ArticleList";

const App = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchArticles() {
      const response = await axios.get(
        "https://hn.algolia.com/api/v1/search?query=react"
      );

      setArticles(response.data.hits);
    }

    fetchArticles();
  }, []);

  return (
    <div>
      <h1>Latest articles</h1>
      {loading && <p>Loading data, please wait...</p>}
      {articles.length > 0 && <ArticleList items={articles} />}
    </div>
  );
};

export default App;
