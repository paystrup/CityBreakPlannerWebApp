import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CityPageHeader from "../components/CityPageHeader";
import CitySwiper from "../components/CitySwiper";
import CityPageExplore from "../components/CityPageExplore";
import RestaurantTeaser from "../components/RestaurantTeaser";
import SeasonCards from "../components/SeasonCards";
import WhereWhen from "../components/LandingSmallCarousel"
import CityPageRome from "../components/CityPageRome"
import CityPageEvents from "../components/CityPageEvents"

export default function CityPage() {
    const [cityData, setCityData] = useState([]);

    // useParams from React Router Dom to get the slug
    const params = useParams();
    console.log(params);
    const slug = params.slug;

    // fetch all data
    useEffect(() => {
        async function getData() {
          const response = await fetch("/data/da/data.json");
          const data = await response.json();
          console.log(data[0]);
          // set the state with our data fetched
          setCityData(data[0]);
        }
        // Complete the async
        getData();
    }, [slug]);

    return (
        <div className="xl:bg-white xl:min-h-screen">
            <CityPageHeader />
            <CitySwiper />
            <SeasonCards />
            <CityPageExplore />
            <RestaurantTeaser citySlug={slug}/>
            <section className='py-8'>
                <h2 className='text-2xl font-visitdkBold px-6 pb-4 text-primaryBlue'>
                    Hvor, hvad og hvordan?
                </h2>
                <WhereWhen />
            </section>
            <CityPageRome />
            <CityPageEvents/>
        </div>
    )
}
