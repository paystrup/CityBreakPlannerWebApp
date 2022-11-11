// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import imagePlaceholder from "../img/img-placeholder.jpg";

// export default function RestaurantSektion() {
//     const [places, setPlaces] = useState([]);
//     const navigate = useNavigate();

//     useEffect(() => {
//         async function getData() {
//             const response = await fetch("/data/da/data.json");
//             const data = await response.json();
//             console.log(data);
//             setPlaces(data);
//         }
//         getData();
//     }, []);

//     return (
//         <section className="page">
//             <h1>Places To Eat</h1>
//             <section className="grid-container">
//                 {places.map(place => (
//                     <article key={place.Id} onClick={() => navigate(`/places-to-eat/${place.Id}`)}>
//                         <img src={place.Files[0] ? place.Files[0].Uri : imagePlaceholder} alt={place.Name} />
//                         <h2>{place.Name}</h2>
//                         <p>{place.Category.Name}</p>
//                     </article>
//                 ))}
//             </section>
//         </section>
//     );
// }
