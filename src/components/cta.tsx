import Image from 'next/image';
import React from 'react';

interface CtaProps {
  heading: string;
  paragraph: string;
  image: string;
  index: number;
}

export const Cta = ({ heading, paragraph, image, index }: CtaProps) => {
  const isEven = index % 2 === 1;

  return (
    <section className={`bg-white dark:bg-gray-900 pl-5 pr-5`}>
      <div className={`gap-8 items-start py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 flex flex-col lg:flex-row sm:py-16 lg:px-6 ${isEven?'flex-col-reverse':''}`}>
        {isEven ? (
          <>
            <div className="mt-4 md:mt-0 flex flex-col w-full lg:w-1/2 justify-center items-center">
              <h2 className="mb-4 text-3xl tracking-tight font-extrabold text-gray-900 dark:text-white">{heading}</h2>
              <p className="mb-6 font-light text-gray-800  text-lg md:text-xl dark:text-gray-400">{paragraph}</p>
            </div>
            <Image className="w-full lg:w-1/2 animate-fade-left animate-once" src={image} alt="dashboard image" width={1000} height={720} style={{height: 'auto' }} />
          </>
        ) : (
          <>
            <Image className="w-full lg:w-1/2" src={image} alt="dashboard image" width={1000} height={720} style={{height: 'auto' }} />
            <div className="mt-4 md:mt-0 flex flex-col w-full lg:w-1/2 justify-center items-center">
              <h2 className="mb-4 text-3xl tracking-tight font-extrabold text-gray-900 dark:text-white">{heading}</h2>
              <p className="mb-6 font-light text-gray-800 text-lg md:text-xl dark:text-gray-400">{paragraph}</p>
            </div>
          </>
        )}
      </div>
    </section>
  );
};
