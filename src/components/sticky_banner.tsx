"use client";
import React, { useEffect, useState } from "react";
import { TimerContainer } from "./timer/timer-container";
import { TimerInput } from "./timer/timer-input";
import WebButton from "./web-button";

export default function StickyBaner() {
  const [days, setDays] = useState<number>(0);
  const [hours, setHours] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(0);
  const [seconds, setSeconds] = useState<number>(0);
  const [message, setMessage] = useState<string>("");
  
  // Get the current date and time
  const now = new Date();
  
  // Set the target date to January 1 of the next year at 00:00:00
  const targetYear = now.getFullYear() + 1;
  const targetDate = new Date(targetYear, 0, 1, 0, 0, 0, 0);

  const timeToTarget = targetDate.getTime() - now.getTime();

  useEffect(() => {
    const updateTime = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate.getTime() - now;

      const newDays = Math.floor(difference / (1000 * 60 * 60 * 24));
      const newHours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const newMinutes = Math.floor(
        (difference % (1000 * 60 * 60)) / (1000 * 60)
      );
      const newSeconds = Math.floor((difference % (1000 * 60)) / 1000);

      setDays(newDays);
      setHours(newHours);
      setMinutes(newMinutes);
      setSeconds(newSeconds);

      if (difference <= 0) {
        clearInterval(updateTime);
        setMessage("The Launch Has Started");
        setDays(0);
        setHours(0);
        setMinutes(0);
        setSeconds(0);
      }
    }, 1000);

    return () => {
      clearInterval(updateTime);
    };
  }, [timeToTarget]);
  return (
    <>
      <div
        id="informational-banner"
        tabIndex={-1}
        className="hidden sticky top-0 start-0 z-50 md:flex flex-col md:flex-row items-start md:items-center justify-between w-full px-2 md:px-12 py-8 bg-bgv-skyblue dark:bg-gray-700 dark:border-gray-600"
      >
        <h2 className="mb-1 text-xl md:text-4xl text-white font-extrabold dark:text-white ">
          Sale IS ENDING IN
        </h2>
        <TimerContainer
          days={days}
          hours={hours}
          minutes={minutes}
          seconds={seconds}
        />
        <WebButton
          text="Grab this deal now"
          style="uppercase bg-white font-normal text-black font-mont hover:text-white"
          withoutBg="true"
        />
      </div>
      <div
        id="informational-banner"
        tabIndex={-1}
        className="flex sticky top-0 start-0 z-50 md:hidden flex-col md:flex-row items-start md:items-center justify-between w-full px-4 md:px-12 py-4 bg-bgv-skyblue dark:bg-gray-700 dark:border-gray-600"
      >
       <div className="flex justify-between items-center w-full"> <h2 className="mb-1 text-xl md:text-4xl text-white font-extrabold dark:text-white ">
          Sale IS ENDING IN
        </h2>        <WebButton
          text="Grab this deal now"
          style="uppercase bg-white font-normal text-black font-mont hover:text-white"
          withoutBg="true"
        /></div>

   <div className="w-full justify-center items-center mt-4">     <TimerContainer
          days={days}
          hours={hours}
          minutes={minutes}
          seconds={seconds}
        />
</div>
      </div>
    </>
  );
}
