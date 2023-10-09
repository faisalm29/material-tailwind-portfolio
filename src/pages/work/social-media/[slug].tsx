import { allSocialMedia } from "contentlayer/generated";
import { InferGetStaticPropsType, NextPage } from "next";

import { useMDXComponent } from "next-contentlayer/hooks";

import { Breadcrumbs, Typography } from "@material-tailwind/react";

import Image from "next/legacy/image";
import CarouselDefault from "@/components/Carousel";

const SocialMediaEntry: NextPage<
  InferGetStaticPropsType<typeof getStaticProps>
> = ({ socialMedia }): JSX.Element => {
  return (
    <main>
      <div className="max-w-[960px] px-4 mx-auto mb-6">
        <div className="flex justify-center items-center mb-4">
          <Breadcrumbs>
            <a href="/" className="opacity-60">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
            </a>
            <a href="/work" className="opacity-60">
              <span>Work</span>
            </a>
            <a href="/work/social-media">Social Media</a>
          </Breadcrumbs>
        </div>

        <Typography variant="h1" className="text-center mb-6">
          {socialMedia.title}
        </Typography>
      </div>

      <div className="max-w-[480px] px-4 mx-auto mb-16">
        <CarouselDefault images={socialMedia.images} />
      </div>
    </main>
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
    (socialMedia) => socialMedia.slug === (params?.slug as string)
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
