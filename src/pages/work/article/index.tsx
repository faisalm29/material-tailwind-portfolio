import { allArticles } from "contentlayer/generated";
import siteConfig from "@/config/site";
import { NextSeo } from "next-seo";
import { InferGetStaticPropsType, NextPage } from "next";
import ArticleGallery from "@/components/ArticleGallery";

const ArticleEntriesPage: NextPage<
  InferGetStaticPropsType<typeof getStaticProps>
> = ({ articles }): JSX.Element => {
  return (
    <>
      <NextSeo
        title={`Article | ${siteConfig.details.title}`}
        description="Passing work description from WorkCard component"
      />
      <ArticleGallery articles={articles} />
    </>
  );
};

export const getStaticProps = async () => {
  return {
    props: {
      articles: allArticles,
    },
  };
};

export default ArticleEntriesPage;
