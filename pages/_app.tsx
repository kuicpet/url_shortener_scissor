import { useEffect, useState } from 'react';
import { Footer, Navbar } from '../components';
import '../styles/globals.css';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  const [isSSR, setIsSSR] = useState(true);

  useEffect(() => {
    setIsSSR(false);
  }, []);

  if (isSSR) return null;
  return (
    <div className="xl:w-[1200px] m-auto overflow-x-hidden h-[100vh] bg-welcome bg-no-repeat bg-auto">
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;
