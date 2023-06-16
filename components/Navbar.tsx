import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { HiOutlineMenuAlt4, HiOutlineX } from 'react-icons/hi';
import { AiOutlineLogout } from 'react-icons/ai';
import useAuthStore from '../store/authStore';

import Logo from '../assets/Logo.svg';
import Button from './Button';

interface ILinks {
  text: string;
}
interface INavbar {
  isDashboardPage?: boolean;
}
const Links: React.FC<ILinks> = ({ text }) => {
  return (
    <li className="my-2">
      <Link
        className="focus:text-[#0065FE] hover:text-[#0065FE] text-[#141414] font-semibold"
        href={'/'}
      >
        {text}
      </Link>
    </li>
  );
};
const Navbar: React.FC<INavbar> = ({ isDashboardPage }) => {
  const { userProfile, logoutUser }: any = useAuthStore();
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);

  return (
    <nav className=" flex lg:justify-between bg-transparent justify-between items-center  px-4 py-1">
      <Link
        href={`/`}
        className="flex items-center justify-between p-2 my-2 mx-5"
      >
        <Image src={Logo} alt="" />
      </Link>
      <div className="md:flex flex-initial justify-between w-1/3 text-[#141414] font-semibold hidden">
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
      <div className="md:flex justify-around w-1/2 border-2 border-black md:w-1/4 hidden">
        {userProfile ? (
          <>
            <Button
              icon={<AiOutlineLogout />}
              className="text-[red] font-semibold  pl-3 w-1/2 flex items-center justify-center border-2 border-[red] rounded-full hover:bg-[red] hover:text-white"
              text="Logout"
              onClick={() => logoutUser()}
            />
          </>
        ) : (
          <Link
            className="text-[#0065FE] font-semibold  px-3 flex items-center justify-center w-1/2 rounded-full hover:bg-[#0065FE] hover:text-white  hover:border-[#0065FE]"
            href={'/login'}
          >
            Login
          </Link>
        )}
        <Link
          href={'#try'}
          className="text-white font-semibold border-2 px-4 py-2 border-none outline-none rounded-full bg-[#0065FE] hover:bg-[#0e54bd] lg:w-[8rem]  flex items-center justify-center transition ease-in-out delay-75"
        >
          Try for free
        </Link>
      </div>
      <div className="flex relative">
        {toggleMenu ? (
          <HiOutlineX
            fontSize={28}
            className="text-black md:hidden cursor-pointer"
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <HiOutlineMenuAlt4
            fontSize={28}
            className="text-black md:hidden cursor-pointer"
            onClick={() => setToggleMenu(true)}
          />
        )}
        {/**Mobile Menu */}
        {toggleMenu && (
          <ul className="z-10 text-lg fixed top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none flex flex-col justify-start items-center rounded-md  text-black animate-slide-in  bg-white">
            <li className="text-xl w-full my-2">
              <HiOutlineX
                fontSize={28}
                className="cursor-pointer animate-slide-out rounded-full hover:bg-gray-300 p-1"
                onClick={() => setToggleMenu(false)}
              />
            </li>
            {['My URLs', 'Features', 'Pricing', 'Analytics', ' FAQSs'].map(
              (item, i) => (
                <Links text={item} key={i} />
              )
            )}

            <li className="my-2">
              {userProfile ? (
                <Button
                  icon={<AiOutlineLogout />}
                  className="text-[red] font-semibold  pl-3 w-full py-1 flex items-center justify-center border-2 border-[red] rounded-full hover:bg-[red] hover:text-white"
                  text="Logout"
                  onClick={() => logoutUser()}
                />
              ) : (
                <Link
                  className="text-[#0065FE] font-semibold  px-4 py-1 w-[124px] border-2 border-[#0065FE] flex items-center justify-center hover:bg-[#0065FE]  rounded-full  hover:text-white"
                  href={'/login'}
                >
                  Login
                </Link>
              )}
            </li>
            <li className="my-2">
              <Link
                href={'/#try'}
                className="text-white font-semibold  px-4 py-2 border-none outline-none rounded-full bg-[#0065FE] lg:w-[8rem]  flex items-center justify-center"
              >
                Try for free
              </Link>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
