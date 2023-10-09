import "@/styles/globals.css";
import type { AppProps } from "next/app";

import { ThemeProvider } from "@material-tailwind/react";

import Layout from "@/components/Layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </Layout>
  );
}
