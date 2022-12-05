// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

// import required modules from Swiper
import { Keyboard, Mousewheel, Pagination } from "swiper";

// images for cards
import arosImage from "../assets/images/aarhus.jpeg"
import gamleByImage from "../assets/images/dengamleby.webp"
import moesgaardImage from "../assets/images/moesgaard.jpeg"
import tivoliImage from "../assets/images/Copenhagen-Tivoli-Gardens-merry-go-round-winter-small.jpg"
import broImage from "../assets/images/uendeligebro.jpg"
import rooftopImage from "../assets/images/sallingroof.webp"

import { BriefcaseIcon } from "@heroicons/react/24/outline"
import { useNavigate } from "react-router-dom";


export default function CitySwiper() {
  const navigate = useNavigate();
  // slides array with data for carousel cards (only danish for now)
  const slideData = [
    {
      id: 1,
      title: "AroS",
      image: `${arosImage}`,
      slug: "Aarhus"
    },
    {
      id: 2,
      title: "Den Gamle By",
      image: `${gamleByImage}`,
      slug: "Aarhus"
    },
    {
      id: 3,
      title: "Moesgaard Museum",
      image: `${moesgaardImage}`,
      slug: "Aarhus"
    },
    {
      id: 4,
      title: "Tivoli Friheden",
      image: `${tivoliImage}`,
      slug: "Aarhus"
    },
    {
      id: 5,
      title: "Den uendelige bro",
      image: `${broImage}`,
      slug: "Aarhus"
    }
    ,
    {
      id: 5,
      title: "Salling Rooftop",
      image: `${rooftopImage}`,
      slug: "Aarhus"
    }
  ];

  return (
    <section className="citySwiper pb-8">
        <h2 className="py-8 px-6 font-visitdkBold text-2xl text-primaryBlue">Top attraktioner</h2>
        <Swiper       
            spaceBetween={12}
            slidesPerView={1.15}
            // centeredSlides={true}
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
            }
        }}>

            {slideData.map(({id, title, image, slug}) => 
            <SwiperSlide  
                style={{
                backgroundImage: `linear-gradient(90deg, rgba(255,255,255,0) 88%, rgba(0,0,0,0) 100%, rgba(0,0,0,0) 100%), url(${image})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                cursor: "pointer",
                outline: "3px solid #FFFFFF",
                outlineOffset: "-12px"
                }}
                onClick={() => navigate("/city/" + slug)}
                key={id}
                className="hover:opacity-50 transition-opacity"
            >
                <div className="font-visitdkBold flex flex-col justify-between px-2 py-2 w-full">
                <div className="flex self-end drop-shadow-lg">
                    <BriefcaseIcon className="h-8 w-8"/> 
                </div>
                <div className="flex-col flex gap-1">
                    <h3 className="text-2xl">{title}</h3>
                </div>  
                </div>
            </SwiperSlide>
        )}
            
        </Swiper>
    </section>
  );
}