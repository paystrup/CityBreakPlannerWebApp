import React from 'react'
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import imagePlaceholder2 from "../assets/images/placeholder1.jpg"
import { BriefcaseIcon } from "@heroicons/react/24/outline"
import ActivityMap from '../components/ActivityMap';
import BackBtn from '../components/BackBtn';

export default function ActivityPage() {
    const [places, setPlaces] = useState([]);
    const [loading, setLoading] = useState(true);

    const params = useParams();
    console.log(params);
    const activityId = parseInt(params.Id, 10); // and the ID
    console.log(activityId); //Returns the slug-name of the url you're navigated to

    // fetch the activity
    useEffect(() => {
        async function getPlaces()
        {
            const response = await fetch("/data/da/data.json");
            const data = await response.json();
            const filteredActivity = [];
            setLoading(true);
          
           try{
                for (var i = 0; i < data.length; i++) {
                var place = data[i];
                if(place.Id === activityId)
                {
                    // place.MainCategory.Id == '62'
                    console.log(place.Name + ' ' + place.MainCategory.Name);
                    filteredActivity.push(place)
                }
            }
           }catch (error) {
            console.log('Fetch Error')
          }
            setPlaces(filteredActivity);
            console.log(places)
            setLoading(false);
        }
        getPlaces();
    }, [activityId]);

    return (
        <section className="page pb-28 font-visitdk bg-white xl:min-h-screen">
            {loading &&
                <div className="flex flex-col justify-center items-center py-8 px-6">
                    <svg className="animate-spin mb-8 h-10 w-10 text-primaryBlue" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <h2 className="font-visitdkBold text-2xl text-center">Vent, mens vi finder de bedste steder til dig</h2>
                </div>
            }

            <section className="grid-container flex flex-col gap-20">
                {places.map(({Id, Name, Descriptions, Files, Address, ContactInformation}) =>
                    <div
                        className="flex flex-col gap-2 font-visitdk"
                        key={Id}
                        
                    >
                        <div
                            className="h-64 w-full xl:h-96"
                            style={{
                                backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.5) 0%, rgba(255,255,255,0) 100%), url(${Files[0] ? Files[0].Uri : imagePlaceholder2})`,
                                backgroundPosition: "center",
                                backgroundSize: "cover",
                                backgroundRepeat: "no-repeat",
                                cursor: "pointer"
                            }} 
                        >   
                        <div className="font-visitdkBold flex flex-col justify-between px-5 py-5 w-full text-white">
                            <div className="flex self-end drop-shadow-lg">
                                <BriefcaseIcon className="h-8 w-8"/> 
                            </div>
                        </div>
                        </div>
                        
                        <div className='activityText py-8 px-6'>
                            <h2 className="font-visitdkExtraBold text-2xl text-primaryBlue mb-2">{Name}</h2>
                            <p className="restaurantDesc text-lg leading-loose mb-10 break-words">{Descriptions[0].Text}</p>

                            {Address && (
                                <div>
                                    <h3 className='font-visitdkSemiBold text-xl text-primaryBlue mb-4'>Kontakt</h3>
                                    <p className="restaurantDesc capitalize text-lg">{Address?.AddressLine1}</p>
                                    <div className='flex gap-2 text-lg'>
                                        <p>{Address?.PostalCode},</p>
                                        <p>{Address?.City}</p>
                                    </div>
                                </div>
                            )}

                            {ContactInformation &&(
                                <div className='mt-4 flex flex-col gap-2'>
                                    <a className="capitalize" href={`tel:` + ContactInformation?.Phone}>{ContactInformation?.Phone}</a>
                                    <a href={`mailto:` + ContactInformation?.Email}>{ContactInformation?.Email}</a>
                                    <a href={ContactInformation?.Link?.Url} target="_blank" rel="noreferrer">{ContactInformation?.Link?.Name}</a>
                                </div>
                            )}
                        </div>

                        <ActivityMap data={places[0].Address.GeoCoordinate}/> 
                    </div>
                )}

                {!loading &&
                    (<BackBtn />)
                }
            </section> 
        </section>
    )
}
