import type { AppProps } from "next/app";
import { MantineProvider } from "@mantine/core";
import mantineThemeProvider from "styles/mantine/mantineThemeProvider";
import "styles/css/global.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider theme={mantineThemeProvider}>
      <Component {...pageProps} />
    </MantineProvider>
  );
}
