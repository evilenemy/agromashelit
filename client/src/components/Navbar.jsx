import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const Navbar = ({ lang, setLang }) => {
  const [sticking, setSticking] = useState(false);
  const [open, setOpen] = useState(false);

  const location = useLocation();

  const primaryHeader = document.querySelector("nav");
  const scrollWatcher = document.createElement("div");

  scrollWatcher.setAttribute("data-scroll-watcher", "");
  primaryHeader?.before(scrollWatcher);

  useEffect(() => {
    const nabObserver = new IntersectionObserver((entries) => {
      setSticking(!entries[0].isIntersecting);
    });
    nabObserver.observe(scrollWatcher);
  }, [scrollWatcher]);

  const handleClick = () => {
    document.querySelector("#burger-menu").classList.toggle("close");
    setOpen((prev) => !prev);
  };

  return (
    <>
      {/* <div className="w-full py-1 h-[35px] flex justify-center text-white bg-green-600/95">
        <ul className="w-[85%] max-w-[1400px] flex justify-between">
          <li>+998xxxxxxxxx</li>
          <li className="flex items-center">
            <ImLocation /> <span className="ml-1">Tashkent, Chirchiq St.</span>{" "}
          </li>
        </ul>
      </div> */}
      <nav
        className={`fixed top-0 w-[100vw] left-0 right-0 p-2 z-50 ${
          location.pathname === "/"
            ? `${
                sticking
                  ? `text-green-400 ${
                      open ? "bg-black/90" : "bg-white/95"
                    } transition-colors duration-200 border-b`
                  : ""
              }`
            : `text-green-400 ${
                open ? "bg-black/90" : "bg-white/95"
              } transition duration-200 border-b`
        } ${open ? "bg-black/90" : ""}`}
      >
        <div className="w-full h-14 flex z-10 py-1 bg-transparent">
          <div className="w-[95%] mx-auto hidden lg:flex max-w-[1400px] justify-between items-center">
            <Link to={"/"} className="cursor-pointer">
              <img src="/logo.jpg" className="w-[75px]" alt="Pic" />
            </Link>
            <ul className="grid grid-rows-1 grid-cols-5 px-4 py-2">
              <li
                className={`text-center cursor-pointer text-lg ${
                  location.pathname === "/"
                    ? `${
                        sticking
                          ? "hover:text-green-500 text-green-400"
                          : "hover:text-white/100 text-white/80"
                      } cursor-pointer transition duration-200 text-xl w-[200px]`
                    : "hover:text-green-500 text-green-400"
                }`}
              >
                <Link to="/" className="hover:text-green-500">
                  {lang === "ru" ? "Домашняя страница" : "Bosh sahifa"}
                </Link>
              </li>
              <li
                className={`text-center cursor-pointer text-lg ${
                  location.pathname === "/"
                    ? `${
                        sticking
                          ? "hover:text-green-500 text-green-400"
                          : "hover:text-white/100 text-white/80"
                      } cursor-pointer transition duration-200 text-xl w-[200px]`
                    : "hover:text-green-500 text-green-400"
                }`}
              >
                <Link to={"/tractors"} className="hover:text-green-500">
                  {lang === "ru" ? "Тракторы" : "Traktorlar"}
                </Link>
              </li>
              <li
                className={`text-center cursor-pointer text-lg ${
                  location.pathname === "/"
                    ? `${
                        sticking
                          ? "hover:text-green-500 text-green-400"
                          : "hover:text-white/100 text-white/80"
                      } cursor-pointer transition duration-200 text-xl w-[150px]`
                    : "hover:text-green-500 text-green-400"
                }`}
              >
                <Link to={"/agrotechnics"} className="hover:text-green-500">
                  {lang === "ru" ? "Агротехника" : "Agrotexnikalar"}
                </Link>
              </li>
              <li
                className={`text-center cursor-pointer text-lg ${
                  location.pathname === "/"
                    ? `${
                        sticking
                          ? "hover:text-green-500 text-green-400"
                          : "hover:text-white/100 text-white/80"
                      } cursor-pointer transition duration-200 text-xl w-[120px]`
                    : "hover:text-green-500 text-green-400"
                }`}
              >
                <Link to={"/news"} className="hover:text-green-500">
                  {lang === "ru" ? "Новости" : "Yangiliklar"}
                </Link>
              </li>
              <li className="w-[140px] flex text-white outline-none focus:rign-0 border-0 focus:bottom-0">
                <a
                  href="#"
                  className={`cursor-pointer flex items-center mx-1 ${
                    location.pathname === "/"
                      ? `${
                          sticking
                            ? "hover:text-red-600 text-red-500"
                            : "hover:text-white/100 text-white/80"
                        } cursor-pointer transition duration-200 text-xl w-[120px]`
                      : "hover:text-red-600 text-red-500"
                  }`}
                  onClick={() => {
                    localStorage.setItem("lang", JSON.stringify("ru"));
                    setLang("ru");
                  }}
                >
                  <img
                    src="/Flag_of_Russia.png"
                    className="object-cover w-[25px] h-[20px] mx-2"
                    alt="Ru"
                  />
                  RU
                </a>
                <a
                  href="#"
                  className={`cursor-pointer flex items-center mx-1 ${
                    location.pathname === "/"
                      ? `${
                          sticking
                            ? "hover:text-green-500 text-green-400"
                            : "hover:text-white/100 text-white/80"
                        } cursor-pointer transition duration-200 text-xl w-[120px]`
                      : "hover:text-green-500 text-green-400"
                  }`}
                  onClick={() => {
                    localStorage.setItem("lang", JSON.stringify("uz"));
                    setLang("uz");
                  }}
                >
                  <img
                    src="/Flag_of_Uzbekistan.png"
                    className="object-cover w-[25px] h-[20px] mx-2"
                    alt="Uzb"
                  />
                  UZ
                </a>
              </li>
            </ul>
          </div>
          <div className="w-[100%] flex lg:hidden justify-between items-center">
            <img src="/logo.jpg" className="w-[75px] ml-[5%]" alt="Pic" />
            <div
              id="burger-menu"
              className="fixed top-1 right-1 z-50"
              onClick={handleClick}
            >
              <span></span>
            </div>
          </div>
        </div>
      </nav>
      <ul
        className={`w-[80vw] fixed top-[72px] bottom-0 left-[82px]
        ${open ? "" : "translate-x-full"}  
        z-40 h-[95vh] flex md:hidden flex-col px-4 py-2 bg-red-600/95 transition duration-1000`}
      >
        <li className="mt-4 flex justify-center text-white outline-none focus:rign-0 border-0 focus:bottom-0">
          <button
            className="cursor-pointer flex items-center mx-1"
            onClick={() => setLang("ru")}
          >
            <img
              src="/Flag_of_Russia.png"
              className="object-cover w-[25px] h-[20px] mx-1"
              alt="Ru"
            />
            RU
          </button>
          <button
            className="cursor-pointer flex items-center mx-1"
            onClick={() => setLang("uz")}
          >
            <img
              src="/Flag_of_Uzbekistan.png"
              className="object-cover w-[25px] h-[20px] mx-1"
              alt="Uzb"
            />
            UZ
          </button>
        </li>
        <li
          className={`text-center cursor-pointer text-lg p-2 mt-4 hover:text-white/100 text-white/80 transition duration-200 min-w-[150px]`}
        >
          <Link to="/" className="hover:text-white">
            {lang === "ru" ? "Домашняя страница" : "Bosh sahifa"}
          </Link>
        </li>
        <li
          className={`text-center cursor-pointer text-lg p-2 hover:text-white/100 text-white/80 transition duration-200 min-w-[150px]`}
        >
          <Link to={"/tractors"} className="hover:text-white">
            {lang === "ru" ? "Тракторы" : "Traktorlar"}
          </Link>
        </li>
        <li
          className={`text-center cursor-pointer text-lg p-2 hover:text-white/100 text-white/80 transition duration-200 min-w-[150px]`}
        >
          <Link to={"/agrotechnics"} className="hover:text-white">
            {lang === "ru" ? "Агротехника" : "Agrotexnikalar"}
          </Link>
        </li>
        <li
          className={`text-center cursor-pointer text-lg p-2 hover:text-white/100 text-white/80 transition duration-200 min-w-[150px]`}
        >
          <Link to={"/news"} className="hover:text-white">
            {lang === "ru" ? "Новости" : "Yangiliklar"}
          </Link>
        </li>
      </ul>
    </>
  );
};

export default Navbar;
