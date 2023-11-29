import { allSocialMedia, type SocialMedia } from "contentlayer/generated";
import { compareDesc } from "date-fns";
import siteConfig from "@/config/site";
import { NextSeo } from "next-seo";
import { InferGetStaticPropsType, NextPage } from "next/types";
import SocialMediaGalleries from "@/components/SocialMediaGalleries";

const SocialMediaEntriesPage: NextPage<
  InferGetStaticPropsType<typeof getStaticProps>
> = ({ socialMedias }): JSX.Element => {
  return (
    <>
      <NextSeo
        title={`Social Media | ${siteConfig.details.title}`}
        description="Passing work description from WorkCard component"
      />
      <SocialMediaGalleries socialMedias={socialMedias} />
    </>
  );
};

export const getStaticProps = async () => {
  const socialMedias: SocialMedia[] = allSocialMedia.sort((a, b) => {
    return compareDesc(new Date(a.publishedAt), new Date(b.publishedAt));
  });

  return {
    props: {
      socialMedias,
    },
  };
};

export default SocialMediaEntriesPage;
