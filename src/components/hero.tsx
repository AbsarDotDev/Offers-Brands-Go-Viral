'use client'
import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'
import LiteYouTubeEmbed from "react-lite-youtube-embed"
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css"
import { fbq } from 'react-facebook-pixel'

export const Hero = () => {
  return (
    <>

<section className="bg-white dark:bg-gray-900 pl-5 pr-5 flex flex-col items-center">
    <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-6 grid lg:grid-cols-1 gap-8 lg:gap-16">
        <div className="flex flex-col justify-center text-center">
        <h2 className="mb-4 text-lg font-extrabold tracking-tight leading-none text-gray-900 md:text-lg lg:text-lg dark:text-white animate-fade-right animate-once">All-In-One Beauty Business Bundle
</h2>

            <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white animate-fade-right animate-once">Helping <span className="text-transparent bg-clip-text bg-gradient-to-r to-bgv-pink from-bgv-skyblue">Beauty </span>Enthusiast turn their Aesthetics into <span className="text-transparent bg-clip-text bg-gradient-to-r from-bgv-pink to-bgv-skyblue">Brands!</span>
</h1>
            <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400 animate-fade-right animate-once">Shine through the noise and grow your business having
a must-have for all cosmetics brands and estheticians.
</p>
            <div className="flex flex-col space-y-0 sm:flex-row sm:space-y-0 sm:space-x-4 justify-center">
                <Button
                onClick={() => {
                    import("react-facebook-pixel")
      .then((x) => x.default)
      .then((ReactPixel) => {
        ReactPixel.init("1311143526433733"); //don't forget to change this
        ReactPixel.track(
            "AddToCart",
            { value: 99.00, currency: "USD" }
            );
            });
      window.location.href ='https://brandsgoviral.myshopify.com/cart/46879491391776:1?channel=buy_button'
                }}
            className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-gradient-to-r  from-bgv-pink to-bgv-skyblue hover:from-bgv-skyblue hover:to-bgv-pink focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900 animate-fade animate-once">
                    I Want To Buy Now
                    <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </Button>
             
            </div>
        </div>
  
    </div>
    {/* <LiteYouTubeEmbed
  aspectHeight={9}
  aspectWidth={16}
  id="Z1k9WIUPCcm0eyyU"
  title="Brands Go Viral - Canva Editable Esthetician's Branding & Business Templates
  "
/> */}

    <div className='max-w-screen w-full pb-12 flex justify-center rounded-lg'>
    <iframe src="https://www.youtube.com/embed/W0nKVR-1oGc?si=Z1k9WIUPCcm0eyyU" className='w-full aspect-video max-w-4xl rounded-xl shadow-lg' title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>          
    {/* <video controls poster='/video-thumb.png' className='rounded-lg'><source src='/brandsgoviral_deals_bundle.mp4'></source></video> */}
            {/* <iframe className="mx-auto w-full lg:max-w-xl h-64 rounded-lg sm:h-96 shadow-xl" loading="lazy" src="https://www.youtube.com/embed/KaLxCiilHns" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe> */}
        </div>
</section>
      </>
  )
}
