import React, { useEffect, useState } from "react";
import Product from "../components/Product";
import { motion } from "framer-motion";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const ProductDetail = ({ api, lang }) => {
  const { id } = useParams();
  const navigation = useNavigate();

  const [product, setProduct] = useState({
    _id: "",
    title: "",
    title_ru: "",
    description: [],
    description_ru: [],
    price: 0,
    images: [],
    createdAt: "",
    updatedAt: "",
    __v: 0,
  });
  const [tractors, setTractors] = useState([]);
  const load = async () => {
    await axios
      .get(`${api}/api/tractor/${id}`)
      .then((res) => setProduct(res.data))
      .catch((err) => alert("Something went wrong, please try again later."));

    await axios
      .get(`${api}/api/tractor`)
      .then((res) =>
        setTractors(res.data.filter((tractor) => tractor._id !== product._id))
      )
      .catch((err) => alert("Something went wrong, please try again later."));
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
            {product.images
              .slice(1, product.images.length)
              .map((image, index) => (
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
                    backgroundSize: "contain",
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
                {lang === "ru" ? "Цена:" : "Narx:"}
              </motion.h3>
              <motion.h1
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 2 }}
                className="text-xl w-[90%] md:w-[40%] font-medium flex items-center justify-between mt-2"
              >
                {format(product.price)} {lang === "ru" ? "sum" : "so'm"}
              </motion.h1>
            </div>
            <motion.button
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 2.5 }}
              onClick={submitOrder}
              className="w-1/2 mt-4 py-2 px-4 bg-green-400 hover:bg-green-500 duration-150 font-medium text-white rounded-md"
            >
              {lang === "ru" ? "Разместить заказ" : "Buyurtma berish"}
            </motion.button>
          </div>
        </div>
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 3 }}
          className="w-full mt-20"
        >
          <h1 className="text-center">
            {lang === "ru" ? "Описание продукта" : "Tovar tavsifi"}
          </h1>
          <ul className="mt-5 mx-auto w-[40%] text-sm leading-6">
            {(lang === "ru" ? product.description_ru : product.description).map(
              (text, index) => (
                <li
                  key={index}
                  className="font-poppins text-center leading-7 text-zinc-600"
                >
                  {text}
                </li>
              )
            )}
          </ul>
        </motion.div>
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 3.5 }}
          className="w-[90%] mt-10 mx-auto"
        >
          <h1 className="text-2xl font-medium">
            {lang === "ru" ? "Похожие товары" : "O'xshash tovarlar"}
          </h1>
          <div className="flex justify-between flex-wrap">
            {tractors.slice(0, 3).map((tractor) => (
              <Product product={tractor} key={tractor._id} api={api} />
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

export default ProductDetail;
