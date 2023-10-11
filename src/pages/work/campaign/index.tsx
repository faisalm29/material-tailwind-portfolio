import { allCampaigns } from "contentlayer/generated";
import { InferGetStaticPropsType, NextPage } from "next";
import CampaignGallery from "@/components/CampaignGallery";

const CampaignEntriesPage: NextPage<
  InferGetStaticPropsType<typeof getStaticProps>
> = ({ campaigns }): JSX.Element => {
  return <CampaignGallery campaigns={campaigns} />;
};

export const getStaticProps = async () => {
  return {
    props: {
      campaigns: allCampaigns,
    },
  };
};
export default CampaignEntriesPage;
