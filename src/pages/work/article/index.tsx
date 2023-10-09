import { allArticles } from "contentlayer/generated";
import { InferGetStaticPropsType, NextPage } from "next";
import ArticleGallery from "@/components/ArticleGallery";

const ArticleEntriesPage: NextPage<
  InferGetStaticPropsType<typeof getStaticProps>
> = ({ articles }): JSX.Element => {
  return (
    <main>
      <ArticleGallery articles={articles} />
    </main>
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
