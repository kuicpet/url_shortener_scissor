import React from 'react';

interface ICard {
  title: string;
  description: string;
  icon: JSX.Element;
}
const Card: React.FC<ICard> = ({ title, description, icon }) => {
  return (
    <div className="flex flex-col text-left p-4">
      <div className="flex items-center justify-center w-[50px] h-[50px] rounded-full bg-[#3284FF] bg-opacity-10">
        {icon}
      </div>
      <h3 className="my-2 font-semibold text-[32px]">{title}</h3>
      <p className="text-[#141414] font-[500px]">{description}</p>
    </div>
  );
};

export default Card;
