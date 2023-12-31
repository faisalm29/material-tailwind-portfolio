import { allCampaigns } from "contentlayer/generated";
import siteConfig from "@/config/site";
import { InferGetStaticPropsType, NextPage } from "next";
import { NextSeo } from "next-seo";
import { useMDXComponent } from "next-contentlayer/hooks";
import Image from "next/legacy/image";
import Link from "next/link";
import { Breadcrumbs, Typography } from "@material-tailwind/react";

const CampaignEntry: NextPage<
  InferGetStaticPropsType<typeof getStaticProps>
> = ({ campaign }): JSX.Element => {
  const Component = useMDXComponent(campaign.body.code);

  return (
    <>
      <NextSeo
        title={`${campaign.title} | ${siteConfig.details.title}`}
        description={campaign.excerpt}
        openGraph={{
          url: siteConfig.details.url,
          title: campaign.title,
          description: campaign.excerpt,
          images: [
            {
              url: `${siteConfig.details.url}${campaign.thumbnail}`,
              width: 2000,
              height: 1000,
              alt: campaign.title,
            },
          ],
          siteName: siteConfig.details.title,
          type: "article",
          locale: "id_ID",
        }}
      />
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
            <Link href="/work/campaign">Campaign</Link>
          </Breadcrumbs>
        </div>

        <Typography variant="h1" className="mb-6 text-center">
          {campaign.title}
        </Typography>

        {/* Image goes here */}
        <div className="mb-6">
          <Image
            src={campaign.thumbnail}
            width={2000}
            height={1000}
            layout="responsive"
            objectFit="cover"
            alt={`${campaign.title} thumbnail`}
            className="rounded-lg"
          />
        </div>

        <article className="post-wrapper prose mx-auto">
          <Component />
        </article>
      </div>
    </>
  );
};

export const getStaticPaths = async () => {
  return {
    paths: allCampaigns.map((campaign) => ({
      params: {
        slug: campaign.slug,
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
  const campaign = allCampaigns.find(
    (campaign) => campaign.slug === (params?.slug as string),
  );

  if (!campaign) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      campaign,
    },
  };
};

export default CampaignEntry;
