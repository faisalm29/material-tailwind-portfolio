import EntryCard from "./EntryCard";
import type { Article } from "contentlayer/generated";

const ArticleGallery = ({ articles }: { articles: Article[] }): JSX.Element => {
  return (
    <section className="md:flex md:justify-center md:items-start md:gap-6 px-4 mb-16">
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
