import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { AiOutlineScissor } from 'react-icons/ai';
import Logo from '../assets/Logo.svg';

const activeClass: string = 'text-[#0065FE]';
const notActive: string = 'text-[#141414]';
const Navbar: React.FC = () => {
  return (
    <nav className=" flex lg:justify-between bg-transparent justify-center items-center  px-4">
      <Link
        href={`/`}
        className="flex items-center justify-between p-2 my-2 mx-5"
      >
        <Image src={Logo} alt="" />
      </Link>
      <div className="flex flex-initial justify-between w-1/3 text-[#141414] font-semibold">
        <Link className="focus:text-[#0065FE] hover:text-[#0065FE]" href={'/'}>
          My URLs
        </Link>
        <Link className="focus:text-[#0065FE] hover:text-[#0065FE]" href={'/'}>
          Features
        </Link>
        <Link className="focus:text-[#0065FE] hover:text-[#0065FE]" href={'/'}>
          Pricing
        </Link>
        <Link className="focus:text-[#0065FE] hover:text-[#0065FE]" href={'/'}>
          Analytics
        </Link>
        <Link className="focus:text-[#0065FE] hover:text-[#0065FE]" href={'/'}>
          FAQS
        </Link>
      </div>
      <div className="flex justify-around border w-1/4">
        <Link className="text-[#0065FE]" href={'/'}>
          Login
        </Link>
        <Link href={'/'}>Try for free</Link>
      </div>
    </nav>
  );
};

export default Navbar;
