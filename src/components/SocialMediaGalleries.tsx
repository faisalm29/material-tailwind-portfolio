import SocialMediaCard from "./SocialMediaCard";
import { Typography } from "@material-tailwind/react";
import type { SocialMedia } from "contentlayer/generated";

const SocialMediaGalleries = ({
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
          <SocialMediaCard
            key={id}
            title={socialMedia.title}
            company={socialMedia.company}
            companyLogo={socialMedia.companyLogo}
            publishedOn={socialMedia.publishedOn}
            publishedAt={socialMedia.publishedAt}
            description={socialMedia.description}
            url={socialMedia.url}
          />
        ))}
      </div>
    </div>
  );
};

export default SocialMediaGalleries;
