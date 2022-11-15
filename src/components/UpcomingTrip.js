import { ArrowRightIcon } from "@heroicons/react/24/outline"
import waves from "../assets/images/waves.jpg";
import sand from "../assets/images/sand.jpg";
import avatar1 from "../assets/images/avatar1.png"
import avatar2 from "../assets/images/avatar2.png"
import avatar3 from "../assets/images/avatar3.png"
import avatar4 from "../assets/images/avatar4.png"



export default function UpcommingTrip() {
  return (
    <section className="font-visitdk">

        {/* MY TRIPS NR1. */}
        <div className='w-full h-300 relative py-8 mb-4'>
            <div className="w-full h-52" style={{
                backgroundImage: `linear-gradient(0deg, rgba(0,0,0,0.6) 6%, rgba(0,0,0,0) 100%), url(${waves})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                cursor: "pointer",
            }}>
            </div>
            <div className="w-5/6 h-auto bg-secondaryBlue-100 absolute buttom-1/2 left-1/2 transform -translate-x-1/2 -translate-y-2/3">
                <div className='flex flex-col gap-2 px-5 pt-7 pb-2 text-primaryBlue'>
                    <p className='text-l'>
                        18 nov - 20 nov
                    </p>

                    <p className='font-visitdkBold text-2xl'>
                        Weekendtur
                    </p>
                    <div className="flex justify-between items-center pb-1">
                        <div className="flex items-center gap-1">
                            <p className="font-visitdkBold text-l">{'\u2126'} Aarhus <span className="font-visitdk text-l">med</span></p> 
                            <div className="h-5 flex flex-row-reverse">
                                <div className="w-5 h-5 rounded-full border border-secondaryBlue-100" style={{
                                    backgroundImage: `linear-gradient(0deg, rgba(0,0,0,0.6) 6%, rgba(0,0,0,0) 100%), url(${avatar1})`,
                                    backgroundPosition: "center",
                                    backgroundSize: "cover",
                                    backgroundRepeat: "no-repeat",
                                    cursor: "pointer",
                                    }}>
                                </div>
                                <div className="w-5 h-5 rounded-full border border-secondaryBlue-100 avatars-trips" style={{
                                    backgroundImage: `linear-gradient(0deg, rgba(0,0,0,0.6) 6%, rgba(0,0,0,0) 100%), url(${avatar2})`,
                                    backgroundPosition: "center",
                                    backgroundSize: "cover",
                                    backgroundRepeat: "no-repeat",
                                    cursor: "pointer",
                                    }}>
                                </div>
                                <div className="w-5 h-5 rounded-full border border-secondaryBlue-100 avatars-trips" style={{
                                    backgroundImage: `linear-gradient(0deg, rgba(0,0,0,0.6) 6%, rgba(0,0,0,0) 100%), url(${avatar3})`,
                                    backgroundPosition: "center",
                                    backgroundSize: "cover",
                                    backgroundRepeat: "no-repeat",
                                    cursor: "pointer",
                                    }}>
                                </div>
                            </div>
                        </div>
                        <ArrowRightIcon className='w-6' /> 
                    </div>
                       
                </div>
            </div>
        </div>



         {/* MY TRIPS NR2. */}
        <div className='w-full h-300 relative py-8 mb-44'>
            <div className="w-full h-52" style={{
                backgroundImage: `linear-gradient(0deg, rgba(0,0,0,0.6) 6%, rgba(0,0,0,0) 100%), url(${sand})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                cursor: "pointer",
            }}>
            </div>
            <div className="w-5/6 h-auto bg-secondaryYellow-100 absolute buttom-1/2 left-1/2 transform -translate-x-1/2 -translate-y-2/3">
                <div className='flex flex-col gap-2 px-5 pt-7 pb-2 text-secondaryYellow-900'>
                    <p className='text-l'>
                        3 dec - 4 dec
                    </p>

                    <p className='font-visitdkBold text-2xl'>
                        Mor og datter tur
                    </p>
                    <div className="flex justify-between items-center pb-1">
                        <div className="flex items-center gap-1">
                            <p className="font-visitdkBold text-l">{'\u2126'} Odense <span className="font-visitdk text-l">med</span></p> 
                            <div className="h-5 flex flex-row-reverse">
                                <div className="w-5 h-5 rounded-full border border-secondaryYellow-100" style={{
                                    backgroundImage: `linear-gradient(0deg, rgba(0,0,0,0.6) 6%, rgba(0,0,0,0) 100%), url(${avatar4})`,
                                    backgroundPosition: "center",
                                    backgroundSize: "cover",
                                    backgroundRepeat: "no-repeat",
                                    cursor: "pointer",
                                    }}>
                                </div>
                                <div className="w-5 h-5 rounded-full border border-secondaryYellow-100 avatars-trips" style={{
                                    backgroundImage: `linear-gradient(0deg, rgba(0,0,0,0.6) 6%, rgba(0,0,0,0) 100%), url(${avatar2})`,
                                    backgroundPosition: "center",
                                    backgroundSize: "cover",
                                    backgroundRepeat: "no-repeat",
                                    cursor: "pointer",
                                    }}>
                                </div>
                            </div>
                        </div>
                        <ArrowRightIcon className='w-6' /> 
                    </div>
                       
                </div>
            </div>
        </div>



    </section>
  )
}