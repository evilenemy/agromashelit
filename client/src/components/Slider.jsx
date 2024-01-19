import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Slider = ({
  slides,
  slideMode,
  isPlay = true,
  autoPlay = 2500,
  Navigation_ = true,
}) => {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
  }, [window.innerWidth]);

  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={slideMode === "image"}
      slidesPerView={
        windowWidth < 960 && slideMode === "image"
          ? 1.1
          : windowWidth > 960 && slideMode === "image"
          ? 1
          : windowWidth > 960
          ? Math.floor(windowWidth / 250)
          : Math.floor(windowWidth / 200)
      }
      autoplay={
        isPlay && {
          delay: autoPlay,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }
      }
      pagination={{
        clickable: true,
      }}
      navigation={(windowWidth > 960 && slideMode === "image") && Navigation_}
      loop={true}
      modules={[Autoplay, Pagination, Navigation]}
      className={`mySwiper w-full ${
        slideMode === "image" && windowWidth > 960 ? "h-full" : "h-[90%]"
      } mt-5`}
      style={{
        "--swiper-pagination-color": "rgba(150,150,150,.1)",
        "--swiper-pagination-bullet-inactive-color": "rgba(150,150,150,.4)",
        "--swiper-pagination-bullet-inactive-opacity": "1",
        "--swiper-pagination-bullet-size": "8px",
        "--swiper-pagination-bullet-horizontal-gap": "2px",
        "--swiper-navigation-color": "#000",
        "--swiper-navigation-size": "30px",
      }}
    >
      {slideMode === "image" &&
        slides.map((image, index) => (
          <SwiperSlide
            key={index}
            style={{
              width: windowWidth + "px",
            }}
            className={`${
              windowWidth > 960 && slideMode === "image"
                ? "w-full"
                : "max-w-[1400px]"
            } h-[100%] cursor-pointer`}
          >
            <img
              src={image.path}
              alt="Pic"
              className="w-full h-full object-contain rounded-xl"
            />
          </SwiperSlide>
        ))}
      {slideMode === "product" &&
        slides.map((slide, index) => (
          <SwiperSlide key={index}>{slide}</SwiperSlide>
        ))}
    </Swiper>
  );
};

export default Slider;
