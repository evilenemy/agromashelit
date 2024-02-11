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
    images: [],
    title:
      "Смартфон Honor X7b 8/128 GB, большой 6.8 FullHD+ экран, LTE + термокувшин Honor",
    description:
      "Совершенные спортивные моменты начинаются с идеальной одежды. Наш универсальный мужской спортивный костюм — это тот незаменимый гардеробный элемент, который дарит комфорт и свободу движений во всех ситуациях. Будь то для активного отдыха, спорта, прогулок или туризма, наш костюм станет надежным спутником в любых приключениях и является идеальным выбором для школы, путешествий и повседневной носки. Спортивный костюм это твой верный компаньон на все случаи жизни! Идеальное сочетание трендового дизайна и удобства - вот что делает этот костюм на самом деле незаменимым. Прекрасно подходит для активного образа жизни, этот мужской спортивный костюм станет твоим надежным спутником в спортзале, на тренировках по физкультуре, а также на прогулках с друзьями или даже на охоте. Даже холодная погода не страшна с таким комплектом, и ты можешь смело отправляться на каток или играть в футбол или баскетбол, зная, что наш костюм обеспечит тебе тепло и комфорт. Благодаря натуральной ткани из хлопка, этот спортивный костюм обеспечит непревзойденный уровень комфорта в любое время года. Он легко приспособится под любую погоду, будь то жаркое лето, прохладная весна, теплая осень или холодная зима. Ткань сохраняет свою форму даже после многих стирок, а костюм идеально садится на разные фигуры, будь то узкие или широкие плечи. Прямой крой и оптимальная длина брюк делают этот спортивный костюм универсальным - он подойдет как для стройных, так и для полных мужчин. Широкая резинка в поясе штанов не сдавливает и не вызывает дискомфорта, обеспечивая максимальную свободу движений. Он идеально подходит для любого случая, не сковывая ваши движения и при этом выглядит просто непревзойденно стильно и современно. Собирай овации в повседневной жизни, выбирая стильный и модный комплект, который гарантированно привлечет внимание окружающих. Любимому мужчине этот спортивный костюм станет идеальным подарком на день рождения или на новый год - он оценит его комфортность и стильность.",
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
          <p className="mt-5 w-[70%] mx-auto text-sm leading-6">
            {news.description}
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default NewsDetail;
