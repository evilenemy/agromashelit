import React from "react";
import { ImLocation } from "react-icons/im";

const Navbar = () => {
  return (
    // <nav>
    //   <div className="w-full py-1 h-[35px] flex justify-center text-white bg-green-600/95">
    //     <ul className="w-[85%] max-w-[1400px] flex justify-between">
    //       <li>+998xxxxxxxxx</li>
    //       <li className="flex items-center">
    //         <ImLocation /> <span className="ml-1">Tashkent, Chirchiq St.</span>{" "}
    //       </li>
    //     </ul>
    //   </div>
    //   <div className="w-full h-14 flex absolute z-10 top-[35px] justify-center py-1 bg-transparent">
    //     <div className="w-[85%] max-w-[1400px] flex justify-between items-center">
    //       <h1 className="text-2xl font-medium text-white">Logo</h1>
    //       <ul className="grid grid-rows-1 grid-cols-3 px-4 py-2">
    //         <li className="text-center hover:text-white/100 cursor-pointer text-white/80 transition duration-200 text-xl min-w-[150px]">
    //           Traktorlar
    //         </li>
    //         <li className="text-center hover:text-white/100 cursor-pointer text-white/80 transition duration-200 text-xl min-w-[150px]">
    //           Agrotexnikalar
    //         </li>
    //         <li className="text-center hover:text-white/100 cursor-pointer text-white/80 transition duration-200 text-xl min-w-[150px]">
    //           Yangiliklar
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    // </nav>
    <header className="">
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <a className="navbar-brand" href="index.html">
            <h2 style={{ color: "#4ADE80" }}>Agromash Elit</h2>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#top">
                  Asosiy
                  <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="about.html">
                  Biz Haqimizda
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="services.html">
                  Bizning xizmatlar
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="contact.html">
                  Biz bilan aloqa
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
