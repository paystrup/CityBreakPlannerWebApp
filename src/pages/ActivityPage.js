import React from 'react'
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import imagePlaceholder2 from "../assets/images/placeholder1.jpg"

export default function ActivityPage() {
    const [places, setPlaces] = useState([]);
    const [loading, setLoading] = useState(true);

    const params = useParams();
    console.log(params); //Returns the slug-name of the url you're navigated to
    const activityId = params.id; // and the ID

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
                if(place.Id == activityId)
                {
                    // place.MainCategory.Id == '62'
                    console.log(place.Name + ' ' + place.MainCategory.Name);
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
    }, [activityId]);

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
                {places.map(({Id, Name, Descriptions, Files}) =>
                    <div
                        className="flex flex-col gap-2"
                        key={Id}
                        
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
                        </div>
                        
                        <h2 className="font-visitdkBold text-2xl text-primaryBlue">{Name}</h2>
                        <p className="restaurantDesc font-visitdk text-ellipsis truncate">{Descriptions[0].Text}</p>
                    </div>
                )}
            </section> 
        </section>
    )
}
