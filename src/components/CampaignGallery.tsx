import EntryCard from "./EntryCard";
import type { Campaign } from "contentlayer/generated";

const CampaignGallery = ({
  campaigns,
}: {
  campaigns: Campaign[];
}): JSX.Element => {
  return (
    <section className="md:flex md:justify-center md:items-start md:gap-6 px-4 mb-16">
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
