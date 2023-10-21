import Wrapper from '@/components/layout/layout';
import '@/styles/globals.css';
import { CacheProvider, EmotionCache } from '@emotion/react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import type { AppProps } from 'next/app';
import createEmotionCache from '../config/createEmotionCache';
import theme from '../config/theme';
import { SessionProvider } from 'next-auth/react';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function App({
  Component,
  emotionCache = clientSideEmotionCache,
  pageProps: { session, ...pageProps },
}: MyAppProps) {
  return (
    <SessionProvider session={session}>
      <CacheProvider value={emotionCache}>
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <Wrapper>
            <Component {...pageProps} />
          </Wrapper>
        </ThemeProvider>
      </CacheProvider>
    </SessionProvider>
  );
}
