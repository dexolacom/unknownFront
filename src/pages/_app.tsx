import 'reset-css-complete/reset.css';
import '@/styles/globals.scss';
import type { AppProps } from 'next/app';
import Preloader from '@/components/blocks/prealoder/preloader';
import ShutterProvider from '@/contexts/context-shutter';
import Shutter from '@/components/blocks/shutter/shutter';
import SmootherProvider from '@/contexts/context-smoother';
import useSetVPVars from '@/hooks/useSetVPVars';

export default function App({ Component, pageProps }: AppProps) {
  useSetVPVars();
  return (
    <>
      <SmootherProvider>
        <ShutterProvider>
          <Shutter />
          <Component {...pageProps} />
        </ShutterProvider>
      </SmootherProvider>
    </>
  );
}
