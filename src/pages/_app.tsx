import { ThemeProvider } from '@emotion/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import type { AppProps } from 'next/app';

import { ToastContainer } from 'src/modules/shared/components/ToastContainer';
import { theme } from 'src/modules/shared/theming/theme';
import 'styles/globals.css';

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />

        <ToastContainer />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
