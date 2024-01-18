import React from "react";

const Footer = () => {
  return (
    <footer className="w-full mt-0 md:mt-4 pt-2 text-zinc-500 mb-12">
      <div className="w-full md:w-[65%] flex-col flex md:flex-row md:justify-between mx-auto justify-center">
        <div className="w-full sm:w-[70%] md:w-6/12 py-2 px-4 mx-auto md:m-0">
          <h1 className="text-center md:text-left text-xl text-black font-medium w-[90%]">
            Категории
          </h1>
          <ul className="w-[95%] mx-auto grid grid-cols-2 mt-5 mb-4">
            <li className="w-max m-1 hover:underline cursor-pointer">
              Электроника
            </li>
            <li className="w-max m-1 hover:underline cursor-pointer">
              Бытовая техника
            </li>
            <li className="w-max m-1 hover:underline cursor-pointer">Одежда</li>
            <li className="w-max m-1 hover:underline cursor-pointer">Обувь</li>
            <li className="w-max m-1 hover:underline cursor-pointer">
              Аксессуары
            </li>
            <li className="w-max m-1 hover:underline cursor-pointer">
              Красота
            </li>
            <li className="w-max m-1 hover:underline cursor-pointer">
              Здоровье
            </li>
            <li className="w-max m-1 hover:underline cursor-pointer">
              Товары для дома
            </li>
          </ul>
        </div>
        <div className="md:w-4/12 mx-auto md:m-0">
          <h1 className="text-center md:text-left text-xl font-medium text-black mt-2">
            Контакт
          </h1>
          <div className="flex md:grid-cols-1 grid-cols-2 md:grid-rows-2 grid-rows-1 sm:grid sm:flex-wrap py-5">
            <p className="w-max">admin@nishtyaki.uz</p>{" "}
            <br className="laptop-visible" />
            <p className="w-max ml-2 sm:ml-0">+998 XX XXX XX XX</p>
          </div>
        </div>
      </div>
      {/* <div className="flex w-[70%] mt-6 justify-around items-center mx-auto">
        <h1>Contact us</h1>
        <h1>Our Services</h1>
        <h1>Privacy Policy</h1>
        <h1>Terms & Conditions</h1>
        <h1>Career</h1>
      </div> */}
      <div className="hidden lg:block">
        <hr className="w-[850px] my-1 md:my-3 mx-auto border-black/40" />
        <h1 className="text-center mt-2">
          Copyright © {new Date().getFullYear()} Nishtyaki - All rights reserved
          || Designed By: Evil Enemy
        </h1>
      </div>
    </footer>
  );
};

export default Footer;
