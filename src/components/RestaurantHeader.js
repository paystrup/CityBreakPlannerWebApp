import React from 'react'
import image from "../assets/images/restaurants2.png";;

export default function RestaurantHeader () {
  return (
    <section className='py-8 px-6'>
        <div className='w-full h-300 relative mb-8'>
            <div className="w-full h-52" style={{
                backgroundImage: `linear-gradient(0deg, rgba(0,0,0,0.3) 6%, rgba(0,0,0,0) 100%), url(${image})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                cursor: "pointer",
            }}>
            </div>

            <div className="w-5/6 h-auto bg-secondaryPink absolute buttom-1/2 left-1/2 transform -translate-x-1/2 -translate-y-2/3">
                <div className='flex flex-col text-center gap-1 px-5 pt-7 pb-7 text-primaryBlue'>
                    <h2 className='uppercase font-visitdkBold text-2xl'>
                        Restauranter og caféliv
                    </h2>
                    
                </div>
            </div>
        </div>
    </section>
  )
}