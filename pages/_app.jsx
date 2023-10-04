import { mantineThemeProvider } from "styles";
import { MantineProvider } from "@mantine/core";
import { Toaster } from "react-hot-toast";
import Head from "next/head";
import "styles/css/global.css";
import "styles/css/components.css";

export default function App({ Component, pageProps }) {
  return (
    <MantineProvider
      withNormalizeCSS
      withGlobalStyles
      theme={mantineThemeProvider}
    >
      <Head>
        <title>Coders Race</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Toaster position="bottom-right" />
      <Component {...pageProps} />
    </MantineProvider>
  );
}
