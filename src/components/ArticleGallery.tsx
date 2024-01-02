import ArticleCard from "./ArticleCard";
import { Typography } from "@material-tailwind/react";

const articles = [
  {
    name: "Insan Bumi Mandiri Foundation",
    description:
      "Insan Bumi Mandri is a philanthropic organization that focuses on helping rural areas of Indonesia with a vision of increasing access to health, education and the local economy. Through its mission of empowering inland residents, increasing educational capacity, cooperation in health, and fulfilling the right to clean water, this institution is committed to creating positive and sustainable change in inland areas.",
    imgUrl: "/images/ibm-logo.svg",
    href: "https://blog.insanbumimandiri.org/author/faisalmuhammad/",
  },
  {
    name: "DoCheck",
    description:
      "DoCheck is the first social to-do list application in Indonesia. Users can share their daily activities with friends, family or coworkers. DoCheck believes that a to-do list is not just an agenda, but also a medium for self-development and collaboration.",
    imgUrl: "/images/docheck-logo.webp",
    href: "https://docheck.id/author/faisal/",
  },
];

const ArticleGallery = (): JSX.Element => {
  return (
    <div className="mx-auto mb-16 max-w-[960px] px-4 ">
      <Typography variant="h1" className="mb-1">
        Article
      </Typography>
      <Typography variant="paragraph" className="mb-8">
        My articles have been published on this company&apos;s and
        organization&apos;s blog.
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
