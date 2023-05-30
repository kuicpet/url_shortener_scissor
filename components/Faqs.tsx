import React from 'react';
import Image from 'next/image';
import Line from '../assets/Line 70.png';

const faqs = [
  {
    ques: 'How does URL shortening work?',
    res: 'URL shortening works by taking a long URL and creating a shorter, condensed version that redirects to the original URL. When a user clicks on the shortened link, they are redirected to the intended destination.',
  },
  {
    ques: 'Is it necessary to create an account to use the URL shortening service?',
    res: '',
  },
  {
    ques: 'Are the shortened links permanent? Will they expire?',
    res: '',
  },
  {
    ques: 'Are there any limitations on the number of URLs I can shorten?',
    res: '',
  },
  {
    ques: 'Can I customize the shortened URLs to reflect my brand or content?',
    res: '',
  },
  {
    ques: 'Can I track the performance of my shortened URLs?',
    res: '',
  },
  {
    ques: 'How secure is the URL shortening service? Are the shortened links protected against spam or malicious activity?',
    res: '',
  },
  {
    ques: 'What is a QR code and what can it do?',
    res: '',
  },
  {
    ques: 'Is there an API available for integrating the URL shortening service into my own applications or websites?',
    res: '',
  },
];
const Faqs = () => {
  return (
    <div>
      <div className="flex items-center justify-center">
        <Image src={Line} alt="" className="mx-2" />
        <h2 className="text-[#141414] text-[40px] font-bold">FAQs</h2>
      </div>
    </div>
  );
};

export default Faqs;
