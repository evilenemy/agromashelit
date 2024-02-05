import React from "react";
import { FaTelegram, FaSquareInstagram, FaFacebook } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    // <div>
    //   <footer>
    //     <div className="container">
    //       <div className="row">
    //         <div className="col-md-3 footer-item">
    //           <h4>Agrotexnika-olami.Uz</h4>
    //           <p>Eng sifatli maxsulotlar faqat bizda!</p>
    //           <ul className="social-icons">
    //             <li>
    //               <a
    //                 rel="nofollow"
    //                 href="https://fb.com/templatemo"
    //                 target="_blank"
    //               >
    //                 <i className="fa fa-facebook"></i>
    //               </a>
    //             </li>
    //             <li>
    //               <a href="#">
    //                 <i className="fa fa-youtube"></i>
    //               </a>
    //             </li>
    //             <li>
    //               <a href="#">
    //                 <i className="fa fa-instagram"></i>
    //               </a>
    //             </li>
    //           </ul>
    //         </div>
    //         <div className="col-md-3 footer-item">
    //           <h4
    //             className="meda"
    //             style={{
    //               position: "relative",
    //               whiteSpace: "nowrap",
    //               textOverflow: "ellipsis",
    //             }}
    //           >
    //             Bizni ijtimoiy tarmoqlarda kuzating!
    //           </h4>
    //           <ul className="menu-list">
    //             <li>
    //               <a href="#">Facebook Kanalimiz</a>
    //             </li>
    //             <li>
    //               <a href="#">Instagram Kanalimiz</a>
    //             </li>
    //             <li>
    //               <a href="#">Youtube kanalimiz</a>
    //             </li>
    //             <li>
    //               <a href="https://t.me/agrotexnika_olami">
    //                 Telegram Kanalimiz
    //               </a>
    //             </li>
    //           </ul>
    //         </div>
    //       </div>
    //     </div>
    //   </footer>

    //   <div className="sub-footer">
    //     <div className="container">
    //       <div className="row">
    //         <div className="col-md-12">
    //           <p>
    //             &copy; Copyright {new Date().getFullYear()} Agromash elit MCHJ
    //             Co., Ltd. - Design:{" "}
    //             <a
    //               rel="nofollow noopener"
    //               href="https://telegram.me/black_evilenemy"
    //               target="_blank"
    //             >
    //               Evil Enemy
    //             </a>
    //           </p>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <footer className="w-full min-h-[300px] mt-10">
      <div className="flex flex-col-reverse md:flex-row w-full min-h-[95%]">
        <div className="w-[20%] mx-auto md:mx-0 md:w-[50px] h-full grid grid-rows-1 grid-cols-3 md:grid-rows-3 md:grid-cols-1 mt-4 md:mt-0">
          <a
            href="https://telegram.org"
            target="_blank"
            className="flex hover:text-white items-center justify-center mb-1 cursor-pointer"
          >
            <FaTelegram fontSize={"30px"} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            className="flex hover:text-white items-center justify-center my-1 cursor-pointer"
          >
            <FaSquareInstagram fontSize={"30px"} />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            className="flex hover:text-white items-center justify-center mt-1 cursor-pointer"
          >
            <FaFacebook fontSize={"30px"} />
          </a>
        </div>
        <div className="w-[95%] md:w-[calc(100%-300px)] min-h-full mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          <div className="mx-1 mt-2">
            <h1 className="text-white/95">Manzil</h1>
            <p className="text-white/60 font-light break-words mt-2 leading-6 text-xs md:text-sm xl:text-base">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Inventore vitae iure nam voluptates doloribus!
            </p>
          </div>
          <div className="mx-1 mt-2">
            <h1 className="text-white/95">Biz haqimizda</h1>
            <ul className="text-white/60 font-light break-words mt-2 text-sm xl:text-base">
              <li>Kontaktlar</li>
              <li>Biz haqimizda</li>
              <li>Yangiliklar</li>
              <li>Galereya</li>
            </ul>
          </div>
          <div className="mx-1 mt-2">
            <h1 className="text-white/95">Telefonlar</h1>
            <ul className="text-white/60 font-light break-words mt-2 text-sm xl:text-base">
              <li>+998 {"(90)"} 824-88-84</li>
              <li>+998 {"(90)"} 824-88-84</li>
              <li>+998 {"(90)"} 824-88-84</li>
            </ul>
          </div>
          <div className="mx-1 mt-2">
            <h1 className="text-white/95">Katalog</h1>
            <ul className="text-white/60 font-light break-words mt-2 text-sm xl:text-base">
              <li>Traktorlar</li>
              <li>Agrotexnikalar</li>
              <li>Boshqa texnikalar</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
