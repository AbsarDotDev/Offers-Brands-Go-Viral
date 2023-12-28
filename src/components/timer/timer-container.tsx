import React from 'react'
import { NumberBox } from './number-box'

interface timeProps{
  days: number | string,
  hours:number | string ,
  minutes:number | string,
  seconds:number | string,
}

export const TimerContainer = ({days, hours, minutes ,seconds }: timeProps) => {

  let daysFlip = false;
  let hoursFlip = false;
  let minutesFlip = false;
  let secondsFlip = true;

 if (Number(seconds) <=0 && Number(minutes) <=0 && Number(hours) <=0 && Number(days) <=0){
   daysFlip = false;
   hoursFlip = false;
   minutesFlip = false;
   secondsFlip = false;
 }

 if(seconds == 0){
   if( minutes !=0){
    seconds=59;
   }

   secondsFlip = false;
   minutesFlip = true;
 }
 if (minutes == 0 ){
    if( hours !=0){
      minutes=59;
    }

   minutesFlip = false;
   hoursFlip = true;
 }

 if( hours == 0){
   hoursFlip = false;
   if(days !=0){
     daysFlip = true;
   }

 }



   if(Number(days) <10){
     days="0"+days
   }

   if(Number(hours) <10){
     hours="0"+hours
   }

   if(Number(minutes) <10){
     minutes="0"+minutes
   }

   if(Number(seconds)< 10){
     seconds="0"+seconds

   }

    return (

     <div className="rounded-xl">
       <div className="flex justify-center rounded-xl gap-x-0">
            <NumberBox num={days } unit="Days" flip={daysFlip} />
            <NumberBox num={hours } unit="Hours" flip={hoursFlip} />
            <NumberBox num={minutes} unit="Minutes" flip={minutesFlip}/>
            <NumberBox num={seconds} unit="Seconds" flip={secondsFlip} />
        </div>

      </div>
    )
}

