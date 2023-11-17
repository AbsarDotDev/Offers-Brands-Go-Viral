'use client';
import bgvlogo from "../../public/BrandsGoViral.png";

import { ChevronLeft, ChevronRight, Instagram, Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { ModeToggle } from "./darkMode";

export default function MobileDrawer() {
return (
    <div className='bg-bgv-pink bg-opacity-70 flex justify-between items-center px-6'>
                  <Link href="/" className="flex items-center">
            <Image src={bgvlogo} alt="Brands Go Viral" className="w-[80px]" />
          </Link>
   <div className="flex items-center gap-x-4">  
      {/* <ModeToggle/> */}
<div className="flex md:hidden">
        
      <input type="checkbox" id="drawer-toggle" className="peer sr-only relative hidden"></input>
      <label htmlFor="drawer-toggle" className="rounded-lg">
        <Menu />
      </label>
      <div className="fixed left-0 top-0 z-20 h-full w-[75%] -translate-x-full transform bg-white shadow-black backdrop-blur-3xl backdrop-opacity-80 transition-all duration-500 peer-checked:translate-x-0">
        <div className="">
          <label
            htmlFor="drawer-toggle"
            className="flex justify-between items-center border-b-[1px] border-gray-200 px-4 py-3"
          >
                        <Image src={bgvlogo} alt="Brands Go Viral" className="w-[60px]" />

            <X className="w-5 text-gray-700" />
          </label>
          <div>
              <ul className="px-4 font-head text-lg uppercase text-gray-800  animate-in slide-in-from-right">
                <li className="py-4">
                  <Link href={'#who-am-i'}> Who Am I?

</Link>
                </li>
         
                <li className="py-4">
                  <Link href={'#whats-included'}> What&apos;s Included?

</Link>
                </li>
                <li className="py-4">
                  <Link href={'#testimonial'}> Testimonial

</Link>
                </li>
                <li className="py-4">
                  <Link href={'#how-does-it-work'}>How Does It Works?

</Link>
                </li>
                <li className="py-4">
                  <Link href={'#faqs'}>FAQs</Link>
                </li>
                <li className="py-4">
                  <Link href={'#refund-policy'}>Refund Policy

</Link>
                </li>
                <li className="py-4">
                  <Link href={'#freebie'}>Freebie

</Link>
                </li>
                <li className="pt-8">
                  <Instagram className="w-8 text-gray-800" />
                </li>
              </ul>
      

          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
  );
}
