import React from 'react'
import { Button } from './ui/button'

export const Hero = () => {
  return (
    <>

<section className="bg-white dark:bg-gray-900">
    <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 grid lg:grid-cols-2 gap-8 lg:gap-16">
        <div className="flex flex-col justify-center">
        <h2 className="mb-4 text-lg font-extrabold tracking-tight leading-none text-gray-900 md:text-lg lg:text-lg dark:text-white">All-In-One Beauty Business Bundle
</h2>

            <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Helping <span className="text-transparent bg-clip-text bg-gradient-to-r to-bgv-pink from-bgv-skyblue">Beauty </span>Enthusiast turn their Aesthetics into <span className="text-transparent bg-clip-text bg-gradient-to-r from-bgv-pink to-bgv-skyblue">Brands!</span>
</h1>
            <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">Shine through the noise and grow your business having
a must-have for all cosmetics brands and estheticians.
</p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
                <a href="#" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-bgv-primary hover:bg-bgv-secondary focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                    I Want To Buy Now
                    <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </a>
                <a href="#" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                    Learn more
                </a>  
            </div>
        </div>
        <div>
            <iframe className="mx-auto w-full lg:max-w-xl h-64 rounded-lg sm:h-96 shadow-xl" src="https://www.youtube.com/embed/KaLxCiilHns" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
        </div>
    </div>
</section>

      </>
  )
}
