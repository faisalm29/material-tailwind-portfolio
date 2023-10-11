import { allArticles } from "contentlayer/generated";
import { InferGetStaticPropsType, NextPage } from "next";
import { useMDXComponent } from "next-contentlayer/hooks";
import Image from "next/image";
import Link from "next/link";
import Details from "@/components/Details";
import { Typography, Breadcrumbs } from "@material-tailwind/react";

const ArticleEntry: NextPage<
  InferGetStaticPropsType<typeof getStaticProps>
> = ({ article }): JSX.Element => {
  const Component = useMDXComponent(article.body.code);

  return (
    <>
      <div className="mx-auto mb-16 max-w-[960px] px-4">
        <div className="mb-4 flex items-center justify-center">
          <Breadcrumbs>
            <Link href="/" className="opacity-60">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
            </Link>
            <Link href="/work" className="opacity-60">
              <span>Work</span>
            </Link>
            <Link href="/work/article">Article</Link>
          </Breadcrumbs>
        </div>

        <Typography variant="h1" className="mb-6 text-center">
          {article.title}
        </Typography>

        <Details details={article.details} />

        {/* Image goes here */}
        <div className="mb-6">
          <Image
            src={article.thumbnail}
            alt={`${article.title} thumbnail`}
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
            className="rounded-lg"
          />
        </div>
        <article className="prose mx-auto">
          <Component />
        </article>
      </div>
    </>
  );
};

export const getStaticPaths = async () => {
  return {
    paths: allArticles.map((article) => ({
      params: {
        slug: article.slug,
      },
    })),
    fallback: false,
  };
};

export const getStaticProps = async ({
  params,
}: {
  params: { slug: string };
}) => {
  const article = allArticles.find(
    (article) => article.slug === (params?.slug as string),
  );

  if (!article) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      article,
    },
  };
};

export default ArticleEntry;
