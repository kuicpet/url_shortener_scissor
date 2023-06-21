import React, { useState } from 'react';
import Image from 'next/image';
import Line from '../assets/Line 70.png';
import PlusImg from '../assets/plus.png';
import MinusImg from '../assets/minus.png';

const faqs = [
  {
    ques: 'How does URL shortening work?',
    res: 'URL shortening works by taking a long URL and creating a shorter, condensed version that redirects to the original URL. When a user clicks on the shortened link, they are redirected to the intended destination.',
  },
  {
    ques: 'Is it necessary to create an account to use the URL shortening service?',
    res: 'It is not necessary to create an account to use the URL shortening service.',
  },
  {
    ques: 'Are the shortened links permanent? Will they expire?',
    res: 'The shortened links are permanent and they will not expire.',
  },
  {
    ques: 'Are there any limitations on the number of URLs I can shorten?',
    res: 'For now there are no limitations on the number of URLs you can shortened.',
  },
  {
    ques: 'Can I customize the shortened URLs to reflect my brand or content?',
    res: 'You can customize the shotened URLs to reflect your brand or content.',
  },
  {
    ques: 'Can I track the performance of my shortened URLs?',
    res: 'Yes you can track the performance of your shortened URLs.',
  },
  {
    ques: 'How secure is the URL shortening service? Are the shortened links protected against spam or malicious activity?',
    res: 'Scissor URL shortening service is secure for use.',
  },
  {
    ques: 'What is a QR code and what can it do?',
    res: 'A QR code is a two-dimensional barcode that can store and encode information.',
  },
  {
    ques: 'Is there an API available for integrating the URL shortening service into my own applications or websites?',
    res: 'Presently not API available but in the future there will be.',
  },
];
const Faqs: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqShow = {
    height: '150px',
    transition: '0.5s',
  };

  const faqHide = {
    height: '50px',
    transition: '0.5s',
  };

  const toggle = (index: any): void => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="">
      <div className="flex items-center flex-col justify-center">
        <span className="flex items-center justify-center">
          <Image src={Line} alt="" className="mx-2" />
          <h2 className="text-[#141414] text-[40px] font-bold">FAQs</h2>
        </span>

        <div className="cursor-pointer flex items-center justify-center flex-col w-full">
          {faqs.map((item, index) => (
            <div key={index} className="w-full lg:w-[70%] p-3">
              <div
                className={`${activeIndex === index ? 'active' : ''}`}
                onClick={() => toggle(index)}
              >
                <div className="flex items-center justify-between p-2">
                  <h3 className="text-[#141414] text-lg font-[500] lg:text-justify text-left my-1 lg:w-3/4 w-full">
                    {item.ques}
                  </h3>
                  <div className="lg:flex transition ease-in-out delay-75">
                    {activeIndex !== index ? (
                      <Image src={PlusImg} alt="" />
                    ) : (
                      <Image src={MinusImg} alt="" />
                    )}
                  </div>
                </div>
              </div>
              {activeIndex === index && (
                <div className="flex items-center justify-start text-justify shadow-md p-2 rounded-sm ">
                  <p className="">{item.res}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faqs;
