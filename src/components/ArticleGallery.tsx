import EntryCard from "./EntryCard";
import type { Article } from "contentlayer/generated";

const ArticleGallery = ({ articles }: { articles: Article[] }): JSX.Element => {
  return (
    <section className="mb-16 px-4 md:flex md:items-start md:justify-center md:gap-6">
      {articles.map((article, id) => (
        <EntryCard
          key={id}
          title={article.title}
          excerpt={article.excerpt}
          thumbnailUrl={article.thumbnail}
          slug={article.slug}
        />
      ))}
    </section>
  );
};

export default ArticleGallery;
