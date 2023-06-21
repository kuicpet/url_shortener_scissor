import React from 'react';
import Link from 'next/link';

const Notfound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[75vh]  w-full">
      <div className="my-3">
        <h1 className="lg:text-5xl text-4xl font-semibold">oops!</h1>
      </div>
      <div className="text-center mt-3 p-2">
        <p>We can&apos;t seem to find the page you&apos;re looking for..</p>
        <Link href="/" className="text-[#0065FE] font-semibold hover:underline">
          Go back to the homepage
        </Link>
      </div>
    </div>
  );
};

export default Notfound;
