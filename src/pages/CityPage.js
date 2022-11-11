import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import RestaurantTeaser from "../components/RestaurantTeaser";

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
        <div>
            <RestaurantTeaser citySlug={slug}/>
        </div>
    )
}
