import React from 'react';
import Image from 'next/image';
import HeroImg from '../assets/Vector 3.svg';
import Navbar from './Navbar';
import LinkImg from '../assets/Frame 1000001716.svg';
import EllipImg from '../assets/Group 3.svg';
import Link from 'next/link';
interface IHero {
  title: string;
  title2?: string;
  title3?: string;
  title4?: string;
}
const Hero: React.FC<IHero> = ({ title, title2, title3, title4 }) => {
  return (
    <section data-testid="hero" className="h-full">
      <Navbar />
      <div className="flex items-center justify-center flex-col mt-[6rem]  p-2 rounded-lg text-center">
        <div className="flex items-center flex-col justify-center text-[#141414]  m-6 relative">
          <h1 className="lg:text-5xl text-2xl lg:text-center text-left   lg:my-3 font-bold">
            {title}
            <br />
            <br />
            {title2}
            <span className="text-[#0065FE] px-2">{title3}</span>
            {title4}
            <br />
          </h1>
          <Image
            src={HeroImg}
            alt=""
            className="h-[0.6rem] lg:h-[1.5rem] absolute lg:bottom-[-20px] md:bottom-[-20px] bottom-[-10px] :left-[120px]"
          />
        </div>
        <div className="my-2 flex items-center justify-center text-center">
          <p className="text-[18px] lg:w-1/2 my-3 font-medium">
            Personalize your shortened URLs to align with your brand identity.
            Utilize custom slugs, branded links, and domain customization
            options to reinforce your brand presence and enhance user
            engagement.
          </p>
        </div>
        <div className="flex items-center justify-around lg:w-1/4 w-3/4 my-5 ">
          <Link
            href={'/'}
            className="text-white font-semibold border-2 px-4 py-2 border-none outline-none rounded-full bg-[#0065FE] lg:w-[8rem]  flex items-center justify-center"
          >
            Sign Up
          </Link>
          <Link
            className="text-[#0065FE] font-semibold  px-3 flex items-center justify-center"
            href={'/'}
          >
            Learn more
          </Link>
        </div>
        <div className="flex items-center justify-center  w-full relative my-5 p-5 bg-blob bg-no-repeat bg-[150px]">
          <div className="flex flex-col items-center justify-center lg:w-1/2 border-2 h-[224px]  rounded-lg border-[ #005AE2] p-2 z-100 bg-[rgba(254, 254, 254, 0.1)]">
            <Image src={LinkImg} alt="" />
            <p className="font-semibold lg:w-3/4 text-[#141414]">
              Seamlessly transform your long URLs into concise and shareable
              links with just few clicks.
            </p>
          </div>
        </div>
        <div className="mt-[76px]">
          <Image src={EllipImg} alt="" />
        </div>
        <div className="border-2 border-black flex items-center  h-[220px] bg-[#F9FBFD] w-full my-5 p-3">
          <div className="w-1/3 flex items-center justify-center">
            <h2 className=" text-[40px] font-bold text-justify">
              One Stop.
              <br />
              Four <span className="text-[#0065FE]">Possibilities.</span>
            </h2>
          </div>
          <div className="border-2 border-black w-2/3">
            <ul className="list-none flex justify-between text-justify">
              <li className="">
                <h3 className="text-[32px] text-[#141414] font-semibold">3M</h3>
                <p className="text-[#141414] text-justify font-semibolds">
                  Active users
                </p>
              </li>
              <li>
                <h3 className="text-[32px] text-[#141414] font-semibold">
                  60M
                </h3>
                <p className="text-[#141414] text-justify font-semibold">
                  Links & QR codes created
                </p>
              </li>
              <li>
                <h3 className="text-[32px] text-[#141414] font-semibold">1B</h3>
                <p>Clicked & Scanned connections</p>
              </li>
              <li>
                <h3 className="text-[32px] text-[#141414] font-semibold">
                  300k
                </h3>
                <p>App Integrations</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
