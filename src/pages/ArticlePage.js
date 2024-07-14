import { useParams } from "react-router-dom";
import articles from "./article-content";
import NotFoundPage from "./NotFoundPage";

const ArticlePage = () => {
  const { articleId } = useParams();
  const article = articles.find((article) => article.name === articleId);
  if (!article) {
    return <NotFoundPage />;
  }
  return (
    <>
      <h1 className="pageTitle">{article.title}</h1>
      {article.content.map((paragraph) => (
        <p style={{ paddingLeft: "10px" }} key={paragraph}>
          {paragraph}
        </p>
      ))}
    </>
  );
};

export default ArticlePage;
