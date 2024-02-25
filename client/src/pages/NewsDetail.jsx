import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const NewsDetail = ({ api, lang }) => {
  const { id } = useParams();
  const [news, setNews] = useState({
    _id: "",
    title: "",
    title_ru: "",
    description: [],
    description_ru: [],
    images: [],
    createdAt: "",
    updatedAt: "",
    __v: 0,
  });
  const [loading, setLoading] = useState(false);

  const navigation = useNavigate();

  const load = async () => {
    setLoading(true);
    await axios
      .get(`${api}/api/news/${id}`)
      .then((res) => setNews(res.data))
      .catch((err) => {
        navigation("/404");
        alert("Something went wrong, plase try again later.");
      });
    setLoading(false);
  };

  useEffect(() => {
    load();
  }, []);

  return (
    <div className="overflow-x-hidden mt-5">
      {!loading && (
        <div className="w-full max-w-[1400px] md:w-[90%] mx-auto py-4">
          <div className="mt-5 responsive-detail">
            <div className="w-[90%] mx-auto text-center mt-4 sticky top-2">
              <motion.h1
                initial={{ y: -200, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="text-2xl mt-4 font-medium"
              >
                {lang === "ru" ? news.title_ru : news.title}
              </motion.h1>
            </div>
            <Swiper
              centeredSlides={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper w-[90%] mt-5 p-0 px-0 h-[500px] md:w-10/12"
              style={{
                "--swiper-pagination-color": "rgba(250,250,250,.8)",
                "--swiper-pagination-bullet-inactive-color":
                  "rgba(250,250,250,.4)",
                "--swiper-pagination-bullet-inactive-opacity": "1",
                "--swiper-pagination-bullet-size": "8px",
                "--swiper-pagination-bullet-horizontal-gap": "2px",
                "--swiper-navigation-color": "#000",
                "--swiper-navigation-size": "30px",
              }}
            >
              {news.images.map((image, index) => (
                <SwiperSlide
                  style={{
                    backgroundImage: `url('${
                      api +
                      String(image.path)
                        .replace("\\", "/")
                        .replace("\\", "/")
                        .replace("\\", "/")
                    }')`,
                    width: "95%",
                  }}
                  className="bg-center bg-no-repeat bg-cover"
                  key={index}
                ></SwiperSlide>
              ))}
            </Swiper>
          </div>
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 3 }}
            className="w-full mt-28"
          >
            <ul className="mt-5 w-[70%] mx-auto text-sm leading-6">
              {(lang === "ru" ? news.description_ru : news.description).map(
                (text, index) => (
                  <li key={index}>{text}</li>
                )
              )}
            </ul>
          </motion.div>
        </div>
      )}
      {loading && (
        <div className="w-full max-w-[1400px] md:w-[90%] mx-auto py-4">
          Loading...
        </div>
      )}
    </div>
  );
};

export default NewsDetail;
