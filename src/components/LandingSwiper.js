// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

// import required modules from Swiper
import { Keyboard, Mousewheel, Pagination } from "swiper";

import image from "../assets/images/aarhus.jpeg";


export default function LandingSwiper() {
  return (
    <>
      <Swiper       
      spaceBetween={12}
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
          slidesPerView: 1.2,
          initialSlide: 0,
        },
        // when window width is >= 768px
        960: {
          slidesPerView: 2,
          initialSlide: 1,
        },
      }}>
        <SwiperSlide 
            style={{
             backgroundImage: `linear-gradient(0deg, rgba(0,0,0,0.9248074229691877) 6%, rgba(0,0,0,0) 100%), url(${image})`,
             backgroundPosition: "center",
             backgroundSize: "cover",
             backgroundRepeat: "no-repeat",
             cursor: "pointer",
          }}
    ></SwiperSlide>
        <SwiperSlide             
        style={{
             backgroundImage: `linear-gradient(0deg, rgba(0,0,0,0.9248074229691877) 6%, rgba(0,0,0,0) 100%), url(${image})`,
             backgroundPosition: "center",
             backgroundSize: "cover",
             backgroundRepeat: "no-repeat",
             cursor: "pointer",
          }}>
          </SwiperSlide>
        <SwiperSlide             
        style={{
             backgroundImage: `linear-gradient(0deg, rgba(0,0,0,0.9248074229691877) 6%, rgba(0,0,0,0) 100%), url(${image})`,
             backgroundPosition: "center",
             backgroundSize: "cover",
             backgroundRepeat: "no-repeat",
             cursor: "pointer",
          }}></SwiperSlide>
      </Swiper>
    </>
  );
}