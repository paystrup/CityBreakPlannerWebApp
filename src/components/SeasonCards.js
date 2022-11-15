//City cards on CityPage "Choose season"
import efteraar from "../assets/images/efteraar.jpeg"
import foraar from "../assets/images/foraar.jpeg"
import vinter from "../assets/images/vinter.jpeg"
import sommer from "../assets/images/sommer.jpeg"



import { useNavigate } from "react-router-dom";

export default function CityCards(){
    const navigate = useNavigate();
    // aarhus is the only slug because it's the only data we have atm
    // makes the site dynamic, so fetching is available through the slug ID for the city clicked
    const cardData = [
        {
          id: 1,
          city: "Sommer",
          image: `${sommer}`,
          slug: ""
        },
        {
            id: 2,
            city: "Efterår",
            image: `${efteraar}`,
            slug: ""
        },
        {
          id: 3,
          icon: "",
          city: "Vinter",
          image: `${vinter}`,
          slug: ""
        },
        {
          id: 4,
          icon: "",
          city: "Forår",
          image: `${foraar}`,
          slug: ""
        }
      ];
    return(
        <section className="px-6 py-8">
            <div className="pb-4">
                <h3 className="font-visitdkBold text-2xl text-primaryBlue">Hvornår besøger du?</h3>
                <p className='text-lg font-visitdk'>
                Få inspiration til aktiviteter og meget mere, i den sæson du besøger.
                </p>
            </div>
            <div className="w-full grid grid-cols-2 gap-3 font-visitdkSemiBold">

                {cardData.map(({id, icon, city, image, slug}) =>
                    <div className="w-full h-28 relative hover:opacity-50 transition-opacity cursor-pointer" key={id} onClick={() => navigate("/city/" + slug)}>
                        <div className="w-full h-full z-10 flex items-center justify-center" style={{
                            backgroundImage: `linear-gradient(360deg, rgba(0,0,0,0.3) 6%, rgba(0,0,0,0) 100%),url(${image})`,
                            backgroundPosition: "top",
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                        }}>
                            <p className="px-2 py-2 text-xl text-white drop-shadow-lg">{city}</p>
                        </div>
                    </div>
                )}
            
            </div>
        </section>
    )

}