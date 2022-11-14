import React from 'react'
import image from "../assets/images/guide.jpg";
import { ArrowRightIcon } from "@heroicons/react/24/outline"

export default function LandingGuide () {
  return (
    <section className='py-8 px-6 pb-20'>


        <div className="pb-4">
            <p className='font-visitdkBold text-2xl text-primaryBlue'>Online Turistguide</p> 
        </div>
        <div className='w-full h-300 relative mb-8'>
            <div className="w-full h-60" style={{
                backgroundImage: `linear-gradient(0deg, rgba(0,0,0,0.9248074229691877) 6%, rgba(0,0,0,0) 100%), url(${image})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                cursor: "pointer",
            }}>
            </div>

            <div className="w-5/6 h-auto bg-secondaryYellow-100 absolute buttom-1/2 left-1/2 transform -translate-x-1/2 -translate-y-2/3">
                <div className='flex flex-col gap-1 px-5 pt-7 pb-2 text-primaryBlue'>
                    <p className='font-visitdkBold text-2xl'>
                        Online Guide
                    </p>

                    <p className='font-visitdk text-lg'>
                        Hent vores online guide og dyk ned i smukke Aarhus
                    </p>
                    
                    <div className='flex self-end'>
                        <ArrowRightIcon className='w-8' /> 
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
