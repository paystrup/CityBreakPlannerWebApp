import React from 'react'
import smukfest from "../assets/images/smukfest.jpeg"
import restaurant from "../assets/images/restauranter.jpg"
import aros from "../assets/images/aarhus.jpeg"
import { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Mousewheel, Pagination } from "swiper";

export default function CategoriesExplore() {
  const CategoriesData = [
      {
        id: 1,
        title: "Begivenheder",
        image: `${smukfest}`,
        slug: "Aarhus"
      },
      {
        id: 2,
        title: "Restauranter",
        image: `${restaurant}`,
        slug: "Aarhus"
      },
      {
        id: 3,
        title: "Attraktioner",
        image: `${aros}`,
        slug: "Aarhus"
      }
    ];

  const [page, setPage] = useState("aarhus")

  return (
    <section className="py-8 pb-20 swiperExplore font-visitdk">
      <div className='pb-8 uppercase font-visitdkBold text-sm'>
        
          <Swiper       
              spaceBetween={20}
              slidesPerView={3}
              // centeredSlides={true}
              grabCursor={true}
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
                  slidesPerView: 3,
                  initialSlide: 0,
              }
          }}>

          <SwiperSlide className={page === "aarhus" ? "buttonsSelected" : "buttonschange"} onClick={() => setPage("aarhus")}>Aarhus</SwiperSlide>
          <SwiperSlide className={page === "koebenhavn" ? "buttonsSelected" : "buttonschange"} onClick={() => setPage("koebenhavn")}>København</SwiperSlide>
          <SwiperSlide className={page === "odense" ? "buttonsSelected" : "buttonschange"} onClick={() => setPage("odense")}>Odense</SwiperSlide>
          <SwiperSlide className={page === "aalborg" ? "buttonsSelected" : "buttonschange"} onClick={() => setPage("aalborg")}>Aalborg</SwiperSlide>

        </Swiper>
      </div>



      <div className="w-full pb-4 font-visitdkSemiBold px-6">

          {CategoriesData.map(({id, title, image, slug}) =>
              <div className="w-full h-44 relative hover:opacity-50 transition-opacity cursor-pointer ExploreImages" key={id} >
                  <div className="w-full h-full z-10 flex items-end justify-left px-6" style={{
                      backgroundImage: `linear-gradient(360deg, rgba(0,0,0,0.3) 6%, rgba(0,0,0,0) 100%),url(${image})`,
                      backgroundPosition: "top",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                      outline: "3px solid #FFFFFF",
                      outlineOffset: "-12px"
                  }}>
                  <div className="flex-col flex gap-1">
                      <h3 className="text-2xl text-white pb-4">{title}</h3>
                  </div>                  
                  </div>
              </div>
          )}
      
      </div>
    </section>
  )
}
