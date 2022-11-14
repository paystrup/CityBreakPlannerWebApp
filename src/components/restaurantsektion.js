import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import imagePlaceholder from "../assets/images/placeholder.png";
import imagePlaceholder2 from "../assets/images/placeholder1.jpg";
import imagePlaceholder3 from "../assets/images/placeholder2.jpg";
import imagePlaceholder4 from "../assets/images/placeholder3.jpg";
import imagePlaceholder5 from "../assets/images/placeholder4.jpg";

export default function RestaurantSektion() {
    const [places, setPlaces] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    const [visible, setVisible] = useState(10);

    // show more btn adds 4 more articles by adding 4 to prev value
    const showMoreRestaurants = () => {
    setVisible((prevValue) => prevValue + 10);
    };

    // randomized placeholder, so content won't be repetitive
    // JSON data has a lot of empty image data ... temp fix
    const getRandomPlaceholder = () => {
        const randomImg = ["imagePlaceholder"]
        return randomImg[~~(Math.random() * randomImg.length)]
    }


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
                if(place.Category.Id == '63')
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
        <section className="page py-8 px-6 pb-52 font-visitdk">
            {loading &&
                <div className="flex flex-col justify-center items-center">
                    <svg className="animate-spin mb-8 h-10 w-10 text-primaryBlue" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <h2 className="font-visitdkBold text-2xl text-center">Vent, mens vi finder de bedste steder til dig</h2>
                </div>
            }

            <section className="grid-container flex flex-col gap-12 pb-10">
                {places.slice(0, visible).map(({Id, Name, MainCategory, Descriptions, Text, Files, ImageUrl}) =>
                    <div
                        className="flex flex-col gap-2"
                        key={Id}
                    >
                        <div
                            className="h-44 w-full"
                            style={{
                                backgroundImage: `linear-gradient(0deg, rgba(0,0,0,0) 6%, rgba(0,0,0,0) 100%), url(${Files[0] ? Files[0].Uri : (() => getRandomPlaceholder.toString())})`,
                                backgroundPosition: "center",
                                backgroundSize: "cover",
                                backgroundRepeat: "no-repeat",
                                cursor: "pointer",
                                outline: "3px solid #FFFFFF",
                                outlineOffset: "-12px"
                            }} 
                        >
                            
                        </div>
                        
                        <h2 className="font-visitdkBold text-2xl text-primaryBlue">{Name}</h2>
                        <p className="restaurantDesc font-visitdk text-ellipsis truncate">{Descriptions[0].Text}</p>
                    </div>
                )}
            </section>

            {!loading &&
                (
                    <div className="flex items-center justify-center">
                        <button 
                            className="bg-secondaryPink text-primaryBlue w-2/4 px-5 py-3" 
                            onClick={showMoreRestaurants}
                        >
                            Indlæs flere
                        </button>
                    </div>
                )
            }
 
        </section>
    );
}
