import React from 'react'
import Feature1 from '../../public/features/1 Year Eperience.png'
import Feature2 from '../../public/features/5000+ Sales.png'
import Feature3 from '../../public/features/Earned Badges.png'
import Feature4 from '../../public/features/Rating.png'
import Feature5 from '../../public/features/Star Seller.png'
import Feature6 from '../../public/features/Top Seller.png'

import Image from 'next/image'
export default function Features() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-6 gap-y-8 gap-x-4'>
        <div className='flex flex-col justify-center items-center'>
            <Image className='w-[120px]' src={Feature6} alt="TOP 1% SELLER WITH EXCEPTIONAL 4.5 RATING"/>
            <h3 className='text-center font-extrabold py-6 text-xl'>Top 1% Seller
</h3>
        </div>
        <div className='flex flex-col justify-center items-center'>
            <Image className='w-[120px]' src={Feature5} alt="EXCLUSIVE TAG OF STAR SELLER"/>
            <h3 className='text-center font-extrabold py-6 text-xl'>Star Seller
</h3>
        </div>
        <div className='flex flex-col justify-center items-center'>
            <Image className='w-[120px]' src={Feature3} alt="EARNED BAGDES
"/>
            <h3 className='text-center font-extrabold py-6 text-xl'>Earned Badges on Etsy

</h3>
        </div>
        <div className='flex flex-col justify-center items-center'>
            <Image className='w-[120px]' src={Feature2} alt="1 YEAR, OVER 5000+ SALES
"/>
            <h3 className='text-center font-extrabold py-6 text-xl'>1+ Year Experience

</h3>
        </div>
        <div className='flex flex-col justify-center items-center'>
            <Image className='w-[120px]' src={Feature1} alt="FULL TIME ETSY SELLER "/>
            <h3 className='text-center font-extrabold py-6 text-xl'>5000+ Sales
</h3>
        </div>
        <div className='flex flex-col justify-center items-center'>
            <Image className='w-[120px]' src={Feature4} alt="FULL TIME ETSY SELLER "/>
            <h3 className='text-center font-extrabold py-6 text-xl'>Exceptional Rating
</h3>
        </div>
    </div>
  )
}
