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
  icon: JSX.Element;
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
    <div className="border-black border-2 rounded-lg text-justify py-5 px-[3rem]">
      <h5>{plan}</h5>
      <h3 className="mt-6 mb-3">{price}</h3>
      <h4>{title}</h4>
      <ul>
        <li className="flex items-center">
          <span className="mr-3">{icon}</span>
          {text1}
        </li>
        <li className="flex items-center">
          <span className="mr-3">{icon}</span>
          {text2}
        </li>
        <li className="flex items-center">
          <span className="mr-3">{icon}</span>
          {text3}
        </li>
        <li className="flex items-center">
          <span className="mr-3">{icon}</span>
          {text4}
        </li>
        <li className="flex items-center">
          <span className="mr-3">{icon}</span>
          {text5}
        </li>
      </ul>
    </div>
  );
};

export default PriceCard;
