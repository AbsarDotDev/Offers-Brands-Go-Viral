'use client'
import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'
import LiteYouTubeEmbed from "react-lite-youtube-embed"
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css"
import { fbq } from 'react-facebook-pixel'
import Image from 'next/image'
import family from '../../public/family.jpg'
import whoami from '../../public/WHO AM I.png'

export const Hero = () => {
  return (
    <>

<section className="bg-white dark:bg-gray-900 pl-5 pr-5 flex flex-col items-center pb-10">
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
        <div className="py-8 px-4 mx-auto max-w-screen-xl w-full"> 
        <div className="lg:py-6 flex flex-col md:flex-row gap-x-12 items-center justify-start" id='who-am-i'>
<div className='w-full md:w-2/3'>
        <h1 className="mb-4  text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white animate-fade-right animate-once">Who Am I?</h1>
        <p className="mb-8 text-lg font-normal text-gray-700 lg:text-xl leading-[30px] md:leading-10 lg:leading-10 dark:text-gray-400 animate-fade-right animate-once">Hello! I&apos;m Tiana Davis. I&apos;m <b>Top 1% Seller on Etsy</b> with an exceptional <b>positive rating.</b> I&apos;m a <b>Full-time Etsy seller</b> and have been serving <b>over 5000 satisfied customers,</b> especially <b>estheticians and beauticians,</b> for more than <b>a year.</b> After serving 5000+ Estheticians & Beauticians, I&apos;ve curated the most useful templates into a bundle, offering them in a valuable format. I&apos;m currently offering my best-selling items at discounted prices on my website.

</p>

                </div>
         
                <div className='w-full md:w-1/3'>
                    <Image src={family} alt='family' className='rounded-lg'/>
                </div>
                
                </div>
                <Image src={whoami} alt='WHO IS BRANDS GO VIRAL' className='rounded-lg border-double border-4 border-black '/>
                </div>

                <h1 className='my-4 text-xl text-center font-extrabold tracking-tight leading-none text-bgv-black md:text-4xl lg:text-4xl dark:text-white '>IS THIS SOMETHING YOU FEEL A CONNECTION WITH?
THEN DON&apos;T LET THIS OFFER GO!
</h1>
{/* <Button
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
            className="inline-flex text-lg w-[50%] justify-center font-extrabold items-center py-6 md:py-8 px-5 md:text-2xl text-center text-white rounded-lg bg-gradient-to-r  from-bgv-pink to-bgv-skyblue hover:from-bgv-skyblue hover:to-bgv-pink focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900 animate-fade animate-once">
                    I Want To Buy Now
                    <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </Button> */}
</section>

      </>
  )
}
