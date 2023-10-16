import EntryCard from "./EntryCard";
import type { SocialMedia } from "contentlayer/generated";

const SocialMediaGallery = ({
  socialMedias,
}: {
  socialMedias: SocialMedia[];
}): JSX.Element => {
  return (
    <div className="mx-auto mb-16 max-w-[960px] px-4 md:grid md:grid-cols-3 md:grid-rows-[auto] md:gap-6">
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
