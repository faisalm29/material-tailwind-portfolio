import { allCampaigns } from "contentlayer/generated";
import siteConfig from "@/config/site";
import { NextSeo } from "next-seo";
import { InferGetStaticPropsType, NextPage } from "next";
import CampaignGallery from "@/components/CampaignGallery";

const CampaignEntriesPage: NextPage<
  InferGetStaticPropsType<typeof getStaticProps>
> = ({ campaigns }): JSX.Element => {
  return (
    <>
      <NextSeo
        title={`Campaign | ${siteConfig.details.title}`}
        description="Passing work description from WorkCard component"
      />
      <CampaignGallery campaigns={campaigns} />
    </>
  );
};

export const getStaticProps = async () => {
  return {
    props: {
      campaigns: allCampaigns,
    },
  };
};
export default CampaignEntriesPage;
