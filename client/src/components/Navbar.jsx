import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [sticking, setSticking] = useState(false);
  const [open, setOpen] = useState(false);

  const location = useLocation();

  const primaryHeader = document.querySelector("nav");
  const scrollWatcher = document.createElement("div");

  scrollWatcher.setAttribute("data-scroll-watcher", "");
  primaryHeader?.before(scrollWatcher);

  const nabObserver = new IntersectionObserver((entries) => {
    setSticking(!entries[0].isIntersecting);
  });

  nabObserver.observe(scrollWatcher);

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
                  ? "text-green-400 bg-white/95 transition-colors duration-200 border-b"
                  : ""
              }`
            : "text-green-400 bg-white/95 transition-colors duration-200 border-b"
        }`}
      >
        <div className="w-full h-14 flex z-10 justify-center py-1 bg-transparent">
          {/* <div className="w-[85%] hidden lg:flex max-w-[1400px] justify-between items-center">
            <h1 className="text-2xl font-medium text-white">Logo</h1>
            <img src="/logo.jpg" className="w-[75px]" alt="Pic" />
            <ul className="grid grid-rows-1 grid-cols-4 px-4 py-2">
              <li
                className={`text-center cursor-pointer text-lg ${
                  location.pathname === "/"
                    ? `${
                        sticking
                          ? "hover:text-green-500 text-green-400"
                          : "hover:text-white/100 text-white/80"
                      } cursor-pointer transition duration-200 text-xl min-w-[150px]`
                    : "hover:text-green-500 text-green-400"
                }`}
              >
                <Link to="/" className="hover:text-green-500">
                  Bosh sahifa
                </Link>
              </li>
              <li
                className={`text-center cursor-pointer text-lg ${
                  location.pathname === "/"
                    ? `${
                        sticking
                          ? "hover:text-green-500 text-green-400"
                          : "hover:text-white/100 text-white/80"
                      } cursor-pointer transition duration-200 text-xl min-w-[150px]`
                    : "hover:text-green-500 text-green-400"
                }`}
              >
                <Link to={"/tractor"} className="hover:text-green-500">
                  Traktorlar
                </Link>
              </li>
              <li
                className={`text-center cursor-pointer text-lg ${
                  location.pathname === "/"
                    ? `${
                        sticking
                          ? "hover:text-green-500 text-green-400"
                          : "hover:text-white/100 text-white/80"
                      } cursor-pointer transition duration-200 text-xl min-w-[150px]`
                    : "hover:text-green-500 text-green-400"
                }`}
              >
                <Link to={"/agrotechnic"} className="hover:text-green-500">
                  Agrotexnikalar
                </Link>
              </li>
              <li
                className={`text-center cursor-pointer text-lg ${
                  location.pathname === "/"
                    ? `${
                        sticking
                          ? "hover:text-green-500 text-green-400"
                          : "hover:text-white/100 text-white/80"
                      } cursor-pointer transition duration-200 text-xl min-w-[150px]`
                    : "hover:text-green-500 text-green-400"
                }`}
              >
                <Link to={"/news"} className="hover:text-green-500">
                  Yangiliklar
                </Link>
              </li>
            </ul>
          </div>  */}
          <div className="w-[100%] flex lg:hidden justify-between items-center">
            {/* <h1 className="text-2xl font-medium text-white">Logo</h1> */}
            <img src="/logo.jpg" className="w-[75px]" alt="Pic" />
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
      {/* <ul
        className={`w-[80vw] fixed top-0 right-0 ${
          open ? "" : "translate-x-full"
        } z-40 h-[100vh] flex flex-col px-4 py-2 bg-black transition duration-1000`}
      >
        <li
          className={`text-center cursor-pointer text-lg p-2 mt-20 ${
            location.pathname === "/"
              ? `${
                  sticking
                    ? "hover:text-green-500 text-green-400"
                    : "hover:text-white/100 text-white/80"
                } cursor-pointer transition duration-200 text-xl min-w-[150px]`
              : "hover:text-green-500 text-green-400"
          }`}
        >
          <Link to="/" className="hover:text-green-500">
            Bosh sahifa
          </Link>
          <button onClick={() => setOpen((prev) => !prev)}>Click me</button>
        </li>
        <li
          className={`text-center cursor-pointer text-lg p-2 ${
            location.pathname === "/"
              ? `${
                  sticking
                    ? "hover:text-green-500 text-green-400"
                    : "hover:text-white/100 text-white/80"
                } cursor-pointer transition duration-200 text-xl min-w-[150px]`
              : "hover:text-green-500 text-green-400"
          }`}
        >
          <Link to={"/tractor"} className="hover:text-green-500">
            Traktorlar
          </Link>
        </li>
        <li
          className={`text-center cursor-pointer text-lg p-2 ${
            location.pathname === "/"
              ? `${
                  sticking
                    ? "hover:text-green-500 text-green-400"
                    : "hover:text-white/100 text-white/80"
                } cursor-pointer transition duration-200 text-xl min-w-[150px]`
              : "hover:text-green-500 text-green-400"
          }`}
        >
          <Link to={"/agrotechnic"} className="hover:text-green-500">
            Agrotexnikalar
          </Link>
        </li>
        <li
          className={`text-center cursor-pointer text-lg p-2 ${
            location.pathname === "/"
              ? `${
                  sticking
                    ? "hover:text-green-500 text-green-400"
                    : "hover:text-white/100 text-white/80"
                } cursor-pointer transition duration-200 text-xl min-w-[150px]`
              : "hover:text-green-500 text-green-400"
          }`}
        >
          <Link to={"/news"} className="hover:text-green-500">
            Yangiliklar
          </Link>
        </li>
      </ul> */}
    </>
    // <header className="">
    //   <nav className="navbar navbar-expand-lg">
    //     <div className="container">
    //       <a className="navbar-brand" href="index.html">
    //         <h2 style={{ color: "#4ADE80" }}>Agromash Elit</h2>
    //       </a>
    //       <button
    //         className="navbar-toggler"
    //         type="button"
    //         data-toggle="collapse"
    //         data-target="#navbarResponsive"
    //         aria-controls="navbarResponsive"
    //         aria-expanded="false"
    //         aria-label="Toggle navigation"
    //       >
    //         <span className="navbar-toggler-icon"></span>
    //       </button>
    //       <div className="collapse navbar-collapse" id="navbarResponsive">
    //         <ul className="navbar-nav ml-auto">
    //           <li className="nav-item active">
    //             <a className="nav-link" href="#top">
    //               Asosiy
    //               <span className="sr-only">(current)</span>
    //             </a>
    //           </li>
    //           <li className="nav-item">
    //             <a className="nav-link" href="about.html">
    //               Biz Haqimizda
    //             </a>
    //           </li>
    //           <li className="nav-item">
    //             <a className="nav-link" href="services.html">
    //               Bizning xizmatlar
    //             </a>
    //           </li>
    //           <li className="nav-item">
    //             <a className="nav-link" href="contact.html">
    //               Biz bilan aloqa
    //             </a>
    //           </li>
    //         </ul>
    //       </div>
    //     </div>
    //   </nav>
    // </header>
  );
};

export default Navbar;
