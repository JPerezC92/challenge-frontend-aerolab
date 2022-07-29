import { ThemeProvider } from '@emotion/react';
import type { AppProps } from 'next/app';

import { ToastContainer } from 'src/modules/shared/components/ToastContainer';
import { theme } from 'src/modules/shared/theming/theme';
import 'styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />

      <ToastContainer />
    </ThemeProvider>
  );
}

export default MyApp;
