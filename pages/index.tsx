import type { NextPage } from 'next';
import Head from 'next/head';
import ShortenForm from '../components/ShortenForm';
import { Hero } from '../components';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Scissor - URL Shortener</title>
        <meta
          name="description"
          content="Short URLs and Custom Links Shortener | Scissor"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="px-4 w-full bg-welcome bg-no-repeat bg-center">
        <Hero
          title=" Optimize Your Online Experience with Our"
          title2="Advanced"
          title3="URL Shortening"
          title4="Solution"
        />
        <ShortenForm />
      </main>
    </div>
  );
};

export default Home;
