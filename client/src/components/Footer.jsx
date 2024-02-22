import React from "react";
import { FaTelegram, FaSquareInstagram, FaYoutube } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = ({ lang }) => {
  return (
    <footer className="w-full max-w-[1400px] box-border lg:h-[330px] mt-10">
      <div className="flex flex-col-reverse md:flex-row w-full min-h-[95%]">
        <div className="w-[20%] mx-auto md:mx-0 md:w-[50px] h-full grid grid-rows-1 grid-cols-3 md:grid-rows-3 md:grid-cols-1 mt-4 md:mt-0">
          <a
            href="https://t.me/agromashelituz"
            target="_blank"
            className="flex hover:text-white items-center justify-center m-1 cursor-pointer"
          >
            <FaTelegram fontSize={"30px"} />
          </a>
          <a
            href="https://instagram.com/agromash.elit"
            target="_blank"
            className="flex hover:text-white items-center justify-center m-1 cursor-pointer"
          >
            <FaSquareInstagram fontSize={"30px"} />
          </a>
          <a
            href="https://youtube.com/@agromashelit"
            target="_blank"
            className="flex hover:text-white items-center justify-center m-1 cursor-pointer"
          >
            <FaYoutube fontSize={"30px"} />
          </a>
        </div>
        <div className="w-[95%] md:w-[calc(100%-300px)] min-h-full mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          <div className="mx-1 mt-2">
            <h1 className="text-white/95">
              {lang === "ru" ? "Адрес" : "Manzil"}
            </h1>
            <p className="text-white/60 font-light break-words mt-2 leading-6 text-xs md:text-sm xl:text-base">
              {lang === "ru"
                ? "Беларик 15, Сегелийский район, город Ташкент"
                : "Toshkent shahri, Segeli tumani, Belariq 15"}
            </p>
          </div>
          <div className="mx-1 mt-2">
            <h1 className="text-white/95">
              {lang === "ru" ? "О нас" : "Biz haqimizda"}
            </h1>
            <ul className="text-white/60 font-light break-words mt-2 text-sm xl:text-base">
              <li>
                <Link className="hover:text-white/90 duration-150" to={"/"}>
                  {lang === "ru" ? "Контакты" : "Kontaktlar"}
                </Link>
              </li>
              <li>
                <Link className="hover:text-white/90 duration-150" to={"/"}>
                  {lang === "ru" ? "О нас" : "Biz haqimizda"}
                </Link>
              </li>
              <li>
                <Link className="hover:text-white/90 duration-150" to={"/news"}>
                  {lang === "ru" ? "Новости" : "Yangiliklar"}
                </Link>
              </li>
            </ul>
          </div>
          <div className="mx-1 mt-2">
            <h1 className="text-white/95">
              {lang === "ru" ? "Телефоны" : "Telefonlar"}
            </h1>
            <ul className="text-white/60 font-light break-words mt-2 text-sm xl:text-base">
              <li>+998 {"(33)"} 470-23-00</li>
              <li>+998 {"(90)"} 470-82-82</li>
            </ul>
          </div>
          <div className="mx-1 mt-2">
            <h1 className="text-white/95 mb-4">
              {lang === "ru" ? "Каталог" : "Katalog"}
            </h1>
            <a
              download={true}
              target="_blank"
              href="/katalog.pdf"
              className="py-2 px-4 rounded text-white bg-red-600 hover:bg-red-700 duration-150"
            >
              {lang === "ru" ? "Загрузить каталог" : "Katalogni yuklash"}
            </a>
          </div>
        </div>
      </div>
      <div className="w-full text-center mt-10 border-t flex items-center justify-center">
        <h1 className="mt-3">
          Copyright &copy; {new Date().getFullYear()} Agromash Elit MCHJ Co.,
          Ltd. - Design:{" "}
          <a
            href="https://t.me/Nr_Projects"
            target="_blank"
            rel="noopener noreferrer"
            className="font-serif"
          >
            Ultimate_Coder
          </a>
        </h1>
      </div>
    </footer>
  );
};

export default Footer;
