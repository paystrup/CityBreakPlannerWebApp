import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import imagePlaceholder2 from "../assets/images/placeholder1.jpg";
import { BriefcaseIcon } from "@heroicons/react/24/outline"

export default function EventSection() {
    const [places, setPlaces] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    const [visible, setVisible] = useState(5);

    // show more btn adds 8 more restaurants to the visible array
    const showMoreRestaurants = () => {
    setVisible((prevValue) => prevValue + 8);
    };

    useEffect(() => {
        async function getPlaces()
        {
            const response = await fetch("/data/da/data.json");
            const data = await response.json();
            const filteredrest = [];
            setLoading(true);
          
           try{
                for (var i = 0; i < data.length; i++) {
                var place = data[i];
                if(place.MainCategory.Id == '58')
                {
                    // place.MainCategory.Id == '62'
                    // console.log(place.Name + ' ' + place.MainCategory.Name);
                    filteredrest.push(place)
                }
            }
           }catch (error) {
            console.log('Fetch Error')
          }
            setPlaces(filteredrest);
            console.log(places)
            setLoading(false);
        }
        getPlaces();
    }, []);

    return (
        <section className="page py-8 px-6 pb-32 font-visitdk bg-white">
            {loading &&
                <div className="flex flex-col justify-center items-center">
                    <svg className="animate-spin mb-8 h-10 w-10 text-primaryBlue" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <h2 className="font-visitdkBold text-2xl text-center">Vent, mens vi finder de bedste events til dig</h2>
                </div>
            }

            {!loading &&
                <h2 className="font-visitdkBold text-lg text-primaryBlue mb-4">I alt {places.length} events</h2>
            }

            <section className="grid-container flex flex-col gap-12 pb-12">
                {places.slice(0, visible).map(({Id, Name, Descriptions, Files}) =>
                    <div
                        className="flex flex-col gap-2"
                        key={Id}
                        onClick={() => navigate("/city/Aarhus/events/" + Id)}
                    >
                        <div
                            className="h-44 w-full"
                            style={{
                                backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.5) 0%, rgba(255,255,255,0) 100%), url(${Files[0] ? Files[0].Uri : imagePlaceholder2})`,
                                backgroundPosition: "center",
                                backgroundSize: "cover",
                                backgroundRepeat: "no-repeat",
                                cursor: "pointer",
                                outline: "3px solid #FFFFFF",
                                outlineOffset: "-12px"
                            }} 
                        >
                        <div className="font-visitdkBold flex flex-col justify-between px-5 py-5 w-full">
                            <div className="flex self-end drop-shadow-lg">
                                <BriefcaseIcon className="h-8 w-8 text-white"/> 
                            </div>
                </div>
                            
                        </div>
                        
                        <h2 className="font-visitdkBold text-2xl text-primaryBlue">{Name}</h2>
                        <p className="restaurantDesc font-visitdk line-clamp-3">{Descriptions[0].Text}</p>
                    </div>
                )}
            </section>

            {!loading &&
                (
                    <div className="flex items-center justify-center">
                        <button 
                            className="bg-secondaryBlue-100 text-primaryBlue w-3/4 px-5 py-3 font-visitdkBold" 
                            onClick={showMoreRestaurants}
                        >
                            Indl??s flere
                        </button>
                    </div>
                )
            }
 
        </section>
    );
}
