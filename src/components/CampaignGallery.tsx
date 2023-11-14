import type { Campaign } from "contentlayer/generated";
import CampaignCard from "./CampaignCard";
import { Typography } from "@material-tailwind/react";

const CampaignGallery = ({
  campaigns,
}: {
  campaigns: Campaign[];
}): JSX.Element => {
  return (
    <div className="mx-auto mb-16 max-w-[960px] px-4 ">
      <Typography variant="h1" className="mb-6">
        Fundraising Campaign
      </Typography>
      <div className="md:grid md:grid-cols-3 md:grid-rows-[auto] md:gap-6">
        {campaigns.map((campaign, id) => (
          <CampaignCard
            key={id}
            title={campaign.title}
            excerpt={campaign.excerpt}
            thumbnailUrl={campaign.thumbnail}
            url={campaign.url}
          />
        ))}
      </div>
    </div>
  );
};

export default CampaignGallery;
