import { articles } from "../data";

export default function Blog() {
  const listArticles = articles.map((article) => (
    <li key={article.id}>{article.title}</li>
  ));
  return <ul>{listArticles}</ul>;
}
