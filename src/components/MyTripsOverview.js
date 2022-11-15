import React, { useState } from 'react';
import image from "../assets/images/smukfest.jpeg";
import UpcomingTrip from "../components/UpcomingTrip"
import PreviousTrip from "../components/PreviousTrips"


export default function MyTripsOverview() {

  // state for changing rendered content
  const [page, setPage] = useState("upcomming");

  return (
    <section className="font-visitdk">
        <div className="flex justify-between items-center">
            <h2 className='font-visitdkBold text-2xl text-primaryBlue'>Mine Ture</h2>
            <div className="w-6 h-6 rounded-full" style={{
                backgroundImage: `linear-gradient(0deg, rgba(0,0,0,0.6) 6%, rgba(0,0,0,0) 100%), url(${image})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                cursor: "pointer",
                }}>
            </div>
        </div>
        {/* Changing state depending on button onclick */}
        <div className='flex gap-9'>
            <button  className={page === "upcomming" ? "font-visitdkSemiBold text-l text-primaryBlue pb-4 pt-8 underline-button-text" : "font-visitdkSemiBold text-l text-primaryGray-900 pb-4 pt-8"} onClick={() => setPage("upcomming")}>
            Kommende
            </button>
            <button className={page === "previous" ? "font-visitdkSemiBold text-l text-primaryBlue pb-4 pt-8 underline-button-text" : "font-visitdkSemiBold text-l text-primaryGray-900 pb-4 pt-8"}  onClick={() => setPage("previous")}>
            Tidligere
            </button>
        </div>
        <hr className='pb-4 horizontalline' />
        <div>
            {page === "upcomming" && <TripUpcoming />}
            {page === "previous" && <TripPrevious />}
        </div>
        </section>
  )
}

// Upcomming trips
function TripUpcoming() {
  return (
    <>
      <UpcomingTrip />
    </>
  );
}

// Previous trips
function TripPrevious() {
  return (
    <>
      <PreviousTrip />
    </>
  );
}