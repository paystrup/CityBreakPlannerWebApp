import React from 'react'
import { useNavigate } from "react-router-dom";
import image from "../assets/images/restauranter.jpg";
import { ArrowRightIcon } from "@heroicons/react/24/outline"

export default function RestaurantTeaser({citySlug}) {
    const navigate = useNavigate();
    // 
    return (
        <section className='py-8 px-6'>
            <p className='font-visitdkBold text-2xl text-primaryBlue pb-6'>Restauranter</p> 
            <div className='w-full h-300 relative mb-8'>
                <div className="w-full h-60" style={{
                    backgroundImage: `linear-gradient(0deg, rgba(0,0,0,0.9248074229691877) 6%, rgba(0,0,0,0) 100%), url(${image})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    cursor: "pointer",
                }}>
                </div>

                <div className="w-5/6 h-auto bg-secondaryBlue-100 absolute buttom-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                    onClick={() => navigate("/city/" + citySlug + "/restaurants")}
                >
                    <div className='flex flex-col gap-1 px-7 pt-7 pb-3 text-secondaryBlue-900'>
                        <p className='font-visitdkBold text-xl'>Mad og drikke</p>
                        <p className='font-visitdk text-l'>Udforsk de mange lækre muligheder i storbyen.</p>
                        <div className='flex self-end'>
                            <ArrowRightIcon className='w-6' /> 
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
