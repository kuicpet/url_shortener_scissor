import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineScissor } from 'react-icons/ai';

const Navbar: React.FC = () => {
  return (
    <div className="w-full flex justify-between items-center py-2 px-4">
      <Link
        href={`/`}
        className="flex border-2 rounded-md items-center justify-between p-2"
      >
        <div className="">
          <AiOutlineScissor size={'1.5rem'} />
        </div>
      </Link>
    </div>
  );
};

export default Navbar;
