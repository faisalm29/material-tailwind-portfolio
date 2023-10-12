import siteConfig from "@/config/site";
import { NextSeo } from "next-seo";
import WorksSection from "@/components/WorksSection";

const WorkPage = (): JSX.Element => {
  return (
    <>
      <NextSeo
        title={`Works | ${siteConfig.details.title}`}
        description="Selected works."
      />
      <WorksSection />
    </>
  );
};

export default WorkPage;
