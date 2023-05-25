import type { NextPage } from 'next';
import Head from 'next/head';
import ShortenForm from '../components/ShortenForm';

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

      <main className="sm:p-8 px-4 py-8 w-full">
        <ShortenForm />
      </main>
    </div>
  );
};

export default Home;
