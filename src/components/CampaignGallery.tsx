import EntryCard from "./EntryCard";
import type { Campaign } from "contentlayer/generated";

const CampaignGallery = ({
  campaigns,
}: {
  campaigns: Campaign[];
}): JSX.Element => {
  return (
    <section className="mb-16 px-4 md:flex md:items-start md:justify-center md:gap-6">
      {campaigns.map((campaign, id) => (
        <EntryCard
          key={id}
          title={campaign.title}
          excerpt={campaign.excerpt}
          thumbnailUrl={campaign.thumbnail}
          slug={campaign.slug}
        />
      ))}
    </section>
  );
};

export default CampaignGallery;
