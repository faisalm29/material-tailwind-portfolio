import siteConfig from "@/config/site";
import type { AppProps } from "next/app";
import { NextSeo } from "next-seo";
import { ThemeProvider } from "@material-tailwind/react";
import Layout from "@/components/Layout";
import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextSeo
        title={`${siteConfig.details.title} - ${siteConfig.details.description}`}
        description={siteConfig.details.description}
        twitter={{
          handle: siteConfig.contacts.twitter,
          site: siteConfig.contacts.twitter,
          cardType: "summary_large_image",
        }}
        openGraph={{
          url: siteConfig.details.url,
          title: siteConfig.details.title,
          description: siteConfig.details.description,
          images: [
            {
              url: `${siteConfig.details.url}${siteConfig.assets.image}`,
              width: 1012,
              height: 506,
              alt: `${siteConfig.details.author} - ${siteConfig.details.description}`,
              type: "image/png",
            },
          ],
          siteName: siteConfig.details.title,
          type: "website",
          locale: "id_ID",
        }}
      />
      <Layout>
        <ThemeProvider>
          <Component {...pageProps} />
        </ThemeProvider>
      </Layout>
    </>
  );
}
