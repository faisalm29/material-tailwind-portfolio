import { useRouter } from "next/router";
import WorkCard from "@/components/WorkCard";
import { Typography } from "@material-tailwind/react";

const works = [
  {
    name: "Article",
    description:
      "Passionately created articles on various themes such as psychology, productivity, and popular culture, backed by scientific research.",
    imgUrl: "/images/articles.jpg",
    href: "/work/article",
  },
  {
    name: "Social Media",
    description:
      "Some of the social media content that I write is both entertainment and educational.",
    imgUrl: "/images/social-media-copies.jpg",
    href: "/work/social-media",
  },
  {
    name: "Fundraising Campaign",
    description:
      "Fundraising campaigns for various purposes, from health to education.",
    imgUrl: "/images/fundraising-campaigns.jpg",
    href: "/work/campaign",
  },
];

const WorksSection = (): JSX.Element => {
  const router = useRouter();
  const currentRoute = router.pathname;
  console.log(currentRoute);

  return (
    <section className="mx-auto mb-16 max-w-[960px] px-4">
      {currentRoute === "/" ? (
        <Typography variant="h2" className="mb-6">
          Selected Works
        </Typography>
      ) : (
        <Typography variant="h1" className="mb-6">
          Selected Works
        </Typography>
      )}
      <div className="md:grid md:grid-cols-3 md:grid-rows-[auto] md:gap-6">
        {works.map((work, id) => (
          <WorkCard
            key={id}
            name={work.name}
            description={work.description}
            imageUrl={work.imgUrl}
            href={work.href}
          />
        ))}
      </div>
    </section>
  );
};

export default WorksSection;
