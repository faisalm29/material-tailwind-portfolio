import type { Article } from "contentlayer/generated";
import EntryCard from "./EntryCard";

const ArticleGallery = ({ articles }: { articles: Article[] }): JSX.Element => {
  return (
    <div className="mx-auto mb-16 max-w-[960px] px-4 md:grid md:grid-cols-3 md:grid-rows-[auto] md:gap-6">
      {articles.map((article, id) => (
        <EntryCard
          key={id}
          title={article.title}
          excerpt={article.excerpt}
          thumbnailUrl={article.thumbnail}
          slug={article.slug}
        />
      ))}
    </div>
  );
};

export default ArticleGallery;
