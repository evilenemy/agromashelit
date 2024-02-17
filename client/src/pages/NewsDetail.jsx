import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const NewsDetail = ({ api }) => {
  const { id } = useParams();
  const [news, setNews] = useState({
    _id: "65c7865a1163e7345501d655",
    title: "Lorem, ipsum dolor.",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex tempora aspernatur iste, magni praesentium deserunt repudiandae. Molestiae rem veniam quos error, consectetur corrupti quo voluptatibus soluta, suscipit ab eos voluptatem earum explicabo quidem molestias asperiores, beatae assumenda debitis impedit porro minus delectus inventore! Rem, minus. Accusamus nisi inventore facere velit quia impedit iste perspiciatis alias praesentium obcaecati eos, labore repudiandae quibusdam iure id nihil incidunt ad maiores voluptatibus magni non ea dolorem quidem eveniet! Quidem saepe deleniti maxime voluptatem modi optio numquam quisquam voluptatibus, aut quibusdam fugit totam officiis nulla ipsam. Quidem laudantium ipsam nesciunt ab incidunt, repudiandae provident maxime.",
    images: [
      {
        path: "/assets/images/more-info.jpg",
        size: "72,29kb",
        name: "1707574874952 - more-info.jpg",
      },
    ],
    createdAt: "2024-02-10T14:21:14.955Z",
    updatedAt: "2024-02-10T14:21:14.955Z",
    __v: 0,
  });

  const load = () => {
    axios
      .get(`${api}/api/news/${id}`)
      .then((res) => setNews(res.data))
      .catch((err) => alert("Something went wrong, please try again later."));
  };

  useEffect(() => {
    load();
  }, []);

  return (
    <div className="overflow-x-hidden mt-5">
      <div className="w-full max-w-[1400px] md:w-[90%] mx-auto py-4">
        <div className="mt-5 responsive-detail">
          <div className="w-[90%] mx-auto text-center mt-4 sticky top-2">
            <motion.h1
              initial={{ y: -200, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="text-2xl mt-4 font-medium"
            >
              {news.title}
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
                  backgroundImage: `url('${api + String(image.path)
                    .replace("\\", "/")
                    .replace("\\", "/")
                    .replace("\\", "/")}')`,
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
          <p className="mt-5 w-[70%] mx-auto text-sm leading-6">
            {news.description}
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default NewsDetail;
