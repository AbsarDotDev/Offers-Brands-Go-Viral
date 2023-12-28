import React from 'react'

interface numProp {
    num: string | number,
    unit: string,
    flip: boolean,
};

export const NumberBox = ({ num, unit, flip }: numProp) => {
    return (
        <div className="flex flex-col">
            <div className=" relative bg-transparent flex flex-col items-center justify-center rounded-lg text-2xl w-20 md:text-4xl">
                <div className={`rounded-t-lg rounded-b-lg ${flip? 'bg-bgv-pink':'bg-[#343650]'} w-[60px] h-[40px]`}></div>

                <div className="text-xl absolute text-gray-200 z-10 font-bold font-redhat md:text-2xl font-mono ">
                    {num}
                </div>

                <div className=" rounded-b-lg rounded-t-lg bg-[#2c2e3f] w-[60px]h-[40px]"></div>

            </div>
            <p className="text-lg text-center font-semibold text-white md:text-base ">
                {unit}
            </p>
        </div>
    )
}

