import type { Article } from "contentlayer/generated";
import EntryCard from "./EntryCard";
import { Typography } from "@material-tailwind/react";

const ArticleGallery = ({ articles }: { articles: Article[] }): JSX.Element => {
  return (
    <div className="mx-auto mb-16 max-w-[960px] px-4 ">
      <Typography variant="h1" className="mb-6">
        Article
      </Typography>
      <div className="md:grid md:grid-cols-3 md:grid-rows-[auto] md:gap-6">
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
    </div>
  );
};

export default ArticleGallery;
