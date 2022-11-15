import React from 'react'
import { useNavigate } from "react-router-dom";
import image from "../assets/images/smukfest.jpeg";
import { ArrowRightIcon } from "@heroicons/react/24/outline"

export default function CityPageEvents ({ citySlug }) {
    const navigate = useNavigate();

  return (
    <section className='pt-4 px-6 pb-36'>
        <div className="pb-4">
            <p className='font-visitdkBold text-2xl text-primaryBlue'>Det sker i Aarhus</p> 
        </div>
        <div className='w-full h-300 relative mb-8 cursor-pointer'
            onClick={() => navigate("/city/" + citySlug + "/events")}
        >
            <div className="w-full h-52" style={{
                backgroundImage: `linear-gradient(0deg, rgba(0,0,0,0.6) 6%, rgba(0,0,0,0) 100%), url(${image})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat"
            }}>
            </div>

            <div className="w-5/6 h-auto bg-secondaryPink absolute buttom-1/2 left-1/2 transform -translate-x-1/2 -translate-y-2/3">
                <div className='flex flex-col gap-1 px-5 pt-7 pb-2 text-secondaryBurgundy'>
                    <p className='font-visitdkBold text-2xl'>
                        Begivenheder
                    </p>

                    <p className='font-visitdk text-lg'>
                        Find alle de fedeste events i Aarhus lige her!
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
