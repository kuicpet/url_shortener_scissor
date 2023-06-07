import React from 'react';

interface IPriceCard {
  plan: string;
  price: string;
  title: string;
  text1: string;
  text2: string;
  text3: string;
  text4: string;
  text5: string;
  //icon: JSX.Element;
  icon: any;
}
const PriceCard: React.FC<IPriceCard> = ({
  plan,
  price,
  title,
  text1,
  text2,
  text3,
  text4,
  text5,
  icon,
}) => {
  return (
    <div className="m-2">
      <div className="border-[#005AE2] cursor-pointer border flex flex-col justify-center rounded-lg text-justify py-5 px-[3rem] lg:w-[22rem] w-full bg-[#FFFFFF] hover:bg-[#1E3448] hover:text-[#FFFFFF] hover:border-none transition ease-in-out delay-75 hover:scale-105">
        <h5 className="font-[500px] text-2xl">{plan}</h5>
        <h3 className="mt-6 mb-3 font-bold text-4xl">{price}</h3>
        <h4 className="font-[500px] text-xl text-left">{title}</h4>
        <ul>
          <li className="flex items-center my-4 text-[14px]">
            <span className="mr-3">{icon}</span>
            {text1}
          </li>
          <li className="flex items-center my-4">
            <span className="mr-3">{icon}</span>
            {text2}
          </li>
          <li className="flex items-center my-4">
            <span className="mr-3">{icon}</span>
            {text3}
          </li>
          <li className="flex items-center my-4">
            <span className="mr-3">{icon}</span>
            {text4}
          </li>
          <li className="flex items-center my-4">
            <span className="mr-3">{icon}</span>
            {text5}
          </li>
        </ul>
      </div>
      <div>
        <button
          type="button"
          className="flex items-center justify-center h-12 my-10 bg-[#005AE2] hover:bg-[#0e54bd] text-white font-[600] rounded-full px-10 mx-auto"
        >
          Select Pricing
        </button>
      </div>
    </div>
  );
};

export default PriceCard;
