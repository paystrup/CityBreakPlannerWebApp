//City cards on landingpage "Choose destination"
import Aarhuscity from "../assets/images/aarhus.jpeg";
import Copenhagencity from "../assets/images/kbhk.jpeg";
import Odensecity from "../assets/images/odense.jpeg";
import Aalborgcity from "../assets/images/aalborg.jpeg";

import { useNavigate } from "react-router-dom";

export default function Citycard(){
    const navigate = useNavigate();
    // aarhus is the only slug because it's the only data we have atm
    // makes the site dynamic, so fetching is available through the slug ID for the city clicked
    const cardData = [
        {
          id: 1,
          city: "København",
          image: `${Copenhagencity}`,
          slug: "Aarhus"
        },
        {
            id: 2,
            city: "Aarhus",
            image: `${Aarhuscity}`,
            slug: "Aarhus"
        },
        {
          id: 3,
          city: "Odense",
          image: `${Odensecity}`,
          slug: "Aarhus"
        },
        {
          id: 4,
          city: "Aalborg",
          image: `${Aalborgcity}`,
          slug: "Aarhus"
        }
      ];
    return(
        <section className="px-6">
            <div className="pb-6">
                <h3 className="font-visitdkBold text-2xl text-primaryBlue">Hvor vil du hen?</h3>
            </div>
            <div className="w-full grid grid-cols-2 gap-3 font-visitdkSemiBold">

                {cardData.map(({id, city, image, slug}) =>
                    <div className="w-full h-40 relative hover:opacity-50 transition-opacity cursor-pointer" key={id} onClick={() => navigate("/city/" + slug)}>
                        <div className="w-full h-40 z-10" style={{
                            backgroundImage: `linear-gradient(360deg, rgba(0,0,0,0.3) 6%, rgba(0,0,0,0) 100%),url(${image})`,
                            backgroundPosition: "top",
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                        }}>
                            <p className="px-2 py-2 absolute bottom-0 text-xl text-white">{city}</p>
                        </div>
                    </div>
                )}
            
            </div>
        </section>
    )

}