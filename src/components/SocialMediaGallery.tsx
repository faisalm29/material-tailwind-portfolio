import EntryCard from "./EntryCard";
import type { SocialMedia } from "contentlayer/generated";

const SocialMediaGallery = ({
  socialMedias,
}: {
  socialMedias: SocialMedia[];
}): JSX.Element => {
  return (
    <div className="mb-16 px-4 md:flex md:items-start md:justify-center md:gap-6">
      {socialMedias.map((socialMedia, id) => (
        <EntryCard
          key={id}
          title={socialMedia.title}
          excerpt={socialMedia.description}
          thumbnailUrl={socialMedia.thumbnail}
          slug={socialMedia.slug}
        />
      ))}
    </div>
  );
};

export default SocialMediaGallery;
