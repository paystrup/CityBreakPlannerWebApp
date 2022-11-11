import React from 'react'
import image from "../assets/images/aarhus.jpeg";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline"
export default function LandingTitleAndCard() {
  return (
    <section className='py-8 px-6'>
        <h1 className='uppercase font-visitdkExtraBold text-3xl text-primaryBlue'>
            Nu er det jul igen
        </h1>

        <h1 className='uppercase font-visitdkExtraBold text-3xl text-primaryGray-900'>
            og julen varer lige til påske
        </h1> 

        <div className="flex justify-between w-full">
            <p className='font-visitdkBold text-2xl text-primaryBlue'>Julemarkeder</p> 
            <button>Se Alle</button>
        </div>
        <div className='w-full h-400 relative mb-8'>
            <div className="w-full h-60" style={{
            backgroundImage: `linear-gradient(0deg, rgba(0,0,0,0.9248074229691877) 6%, rgba(0,0,0,0) 100%), url(${image})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            cursor: "pointer",
          }}></div>
            <div className="w-5/6 h-auto bg-secondaryGreen-900 absolute buttom-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
                <div className='flex flex-col gap-1 px-3 py-3'>
                    <p className='font-visitdkBold text-xl text-white'>Jul i Danmark</p>
                    <p className='font-visitdk text-l text-white'>Find de kommende jule attraktioner i hele Danmark </p>
                    <div className='flex self-end'>
                        <ArrowLongRightIcon className='w-10 text-white' /> 
                    </div>
                </div>
            </div>

        </div>

    </section>
  )
}
