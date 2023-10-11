import type { Article } from "contentlayer/generated";
import EntryCard from "./EntryCard";

const ArticleGallery = ({ articles }: { articles: Article[] }): JSX.Element => {
  return (
    <div className="mb-16 px-4 md:flex md:items-start md:justify-center md:gap-6">
      {/* {articles.map((article, id) => (
        <EntryCard
          key={id}
          title={article.title}
          excerpt={article.excerpt}
          thumbnailUrl={article.thumbnail}
          slug={article.slug}
        />
      ))} */}
    </div>
  );
};

export default ArticleGallery;
