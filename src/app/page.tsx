import Image from 'next/image'
import { Hero } from '../components/hero'
import { Cta } from '@/components/cta'
import { BundleIncludes } from '@/components/bundleincludes'

export default function Home() {
  const cta=[
    {
      heading:"You are struggling to create captivating Instagram posts that will engage your followers.",
      paragraph:"Instagram is the most powerful platform for promoting your beauty brand and products to date. You may be an expert in your field, but if designing is not your cup of tea, you may end up designing a post that only you like. I understand that creating attractive Instagram posts that engage your audience can be challenging and you need a solution. Well, you are still able to design, all you need is an editable Instagram posts bundle to start with, which is a set of premade templates, specially designed for cosmetic brands & estheticians with all kinds of posts one should have on Instagram.",
      image:"https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup.svg"
    },
    {
      heading:"You need help creating consent forms that are compliant with all applicable laws.",
      paragraph:"Consent forms are an important part of running a beauty business. They help to protect businesses from legal liability and ensure that clients are aware of their rights & give written consent about what they are up to. This is always a challenge to create your own consent forms from scratch in legal language as it is difficult and time-consuming, and you need to make sure to include all of the necessary information without making the form too long or complicated. Get all the consent forms for estheticians, simply add your brand name, and they're ready to sign and print!",
      image:"https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup.svg"
    },
    {
      heading:"You are having trouble designing packaging labels that reflect your brand identity.",
      paragraph:"You are hiring an expensive designer from Fiverr & struggling to meet the requirements & not able to communicate the brand identity you have in your mind for your beauty package. Packaging labels are an essential part of branding. Good labels leave a lasting impression in a customer's mind, so they need to be minimal yet beautiful. Canva editable packaging labels with the brand's identity in terms of color scheme, typography, and overall design along with a print template for bulk printing can make your branding step hassle-free.",
      image:"https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup.svg"
    },
    {
      heading:"You are feeling overwhelmed by creating a cohesive business branding kit.",
      paragraph:"I do understand why you might be feeling overwhelmed creating a perfect branding kit for your business. It can be a lot of work to put together all of the different pieces, and it can be hard to brand multiple social media in one style and theme. You need a branding kit in different sizes optimized for different platforms, ready to upload so you can start working on more important things in your business.",
      image:"https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup.svg"
    },
    {
      heading:"You are planning & not going anywhere, merging all the tasks & ignoring the important things.",
      paragraph:"I used to forget the tasks I was supposed to do, always failing to prioritize the most important and least important things that my business needed. Planners with all solutions for your social media & business management can only make you run your business in a manageable way.      ",
      image:"https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup.svg"
    },


    

  ]
  return (
  <main className=''>
    <Hero/>
    <section className='afterHero pl-5 pr-5'>
    <div className='text-center mt-20'>
    <h1 className="mb-4  text-lg font-extrabold tracking-tight leading-none text-gray-900 md:text-lg lg:text-lg dark:text-white">Do you feel frustrated and overwhelmed that what actually should be the first step of launching a successful beauty business?</h1>
    <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">You&apos;re are passionate about beauty, but you procrastinate all day about where to start.
</p>
<h1 className="mb-4  text-lg font-extrabold tracking-tight leading-none text-bgv-primary md:text-lg lg:text-lg dark:text-white">DOES THIS SOUND LIKE YOU, RIGHT?
</h1>
    <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">I used to be just like you, always thinking, planning, and gathering information, but never achieving anything in the end.
</p>
    </div>
    </section>
    {
  cta.map((cta, index) => {
    return (
      <Cta
      key={index}
        heading={cta.heading}
        paragraph={cta.paragraph}
        image={cta.image}
        index={index}
      />
    );
  })
}
<section className="bg-gradient-to-r from-bgv-pink to-bgv-skyblue dark:bg-gray-900">
  <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
      <div className="max-w-screen text-white sm:text-lg md:text-1xl dark:text-gray-400">
          <h2 className="mb-6 text-5xl tracking-tight font-extrabold text-black drop-shadow-xl dark:text-white">IF You&apos;re FEELING THIS WAY, You&apos;re NOT ALONE.
</h2>
          <p className="mb-4 font-bold">You just need this all-in-one beauty business bundle that will definitely help you initiate & elevate your brand.
</p>
          <p className="mb-4 font-medium">Many beauty enthusiasts dream of starting their own brand, but they don&apos;t know where to begin. The beauty industry is competitive and ever-changing, and it can be difficult to break through the noise.
</p>
          
      </div>
  </div>
</section>
<BundleIncludes/>
<section className='afterBundle pl-5 pr-5'>
    <div className='text-center mt-20'>
    <h1 className="mb-4 text-lg font-extrabold tracking-tight leading-none text-gray-900 md:text-2xl lg:text-2xl dark:text-white">With my mega bundle, you&apos;ll have everything you need to turn your passion for beauty into a successful business.
</h1>
    <p className="mb-8 text-lg font-extrabold lg:text-xl dark:text-gray-400"><mark className=' text-red-700'>don&apos;t miss out on this opportunity to take your beauty business to the next level.
    </mark>
</p>
<a href="#" className="relative inline-flex justify-center items-center py-3 px-5 text-2xl font-medium text-center text-white rounded-lg bg-bgv-primary hover:bg-bgv-secondary focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900 shadow-md">
  <span className="relative z-10">
    YES I AM READY TO ELEVATE MY BUSINESS
  </span>
  
  <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
  </svg>
</a>



    </div>
    </section>
    <section className="bg-gradient-to-r mt-20 from-bgv-pink to-bgv-skyblue dark:bg-gray-900">
  <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 flex flex-row gap-10">
      <div className=" text-white sm:text-lg md:text-1xl dark:text-gray-400">
          <h2 className="mb-6 text-5xl tracking-tight font-extrabold text-black drop-shadow-xl dark:text-white">IMAGINE THE POSSIBILITY

</h2>
          <p className="mb-4 font-bold">Imagine if you could…

</p>
<ul className="text-gray-600 list-none leading-[40px]">
  <li className="mb-2 text-gray-700">✅ Create a successful beauty brand that You&apos;re passionate about.</li>
  <li className="mb-2 text-gray-700">✅ Share your love of beauty with the world and make a difference in people&apos;s lives.</li>
  <li className="mb-2 text-gray-700">✅ Having your vast number of followers on different social media platforms.</li>
  <li className="mb-2 text-gray-700">✅ Generate a sustainable income that allows you to live the life you&apos;ve always dreamed of.</li>
  <li className="mb-2 text-gray-700">✅ Run your business seamlessly and have more time to spend with your loved ones.</li>
</ul>

          
      </div>
      <div className="lg:w-1/2 w-full mb-8 lg:mb-0 rounded-lg overflow-hidden">
          <Image alt="feature" className="object-cover object-center h-full w-full" src="https://dummyimage.com/460x500" width={460} height={500} />
        </div>
  </div>
</section>



    </main>
  )
}
