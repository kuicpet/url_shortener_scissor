import React from 'react';
interface IHero {
  title: string;
  title2: string;
  title3: string;
  title4: string;
}
const Hero: React.FC<IHero> = ({ title, title2, title3, title4 }) => {
  return (
    <section data-testid="hero">
      <div className="my-3  p-2 rounded-lg text-center">
        <div className="flex items-center justify-center  max-w-3xl m-6">
          <h1 className="lg:text-5xl text-4xl lg:text-justify text-left  bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text lg:my-3 font-bold">
            {title}
            <br />
            {title2}
            <br />
            {title3}
            <br />
            {title4}
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;
