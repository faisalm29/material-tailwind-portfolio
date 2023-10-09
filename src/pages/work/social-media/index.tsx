import { allSocialMedia } from "contentlayer/generated";
import { InferGetStaticPropsType, NextPage } from "next/types";
import SocialMediaGallery from "@/components/SocialMediaGallery";

const SocialMediaEntriesPage: NextPage<
  InferGetStaticPropsType<typeof getStaticProps>
> = ({ socialMedias }): JSX.Element => {
  return (
    <main>
      <SocialMediaGallery socialMedias={socialMedias} />
    </main>
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
