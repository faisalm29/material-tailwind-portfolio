import EntryCard from "./EntryCard";
import { Typography } from "@material-tailwind/react";
import type { SocialMedia } from "contentlayer/generated";

const SocialMediaGallery = ({
  socialMedias,
}: {
  socialMedias: SocialMedia[];
}): JSX.Element => {
  return (
    <div className="mx-auto mb-16 max-w-[960px] px-4 ">
      <Typography variant="h1" className="mb-6">
        Social Media
      </Typography>
      <div className="md:grid md:grid-cols-3 md:grid-rows-[auto] md:gap-6">
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
    </div>
  );
};

export default SocialMediaGallery;
