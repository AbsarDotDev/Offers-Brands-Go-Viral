import Image from 'next/image'
import { Hero } from '../components/hero'
import { Cta } from '@/components/cta'
import { Templates } from '@/components/templates'
import { PiNumberCircleFourFill, PiNumberCircleOneFill, PiNumberCircleThreeFill, PiNumberCircleTwoFill } from "react-icons/pi";
import Testimonials from '@/components/testimonials'
import Link from 'next/link'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

import NewsLetter from '@/components/newsletter'
import Header from '@/components/header'
import MobileDrawer from '@/components/mobile-nav'
import Features from '@/components/features'
import WebButton from '@/components/web-button'
import { headers } from 'next/headers'
import Script from 'next/script';
import NewsletterModal from '@/components/newsletter-popup';
import StickyBaner from '@/components/sticky_banner';

export default function Home() {
  const nonce = headers().get('x-nonce')

  const cta = [
    {
      heading: "You are struggling to create captivating Instagram posts that will engage your followers.",
      paragraph: "Instagram is the most powerful platform for promoting your beauty brand and products to date. You may be an expert in your field, but if designing is not your cup of tea, you may end up designing a post that only you like. I understand that creating attractive Instagram posts that engage your audience can be challenging and you need a solution. Well, you are still able to design, all you need is an editable Instagram posts bundle to start with, which is a set of premade templates, specially designed for cosmetic brands & estheticians with all kinds of posts one should have on Instagram.",
      image: "/Esthetician Instagram Post Bundle - Listing Images (2).png"
    },
    {
      heading: "You need help creating consent forms that are compliant with all applicable laws.",
      paragraph: "Consent forms are an important part of running a beauty business. They help to protect businesses from legal liability and ensure that clients are aware of their rights & give written consent about what they are up to. This is always a challenge to create your own consent forms from scratch in legal language as it is difficult and time-consuming, and you need to make sure to include all of the necessary information without making the form too long or complicated. Get all the consent forms for estheticians, simply add your brand name, and they are ready to sign and print!",
      image: "/Esthetician Forms Bundle - Listings (3).png"
    },
    {
      heading: "You are having trouble designing packaging labels that reflect your brand identity.",
      paragraph: "You are hiring an expensive designer from Fiverr & struggling to meet the requirements & not able to communicate the brand identity you have in your mind for your beauty package. Packaging labels are an essential part of branding. Good labels leave a lasting impression in a customer's mind, so they need to be minimal yet beautiful. Canva editable packaging labels with the brand's identity in terms of color scheme, typography, and overall design along with a print template for bulk printing can make your branding step hassle-free.",
      image: "/Cosmetic Branding listing 01 (3) (1).png"
    },
    {
      heading: "You are feeling overwhelmed by creating a cohesive business branding kit.",
      paragraph: "I do understand why you might be feeling overwhelmed creating a perfect branding kit for your business. It can be a lot of work to put together all of the different pieces, and it can be hard to brand multiple social media in one style and theme. You need a branding kit in different sizes optimized for different platforms, ready to upload so you can start working on more important things in your business.",
      image: "/Business Branding Kit 01 listing Images (2).png"
    },
    {
      heading: "You are planning & not going anywhere, merging all the tasks & ignoring the important things.",
      paragraph: "I used to forget the tasks I was supposed to do, always failing to prioritize the most important and least important things that my business needed. Planners with all solutions for your social media & business management can only make you run your business in a manageable way.      ",
      image: "/Business Planner - Listings (1).png"
    },
  ]
  const bundles = [
    {
      bundlename: "Cosmetic Packaging Bundle",
      templates: "70+ Template",
      value: "$30",
      content: "Looking for stylish and contemporary cosmetic packaging? Your search ends here! This bundle offers a variety of packaging templates, Soap, Lip Balm, Hand Sanitizer, Candles, Pouches, Cream Jars and Lids, Roller Bottles, Dropper Bottles, Cosmo Spray Bottles, and nearly every cosmetic bottle type. And that's not all – you will also receive print templates and complimentary cosmetic icons to complete the package.      ",
      image: "/bundles/Cosmetic Bundle.png",
      prd: "https://brandsgoviral.myshopify.com/cart/47154589139232:1?channel=buy_button"

    },
    {
      bundlename: "Esthetician Forms Bundle",
      templates: "160+ Templates",
      value: "$40",
      content: "This bundle includes all the essential forms you need to run your esthetician or salon business hustle-free, including a client consultation form, client intake form, treatment consent form, client release form, aftercare instructions, of various treatments like facial, waxing, eyelash extensions, lash lift and tint, Microdermabrasion, permanent makeup, spray tanning, chemical peel, LED Light Therapy, Aromatherapy, Microblading, Dermaplaning, Laser Skin Rejuvenation, Body Sculpting, Brow treatments, Acne treatments etc and so many bonuses like skin patch testing forms, appointment cancellation forms, email sign-up form, Covid-19 Liability Waiver Form, Photo Release Form, Weekly Appointment Tracker, Business Income Tracker, Client Treatment Record Form, Client Service History Form, Parental Consent Form, Model Release form, Salon Booth Lease Agreement, etc",
      image: "/bundles/Forms.png",
      prd: "https://brandsgoviral.myshopify.com/cart/47154805801248:1?channel=buy_button"


    },
    {
      bundlename: "Esthetician Instagram Bundle",
      templates: "650+",
      value: "$40",
      content: "Esthetician Instagram bundle includes a huge variety of Instagram posts, highlight covers, and story templates. It offers a variety of ready-to-post content, expert skincare tips, scientific advice, engaging quotes, infographics, memes, gifs, and much more.",
      image: "/bundles/Instagram Templates.png",
      prd: "https://brandsgoviral.myshopify.com/cart/47154841256224:1?channel=buy_button"


    },
    {
      bundlename: "Business Branding Bundle",
      templates: "130+",
      value: "$40",
      content: " This bundle includes everything you need before starting any business. It includes templates of Thank you cards, Loyalty cards, Business cards, Address labels, Idea mood boards, Letterhead, Invoice, Facebook headers, Twitter headers, Youtube headers, Etsy headers, Instagram posts, stories, highlight covers, Product tags, Packaging Stickers, Email signature, Price list, Gift card, Envelope, PremadeLogos, etc.",
      image: "/bundles/Business Branding Kit.png",
      prd: "https://brandsgoviral.myshopify.com/cart/47154639012128:1?channel=buy_button"


    },
    {
      bundlename: "Business Planner",
      templates: "200+",
      value: "$30",
      content: "Initiated your desired business but need help to keep it up with this? This mega bundle also includes a detailed business planner to plan your business and keep track of all the expenses and profits. This mega business planner covers everything from Business Goals, Product Planning, Competitor Analysis, Market Research, Shipping Tracker, Advertising Tracker, Discounts Tracker, Giveaway Trackers, Order Tracker, etc to SWOT Analysis, Cost & Profit Tracker, Sales and Profit Projection, Social Media Planner, Content Planner, Affiliate Planner, Hashtags and Keyword Research, Product launch Calendar and Plan, Trends and Growth, Our Selling Point and Strategies, etc and much more!",
      image: "/bundles/Planners.png",
      prd: "https://brandsgoviral.myshopify.com/cart/47154891718944:1?channel=buy_button"


    },
  ];

  return (
    <>

   <NewsletterModal/>
    <main className='dark:bg-gray-900'>
<StickyBaner/>
      {/* <div className='sticky top-0 z-[99]'> */}
        <Header />
        {/* </div> */}
        <div className='block md:hidden'>
          <MobileDrawer />
        </div>
      <Hero />
      <section className="bg-gradient-to-r from-bgv-pink to-bgv-skyblue dark:to-gray-900 dark:from-gray-900 py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-center text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-white mb-4">
            Feeling Frustrated and Overwhelmed about the First Step in Launching Your Successful Beauty Business?
          </h1>
          <p className="text-center text-lg md:text-xl lg:text-2xl font-normal text-black dark:text-white mb-8">
            Passionate about beauty but unsure where to start? Let&apos;s break through procrastination together.
          </p>
          <h2 className="text-center text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight leading-tight text-white mb-4">
            DOES THIS SOUND LIKE YOU?
          </h2>
          <p className="text-center text-lg md:text-xl lg:text-2xl font-normal text-black dark:text-white mb-8">
            I used to be just like you—always planning and gathering information, but achieving nothing. Not anymore.
          </p>
        </div>
      </section>

      {cta.map((cta, index) => {
        return (
          <Cta
            key={index}
            heading={cta.heading}
            paragraph={cta.paragraph}
            image={cta.image}
            index={index} />
        )
      })}
      <section className="bg-gradient-to-r from-bgv-pink to-bgv-skyblue dark:to-gray-900 dark:from-gray-800 py-5 md:py-12 lg:py-12">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="max-w-screen text-sm text-white sm:text-lg md:text-1xl dark:text-gray-400">
            <h2 className="mb-6  text-2xl md:text-5xl lg:text-5xl tracking-tight font-extrabold text-white drop-shadow-xl text-center dark:text-white">IF You&apos;re FEELING THIS WAY, You&apos;re NOT ALONE.
            </h2>
            <p className="mb-4 font-bold text-black text-center text-lg md:text-xl lg:text-3xl dark:text-white">You just need this all-in-one beauty business bundle that will definitely help you initiate & elevate your brand.
            </p>
            <p className="mb-4 font-medium text-black text-center text-lg md:text-xl lg:text-2xl dark:text-gray-300">Many beauty enthusiasts dream of starting their own brand, but they don&apos;t know where to begin. The beauty industry is competitive and ever-changing, and it can be difficult to break through the noise.
            </p>

          </div>
        </div>
      </section>
      <section className='px-10 dark:bg-gray-900 pb-8 pt-12 md:pb-12 lg:pb-12' id='whats-included'>
        <h1 className="mb-4 text-3xl font-extrabold tracking-tight leading-none text-center text-gray-900 md:text-5xl lg:text-6xl dark:text-white">What you&apos;ll get in the  Beautypreneur Mega Bundle
        </h1>
        <Image src={'/MEGA BUNDLE THUMBNAIL.png'} alt='bradnsgoviral 10x productivity' width={1920} height={1080} className='m-auto py-6 md:py-10 lg:py-10' />
        <h1 className="my-4 text-3xl text-center font-extrabold tracking-tight leading-none text-gray-900 md:text-6xl lg:text-[64px] dark:text-white"><span className="text-transparent bg-clip-text bg-gradient-to-r from-bgv-pink to-bgv-skyblue">The Only Mega Bundle You&apos;ll Ever Need!</span>
        </h1>    </section>
      {/* <BundleIncludes /> */}
      <section className='afterBundle px-10 md:px-20 lg:px-20 pt-0 md:pt-12 lg:pt-12 pb-12 dark:bg-gray-900'>
        <div className='text-center py-0 md:py-10 lg:py-10'>
          <h1 className="mb-4 text-lg font-extrabold tracking-tight leading-none text-gray-900 md:text-3xl lg:text-4xl dark:text-white">With my mega bundle, you&apos;ll have everything you need to turn your passion for beauty into a successful business.
          </h1>
          <p className="mb-8 text-lg font-extrabold lg:text-xl dark:text-gray-400"><mark className=' text-gray-700 dark:text-red-700'>don&apos;t miss out on this opportunity to take your beauty business to the next level.
          </mark>
          </p>
          <WebButton text='Avail this product in discounted price!' style='text-lg md:text-2xl lg:text-2xl' />
          {/* <Link href="https://brandsgoviral.myshopify.com/cart/46879491391776:1?channel=buy_button" className="relative inline-flex justify-center items-center py-3 px-5 text-base md:text-2xl lg:text-2xl font-medium text-center text-white rounded-lg bg-gradient-to-r  from-bgv-pink to-bgv-skyblue hover:from-bgv-skyblue hover:to-bgv-pink focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900 shadow-md">
      <span className="relative z-10">
        Avail this product in discounted price!
      </span>

      <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
      </svg>
    </Link> */}



        </div>
      </section>
      <section className="bg-gradient-to-r  from-bgv-pink to-bgv-skyblue dark:to-transparent dark:from-transparent dark:bg-gray-900 p-5">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 flex flex-col md:flex-row lg:flex-row gap-10">
          <div className=" text-white sm:text-lg md:text-1xl dark:text-gray-400">
            <h2 className="mb-6 text-5xl tracking-tight font-extrabold text-black drop-shadow-xl dark:text-white">IMAGINE THE POSSIBILITY

            </h2>
            <p className="mb-4 font-bold italic dark:text-white">Imagine if you could…

            </p>
            <ul className="text-gray-600 list-none leading-[40px]">
              <li className="mb-2 text-gray-700 dark:text-gray-100">✅ Create a successful beauty brand that You&apos;re passionate about.</li>
              <li className="mb-2 text-gray-700 dark:text-gray-100">✅ Share your love of beauty with the world and make a difference in people&apos;s lives.</li>
              <li className="mb-2 text-gray-700 dark:text-gray-100">✅ Having your vast number of followers on different social media platforms.</li>
              <li className="mb-2 text-gray-700 dark:text-gray-100">✅ Generate a sustainable income that allows you to live the life you&apos;ve always dreamed of.</li>
              <li className="mb-2 text-gray-700 dark:text-gray-100">✅ Run your business seamlessly and have more time to spend with your loved ones.</li>
            </ul>


          </div>
          <div className="lg:w-1/2 w-full mb-2 lg:mb-0 rounded-lg overflow-hidden">
            <Image alt="feature" className="object-cover object-center h-full w-full" src="/imagine possiblity.jpeg" width={460} height={500} />
          </div>
        </div>
      </section>
      <section>
        <Image src={'/10xproductivity.png'} alt='bradnsgoviral 10x productivity' width={1920} height={1080} className='w-full' />
      </section>

      <section className=" bg-gradient-to-r  from-bgv-pink to-bgv-skyblue dark:to-transparent dark:from-transparent dark:bg-gray-900 p-5">
        <div className="py-8 px-4 mx-auto max-w-screen-2xl lg:py-16 lg:px-6 flex flex-col md:flex-row lg:flex-row-reverse gap-10">
          <div className="lg:w-1/2 w-full text-white sm:text-lg md:text-1xl dark:text-gray-400 bg-white dark:bg-gray-800 p-10 rounded-xl">
            <h6 className="mb-6 text-lg tracking-tight font-extrabold text-black drop-shadow-xl italic dark:text-white">Elevate your Instagram presence, streamline your business with customizable consent forms, captivate customers with professional packaging labels, and unlock the power of a comprehensive branding kit – all in one game-changing package.


            </h6>
            <p className="mb-4 font-normal text-lg  text-gray-800 dark:text-white">Say goodbye to frustration and hello to success with our complete toolkit designed to transform beauty enthusiasts into thriving beautypreneurs!
            </p>
            <ul className="text-gray-600 list-none leading-[40px]">
              <li className="mb-2 text-gray-700 dark:text-gray-100">✅ <span className='font-bold'>Save time and money:</span> The Beauty Business Bundle includes everything you need to launch and grow your beauty brand, so you can save time and money by not having to purchase or create these resources separately.</li>
              <li className="mb-2 text-gray-700 dark:text-gray-100">✅ <span className='font-bold'>Get expert advice:</span> The Beauty Business Bundle is created by a team of experienced beauty entrepreneurs who have been there and done it. They can help you avoid the common mistakes that many new beauty entrepreneurs make.</li>
              <li className="mb-2 text-gray-700 dark:text-gray-100">✅ <span className='font-bold'>Grow your business faster:</span> The Beauty Business Bundle will give you the tools and resources you need to grow your beauty business faster than ever before.</li>

            </ul>

            <p className="mb-4 font-bold text-gray-900 dark:text-white">If you&apos;re ready to launch a successful beauty brand, then the Beauty Business Bundle is the perfect resource for you.
            </p>
            <WebButton text='Get Your All In One Bundle In $99' />
            {/* <Link href="https://brandsgoviral.myshopify.com/cart/46879491391776:1?channel=buy_button" className="relative w-full inline-flex justify-center items-center py-3 px-5 text-base md:text-lg lg:text-lg font-medium text-center text-white rounded-lg bg-gradient-to-r  from-bgv-pink to-bgv-skyblue hover:from-bgv-skyblue hover:to-bgv-pink focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900 shadow-md">
      <span className="relative z-10 text-3xl">
        Click here to grab it now!            </span>

      <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
      </svg>
    </Link> */}
          </div>
          <div className="lg:w-1/2 w-full mb-8 lg:mb-0 rounded-lg overflow-hidden">
            <Image alt="feature" className="object-cover object-center h-full w-full" src="/Elevate your Instagram presence (2).gif" width={460} height={500} />
          </div>
        </div>
      </section>
      <section className="dark:to-transparent dark:from-transparent dark:bg-gray-900 p-5 text-center px-10 md:px-20 lg:px-20 py-10 md:py-20 lg:py-20">
        <h1 className="mb-4 text-center text-3xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white animate-fade-right animate-once">Here&apos;s An <span className="text-transparent bg-clip-text bg-gradient-to-r to-bgv-pink from-bgv-skyblue">Exciting </span>News
        </h1>
        <p className="text-lg md:text-2xl lg:text-2xl leading-[30px] md:leading-10 lg:leading-10 font-medium">Even this Mega Bundle contains a massive value inside in discounted price but, we understand that every customer is unique, with distinct preferences and needs.

          That&apos;s why we are introducing a remarkable opportunity for you to seize individual product bundle separately, providing the ultimate freedom of choice.</p>
      </section>



      {bundles.map((bundle, index) => {
        return (
          <Templates
            key={index}
            bundlename={bundle.bundlename}
            template={bundle.templates}
            value={bundle.value}
            content={bundle.content}
            image={bundle.image}
            prd={bundle.prd} />
        )
      })}

      <section className='bg-gradient-to-r  from-bgv-pink to-bgv-pink dark:to-transparent dark:from-transparent dark:bg-gray-900 p-5 '>
        <h1 className='text-black text-5xl md:text-5xl lg:text-7xl py-4  text-center font-black dark:text-white'> BONUSES</h1>
        <div className="py-2 px-4 mx-auto max-w-screen-xl lg:px-6 flex flex-col items-center md:flex-row lg:flex-row-reverse gap-10">
          <div className="lg:w-1/2 w-full text-white sm:text-lg md:text-1xl dark:text-gray-400 bg-white dark:bg-gray-800 p-8 md:p-10 lg:p-10 rounded-xl">
            <h1 className="mb-6 text-2xl  tracking-tight font-extrabold text-black drop-shadow-xl dark:text-white">20 Pages Blog Planner & 150+ Icons Pack</h1>

            <h3 className="mb-6 text-2xl md:text-3xl lg:text-3xl  tracking-tight font-black text-bgv-skyblue  dark:text-white">Value: $40
            </h3>
            <p className="mb-4 font-normal leading-7 text-base text-gray-800 dark:text-white">Get ready for extraordinary value with our digital products bundle! But wait, there&apos;s more. When you choose our bundle, you&apos;ll receive an exclusive bonus that you won&apos;t find anywhere else. Why settle for ordinary when you can have the extraordinary? This bonus will take your business to the next level, and it&apos;s included for free to provide unmatched value. It features a Blog Planner and an Essential Icons Pack, enabling you to create, plan, and present your digital content with ease. The Blog Planner is an essential tool that will help you outline your content, set goals, and ensure your blogging journey is both efficient and effective. Plus, the visual appeal of your digital projects is crucial, and our exclusive Essential Icons Pack allows you to enhance the beauty of all your projects. Every essential icon you can think of is included for free to help you stand out in the digital landscape.
            </p>


          </div>
          <div className="lg:w-1/2 w-full mb-8 lg:mb-0 rounded-lg overflow-hidden">
            <Image alt="feature" src={'/Bonus Blog Planner.png'} className='w-[520px] h-[400px] object-cover' width={500} height={400} />
          </div>
        </div>

      </section>
      <section className='p-5 py-12 px-4 w-full lg:px-6 dark:bg-gray-900'>
        <div className=" flex flex-col md:flex-row lg:flex-row gap-10 justify-center items-start md:items-start">
          <h1 className=" mb-2 text-gray-900 font-black  dark:text-white text-3xl">✅  Lifetime Access </h1>
          <h1 className=" mb-2 text-gray-900 font-black dark:text-white text-3xl">✅  Assistance in Editing</h1>
          <h1 className=" mb-2 text-gray-900 font-black dark:text-white text-3xl">✅  Canva Editability</h1>
          <h1 className=" mb-2 text-gray-900 font-black dark:text-white text-3xl">✅  Instant Download</h1>

        </div>
        <h1 className="my-6 text-4xl text-center font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Total 1200+ Templates
        </h1>
        <div className="flex flex-row items-center justify-center gap-x-3 py-10">
          <h1 className="mb-4 text-center text-3xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-5xl dark:text-white">TOTAL VALUE</h1>
          <h1 className="mb-4  text-center text-4xl font-extrabold tracking-tight leading-none text-red-600  md:text-6xl lg:text-6xl line-through">$220</h1>
        </div>
        <h1 className="mb-4 text-4xl text-center font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">YOU WILL GET THIS JUST IN
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-bgv-pink from-bgv-skyblue"> $99 </span>
        </h1>
        <h1 className="mb-4  text-center text-4xl font-extrabold tracking-tight leading-none text-red-600 md:text-5xl lg:text-6xl ">Only valid till 31st December.
        </h1>

      </section>

      <section className="bg-gradient-to-r  from-bgv-pink to-bgv-skyblue dark:to-transparent dark:from-transparent dark:bg-gray-900 py-16 md:py-20 lg:py-20">
        <div className="px-4 mx-auto max-w-screen-xl lg:py-20 lg:px-6 flex flex-col md:flex-row lg:flex-row gap-y-10">
          <div className="lg:w-1/2 w-full text-white sm:text-lg md:text-1xl dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-8 py-10 rounded-xl lg:rounded-tr-none lg:rounded-br-none ">
            <h1 className="mb-6 capitalize text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-4xl lg:text-4xl dark:text-white">You&apos;re Ready for this if...</h1>

            <ul className="text-gray-600 list-none leading-[40px]">
              <li className="mb-4 text-gray-700 text-xl dark:text-white">✅ You are passionate about your business and ready to operate with ease</li>
              <li className="mb-4 text-gray-700 text-xl dark:text-white">​✅ You want to grow your social presence to attract and engage your followers</li>
              <li className="mb-4 text-gray-700 text-xl dark:text-white">✅ You want to manage your business in the most efficient way</li>
              <li className="mb-4 text-gray-700 text-xl dark:text-white">✅ ​You want to create a cohesive and professional brand identity</li>
              <li className="text-gray-700 text-xl dark:text-white">✅ You are willing to give a professional touch to your products&apos; packaging</li>

            </ul>
          </div>
          <div className="lg:w-1/2 w-full text-white sm:text-lg md:text-1xl dark:text-gray-400 bg-gray-100 px-8 py-10 rounded-xl lg:rounded-tl-none lg:rounded-bl-none">
            <h1 className="mb-6 capitalize text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-4xl lg:text-4xl dark:text-black">This is Not for you...
            </h1>

            <ul className="text-gray-600 list-none leading-[40px]">
              <li className="mb-4 text-gray-700 text-xl dark:text-black">❌  Deep down, you don&apos;t believe you can&apos;t scale your business to the next level</li>
              <li className="mb-4 text-gray-700 text-xl dark:text-black">❌  You don&apos;t believe in your products or services</li>
              <li className="mb-4 text-gray-700 text-xl dark:text-black">❌  You don&apos;t understand the value of branding and using social media</li>
              <li className="mb-4 text-gray-700 text-xl dark:text-black">❌  You want to spend more time doing everything from scratch</li>
              <li className="mb-4 text-gray-700 text-xl dark:text-black">❌  You are not linked with the beauty business</li>
            </ul>
          </div>
        </div>
      </section>
      <section className=" dark:bg-gray-900 pt-[74px] pb-4 md:pt-10 lg:pt-10 md:pb-10 lg:pb-10">
        <div className="px-4 bloc mx-auto max-w-7xl sm:px-6 lg:px-8"> <Features />
        </div>
      </section>
      <Testimonials />
      <div className="flex flex-col space-y-0 sm:flex-row sm:space-y-0 sm:space-x-4 justify-center my-10 mx-4 md:mx-0">
        <Link href="https://brandsgoviral.myshopify.com/cart/46879491391776:1?channel=buy_button" className="inline-flex justify-center uppercase items-center py-3 px-10 md:px-20 lg:px-20 text-xl font-black text-center text-white rounded-lg bg-gradient-to-r  from-bgv-pink to-bgv-skyblue hover:from-bgv-skyblue hover:to-bgv-pink focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900 animate-fade animate-once">
          Yes I Am Wise Enough To Grab This Deal
          <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
          </svg>
        </Link>

      </div>
      {/*Roadmap  Start*/}
      <section className=" dark:bg-gray-900 md:pt-10 lg:pt-10 pb-12 md:pb-10 lg:pb-10" id='how-does-it-work'>
        <div className="px-4 mt-6 md:mt-0 bloc mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="text-center my-10">
            <h2 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl dark:text-white">Here&apos;s how it works:
            </h2>
          </div>
          <ol className="items-start block lg:flex">
            <div className='flex w-full lg:w-1/2'>
              <li className="relative mb-6 sm:mb-0 w-1/2 ">
                <div className="flex items-center">
                  <div className="z-10 flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                    <PiNumberCircleOneFill size="1.5em" style={{ 'background-image': 'linear-gradient(to right, #f7c6e7 , #b5a2f9);', 'border-radius': '50%' }} />
                  </div>
                  <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                </div>
                <div className="mt-3 pr-4 md:pr-0">
                  {/* <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Flowbite Library v1.0.0</h3>
    <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Released on December 2, 2021</time> */}
                  <p className="text-base font-medium text-gray-800 dark:text-gray-400">Minutes after you place your order, you&apos;ll receive a pdf file containing a link.</p>
                </div>
              </li>

              <li className="relative mb-6 sm:mb-0 w-1/2 ">
                <div className="flex items-center">
                  <div className="z-10 flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                    <PiNumberCircleTwoFill size="1.5em" style={{ 'background-image': 'linear-gradient(to right, #f7c6e7 , #b5a2f9);', 'border-radius': '50%' }} />
                  </div>
                  <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                </div>
                <div className="mt-3 sm:pr-8">
                  {/* <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Flowbite Library v1.0.0</h3>
    <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Released on December 2, 2021</time> */}
                  <p className="text-base font-medium text-gray-800 dark:text-gray-400">Click on the link(s) given in the PDF file and It will take you to a landing page for the design on Canva.com. Once there, click Use Template. If you don&apos;t have a Canva account, it will prompt you to create an account first.</p>
                </div>
              </li>
            </div>
            <div className='flex w-full lg:w-1/2'>
              <li className="relative mb-6 sm:mb-0 w-1/2 ">
                <div className="flex items-center">
                  <div className="z-10 flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                    <PiNumberCircleThreeFill size="1.5em" style={{ 'background-image': 'linear-gradient(to right, #f7c6e7 , #b5a2f9);', 'border-radius': '50%' }} />
                  </div>
                  <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                </div>
                <div className="mt-3 pr-4 md:pr-0">
                  {/* <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Flowbite Library v1.0.0</h3>
    <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Released on December 2, 2021</time> */}
                  <p className="text-base font-medium text-gray-800 dark:text-gray-400">Customize your details in Canva, save and download</p>
                </div>
              </li>
              <li className="relative mb-6 sm:mb-0 w-1/2">
                <div className="flex items-center">
                  <div className="z-10 flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                    <PiNumberCircleFourFill size="1.5em" style={{ 'background-image': 'linear-gradient(to right, #f7c6e7 , #b5a2f9);', 'border-radius': '50%' }} />
                  </div>
                  <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                </div>
                <div className="mt-3 sm:pr-8">
                  {/* <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Flowbite Library v1.0.0</h3>
    <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Released on December 2, 2021</time> */}
                  <p className="text-base font-medium text-gray-800 dark:text-gray-400">Print at home, go to local print shop or online print company</p>
                </div>
              </li>
            </div>
          </ol>
        </div>
      </section>
      {/* Roadmap End */}

      {/* Specs Start */}

      <section className="dark:bg-gray-900 lg:py-10">
        <div className="px-4 flex flex-col lg:flex-row justify-between sm:px-6 lg:px-20 w-full">
          <div className='w-full lg:w-1/2'>
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl dark:text-white">SPECIFICATIONS</h2>
            <ul className="space-y-6 text-left text-gray-500 dark:text-gray-400 mt-6">
              <li className="">
                <p className='text-xl md:text-2xl text-gray-800 dark:text-white'>✅ Instant download</p>
              </li>
              <li className="">
                <p className='text-xl md:text-2xl text-gray-800 dark:text-white'>✅ Customizable in Canva</p>
              </li>
              <li className="">
                <p className='text-xl md:text-2xl text-gray-800 dark:text-white'>✅ Easy to edit</p>
              </li>
              <li className="">
                <p className='text-xl md:text-2xl text-gray-800 dark:text-white'>✅ Download and use multiple times</p>
              </li>
              <li className="">
                <p className='text-xl md:text-2xl text-gray-800 dark:text-white'>✅ Lifetime access to your template</p>
              </li>
              <li className="">
                <p className='text-xl md:text-2xl text-gray-800 dark:text-white'>✅ Print at home</p>
              </li>
            </ul>
          </div>

          <div className='w-full lg:w-1/2 py-16 lg:py-0' id='faqs'>
            <h2 className="text-3xl text-left font-bold text-gray-900 sm:text-4xl xl:text-5xl dark:text-white">
              FAQs
            </h2>

            <Accordion type="single" collapsible className="w-full mt-4">
              <AccordionItem value="item-1">
                <AccordionTrigger className='font-medium text-base md:text-lg font-mont text-left'>IS THERE ANY TIME LIMIT TO ACCESS THE LINK?
                </AccordionTrigger>
                <AccordionContent className='text-md'>
                  There is no time limit, you can access the link for your lifetime.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className='font-medium text-base md:text-lg font-mont'>IS THERE ANY DOWNLOAD LIMIT?
                </AccordionTrigger>
                <AccordionContent className='text-md'>
                  There is no download limit, download as many times as you need it.

                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className='font-medium text-base md:text-lg font-mont'> WHERE DO I PRINT?
                </AccordionTrigger>
                <AccordionContent className='text-md'>
                  In some of our listings, there is a Print Template included, this allows you to print at home or you use any online printing service like Avery, PrintsofLove, OnlineLabels, UPrinting etc

                </AccordionContent>
              </AccordionItem>
            </Accordion>

          </div>
        </div>
      </section>

      {/* Specs End */}
      <section className="dark:bg-gray-900 lg:py-10">
        <div className="px-4 flex  justify-between sm:px-6 lg:px-20 w-full">
          {/* PLEASE NOTE:
  This is a digital product so no physical or printed products will be shipped.
  Colors may vary slightly depending on the computer monitor and printer you decide to use.
  TERMS OF USE
  This item is for personal use only. not to be resold, redistributed and not to use for any commercial purposes.
  REFUNDS
  Due to the nature of digital products, all sales are final. However, if you have any issues, please let us know within 7 days of purchase and we will try our best to resolve the issue.
  Convert above to reat beautiful UI
  */}
          <div className='flex flex-col lg:flex-row w-full gap-x-6 items-start'>
            <div className='w-full lg:w-1/2'>
              <h2 className="text-xl font-bold text-gray-900 sm:text-3xl xl:text-3xl dark:text-white">PLEASE NOTE:
              </h2>
              <p className='text-lg leading-8 mt-2 text-gray-800 dark:text-white'>
                This is a digital product so no physical or printed products will be shipped.
              </p>
              <p className='text-lg leading-8 mt-2 text-gray-800 dark:text-white'>
                Colors may vary slightly depending on the computer monitor and printer you decide to use.
              </p>
              <p className='text-lg leading-8 mt-2 text-gray-800 dark:text-white'>
                I do not claim to be a professional lawyer, all consent forms are written and designed by my own research and experience. Please consult a professional lawyer if you have any concerns.

              </p>
            </div>
            <div className='w-full lg:w-1/2 py-16 lg:py-0' id='refund-policy'>
              <h2 className="text-xl font-bold text-gray-900 sm:text-3xl xl:text-3xl dark:text-white">
                TERMS OF USE
              </h2>

              <p className='text-lg leading-8 mt-2 text-gray-800 dark:text-white'>
                This item is for personal use only. not to be resold, redistributed and not to use for any commercial purposes.
              </p>
              {/* <h2 className="text-xl font-bold text-gray-900 sm:text-3xl xl:text-3xl dark:text-white mt-4">
    REFUNDS
    </h2>
    <p className='text-lg leading-8 mt-2 text-gray-800 dark:text-white'>
    NO Questions Asked!! 100% Refund within 7 days after purchase.
    </p> */}
            </div>



          </div>



        </div>

      </section>
      <section className="bg-gradient-to-r from-bgv-pink to-bgv-skyblue dark:to-gray-900 dark:from-gray-800 py-4 md:py-10">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="max-w-screen text-sm text-white sm:text-lg md:text-1xl dark:text-gray-400">
          <h2 className="mb-8 text-[40px] md:text-7xl lg:text-6xl uppercase tracking-tight font-extrabold text-black drop-shadow-xl text-center dark:text-white">Refund Policy
            </h2>
            <h2 className="mb-2 md:mb-4 text-[17px] md:text-xl lg:text-2xl tracking-normal font-bold text-black drop-shadow-xl text-center dark:text-white italic">NO Questions Asked!! 100% Refund within 7 days after purchase.
            </h2>
            <p className="mb-4 font-bold text-white text-center text-lg md:text-xl lg:text-3xl dark:text-white">No strings attached! Shop freely, and if it&apos;s not your perfect match, rest easy knowing our 100% refund policy has you covered
            </p>
            <div className='block text-center mt-12'>   <WebButton text='Shop with confidence, shop with ease, seal the deal Now' withoutBg='bg-white' style='uppercase bg-gray-200 border-2 border-black text-black shadow-lg hover:text-white' /></div>
          </div>
        </div>
      </section>

      <section className='dark:bg-gray-900'> <div className="flex flex-col space-y-0 sm:flex-row sm:space-y-0 sm:space-x-4 justify-center mx-4 my-10 ">
        <Link href="https://brandsgoviral.myshopify.com/cart/46879491391776:1?channel=buy_button" className="inline-flex justify-center uppercase items-center py-3 px-10 md:px-20 text-xl font-black text-center text-white rounded-lg bg-gradient-to-r  from-bgv-pink to-bgv-skyblue hover:from-bgv-skyblue hover:to-bgv-pink focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900 animate-fade animate-once">
          Grab This Deal Now!
          <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
          </svg>
        </Link>
      </div>
      </section>
      <section className="dark:bg-gray-900 lg:py-10">
        <div className="px-4 sm:px-6 lg:px-20 w-full flex flex-col items-center">
          <h2 className="text-2xl text-center font-bold text-gray-900 sm:text-3xl xl:text-3xl dark:text-white">
            Still Need Help?
          </h2>
          <p className='text-lg text-center leading-8 mt-2 text-gray-800 dark:text-white'>
            If you have any questions please send us a message or drop us an email at <Link href={'mailto:brandsgoviral@gmail.com'}><b className='text-bgv-skyblue'>brandsgoviral@gmail.com</b></Link>, we&apos;d be glad to help you.</p>
        </div>
      </section>
      <section className="bg-bgv-pink dark:bg-gray-900 h-[650px] px-10 lg:py-10" id='freebie'>
        <iframe
      src="https://api.leadconnectorhq.com/widget/form/Iu6iLL3svBljKNJpKyVs"
      style={{ width: '100%', height: '650px', border: 'none', borderRadius: '3px' , paddingTop:'40px' }}
      id="inline-Iu6iLL3svBljKNJpKyVs"
      data-layout={`{'id':'INLINE'}`}
      data-trigger-type="alwaysShow"
      data-trigger-value=""
      data-activation-type="alwaysActivated"
      data-activation-value=""
      data-deactivation-type="neverDeactivate"
      data-deactivation-value=""
      data-form-name="Pop Up Email"
      data-height="521"
      data-layout-iframe-id="inline-Iu6iLL3svBljKNJpKyVs"
      data-form-id="Iu6iLL3svBljKNJpKyVs"
      title="Pop Up Email"
   
    />
          {/* <NewsLetter /> */}

      </section>
      {/* <SubscribeForm/> */}

      <div className='bg-gray-100 py-5 dark:bg-gray-800'><p className='copyrights text-sm md:text-base text-center'>All Rights Reserved &copy; CopyRights 2023 Brands Go Viral
      </p>

      </div>
    </main></>
  )
}
