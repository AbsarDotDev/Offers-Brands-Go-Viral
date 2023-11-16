'use client'
import React, { useState, useEffect } from 'react';
import newspopupImageDesktop from '../../public/LAUNCH and GROW.png'
import newspopupImageMobile from '../../public/MEGA BUNDLE THUMBNAIL.png'

import Image from 'next/image';
import NewsLetter from './newsletter';
import { X } from 'lucide-react';
import { Button } from './ui/button';
import { useStore } from '@/app/store';


const NewsletterModal = () => {
    // const isVisible = useStore((state) => state.isVisible);
    const { isVisible , updateIsVisible} = useStore()

  const triggerYOffset = 900;
  const localStorageKey = 'newsletterPopupShown';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > triggerYOffset) {
        const popupShown = localStorage.getItem(localStorageKey);
        if (!popupShown) {
            updateIsVisible(true);
          }

      }
      console.log(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const handleClose = () => {
    updateIsVisible(false);
    // Set a flag in localStorage to indicate that the popup has been shown
    localStorage.setItem(localStorageKey, 'true');
  };
  return (
  <>  <div
        className={`fixed top-0 left-0 w-full h-full bg-black opacity-80 z-[99999] ${isVisible ? 'visible' : 'hidden'}`}
        onClick={handleClose}
      ></div>
<div className='fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[99999] w-[80%] rounded-lg'>

 <div className={`rounded-lg ${isVisible ? 'visible' : 'hidden'}`}>
      <div className="modal-content flex flex-col md:flex-row rounded-lg">
        <div className="modal-image">
      <div className='relative block md:hidden'>
        
           <Button onClick={handleClose} className='absolute right-0 top-2 bg-transparent text-black hover:bg-transparent'><X /></Button>
<Image src={newspopupImageMobile}  alt="Newsletter"  className='h-full bg-gray-300 rounded-t-lg'/></div>


<Image src={newspopupImageDesktop} alt="Newsletter"  className='h-full rounded-l-lg hidden md:block'/>

        </div>
        <div className='flex flex-col items-end bg-gray-100 dark:bg-gray-80 p-6 rounded-b-lg md:rounded-r-lg md:rounded-b-none md:rounded-br-lg'>
   <Button onClick={handleClose} className='hidden md:block'><X /></Button>
            <NewsLetter/></div>
      </div>
    </div>
    </div></>
  );
};
export default NewsletterModal;
