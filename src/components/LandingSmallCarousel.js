import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

// import required modules from Swiper
import { Keyboard, Mousewheel, Pagination } from "swiper";

// images for cards
import transportImage from "../assets/images/letbanen.webp"
import cityCardImage from "../assets/images/aarhuscard.jpg"
import turistInfoImage from "../assets/images/turistinfo.webp"
import faqImage from "../assets/images/faq.png"

import { useNavigate } from "react-router-dom";

export default function LandingSmallCarousel() {
  // all cards redirect to the Aarhus page rn, because we don't have data yet
  const navigate = useNavigate();

  // slides array with data for carousel cards (only danish for now)
  const slideData = [
    {
      id: 1,
      title: "Transport",
      image: `${transportImage}`,
      slug: "Aarhus"
    },
    {
      id: 2,
      title: "CityCard",
      image: `${cityCardImage}`,
      slug: "Aarhus"
    },
    {
      id: 3,
      title: "Turistinfo",
      image: `${turistInfoImage}`,
      slug: "Aarhus"
    },
    {
      id: 4,
      title: "FAQ",
      image: `${faqImage}`,
      slug: "Aarhus"
    }
  ];

  return (
    <section className='smallSwiper'>
      <Swiper       
        spaceBetween={14}
        slidesPerView={2.3}
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
            slidesPerView: "2.3",
            initialSlide: 0,
          },
          // when window width is >= 768px
          960: {
            slidesPerView: 2,
            initialSlide: 1,
          },
      }}>

        {slideData.map(({id, title, image, slug}) => 
          <SwiperSlide  
            style={{
              backgroundImage: `linear-gradient(0deg, rgba(0,0,0,0.5) 6%, rgba(0,0,0,0) 100%), url(${image})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              cursor: "pointer",
              backgroundColor: "none"
            }}
            key={id}
            onClick={() => navigate("/city/" + slug)}
            className="smallSwiper"
          >
            <div className="font-visitdkSemiBold flex flex-col justify-center items-center px-2 py-2 w-full">
              <div className="flex-col flex gap-1">
                <h3 className="text-xl drop-shadow-lg">{title}</h3>
              </div>  
            </div>
        </SwiperSlide>
      )}
        
      </Swiper>
    </section>
  );
}
