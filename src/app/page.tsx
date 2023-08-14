import Image from 'next/image'
import { Hero } from '../components/hero'
import { Cta } from '@/components/cta'

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

    

  ]
  return (
  <main className='pl-5 pr-5'>
    <Hero/>
    <div className='text-center mt-20'>
    <h1 className="mb-4  text-lg font-extrabold tracking-tight leading-none text-gray-900 md:text-lg lg:text-lg dark:text-white">Do you feel frustrated and overwhelmed that what actually should be the first step of launching a successful beauty business?</h1>
    <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">You're passionate about beauty, but you procrastinate all day about where to start.
</p>
<h1 className="mb-4  text-lg font-extrabold tracking-tight leading-none text-bgv-primary md:text-lg lg:text-lg dark:text-white">DOES THIS SOUND LIKE YOU, RIGHT?
</h1>
    <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">I used to be just like you, always thinking, planning, and gathering information, but never achieving anything in the end.
</p>
    </div>
    {
  cta.map((cta, index) => {
    return (
      <Cta
        heading={cta.heading}
        paragraph={cta.paragraph}
        image={cta.image}
        index={index}
      />
    );
  })
}

    </main>
  )
}
