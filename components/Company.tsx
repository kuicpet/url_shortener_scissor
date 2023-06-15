import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '../assets/FooterLogo.svg';
import TwitterImg from '../assets/i.fi-social-twitter.svg';
import InstaImg from '../assets/svg.feather.svg';
import LinkedImg from '../assets/i.fi-social-linkedin.svg';
import FacebookImg from '../assets/i.fi-social-facebook.svg';

const Company = () => {
  return (
    <section className="my-10 flex items-center justify-center">
      <div className="flex lg:flex-row flex-col w-full lg:w-[90%] p-2 gap-2">
        <div className="lg:w-[17%] w-full cursor-pointer">
          <Link href={'/'}>
            <Image src={Logo} alt="" />
          </Link>
          <ul className="list-none flex items-center justify-around my-4">
            <li>
              <Image src={TwitterImg} alt="twitter" />
            </li>
            <li>
              <Image src={InstaImg} alt="twitter" />
            </li>
            <li>
              <Image src={LinkedImg} alt="twitter" />
            </li>
            <li>
              <Image src={FacebookImg} alt="twitter" />
            </li>
          </ul>
        </div>
        <div className="lg:w-[60%] w-full grid lg:grid-cols-3 grid-cols-2 gap-2 text-[#071827] px-2">
          <div className="text-left mb-2">
            <h6 className="font-bold text-justify">Why Scissor ?</h6>
            <ul>
              {['Scissor 101', 'Integrations & API', 'Pricing'].map(
                (item, i) => (
                  <li
                    className="font-[400] text-[#112232] hover:underline hover:cursor-pointer hover:text-[#0065FE] transition ease-in-out delay-20"
                    key={i}
                  >
                    {item}
                  </li>
                )
              )}
            </ul>
          </div>
          <div className="text-left mb-2">
            <h6 className="font-bold text-justify">Solutions</h6>
            <ul>
              {[
                'Social Media',
                'Digital Marketing',
                'Customer Service For Developers',
              ].map((item, i) => (
                <li
                  className="font-[400] text-[#112232] hover:underline hover:cursor-pointer hover:text-[#0065FE] transition ease-in-out delay-20"
                  key={i}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="text-left mb-2">
            <h6 className="font-bold text-justify">Products</h6>
            <ul>
              {['Link Management', 'QR Codes', ' Link-in-bi'].map((item, i) => (
                <li
                  className="font-[400] text-[#112232] hover:underline hover:cursor-pointer hover:text-[#0065FE] transition ease-in-out delay-20"
                  key={i}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="text-left mb-2">
            <h6 className="font-bold text-justify">Resources</h6>
            <ul>
              {[
                'Blog',
                'Resource Library',
                'Developers',
                'App Connectors',
                'Support',
                'Trust Center',
                'Browser Extension',
                'Mobile App',
              ].map((item, i) => (
                <li
                  className="font-[400] text-[#112232] hover:underline hover:cursor-pointer hover:text-[#0065FE] transition ease-in-out delay-20"
                  key={i}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="text-left mb-2">
            <h6 className="font-bold text-justify">Features</h6>
            <ul>
              {[
                'Branded Link',
                'Mobile Links',
                'Campaign',
                'Management & Analytics',
                'QR Code generation',
              ].map((item, i) => (
                <li
                  className="font-[400] text-[#112232] hover:underline hover:cursor-pointer hover:text-[#0065FE] transition ease-in-out delay-20"
                  key={i}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="text-left mb-2">
            <h6 className="font-bold text-justify">Legal</h6>
            <ul>
              {[
                'Privacy Policy',
                'Cookie Policy',
                'Terms of Service',
                'Acceptable Use Policy',
                'Code of Conduct',
              ].map((item, i) => (
                <li
                  className="font-[400] text-[#112232] hover:underline hover:cursor-pointer hover:text-[#0065FE] transition ease-in-out delay-20"
                  key={i}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="lg:w-[23%] w-full  px-2">
          <div className="text-left">
            <h6 className="font-bold text-justify ">Company</h6>
            <ul>
              {[
                'About Scisso',
                'Careers',
                'Partner',
                'Press',
                'Contact',
                'Reviews',
              ].map((item, i) => (
                <li
                  className="font-[400] text-[#112232] hover:underline hover:cursor-pointer hover:text-[#0065FE] transition ease-in-out delay-20"
                  key={i}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Company;
