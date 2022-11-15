// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

// import required modules from Swiper
import { Keyboard, Mousewheel, Pagination } from "swiper";

// images for cards
import tivoliImage from "../assets/images/tivoli.webp"
import zooImage from "../assets/images/aalborgzoo.jpg"
import hcaImage from "../assets/images/hcandersen.jpg"
import aarhusdomkirkeImage from "../assets/images/aarhusdomkirke.jpg"

import { BriefcaseIcon } from "@heroicons/react/24/outline"
import { useNavigate } from "react-router-dom";


export default function LandingSwiper() {
  const navigate = useNavigate();
  // slides array with data for carousel cards (only danish for now)
  const slideData = [
    {
      id: 1,
      city: "København",
      name: "Tivoli",
      image: `${tivoliImage}`,
      slug: "Aarhus"
    },
    {
      id: 2,
      city: "Aarhus",
      name: "Aarhus Domkirke",
      image: `${aarhusdomkirkeImage}`,
      slug: "Aarhus"
    },
    {
      id: 3,
      city: "Aalborg",
      name: "Aalborg Zoo",
      image: `${zooImage}`,
      slug: "Aarhus"
    },
    {
      id: 4,
      city: "Odense",
      name: "H.C Andersens Barndomshjem",
      image: `${hcaImage}`,
      slug: "Aarhus"
    }
  ];

  return (
    <section>
      <Swiper       
        spaceBetween={15}
        slidesPerView={1.15}
        centeredSlides={true}
        grabCursor={true}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        // mousewheel={true} // scroll to navigate
        keyboard={{
          enabled: true,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Keyboard, Mousewheel, Pagination]}
        className="mySwiper"
        breakpoints={{
          // when window width is >= 1px
          1: {
            slidesPerView: 1.15,
            initialSlide: 0,
          },
          // // when window width is >= 768px
          // 960: {
          //   slidesPerView: 2,
          //   initialSlide: 1,
          // },
      }}>

        {slideData.map(({id, city, name, image, slug}) => 
          <SwiperSlide  
            style={{
              backgroundImage: `linear-gradient(0deg, rgba(0,0,0,0.9248074229691877) 6%, rgba(0,0,0,0) 100%), url(${image})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              cursor: "pointer",
              outline: "3px solid #FFFFFF",
              outlineOffset: "-12px"
            }}
            onClick={() => navigate("/city/" + slug)}
            key={id}
          >
            <div className="font-visitdkBold flex flex-col justify-between px-2 py-2 w-full">
              <div className="flex self-end drop-shadow-lg">
                <BriefcaseIcon className="h-8 w-8"/> 
              </div>
              <div className="flex-col flex gap-1">
                <h3 className="text-2xl">{name}</h3>
                <p className="text-l">{'\u2126'}    {city}</p>
              </div>  
            </div>
        </SwiperSlide>
      )}
        
      </Swiper>
    </section>
  );
}