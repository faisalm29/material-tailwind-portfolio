import { allSocialMedia } from "contentlayer/generated";
import siteConfig from "@/config/site";
import { NextSeo } from "next-seo";
import { InferGetStaticPropsType, NextPage } from "next/types";
import SocialMediaGallery from "@/components/SocialMediaGallery";

const SocialMediaEntriesPage: NextPage<
  InferGetStaticPropsType<typeof getStaticProps>
> = ({ socialMedias }): JSX.Element => {
  return (
    <>
      <NextSeo
        title={`Social Media | ${siteConfig.details.title}`}
        description="Passing work description from WorkCard component"
      />
      <SocialMediaGallery socialMedias={socialMedias} />
    </>
  );
};

export const getStaticProps = async () => {
  return {
    props: {
      socialMedias: allSocialMedia,
    },
  };
};

export default SocialMediaEntriesPage;
