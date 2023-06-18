import type { NextPage } from 'next';
import Head from 'next/head';
import ShortenForm from '../components/ShortenForm';
import { Hero, Meta } from '../components';

const Home: NextPage = () => {
  return (
    <div>
      <Meta />

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
