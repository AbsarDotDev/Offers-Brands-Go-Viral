"use client"
import React from 'react'
import { Button } from './ui/button';
export default function WebButton({text, withoutBg, style}: {text: string, withoutBg?:string, style?:string}){
    console.log(withoutBg);
return <Button
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
className={`font-bold font-mont items-center py-8 px-8 md:text-2xl text-center  rounded-lg ${withoutBg==undefined?'bg-gradient-to-r from-bgv-pink to-bgv-skyblue hover:from-bgv-skyblue hover:to-bgv-pink text-white':'text-white'} focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900 animate-fade animate-once ${style}`}>
  {text}

</Button>
}