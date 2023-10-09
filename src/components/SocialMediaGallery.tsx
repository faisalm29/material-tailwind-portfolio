import EntryCard from "./EntryCard";
import type { SocialMedia } from "contentlayer/generated";

const SocialMediaGallery = ({
  socialMedias,
}: {
  socialMedias: SocialMedia[];
}): JSX.Element => {
  return (
    <section className="md:flex md:justify-center md:items-start md:gap-6 px-4 mb-16">
      {socialMedias.map((socialMedia, id) => (
        <EntryCard
          key={id}
          title={socialMedia.title}
          excerpt={socialMedia.description}
          thumbnailUrl={socialMedia.thumbnail}
          slug={socialMedia.slug}
        />
      ))}
    </section>
  );
};

export default SocialMediaGallery;
