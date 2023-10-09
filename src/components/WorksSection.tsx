import WorkCard from "@/components/WorkCard";

const works = [
  {
    name: "Articles",
    description: "Works description",
    imgUrl: "images/articles.jpg",
    href: "/work/article",
  },
  {
    name: "Social Media",
    description: "Works description",
    imgUrl: "images/social-media-copies.jpg",
    href: "/work/social-media",
  },
  {
    name: "Campaigns",
    description: "Works description",
    imgUrl: "images/fundraising-campaigns.jpg",
    href: "/work/campaign",
  },
];

const WorksSection = (): JSX.Element => {
  return (
    <section className="max-w-[960px] mx-auto mb-16 px-4">
      <main className="md:flex md: justify-center md:items-center md:gap-6">
        {works.map((work, id) => (
          <WorkCard
            key={id}
            name={work.name}
            description={work.description}
            imageUrl={work.imgUrl}
            href={work.href}
          />
        ))}
      </main>
    </section>
  );
};

export default WorksSection;
