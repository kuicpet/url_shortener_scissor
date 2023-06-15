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

      <main className="p-0 w-full ">
        <Hero
          title=" Optimize Your Online Experience with Our"
          title2="Advanced"
          title3="URL Shortening"
          title4="Solution"
        />
      </main>
    </div>
  );
};

export default Home;
