import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Agro from "../components/Agro";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const AgroDetails = ({ api }) => {
  const { id } = useParams();
  const navigation = useNavigate();

  const [product, setProduct] = useState({
    title: "",
    description: "",
    images: [],
    price: 0,
  });
  const [agros, setAgros] = useState([]);
  const load = () => {
    axios
      .get(`${api}/api/agro/${id}`)
      .then((res) => setProduct(res.data))
      .catch((err) => alert("Something went wrong, plase try again later."));
    axios
      .get(`${api}/api/agro`)
      .then((res) => setAgros(res.data))
      .catch((err) => alert("Something went wrong, plase try again later."));
  };

  const submitOrder = () => navigation("/submit", { state: product });

  useEffect(() => {
    load();
  }, []);

  const format = (num) =>
    String(num).replace(/(?<!\..*)(\d)(?=(?:\d{3})+(?:\.|$))/g, "$1 ");

  return (
    <div className="overflow-x-hidden mt-5">
      <div className="w-full max-w-[1400px] md:w-[90%] mx-auto py-4">
        <div className="flex flex-col items-center md:flex-row md:items-start md:justify-between  mt-5 responsive-detail">
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
            className="mySwiper w-[90%] p-0 px-0 h-[450px] md:w-5/12"
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
            {product.images.map((image, index) => (
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
                  backgroundAttachment: "center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
                key={index}
              ></SwiperSlide>
            ))}
          </Swiper>
          <div className="w-[90%] md:w-[55%] mt-4 sticky top-2">
            <motion.h1
              initial={{ y: -200, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="text-2xl mt-2 font-medium"
            >
              {product.title}
            </motion.h1>
            <motion.hr
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="my-10"
            />
            <div className="mt-5">
              <motion.h3
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 2 }}
                className="font-normal"
              >
                Narx:
              </motion.h3>
              <motion.h1
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 2 }}
                className="text-xl w-[40%] font-medium flex items-center justify-between mt-2"
              >
                {format(product.price)} so'm{" "}
                {/* <p className="line-through text-sm text-[#7f8286]">
                3 234 000 сум
              </p> */}
              </motion.h1>
            </div>
            <motion.button
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 2.5 }}
              onClick={submitOrder}
              className="w-1/2 mt-4 py-2 px-4 bg-green-400 hover:bg-green-500 duration-150 font-medium text-white rounded-md"
            >
              Buyurtma berish
            </motion.button>
            {/* <div className="mt-10">
              <h4>Кратко о товаре:</h4>
              <ul className="mt-5 text-[#4a4c4e] list-style-inside leading-7">
                <li>Качество высокое ( Катышков не будет)</li>
                <li>Карманы прочные, капюшон не обвиснет</li>
                <li>Состав: 80% Хлопок, 20% Полиэстер</li>
                <li>Материал: Футер, 3-х нитка</li>
                <li>
                  Универсальный мужской спортивный костюм это тот незаменимый
                  гардеробный элемент, который дарит комфорт и свободу движений.
                </li>
                <li>Подробно читайте в описании</li>
              </ul>
            </div> */}
          </div>
        </div>
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 3 }}
          className="w-full mt-20"
        >
          <h1 className="text-center">Tovar tavsifi</h1>
          <p className="mt-5 w-[70%] mx-auto text-sm leading-6">
            {product.description}
          </p>
        </motion.div>
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 3.5 }}
          className="w-[90%] mt-10 mx-auto"
        >
          <h1 className="text-2xl font-medium">O'xshash tovarlar</h1>
          <div className="flex justify-between flex-wrap">
            {agros.slice(0, 3).map((agro) => (
              <Agro api={api} product={agro} key={agro._id} />
            ))}
          </div>
        </motion.div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default AgroDetails;
