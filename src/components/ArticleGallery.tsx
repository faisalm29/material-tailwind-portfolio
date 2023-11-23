import ArticleCard from "./ArticleCard";
import { Typography } from "@material-tailwind/react";

const articles = [
  {
    name: "For Insan Bumi Mandiri Foundation",
    description:
      "All of the articles that I wrote during my time as Freelance Content Writer for Insan Bumi Mandiri Foundation.",
    imgUrl: "/images/ibm-logo.svg",
    href: "https://blog.insanbumimandiri.org/author/faisalmuhammad/",
  },
  {
    name: "For DoCheck",
    description:
      "All of the articles that I wrote during my time as Content Writer Intern for PT. DoCheck Bagi Indonesia.",
    imgUrl: "/images/docheck-logo.webp",
    href: "https://docheck.id/author/faisal/",
  },
];

const ArticleGallery = (): JSX.Element => {
  return (
    <div className="mx-auto mb-16 max-w-[960px] px-4 ">
      <Typography variant="h1" className="mb-6">
        Article
      </Typography>
      <div className="md:grid md:grid-cols-3 md:grid-rows-[auto] md:gap-6">
        {articles.map((article, id) => (
          <ArticleCard
            key={id}
            name={article.name}
            description={article.description}
            imgUrl={article.imgUrl}
            href={article.href}
          />
        ))}
      </div>
    </div>
  );
};

export default ArticleGallery;
