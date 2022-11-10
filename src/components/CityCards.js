//City cards on landingpage "Choose destination"
import Aarhuscity from "../assets/images/aarhus.jpeg";
import Copenhagencity from "../assets/images/kbhk.jpeg";
import Odensecity from "../assets/images/odense.jpeg";
import Aalborgcity from "../assets/images/aalborg.jpeg";

export default function Citycard(){
    return(
        <section className="px-6">
            <div className="pb-6">
                <h3 className="font-visitdkBold text-2xl text-primaryBlue">Hvor vil du hen?</h3>
            </div>
            <div className="w-full grid grid-cols-2 gap-3 font-visitdkSemiBold">

                <div className="w-full h-40 relative">
                    <div className="w-full h-40 z-10" style={{
                        backgroundImage: `linear-gradient(360deg, rgba(0,0,0,0.3) 6%, rgba(0,0,0,0) 100%),url(${Copenhagencity})`,
                        backgroundPosition: "top",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                    }}>
                        <p className="px-2 py-2 absolute bottom-0 text-xl text-white">København</p>
                    </div>
                </div>
                <div className="bg-black w-full h-40 relative">
                     <div className="w-full h-40 z-10" style={{
                        backgroundImage: `linear-gradient(360deg, rgba(0,0,0,0.3) 6%, rgba(0,0,0,0) 100%),url(${Aarhuscity})`,
                        backgroundPosition: "top",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                    }}>
                        <p className="px-2 py-2 absolute bottom-0 text-xl text-white">Aarhus</p>
                    </div>
                </div>
                <div className="bg-black w-full h-40 relative">
                     <div className="w-full h-40 z-10" style={{
                        backgroundImage: `linear-gradient(360deg, rgba(0,0,0,0.3) 6%, rgba(0,0,0,0) 100%),url(${Odensecity})`,
                        backgroundPosition: "top",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                    }}>
                        <p className="px-2 py-2 absolute bottom-0 text-xl text-white">Odense</p>
                    </div>
                </div>
                <div className="bg-black w-full h-40 relative">
                    <div className="w-full h-40 z-10" style={{
                        backgroundImage: `linear-gradient(360deg, rgba(0,0,0,0.3) 6%, rgba(0,0,0,0) 100%),url(${Aalborgcity})`,
                        backgroundPosition: "top",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                    }}>
                        <p className="px-2 py-2 absolute bottom-0 text-xl text-white">Aalborg</p>
                    </div>
                </div>
            </div>
        </section>
    )

}