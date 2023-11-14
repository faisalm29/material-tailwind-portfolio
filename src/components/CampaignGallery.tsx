import type { Campaign } from "contentlayer/generated";
import EntryCard from "./EntryCard";
import CampaignCard from "./CampaignCard";

const CampaignGallery = ({
  campaigns,
}: {
  campaigns: Campaign[];
}): JSX.Element => {
  return (
    <div className="mx-auto mb-16 max-w-[960px] px-4 md:grid md:grid-cols-3 md:grid-rows-[auto] md:gap-6">
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
  );
};

export default CampaignGallery;
