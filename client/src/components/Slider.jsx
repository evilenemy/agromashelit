import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Product from "./Product";

const Slider = ({
  slides,
  slideMode = "product",
  isPlay = true,
  autoPlay = 2500,
  Navigation_ = true,
  api,
}) => {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
  }, [window.innerWidth]);

  return (
    <Swiper
      spaceBetween={slideMode === "image" ? 30 : 15}
      centeredSlides={slideMode === "image"}
      slidesPerView={"auto"}
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
      navigation={windowWidth > 960 && slideMode === "image" && Navigation_}
      loop={true}
      modules={[Autoplay, Pagination, Navigation]}
      className={`mySwiper w-full ${
        slideMode === "image" && windowWidth > 960 ? "h-full" : "h-[90%]"
      }`}
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
        slides?.map((image, index) => (
          <SwiperSlide
            key={index}
            style={{
              width: windowWidth + "px",
            }}
            className={`${
              windowWidth > 960 ? "w-full" : "max-w-[1400px]"
            } cursor-pointer max-h-[450px]`}
          >
            <img
              src={
                api +
                image.path
                  .replace("\\", "/")
                  .replace("\\", "/")
                  .replace("\\", "/")
              }
              alt="Pic"
              className="w-full max-h-[450px] object-contain bg-center rounded-xl"
            />
          </SwiperSlide>
        ))}
      {slideMode === "product" &&
        slides.map((slide, index) => (
          <SwiperSlide key={index} className="w-[290px]">
            <Product product={slide} api={api} key={slide._id} />
          </SwiperSlide>
        ))}
    </Swiper>
  );
};

export default Slider;
