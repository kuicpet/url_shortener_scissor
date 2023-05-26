import { Navbar, Footer } from '../components';
import '../styles/globals.css';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="xl:w-[1200px] m-auto overflow-x-hidden h-[100vh]">
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;
