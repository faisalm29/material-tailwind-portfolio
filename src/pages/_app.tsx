import "@/styles/globals.css";
import type { AppProps } from "next/app";

import { ThemeProvider } from "@material-tailwind/react";

import Layout from "@/components/Layout";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </Layout>
  );
};

export default App;
