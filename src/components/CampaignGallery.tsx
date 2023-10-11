import type { Campaign } from "contentlayer/generated";
import EntryCard from "./EntryCard";

const CampaignGallery = ({
  campaigns,
}: {
  campaigns: Campaign[];
}): JSX.Element => {
  return (
    <div className="mb-16 px-4 md:flex md:items-start md:justify-center md:gap-6">
      {campaigns.map((campaign, id) => (
        <EntryCard
          key={id}
          title={campaign.title}
          excerpt={campaign.excerpt}
          thumbnailUrl={campaign.thumbnail}
          slug={campaign.slug}
        />
      ))}
    </div>
  );
};

export default CampaignGallery;
