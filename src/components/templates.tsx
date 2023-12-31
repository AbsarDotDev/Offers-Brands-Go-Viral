import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'
interface TemplatesProps{
    bundlename:string,
    template:string,
    value:string,
    content:string,
    image:string,
    prd:string
}
export const Templates = ({bundlename, template, value,content, image,prd}:TemplatesProps) => {
  return (

    <section className=" bg-gradient-to-r  from-bgv-pink to-bgv-pink dark:to-transparent dark:from-transparent dark:bg-gray-900 p-5 ">
    <div className="py-2 px-4 mx-auto max-w-screen-xl lg:px-6 flex flex-col md:flex-row md:items-center lg:flex-row-reverse gap-10">
      <div className="lg:w-1/2 w-full text-white sm:text-lg md:text-xl dark:text-gray-400 bg-white dark:bg-gray-800 p-8 md:p-10 lg:p-10 rounded-xl">
        <h1 className="mb-6 text-2xl  tracking-tight font-extrabold text-black drop-shadow-xl dark:text-white">{`${bundlename} (${template})`}
        </h1>
    
        <h3 className="mb-6 text-2xl md:text-3xl lg:text-3xl  tracking-tight font-black text-bgv-skyblue  dark:text-white">Value: {value}
        </h3> 
               <p className="mb-4 font-normal leading-7 text-base text-gray-800 dark:text-white">{content}
        </p>
<Button variant={'destructive'} className='py-6 text-base px-2 h-[60px] md:h-10 md:text-lg font-extrabold'><Link href={`${prd}`}>Get This Bundle Separately For {value}</Link></Button>

      </div>
      <div className="lg:w-1/2 justify-self-end w-full mb-8 lg:mb-0 rounded-lg overflow-hidden">
        <Image alt="feature" className="object-cover w-[520px] h-full rounded-xl" src={image} width={520} height={400} />
      </div>
    </div>
  </section>
  )
}
