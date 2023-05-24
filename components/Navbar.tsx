import React from 'react';
import Link from 'next/link';
import { AiOutlineScissor } from 'react-icons/ai';

const Navbar: React.FC = () => {
  return (
    <div className="w-full flex lg:justify-between md:justify-between justify-center items-center py-2 px-4 m-2">
      <Link
        href={`/`}
        className="flex border-2 rounded-md items-center justify-between p-2"
      >
        <div className="">
          <AiOutlineScissor fontSize={'1.5rem'} />
        </div>
        Scissor Url Shortener
      </Link>
    </div>
  );
};

export default Navbar;
