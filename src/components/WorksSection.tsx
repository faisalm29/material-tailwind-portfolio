import { useRouter } from "next/router";
import WorkCard from "@/components/WorkCard";
import { Typography } from "@material-tailwind/react";

const works = [
  {
    name: "Article",
    description:
      "Passionately created and carefully researched articles on various themes such as psychology, productivity, popular culture, health, and community empowerment.",
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
  {
    name: "Radio Script",
    description:
      "The radio broadcast script that I wrote during my time as an assistant producer at B Radio Bandung.",
    imgUrl: "/images/radio-broadcasting-script.jpg",
    href: "https://drive.usercontent.google.com/download?id=1QuCwe_iV9-HGhMe2VnWWWgkie_Fu9QPu&export=download&authuser=0&confirm=t&uuid=926de1cb-a935-44f4-b203-e9ed8708f624&at=APZUnTVfhGX3EPNfdxTxoWRWhlcj:1700727244670",
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
