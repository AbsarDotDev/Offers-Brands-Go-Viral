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

  const triggerYOffset = 2000;
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
 <iframe
      src="https://api.leadconnectorhq.com/widget/form/Iu6iLL3svBljKNJpKyVs"
      style={{ width: '100%', height: '100%', border: 'none', borderRadius: '3px' }}
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
      suppressHydrationWarning
   
    />
               <Button onClick={handleClose} className='absolute right-0 top-2 bg-transparent text-black md:text-white hover:bg-transparent '><X /></Button>

    </div>
    </div></>
  );
};
export default NewsletterModal;
