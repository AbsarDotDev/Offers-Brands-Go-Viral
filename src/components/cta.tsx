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
    <section className={`bg-white dark:bg-gray-900 pl-5 pr-5 ${isEven ? 'flex-row-reverse' : ''}`}>
      <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
        {isEven ? (
          <>
            <div className="mt-4 md:mt-0 flex flex-col justify-center items-center">
              <h2 className="mb-4 text-3xl tracking-tight font-extrabold text-gray-900 dark:text-white">{heading}</h2>
              <p className="mb-6 font-light text-gray-500 md:text-base dark:text-gray-400">{paragraph}</p>
            </div>
            <Image className="w-full" src={image} alt="dashboard image" width={1000} height={720} style={{ width: 'auto', height: 'auto' }} />
          </>
        ) : (
          <>
            <Image className="w-full" src={image} alt="dashboard image" width={1000} height={720} style={{ width: 'auto', height: 'auto' }} />
            <div className="mt-4 md:mt-0 flex flex-col justify-center items-center">
              <h2 className="mb-4 text-3xl tracking-tight font-extrabold text-gray-900 dark:text-white">{heading}</h2>
              <p className="mb-6 font-light text-gray-500 md:text-base dark:text-gray-400">{paragraph}</p>
            </div>
          </>
        )}
      </div>
    </section>
  );
};
