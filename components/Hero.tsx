import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import HeroImg from '../assets/Vector 3.svg';
import Navbar from './Navbar';
import Card from './Card';
import LinkImg from '../assets/Frame 1000001716.svg';
import EllipImg from '../assets/Group 3.svg';
import Line from '../assets/Line 70.png';
import PriceCard from './PriceCard';
import ShortenForm from './ShortenForm';
import Faqs from './Faqs';
import LinkImage from '../assets/link-2.svg';
import Company from './Company';

interface IHero {
  title: string;
  title2?: string;
  title3?: string;
  title4?: string;
}
const Hero: React.FC<IHero> = ({ title, title2, title3, title4 }) => {
  return (
    <section data-testid="hero" className="h-full">
      <div className="flex items-center justify-center flex-col lg:mt-[6rem]   rounded-lg text-center">
        <div className="flex items-center flex-col justify-center text-[#141414]  m-6 relative">
          <h1 className="lg:text-5xl text-2xl text-center   lg:my-3 font-bold">
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
        <div className="my-2 flex items-center justify-center lg:text-left text-center p-2">
          <p className="text-[18px] lg:w-3/4 my-3 font-medium">
            Personalize your shortened URLs to align with your brand identity.
            Utilize custom slugs, branded links, and domain customization
            options to reinforce your brand presence and enhance user
            engagement.
          </p>
        </div>
        <div className="flex items-center justify-around lg:w-1/4 w-3/4 my-5 ">
          <Link
            href={'/register'}
            className="text-white font-semibold border-2 px-4 py-2 border-none outline-none rounded-full bg-[#0065FE] hover:bg-[#0e54bd] lg:w-[8rem]  flex items-center justify-center"
          >
            Sign Up
          </Link>
          <Link
            className="text-[#0065FE] font-semibold  px-3 flex items-center justify-center hover:underline"
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
        <div className="flex flex-col lg:flex-row items-center  bg-[#F9FBFD] w-full my-5 p-3">
          <div className="lg:w-1/3 flex items-center justify-center">
            <h2 className="text-[40px] font-bold lg:text-justify">
              One Stop.
              <br />
              Four <span className="text-[#0065FE]">Possibilities.</span>
            </h2>
          </div>
          <div className="lg:w-2/3">
            <ul className="list-none lg:flex grid grid-cols-2 justify-between text-left font-semibold">
              <li className="lg:w-1/4 mx-2">
                <h3 className="text-[32px] text-[#141414]">3M</h3>
                <p>Active users</p>
              </li>
              <li className="lg:w-1/4 mx-2">
                <h3 className="text-[32px] text-[#141414]">60M</h3>
                <p>Links & QR codes created</p>
              </li>
              <li className="lg:w-1/4 mx-2">
                <h3 className="text-[32px] text-[#141414]">1B</h3>
                <p>Clicked & Scanned connections</p>
              </li>
              <li className="lg:w-1/4 mx-2">
                <h3 className="text-[32px] text-[#141414]">300k</h3>
                <p>App Integrations</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row w-full my-5 p-3">
          <div className="lg:w-[40%] flex p-3 flex-col text-left" id="features">
            <div className="flex items-center justify-center">
              <Image src={Line} alt="" className="mx-2" />
              <h2 className="text-[40px] font-bold ">
                Why choose <span className="text-[#0065FE]">Scissor.</span>
              </h2>
            </div>
            <p className="mx-2">
              Scissors is the hub of everything that has to do with your link
              management. We shorten your URLs, allow you creating custom ones
              for your personal, business, event usage. Our swift QR code
              creation, management and usage tracking with advance analytics for
              all of these is second to none.{' '}
            </p>
          </div>
          <div className="lg:w-[62%] grid md:grid-cols-2 gap-2">
            <Card
              icon={
                <svg
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_124_800)">
                    <path
                      d="M15.1 7H18.1C18.7566 7 19.4068 7.12933 20.0134 7.3806C20.62 7.63188 21.1712 8.00017 21.6355 8.46447C22.0998 8.92876 22.4681 9.47996 22.7194 10.0866C22.9706 10.6932 23.1 11.3434 23.1 12C23.1 12.6566 22.9706 13.3068 22.7194 13.9134C22.4681 14.52 22.0998 15.0712 21.6355 15.5355C21.1712 15.9998 20.62 16.3681 20.0134 16.6194C19.4068 16.8707 18.7566 17 18.1 17H15.1M9.09998 17H6.09998C5.44337 17 4.79319 16.8707 4.18656 16.6194C3.57993 16.3681 3.02873 15.9998 2.56444 15.5355C1.62676 14.5979 1.09998 13.3261 1.09998 12C1.09998 10.6739 1.62676 9.40215 2.56444 8.46447C3.50212 7.52678 4.77389 7 6.09998 7H9.09998"
                      stroke="#141414"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M8.09998 12H16.1"
                      stroke="#005AE2"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_124_800">
                      <rect
                        width="24"
                        height="24"
                        fill="white"
                        transform="translate(0.0999756)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              }
              title="URL Shortening"
              description="Scissor allows you to shorten URLs of your business, events. Shorten your URL at scale, URL redirects."
            />
            <Card
              icon={
                <svg
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.1 4H4.09998C3.56954 4 3.06083 4.21071 2.68576 4.58579C2.31069 4.96086 2.09998 5.46957 2.09998 6V20C2.09998 20.5304 2.31069 21.0391 2.68576 21.4142C3.06083 21.7893 3.56954 22 4.09998 22H18.1C18.6304 22 19.1391 21.7893 19.5142 21.4142C19.8893 21.0391 20.1 20.5304 20.1 20V13"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M18.6 2.49998C18.9978 2.10216 19.5374 1.87866 20.1 1.87866C20.6626 1.87866 21.2022 2.10216 21.6 2.49998C21.9978 2.89781 22.2213 3.43737 22.2213 3.99998C22.2213 4.56259 21.9978 5.10216 21.6 5.49998L12.1 15L8.09998 16L9.09998 12L18.6 2.49998Z"
                    stroke="#005AE2"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              }
              title="Custom URLs"
              description="With Scissor, you can create custom URLs, with the length you want! A solution for socials and businesses."
            />
            <Card
              icon={
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.8859 3.06763H3.88586V10.0676H10.8859V3.06763Z"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M21.8859 3.06763H14.8859V10.0676H21.8859V3.06763Z"
                    stroke="#005AE2"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M21.8859 14.0676H14.8859V21.0676H21.8859V14.0676Z"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M10.8859 14.0676H3.88586V21.0676H10.8859V14.0676Z"
                    stroke="#005AE2"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              }
              title="QR Codes"
              description="Generate QR codes to your business, events. Bring your audience and customers to your doorstep with this scan and go solution."
            />
            <Card
              icon={
                <svg
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_159_363)">
                    <path
                      d="M21.1 12H17.1L14.1 21L8.09998 3L5.09998 12H1.09998"
                      stroke="#0065FE"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_159_363">
                      <rect
                        width="24"
                        height="24"
                        fill="white"
                        transform="translate(0.0999756)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              }
              title="Data Analytics"
              description="Receive data on the usage of either your shortened URL, custom URLs or generated QR codes. Embedded to monitor progress."
            />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center  w-full ">
          <div
            className="flex flex-col items-center justify-center lg:w-3/4 text-center my-5 p-3"
            id="pricing"
          >
            <div className="flex items-center justify-center text-[40px] font-bold ">
              <Image src={Line} alt="" className="mx-2" />
              <h2>
                A <span className="text-[#0065FE]">price perfect</span> for your
                needs.
              </h2>
            </div>
            <p className="lg:w-3/4">
              From catering for your personal, business, event, socials needs,
              you can be rest assured we have you in mind in our pricing.
            </p>
          </div>
          <div className="w-full cardgrid">
            <PriceCard
              plan="Basic"
              price="Free"
              title="Free plan for all users"
              text1="Unlimited URL Shortening"
              text2="Basic Link Analytics"
              text3="Customizable Short Links"
              text4="Standard Support"
              text5="Ad-supported"
              icon={
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_124_852)">
                    <path
                      d="M14.6667 7.38674V8.00007C14.6658 9.43769 14.2003 10.8365 13.3395 11.988C12.4788 13.1394 11.2688 13.9817 9.89022 14.3893C8.5116 14.797 7.03815 14.748 5.68963 14.2498C4.3411 13.7516 3.18975 12.8308 2.40729 11.6248C1.62482 10.4188 1.25317 8.99212 1.34776 7.55762C1.44235 6.12312 1.99812 4.75762 2.93217 3.66479C3.86621 2.57195 5.1285 1.81033 6.53077 1.4935C7.93304 1.17668 9.40016 1.32163 10.7133 1.90674"
                      stroke="#005AE2"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M14.6667 2.66675L8 9.34008L6 7.34008"
                      stroke="#005AE2"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_124_852">
                      <rect width="16" height="16" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              }
            />
            <PriceCard
              plan="Professional"
              price="$15/month"
              title="Ideal for business creators"
              text1="Enhanced Link Analytics"
              text2="Custom Branded Domains"
              text3="Advanced Link Customization"
              text4="Priority Support"
              text5="Ad-free Experience"
              icon={
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_124_852)">
                    <path
                      d="M14.6667 7.38674V8.00007C14.6658 9.43769 14.2003 10.8365 13.3395 11.988C12.4788 13.1394 11.2688 13.9817 9.89022 14.3893C8.5116 14.797 7.03815 14.748 5.68963 14.2498C4.3411 13.7516 3.18975 12.8308 2.40729 11.6248C1.62482 10.4188 1.25317 8.99212 1.34776 7.55762C1.44235 6.12312 1.99812 4.75762 2.93217 3.66479C3.86621 2.57195 5.1285 1.81033 6.53077 1.4935C7.93304 1.17668 9.40016 1.32163 10.7133 1.90674"
                      stroke="#005AE2"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M14.6667 2.66675L8 9.34008L6 7.34008"
                      stroke="#005AE2"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_124_852">
                      <rect width="16" height="16" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              }
            />
            <PriceCard
              plan="Teams"
              price="$25/month"
              title="Share with up to 10 users"
              text1="Team Collaboration"
              text2="User Roles and Permissions"
              text3="Enhanced Security"
              text4="API Access"
              text5="Dedicated Account Manager"
              icon={
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_124_852)">
                    <path
                      d="M14.6667 7.38674V8.00007C14.6658 9.43769 14.2003 10.8365 13.3395 11.988C12.4788 13.1394 11.2688 13.9817 9.89022 14.3893C8.5116 14.797 7.03815 14.748 5.68963 14.2498C4.3411 13.7516 3.18975 12.8308 2.40729 11.6248C1.62482 10.4188 1.25317 8.99212 1.34776 7.55762C1.44235 6.12312 1.99812 4.75762 2.93217 3.66479C3.86621 2.57195 5.1285 1.81033 6.53077 1.4935C7.93304 1.17668 9.40016 1.32163 10.7133 1.90674"
                      stroke="#005AE2"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M14.6667 2.66675L8 9.34008L6 7.34008"
                      stroke="#005AE2"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_124_852">
                      <rect width="16" height="16" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              }
            />
          </div>
          <div className="w-full lg:h-[523px] short p-2 m-2">
            <ShortenForm />
          </div>
          <div className="w-full p-2 m-2" id="faqs">
            <Faqs />
          </div>
          <div className="flex flex-col items-center justify-center w-full lg:p-2 m-2 short h-[299px]">
            <h2 className="text-center text-white font-bold text-[40px]">
              Revolutionizing Link Optimization
            </h2>
            <button
              type="button"
              className="flex items-center justify-center lg:h-[3rem] my-10 bg-[#005AE2] hover:bg-[#0e54bd] text-white font-[600] rounded-full px-10 mx-auto w-[200px] py-3"
            >
              Get Started
            </button>
          </div>
          <Company />
        </div>
      </div>
    </section>
  );
};

export default Hero;
