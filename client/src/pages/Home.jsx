import React, { useState, useRef, useEffect } from "react";
import Product from "../components/Product";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Agro from "../components/Agro";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Home = ({ api, lang }) => {
  const [slider, setSlider] = useState([]);
  const [tractors, setTractors] = useState([]);
  const [agros, setAgros] = useState([]);

  const navigation = useNavigate();

  const load = () => {
    axios
      .get(`${api}/api/slider`)
      .then((res) => setSlider(res.data))
      .catch((err) => {
        navigation("/404");
        alert("Something went wrong with slider, plase try again later.");
      });
    axios
      .get(`${api}/api/tractor`)
      .then((res) => setTractors(res.data))
      .catch((err) => {
        navigation("/404");
        alert("Something went wrong with tractors, plase try again later.");
      });
    axios
      .get(`${api}/api/agro`)
      .then((res) => setAgros(res.data))
      .catch((err) => {
        navigation("/404");
        alert("Something went wrong with agrotechnics, plase try again later.");
      });
  };

  useEffect(() => {
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
                  backgroundImage: `url('${
                    api +
                    String(image.path)
                      .replace("\\", "/")
                      .replace("\\", "/")
                      .replace("\\", "/")
                  }')`,
                  backgroundAttachment: "center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
                key={index}
                className={`item item-${index + 1}`}
              >
                <div className="text-content">
                  <h6 style={{ color: "black" }}>
                    {lang === "ru"
                      ? "Сельскохозяйственная техника"
                      : "Qishloq xo'jalik texnikalari"}{" "}
                    <br />
                    {lang === "ru"
                      ? "всемирная ярмарка торговли"
                      : "olamidiga xalol savdo"}
                  </h6>
                  <h4>Agromash Elit</h4>
                  <p style={{ color: "black" }}>
                    {lang === "ru"
                      ? "Будьте на передовой вместе с нами!"
                      : "Biz bilan eng oldinda bo'ling!"}
                  </p>
                  <a
                    target="_blank"
                    href="https://t.me/agromashelituz"
                    className="bg-green-400 py-2 px-4 inline-block mt-2 rounded ml-2 hover:bg-white hover:text-green-400 transition duration-300 "
                  >
                    {lang === "ru" ? "для общения" : "aloqa uchun"}
                  </a>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <div className="request-form" style={{ background: "#4ADE80" }}>
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <h4>
                {lang === "ru"
                  ? "У вас есть предложение для нас?"
                  : "Bizga taklifingiz bormi?"}
              </h4>
              <span>
                {lang === "ru"
                  ? "Нажмите кнопку, чтобы связаться с нами по поводу предложения или акции!"
                  : "Taklif yoki Havkorlik bo'yicha bog'lanish uchun tugmani bosing!"}
              </span>
            </div>
            <div className="col-md-4">
              <a
                target="_blank"
                href="https://t.me/agromashelituz"
                className="border-button"
              >
                {lang === "ru" ? "Для общения" : "Aloqa uchun"}
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
                      <span>
                        {lang === "ru" ? "Кто мы?" : "Biz kimmiz?"}
                        {")"}
                      </span>
                      <h2 className="text-black">
                        {lang === "ru"
                          ? "Узнайте о нас"
                          : "Biz haqimizda bilib olish"}{" "}
                        <em style={{ color: "#4ADE80" }}>
                          {lang === "ru" ? "Время пришло!" : "Vaqti keldi!"}
                        </em>
                      </h2>
                      <p>
                        {lang === "ru"
                          ? `Фермерам, работающим в сфере сельского хозяйства
                         Одна из самых надежных компаний-поставщиков сельскохозяйственной техники
                         один из нас, наша цель – наиболее удобный и
                         представляем современные технологии!`
                          : `Biz qishloq xo'jaligi sohasida ishlaydigan fermerlarga
                        Agrotexnika yetkazib beradigan eng ishonchli firmalardan
                        birimiz, bizning maqsadimiz mijozlarimizga eng qulay va
                        zamonaviy texnikalarni taqdim etish!`}
                      </p>
                      <a
                        target="_blank"
                        href="https://t.me/agromashelituz"
                        className="bg-green-400 py-2 px-4 inline-block mt-2 rounded ml-2 hover:bg-white hover:text-green-400 transition duration-300"
                      >
                        {lang === "ru"
                          ? "Узнать больше"
                          : "Ko'proq bilib olish"}
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
                  {lang === "ru" ? "Наш" : "Bizning"}{" "}
                  <em style={{ color: "#4ADE80" }}>
                    {lang === "ru" ? "Услуги" : "Xizmatlar"}
                  </em>
                </h2>
                <span>
                  {lang === "ru"
                    ? "Мы гарантируем честность наших сотрудников!"
                    : "Biz o'z xizmatlirimizni halolligini kafolatlaymiz!"}
                </span>
              </div>
            </div>
            <div className="flex justify-around flex-wrap">
              <div className="w-[400px] h-[470px] mx-2">
                <div className="service-item">
                  <img
                    src="/qulay to'lov.jpg"
                    className="h-[220px] object-cover"
                    alt=""
                  />
                  <div className="down-content">
                    <h4 className="text-black">
                      {lang === "ru" ? "Высокое качество" : "Oliy sifat"}
                    </h4>
                    <p>
                      {lang === "ru"
                        ? `Мы импортируем зарубежное оборудование по лучшей цене и рекомендуем только качественное и доступное оборудование.`
                        : `Biz sizga eng sifatli narxda chet el texnikasini kirgazib
                    beramiz va faqatgina sifatli hamda hamyonbop texnikalarni tavsiya beramiz.`}
                    </p>
                    <Link
                      to={"/tractors"}
                      className="bg-green-400 py-2 px-4 inline-block rounded hover:bg-white hover:text-green-400 transition duration-300 "
                    >
                      {lang === "ru" ? "Разместить заказ" : "Buyurtma berish"}
                    </Link>
                  </div>
                </div>
              </div>
              <div className="w-[400px] h-[470px] mx-2">
                <div className="service-item">
                  <img
                    src="/texnikxizmat.jpg"
                    className="h-[220px] object-cover"
                    alt=""
                  />
                  <div className="down-content">
                    <h4 className="text-black">
                      {lang === "ru" ? "Удобная оплата" : "Qulay to'lov"}
                    </h4>
                    <p>
                      {" "}
                      {lang === "ru"
                        ? `Взять в аренду любое оборудование и сдать его в аренду на определенный срок
                     Мы готовы сделать это так удобно, как вы захотите.`
                        : `Har qanday texnikani lizing va malum muddatga bo'lib
                    berishga siz xohlaganday qulaylik yaratishga tayyormiz.`}
                    </p>
                    <Link
                      to={"/tractors"}
                      className="bg-green-400 py-2 px-4 inline-block rounded hover:bg-white hover:text-green-400 transition duration-300 "
                    >
                      {lang === "ru" ? "Разместить заказ" : "Buyurtma berish"}
                    </Link>
                  </div>
                </div>
              </div>
              <div className="w-[400px] h-[470px] mx-2">
                <div className="service-item">
                  <img
                    src="/sifat.jpeg"
                    className="h-[220px] object-cover"
                    alt=""
                  />
                  <div className="down-content">
                    <h4 className="text-black">
                      {lang === "ru"
                        ? "Техническое обслуживание"
                        : "Texnik xizmat"}
                    </h4>
                    <p>
                      {lang === "ru"
                        ? `Все виды сельскохозяйственной техники
                     проведение сервисных и ремонтных работ несмотря на условия
                     мы пойдем.`
                        : `Barcha turdagi qishloq xo'jaligi texnikalari har qanday
                    sharoitga qaramay servis va ta'mirlash ishlarini olib
                    boramiz.`}
                    </p>
                    <Link
                      to={"/tractors"}
                      className="bg-green-400 py-2 px-4 inline-block rounded hover:bg-white hover:text-green-400 transition duration-300 "
                    >
                      {lang === "ru" ? "Разместить заказ" : "Buyurtma berish"}
                    </Link>
                  </div>
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
                <span>
                  {lang === "ru"
                    ? "В доверии народа уже 10 лет!"
                    : "10 yildan beri xalq ishonchida!"}
                </span>
                <h2>
                  {lang === "ru" ? "Большинство с нами" : "Biz bilan eng"}{" "}
                  <em style={{ color: "#4ADE80" }}>
                    <br />
                    {lang === "ru"
                      ? "будь в числе первых!"
                      : "birinchilar qatorida bo'ling!"}
                  </em>
                </h2>
                <p>
                  {lang === "ru"
                    ? `ООО «Агромаш Элит» Сельское хозяйство на территории Узбекистана
                   с целью заниматься халяльной торговлей оборудованием
                   Мы компания, созданная ведущими странами мира
                   Более 100 различных тракторов с самой передовой техникой
                   более 1000 агрегатов по периодам`
                    : `Agromash Elit MCHJ Oʻzbekiston hududida Qishloq xojalik
                  texnikalarini halol savdosi bilan shugʻulanish maqsadida
                  yaratilgan firma boʻlib bizda dunyoning yetakchi davlatlarinig
                  eng ilgoʻr texnikalari bor 100 dan ortiq traktorlar turli
                  davrlardan keltirilgan 1000 dan ortiq agregatlar`}
                  <br />
                  <br />
                  {lang === "ru"
                    ? `Фермеры и сельское хозяйство нашей страны
                   услуги по облегчению их страданий
                   Лизинг – это здорово у нас, создано для модернизации
                   компании работают в сотрудничестве.`
                    : `Yurtimizning fermerlari va qishloq xoʻjaligi
                  azolarininishlarini yengil qilish maqsadida xizmat larini
                  yengilashtirish uchun yaratilgan Biz bilan enag katta lizing
                  firmalari hamkorlik da ishlashadi.`}
                  <br />
                  {lang === "ru"
                    ? "Беларик 15, Сегелийский район, город Ташкент"
                    : "Toshkent shahri, Segeli tumani, Belariq 15"}{" "}
                </p>
                <Link
                  to={"/tractors"}
                  className="bg-green-400 py-2 px-4 inline-block rounded hover:bg-white hover:text-green-400 transition duration-300 "
                >
                  {lang === "ru" ? "Разместить заказ" : "Buyurtma berish"}
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
                    <div className="count-title">
                      {lang === "ru"
                        ? "Часов активной работы"
                        : "Soat faol ish"}
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="count-area-content">
                    <div className="count-digit" style={{ color: "#4ADE80" }}>
                      524
                    </div>
                    <div className="count-title">
                      {lang === "ru"
                        ? "Успешные контракты"
                        : "Muvaffaqiyatli shartnomalar"}
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="count-area-content">
                    <div className="count-digit" style={{ color: "#4ADE80" }}>
                      823
                    </div>
                    <div className="count-title">
                      {lang === "ru"
                        ? "Продано сельскохозяйственной техники"
                        : "Sotilgan Agrotexnika"}
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="count-area-content">
                    <div className="count-digit" style={{ color: "#4ADE80" }}>
                      10
                    </div>
                    <div className="count-title">
                      {lang === "ru" ? "Год работы" : "Yil mehnat"}
                    </div>
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
            <em style={{ color: "#4ADE80" }}>T</em>
            {lang === "ru" ? "ракторы" : "raktorlar"}
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
            <em style={{ color: "#4ADE80" }}>A</em>
            {lang === "ru" ? "гротехника" : "grotexnikalar"}
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
            {lang === "ru" ? "Сезонный" : "Mavsumiy"}{" "}
            <em style={{ color: "#4ADE80" }}>
              {lang === "ru" ? "техники" : "texnikalar"}
            </em>
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
            {lang === "ru" ? "Наши партнеры!" : "Bizning Hamkorlar!"}
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
