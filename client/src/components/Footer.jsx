import React from "react";
import { FaTelegram, FaSquareInstagram, FaYoutube } from "react-icons/fa6";
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
    <footer className="w-full h-max lg:h-[330px] mt-10">
      <div className="flex flex-col-reverse md:flex-row w-full min-h-[95%]">
        <div className="w-[20%] mx-auto md:mx-0 md:w-[50px] h-full grid grid-rows-1 grid-cols-3 md:grid-rows-3 md:grid-cols-1 mt-4 md:mt-0">
          <a
            href="https://telegram.me/agromashelit"
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
            <h1 className="text-white/95">Manzil</h1>
            <p className="text-white/60 font-light break-words mt-2 leading-6 text-xs md:text-sm xl:text-base">
              Toshkent shahri, Segeli tumani, Belariq 15
            </p>
          </div>
          <div className="mx-1 mt-2">
            <h1 className="text-white/95">Biz haqimizda</h1>
            <ul className="text-white/60 font-light break-words mt-2 text-sm xl:text-base">
              <li>
                <Link to={"/"}>Kontaktlar</Link>
              </li>
              <li>
                <Link to={"/"}>Biz haqimizda</Link>
              </li>
              <li>
                <Link to={"/news"}>Yangiliklar</Link>
              </li>
            </ul>
          </div>
          <div className="mx-1 mt-2">
            <h1 className="text-white/95">Telefonlar</h1>
            <ul className="text-white/60 font-light break-words mt-2 text-sm xl:text-base">
              <li>+998 {"(90)"} 470-23-00</li>
            </ul>
          </div>
          <div className="mx-1 mt-2">
            <h1 className="text-white/95">Katalog</h1>
            <ul className="text-white/60 font-light break-words mt-2 text-sm xl:text-base">
              <li>
                <Link to={"/tractors"}>Traktorlar</Link>
              </li>
              <li>
                <Link to={"/agro"}>Agrotexnikalar</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-full text-center mt-10 border-t flex items-center justify-center">
        <h1 className="mt-3">
          Copyright &copy; {new Date().getFullYear()} Agromash Elit MCHJ Co.,
          Ltd. - Design:{" "}
          <a
            href="https://instagram.com/black_evilenemy"
            target="_blank"
            rel="noopener noreferrer"
            className="font-serif"
          >
            Evil Enemy
          </a>
        </h1>
      </div>
    </footer>
  );
};

export default Footer;
