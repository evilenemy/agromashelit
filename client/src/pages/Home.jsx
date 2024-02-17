import React, { useState, useRef } from "react";
import Product from "../components/Product";
import { Link } from "react-router-dom";
import axios from "axios";
import Agro from "../components/Agro";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Home = ({ api }) => {
  const [slider, setSlider] = useState([
    {
      _id: "65c776e21163e7345501d604",
      // path: "\\uploads\\slider\\1707570914510 - slide_01.jpg",
      path: "/assets/images/slide_01.jpg",
      size: "229,04kb",
      name: "1707570914510 - slide_01.jpg",
      createdAt: "2024-02-10T13:15:14.513+00:00",
      updatedAt: "2024-02-10T13:15:14.513+00:00",
      __v: 0,
    },
    {
      _id: "65c776f51163e7345501d60a",
      // path: "\\uploads\\slider\\1707570933873 - slide_03.jpg",
      path: "/assets/images/slide_02.jpg",
      size: "241,64kb",
      name: "1707570933873 - slide_03.jpg",
      createdAt: "2024-02-10T13:15:33.876+00:00",
      updatedAt: "2024-02-10T13:15:33.876+00:00",
      __v: 0,
    },
    {
      _id: "65c776ec1163e7345501d607",
      path: "/assets/images/slide_03.jpg",
      size: "140,35kb",
      name: "1707570924633 - slide_02.jpg",
      createdAt: "2024-02-10T13:15:24.637+00:00",
      updatedAt: "2024-02-10T13:15:24.637+00:00",
      __v: 0,
    },
  ]);
  const [tractors, setTractors] = useState([
    {
      _id: "65c87bf122f135650772671a",
      title: "Lorem ipsum, dolor",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex tempora aspernatur iste, magni praesentium deserunt repudiandae. Molestiae rem veniam quos error, consectetur corrupti quo voluptatibus soluta, suscipit ab eos voluptatem earum explicabo quidem molestias asperiores, beatae assumenda debitis impedit porro minus delectus inventore! Rem, minus. Accusamus nisi inventore facere velit quia impedit iste perspiciatis alias praesentium obcaecati eos, labore repudiandae quibusdam iure id nihil incidunt ad maiores voluptatibus magni non ea dolorem quidem eveniet! Quidem saepe deleniti maxime voluptatem modi optio numquam quisquam voluptatibus, aut quibusdam fugit totam officiis nulla ipsam. Quidem laudantium ipsam nesciunt ab incidunt, repudiandae provident maxime.",
      price: 4500000,
      images: [
        {
          path: "/product-1.jpg",
          size: "693,58kb",
          name: "1707637745319 - product-1.jpg",
        },
        {
          path: "/product-1.jpg",
          size: "550,91kb",
          name: "1707637745338 - texnikxizmat.jpg",
        },
        {
          path: "/product-1.jpg",
          size: "18,97kb",
          name: "1707637745338 - tractor-2.jpg",
        },
      ],
      createdAt: "2024-02-11T07:49:05.790+00:00",
      updatedAt: "2024-02-11T07:51:42.200+00:00",
      __v: 0,
    },
    {
      _id: "65c87c6522f1356507726730",
      title: "Lorem ipsum, dolor",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex tempora aspernatur iste, magni praesentium deserunt repudiandae. Molestiae rem veniam quos error, consectetur corrupti quo voluptatibus soluta, suscipit ab eos voluptatem earum explicabo quidem molestias asperiores, beatae assumenda debitis impedit porro minus delectus inventore! Rem, minus. Accusamus nisi inventore facere velit quia impedit iste perspiciatis alias praesentium obcaecati eos, labore repudiandae quibusdam iure id nihil incidunt ad maiores voluptatibus magni non ea dolorem quidem eveniet! Quidem saepe deleniti maxime voluptatem modi optio numquam quisquam voluptatibus, aut quibusdam fugit totam officiis nulla ipsam. Quidem laudantium ipsam nesciunt ab incidunt, repudiandae provident maxime.",
      price: 3440000,
      images: [
        {
          path: "/product-1.jpg",
          size: "693,58kb",
          name: "1707637861712 - product-1.jpg",
        },
        {
          path: "/product-1.jpg",
          size: "500,61kb",
          name: "1707637861712 - tractor-1.jpg",
        },
        {
          path: "/product-1.jpg",
          size: "654,62kb",
          name: "1707637861712 - tractor-3.jpg",
        },
      ],
      createdAt: "2024-02-11T07:51:01.721+00:00",
      updatedAt: "2024-02-11T07:51:01.721+00:00",
      __v: 0,
    },
    {
      _id: "65c87c7c22f1356507726733",
      title: "Lorem ipsum, dolor",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex tempora aspernatur iste, magni praesentium deserunt repudiandae. Molestiae rem veniam quos error, consectetur corrupti quo voluptatibus soluta, suscipit ab eos voluptatem earum explicabo quidem molestias asperiores, beatae assumenda debitis impedit porro minus delectus inventore! Rem, minus. Accusamus nisi inventore facere velit quia impedit iste perspiciatis alias praesentium obcaecati eos, labore repudiandae quibusdam iure id nihil incidunt ad maiores voluptatibus magni non ea dolorem quidem eveniet! Quidem saepe deleniti maxime voluptatem modi optio numquam quisquam voluptatibus, aut quibusdam fugit totam officiis nulla ipsam. Quidem laudantium ipsam nesciunt ab incidunt, repudiandae provident maxime.",
      price: 7600000,
      images: [
        {
          path: "/product-1.jpg",
          size: "165,23kb",
          name: "1707638612312 - 22.jpg",
        },
        {
          path: "/product-1.jpg",
          size: "257,09kb",
          name: "1707638612313 - about-image.jpg",
        },
      ],
      createdAt: "2024-02-11T07:51:24.493+00:00",
      updatedAt: "2024-02-11T08:03:32.318+00:00",
      __v: 0,
    },
  ]);
  const [agros, setAgros] = useState([
    {
      _id: "65c783e21163e7345501d641",
      title: "Lorem ipsum, dolor",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex tempora aspernatur iste, magni praesentium deserunt repudiandae. Molestiae rem veniam quos error, consectetur corrupti quo voluptatibus soluta, suscipit ab eos voluptatem earum explicabo quidem molestias asperiores, beatae assumenda debitis impedit porro minus delectus inventore! Rem, minus. Accusamus nisi inventore facere velit quia impedit iste perspiciatis alias praesentium obcaecati eos, labore repudiandae quibusdam iure id nihil incidunt ad maiores voluptatibus magni non ea dolorem quidem eveniet! Quidem saepe deleniti maxime voluptatem modi optio numquam quisquam voluptatibus, aut quibusdam fugit totam officiis nulla ipsam. Quidem laudantium ipsam nesciunt ab incidunt, repudiandae provident maxime.",
      price: 21312312,
      images: [
        {
          // path: "\\uploads\\agrotechnics\\1707638111091 - qulay to'lov.jpg",
          path: "/qulay to'lov.jpg",
          size: "33,43kb",
          name: "1707638111091 - qulay to'lov.jpg",
        },
        {
          path: "/qulay to'lov.jpg",
          size: "157,56kb",
          name: "1707638111092 - sifat.jpeg",
        },
      ],
      createdAt: "2024-02-10T14:10:42.396Z",
      updatedAt: "2024-02-11T07:55:11.096Z",
      __v: 1,
    },
    {
      _id: "65c783d11163e7345501d63e",
      title: "Lorem ipsum, dolor",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex tempora aspernatur iste, magni praesentium deserunt repudiandae. Molestiae rem veniam quos error, consectetur corrupti quo voluptatibus soluta, suscipit ab eos voluptatem earum explicabo quidem molestias asperiores, beatae assumenda debitis impedit porro minus delectus inventore! Rem, minus. Accusamus nisi inventore facere velit quia impedit iste perspiciatis alias praesentium obcaecati eos, labore repudiandae quibusdam iure id nihil incidunt ad maiores voluptatibus magni non ea dolorem quidem eveniet! Quidem saepe deleniti maxime voluptatem modi optio numquam quisquam voluptatibus, aut quibusdam fugit totam officiis nulla ipsam. Quidem laudantium ipsam nesciunt ab incidunt, repudiandae provident maxime.",
      price: 123123123,
      images: [
        {
          path: "/qulay to'lov.jpg",
          size: "33,43kb",
          name: "1707638140267 - qulay to'lov.jpg",
        },
        {
          path: "/qulay to'lov.jpg",
          size: "157,56kb",
          name: "1707638140268 - sifat.jpeg",
        },
        {
          path: "/qulay to'lov.jpg",
          size: "113,6kb",
          name: "1707638140268 - tractor-6.jpg",
        },
      ],
      createdAt: "2024-02-10T14:10:25.215Z",
      updatedAt: "2024-02-11T07:55:40.272Z",
      __v: 1,
    },
    {
      _id: "65c783be1163e7345501d63b",
      title: "Lorem ipsum, dolor",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex tempora aspernatur iste, magni praesentium deserunt repudiandae. Molestiae rem veniam quos error, consectetur corrupti quo voluptatibus soluta, suscipit ab eos voluptatem earum explicabo quidem molestias asperiores, beatae assumenda debitis impedit porro minus delectus inventore! Rem, minus. Accusamus nisi inventore facere velit quia impedit iste perspiciatis alias praesentium obcaecati eos, labore repudiandae quibusdam iure id nihil incidunt ad maiores voluptatibus magni non ea dolorem quidem eveniet! Quidem saepe deleniti maxime voluptatem modi optio numquam quisquam voluptatibus, aut quibusdam fugit totam officiis nulla ipsam. Quidem laudantium ipsam nesciunt ab incidunt, repudiandae provident maxime.",
      price: 11115430000,
      images: [
        {
          path: "/qulay to'lov.jpg",
          size: "33,43kb",
          name: "1707638157072 - qulay to'lov.jpg",
        },
        {
          path: "/qulay to'lov.jpg",
          size: "157,56kb",
          name: "1707638157072 - sifat.jpeg",
        },
        {
          path: "/qulay to'lov.jpg",
          size: "550,91kb",
          name: "1707638157072 - texnikxizmat.jpg",
        },
        {
          path: "/qulay to'lov.jpg",
          size: "113,6kb",
          name: "1707638157072 - tractor-6.jpg",
        },
      ],
      createdAt: "2024-02-10T14:10:06.911Z",
      updatedAt: "2024-02-11T07:55:57.077Z",
      __v: 1,
    },
  ]);

  const load = () => {
    axios
      .get(`${api}/api/slider`)
      .then((res) => setSlider(res.data))
      .catch((err) => alert("Something went wrong, please try again later."));
    axios
      .get(`${api}/api/tractor`)
      .then((res) => setTractors(res.data))
      .catch((err) => alert("Something went wrong, please try again later."));
    axios
      .get(`${api}/api/agro`)
      .then((res) => setAgros(res.data))
      .catch((err) => alert("Something went wrong, please try again later."));
  };

  useState(() => {
    load();
  }, []);

  return (
    <>
      <div className="main-banner header-text" id="top">
        <div className="Modern-Slider text-white">
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
            className="mySwiper w-full h-[95vh]"
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
            {slider.map((image, index) => (
              <SwiperSlide
                style={{
                  backgroundImage: `url('${api + String(image.path)
                    .replace("\\", "/")
                    .replace("\\", "/")
                    .replace("\\", "/")}')`,
                  backgroundAttachment: "center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
                key={index}
                className={`item item-${index + 1}`}
              >
                <div className="text-content">
                  <h6 style={{ color: "black" }}>
                    Qishloq xo'jalik texnikalari <br />
                    olamidiga xalol savdo
                  </h6>
                  <h4>Agromash Elit</h4>
                  <p style={{ color: "black" }}>
                    Biz bilan eng oldinda bo'ling!
                  </p>
                  <a
                    href="https://telegram.me/agromashelit"
                    className="bg-green-400 py-2 px-4 inline-block mt-2 rounded ml-2 hover:bg-white hover:text-green-400 transition duration-300 "
                  >
                    aloqa uchun
                  </a>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          {/* {slider &&
            slider.map((image, index) => (
              <div className={`item item-${index + 1}`} key={image._id}>
                <div
                  className={`img-fill`}
                  style={{
                    backgroundImage: `url('${
                      api +
                      String(image.path)
                        .replace("\\", "/")
                        .replace("\\", "/")
                        .replace("\\", "/")
                    }')`,
                  }}
                >
                  <div className="text-content">
                    <h6 style={{ color: "black" }}>
                      Qishloq xo'jalik texnikalari <br />
                      olamidiga xalol savdo
                    </h6>
                    <h4>Agromash Elit</h4>
                    <p style={{ color: "black" }}>
                      Biz bilan eng oldinda bo'ling!
                    </p>
                    <a
                      href="https://telegram.me/"
                      className="bg-green-400 py-2 px-4 inline-block mt-2 rounded ml-2 hover:bg-white hover:text-green-400 transition duration-300 "
                    >
                      aloqa uchun
                    </a>
                  </div>
                </div>
              </div>
            ))} */}
          {/* <div className="item item-2">
            <div className="img-fill">
              <div className="text-content">
                <h6 style={{ color: "black" }}>
                  Qishloq xo'jalik texnikalari <br />
                  olamidiga xalol savdo
                </h6>
                <h4>Agromash Elit</h4>
                <p style={{ color: "black" }}>Biz bilan eng oldinda bo'ling!</p>
                <a
                  href="https://telegram.me/"
                  className="bg-green-400 py-2 px-4 inline-block mt-2 rounded ml-2 hover:bg-white hover:text-green-400 transition duration-300 "
                >
                  aloqa uchun
                </a>
              </div>
            </div>
          </div>
          <div className="item item-3">
            <div className="img-fill">
              <div className="text-content">
                <h6 style={{ color: "black" }}>
                  Qishloq xo'jalik texnikalari <br />
                  olamidiga xalol savdo
                </h6>
                <h4>Agromash Elit</h4>
                <p style={{ color: "black" }}>Biz bilan eng oldinda bo'ling!</p>
                <a
                  href="https://telegram.me/"
                  className="bg-green-400 py-2 px-4 inline-block mt-2 rounded ml-2 hover:bg-white hover:text-green-400 transition duration-300 "
                >
                  aloqa uchun
                </a>
              </div>
            </div>
          </div>
          <div className="item item-4">
            <div className="img-fill">
              <div className="text-content">
                <h6 style={{ color: "black" }}>
                  Qishloq xo'jalik texnikalari <br />
                  olamidiga xalol savdo
                </h6>
                <h4>Agromash Elit</h4>
                <p style={{ color: "black" }}>Biz bilan eng oldinda bo'ling!</p>
                <a
                  href="https://telegram.me/"
                  className="bg-green-400 py-2 px-4 inline-block mt-2 rounded ml-2 hover:bg-white hover:text-green-400 transition duration-300 "
                >
                  aloqa uchun
                </a>
              </div>
            </div>
          </div> */}
        </div>
      </div>

      <div className="request-form" style={{ background: "#4ADE80" }}>
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <h4>Bizga taklifingiz bormi?</h4>
              <span>
                Taklif yoki Havkorlik bo'yicha bog'lanish uchun tugmani bosing!
              </span>
            </div>
            <div className="col-md-4">
              <a
                href="https://telegram.me/agromashelit"
                className="border-button"
              >
                Aloqa uchun
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="more-info">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="more-info-content">
                <div className="row">
                  <div className="col-md-6">
                    <div className="left-image">
                      <img src="/assets/images/logo.jpg" alt="" />
                    </div>
                  </div>
                  <div className="col-md-6 align-self-center">
                    <div className="right-content text-white">
                      <span>Biz kimmiz?{")"}</span>
                      <h2 className="text-black">
                        Biz haqimizda bilib olish{" "}
                        <em style={{ color: "#4ADE80" }}>Vaqti keldi!</em>
                      </h2>
                      <p>
                        Biz qishloq xo'jaligi sohasida ishlaydigan fermerlarga
                        Agrotexnika yetkazib beradigan eng ishonchli firmalardan
                        birimiz, bizning maqsadimiz mijozlarimizga eng qulay va
                        zamonaviy texnikalarni taqdim etish!
                      </p>
                      <a
                        href="#"
                        className="bg-green-400 py-2 px-4 inline-block mt-2 rounded ml-2 hover:bg-white hover:text-green-400 transition duration-300"
                      >
                        Ko'proq bilib olish
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="services">
        <div className="container text-white">
          <div className="row">
            <div className="col-md-12">
              <div className="section-heading">
                <h2>
                  Bizning <em style={{ color: "#4ADE80" }}>Xizmatlar</em>
                </h2>
                <span>Biz o'z xizmatlirimizni halolligini kafolatlaymiz!</span>
              </div>
            </div>
            <div className="col-md-4">
              <div className="service-item">
                <img src="/qulay to'lov.jpg" alt="" />
                <div className="down-content">
                  <h4 className="text-black">Oliy sifat</h4>
                  <p>
                    Biz sizga eng sifatli narxda chet el texnikasini kirgazib
                    beramiz!
                  </p>
                  <Link
                    to={"/tractors"}
                    className="bg-green-400 py-2 px-4 inline-block rounded hover:bg-white hover:text-green-400 transition duration-300 "
                  >
                    Buyurtma berish
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="service-item">
                <img
                  src="/texnikxizmat.jpg"
                  className="h-[250px] object-cover"
                  alt=""
                />
                <div className="down-content">
                  <h4 className="text-black">Qulay to'lov</h4>
                  <p>
                    {" "}
                    Har qanday texnikani lizing va malum muddatga bo'lib
                    berishga siz xohlaganday qulaylik yaratishga tayyormiz.
                  </p>
                  <Link
                    to={"/tractors"}
                    className="bg-green-400 py-2 px-4 inline-block rounded hover:bg-white hover:text-green-400 transition duration-300 "
                  >
                    Buyurtma berish
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="service-item">
                <img src="/sifat.jpeg" alt="" />
                <div className="down-content">
                  <h4 className="text-black">Texnik xizmat</h4>
                  <p>
                    Barcha turdagi qishloq xo'jaligi texnikalari har qanday
                    sharoitga qaramay servis va ta'mirlash ishlarini olib
                    boramiz.
                  </p>
                  <Link
                    to={"/tractors"}
                    className="bg-green-400 py-2 px-4 inline-block rounded hover:bg-white hover:text-green-400 transition duration-300 "
                  >
                    Buyurtma berish
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="fun-facts">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="left-content">
                <span>10 yildan beri xalq ishonchida!</span>
                <h2>
                  Biz bilan eng{" "}
                  <em style={{ color: "#4ADE80" }}>
                    <br />
                    birinchilar qatorida bo'ling!
                  </em>
                </h2>
                <p>
                  Agromash Elit MCHJ Oʻzbekiston hududida Qishloq xojalik
                  texnikalarini halol savdosi bilan shugʻulanish maqsadida
                  yaratilgan firma boʻlib bizda dunyoning yetakchi davlatlarinig
                  eng ilgoʻr texnikalari bor 100 dan ortiq traktorlar turli
                  davrlardan keltirilgan 1000 dan ortiq agregatlar
                  <br />
                  <br />
                  Yurtimizning fermerlari va qishloq xoʻjaligi
                  azolarininishlarini yengil qilish maqsadida xizmat larini
                  yengilashtirish uchun yaratilgan Biz bilan enag katta lizing
                  firmalari hamkorlik da ishlashadi.
                  <br />
                  Toshkent shahri, Segeli tumani, Belariq 15{" "}
                </p>
                <Link
                  to={"/tractors"}
                  className="bg-green-400 py-2 px-4 inline-block rounded hover:bg-white hover:text-green-400 transition duration-300 "
                >
                  Buyurtma berish
                </Link>
              </div>
            </div>
            <div className="col-md-6 align-self-center">
              <div className="row">
                <div className="col-md-6">
                  <div className="count-area-content">
                    <div className="count-digit" style={{ color: "#4ADE80" }}>
                      1800
                    </div>
                    <div className="count-title">Soat faol ish</div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="count-area-content">
                    <div className="count-digit" style={{ color: "#4ADE80" }}>
                      524
                    </div>
                    <div className="count-title">
                      Muvaffaqiyatli shartnomalar
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="count-area-content">
                    <div className="count-digit" style={{ color: "#4ADE80" }}>
                      823
                    </div>
                    <div className="count-title">Sotilgan Agrotexnika</div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="count-area-content">
                    <div className="count-digit" style={{ color: "#4ADE80" }}>
                      10
                    </div>
                    <div className="count-title">Yil mehnat</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[95%] mx-auto mt-24">
        <div className="section-heading">
          <h2>
            <em style={{ color: "#4ADE80" }}>T</em>raktorlar
          </h2>
        </div>
        <div className="flex justify-around flex-wrap">
          {tractors.slice(0, 3).map((tractor) => (
            <Product product={tractor} key={tractor._id} api={api} />
          ))}
        </div>
      </div>

      <div className="w-[95%] mx-auto mt-24">
        <div className="section-heading">
          <h2>
            <em style={{ color: "#4ADE80" }}>A</em>grotexnikalar
          </h2>
        </div>
        <div className="flex justify-around flex-wrap">
          {agros.slice(0, 3).map((agro) => (
            <Agro product={agro} key={agro._id} api={api} />
          ))}
        </div>
      </div>

      <div className="w-[95%] mx-auto mt-24">
        <div className="section-heading">
          <h2 className="">
            Mavsumiy <em style={{ color: "#4ADE80" }}>texnikalar</em>
          </h2>
        </div>
        <div className="flex justify-around flex-wrap">
          {tractors.slice(0, 3).map((tractor) => (
            <Product product={tractor} key={tractor._id} api={api} />
          ))}
          {agros.slice(0, 3).map((agro) => (
            <Agro product={agro} key={agro._id} api={api} />
          ))}
        </div>
      </div>

      <div className="testimonials">
        <div className="partners" style={{ marginTop: 0 }}>
          <h1 className="text-center mb-10">
            Bizning Hamkorlar!
          </h1>
          <div className="container mt-14">
            <div className="row">
              <div className="col-md-12">
                <div className="flex flex-wrap justify-around items-center md:justify-between">
                  <img
                    src="/akpil.png"
                    className="w-[200px] object-contain mb-14"
                    title="1"
                    alt="1"
                  />
                  <img
                    src="/image_2024-02-10_21-08-29.png"
                    className="w-[200px] object-contain mb-14"
                    title="1"
                    alt="2"
                  />
                  <img
                    src="/harmak.png"
                    title="3"
                    alt="3"
                    className="w-[200px] object-contain mb-14"
                  />
                  <img
                    src="/unia.jpg"
                    title="4"
                    alt="4"
                    className="w-[200px] object-contain mb-14"
                  />
                  <img
                    src="/yot.png"
                    title="5"
                    alt="5"
                    className="w-[200px] object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
