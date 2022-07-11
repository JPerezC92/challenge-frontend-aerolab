import type { AppProps } from "next/app";
import { theme } from "src/modules/shared/theming/theme";
import { ThemeProvider } from "styled-components";
import "styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
