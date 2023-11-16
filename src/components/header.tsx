
import React from "react";
import bgvlogo from "../../public/BrandsGoViral.png";
import Image from "next/image";
import Link from "next/link";
import { ModeToggle } from "./darkMode";
import Marquee from "react-fast-marquee";

export default function Header() {
  return (
    <><div className="bg-bgv-skyblue py-2 flex items-center"> 
    <Marquee speed={100}><p className="mr-4 text-white font-bold">NO Questions Asked!! 100% Refund within 7 days after purchase.</p><p className="mr-4 text-white font-bold">NO Questions Asked!! 100% Refund within 7 days after purchase.</p>
    <p className="mr-4 text-white font-bold">NO Questions Asked!! 100% Refund within 7 days after purchase.</p> </Marquee>
    </div><header className="bg-bgv-pink">
      <nav className="border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link href="/" className="flex items-center">
            <Image src={bgvlogo} alt="Brands Go Viral" className="w-[80px]" />
          </Link>

          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <Link
                  href="#who-am-i"
                  className="block py-2 pr-4 pl-3 text-black font-semibold rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white"
                  aria-current="page"
                >
                  Who Am I?
                </Link>
              </li>
              <li>
                <Link
                  href="#whats-included"
                  className="block py-2 pr-4 pl-3 text-black font-semibold rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white"
                  aria-current="page"
                >
                  What&apos;s Included?
                </Link>
              </li>
              <li>
                <Link
                  href="#testimonial"
                  className="block py-2 pr-4 pl-3 text-black font-semibold rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white"
                  aria-current="page"
                >
                  Testimonial
                </Link>
              </li>
              <li>
                <Link
                  href="#how-does-it-work"
                  className="block py-2 pr-4 pl-3 text-black font-semibold rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white"
                  aria-current="page"
                >
                  How does it work?
                </Link>
              </li>
              <li>
                <Link
                  href="#faqs"
                  className="block py-2 pr-4 pl-3 text-black font-semibold rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white"
                  aria-current="page"
                >
                  FAQs
                </Link>
              </li>
              <li>
                <Link
                  href="#refund-policy"
                  className="block py-2 pr-4 pl-3 text-black font-semibold rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white"
                  aria-current="page"
                >
                  Refund Policy
                </Link>
              </li>
              <li>
                <Link
                  href="#freebie"
                  className="block py-2 pr-4 pl-3 text-black font-semibold rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white"
                  aria-current="page"
                >
                  Freebie
                </Link>
              </li>
            </ul>
          </div>
          <ModeToggle />
        </div>
      </nav>
    </header></>
  );
}
