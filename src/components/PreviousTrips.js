import { ArrowRightIcon } from "@heroicons/react/24/outline"
import forest from "../assets/images/forest.jpg";



export default function PreviousTrip() {
  return (
    <section className="font-visitdk">

                {/* MY TRIPS NR2. */}
        <div className='w-full h-300 relative py-8 mb-4'>
            <div className="w-full h-52" style={{
                backgroundImage: `linear-gradient(0deg, rgba(0,0,0,0.6) 6%, rgba(0,0,0,0) 100%), url(${forest})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                cursor: "pointer",
            }}>
            </div>
            <div className="w-5/6 h-auto bg-secondaryGreen-100 absolute buttom-1/2 left-1/2 transform -translate-x-1/2 -translate-y-2/3">
                <div className='flex flex-col gap-2 px-5 pt-7 pb-2 text-secondaryGreen-900'>
                    <p className='text-l'>
                        23 aug - 26 aug
                    </p>

                    <p className='font-visitdkBold text-2xl'>
                        Weekendophold
                    </p>
                    <div className="flex justify-between items-center pb-1">
                        <div className="flex items-center gap-1 ">
                            <p className="font-visitdkBold text-l">{'\u2126'} København <span className="font-visitdk text-l">med</span></p> 
                            <div className="h-5 flex flex-row-reverse">
                                <div className="w-5 h-5 rounded-full border border-secondaryGreen-100" style={{
                                    backgroundImage: `linear-gradient(0deg, rgba(0,0,0,0.6) 6%, rgba(0,0,0,0) 100%), url(${forest})`,
                                    backgroundPosition: "center",
                                    backgroundSize: "cover",
                                    backgroundRepeat: "no-repeat",
                                    cursor: "pointer",
                                    }}>
                                </div>
                                <div className="w-5 h-5 rounded-full border border-secondaryGreen-100 avatars-trips" style={{
                                    backgroundImage: `linear-gradient(0deg, rgba(0,0,0,0.6) 6%, rgba(0,0,0,0) 100%), url(${forest})`,
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