import { allSocialMedia } from "contentlayer/generated";
import siteConfig from "@/config/site";
import { InferGetStaticPropsType, NextPage } from "next";
import { NextSeo } from "next-seo";
import Link from "next/link";
import CarouselDefault from "@/components/CarouselDefault";
import { Breadcrumbs, Typography } from "@material-tailwind/react";

const SocialMediaEntry: NextPage<
  InferGetStaticPropsType<typeof getStaticProps>
> = ({ socialMedia }): JSX.Element => {
  return (
    <>
      {/* <NextSeo
        title={`${socialMedia.title} | ${siteConfig.details.title}`}
        description={socialMedia.description}
        openGraph={{
          url: siteConfig.details.url,
          title: socialMedia.title,
          description: socialMedia.description,
          images: [
            {
              url: `${siteConfig.details.url}${socialMedia.thumbnail}`,
              width: 2000,
              height: 1000,
              alt: socialMedia.title,
            },
          ],
          siteName: siteConfig.details.title,
          type: "article",
          locale: "id_ID",
        }}
      /> */}
      <div className="mx-auto mb-6 max-w-[960px] px-4">
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
            <Link href="/work/social-media">Social Media</Link>
          </Breadcrumbs>
        </div>

        <Typography variant="h1" className="mb-6 text-center">
          {socialMedia.title}
        </Typography>
      </div>

      <div className="mx-auto mb-16 max-w-[480px] px-4">
        {/* <CarouselDefault images={socialMedia.images} /> */}
      </div>
    </>
  );
};

export const getStaticPaths = async () => {
  return {
    paths: allSocialMedia.map((socialMedia) => ({
      params: {
        slug: socialMedia.slug,
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
  const socialMedia = allSocialMedia.find(
    (socialMedia) => socialMedia.slug === (params?.slug as string),
  );

  if (!socialMedia) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      socialMedia,
    },
  };
};

export default SocialMediaEntry;
