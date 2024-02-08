import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = ({ isAdmin, setIsAdmin }) => {
  const location = useLocation();

  const [isTractor, setIsTractor] = useState(
    location.pathname === "/" || location.pathname === "/create"
  );
  const [isAgro, setIsAgro] = useState(
    location.pathname === "/agro" || location.pathname === "/agro/create"
  );
  const [isNews, setIsNews] = useState(
    location.pathname === "/news" || location.pathname === "/news/create"
  );
  const [isOrder, setIsOrder] = useState(
    location.pathname === "/orders" || location.pathname === "/orders/create"
  );
  const [isSlider, setIsSlider] = useState(
    location.pathname === "/slider" || location.pathname === "/slider/create"
  );

  const setActivity = (tractor, agro, news, order, slider) => {
    setIsTractor(tractor);
    setIsAgro(agro);
    setIsNews(news);
    setIsOrder(order);
    setIsSlider(slider);
  };

  const logoutAdmin = () => {
    sessionStorage.setItem("authAdmin", JSON.stringify(false));
    setIsAdmin(false);
  };

  return (
    <nav className="bg-gray-800 border-b border-b-slate-600 w-full h-16 p-4 flex items-center justify-around select-none">
      <a
        href="#"
        className="text-white text-lg cursor-pointer"
        style={{ fontFamily: "Courgette" }}
      >
        Agromash Elit
      </a>
      <div className="min-w-[500px] flex justify-around items-center font-medium">
        <Link
          to="/"
          onClick={() => setActivity(true, false, false, false, false)}
          className={`px-4 py-2 ${
            isTractor && isAdmin && "bg-slate-500"
          } hover:bg-slate-700 rounded cursor-pointer text-white/90 bg-opacity-20 hover:text-white/100 transition duration-150`}
        >
          Traktorlar
        </Link>
        <Link
          to="/agro"
          onClick={() => setActivity(false, true, false, false, false)}
          className={`px-4 py-2 ${
            isAgro && isAdmin && "bg-slate-500"
          } hover:bg-slate-700 rounded cursor-pointer text-white/90 bg-opacity-20 hover:text-white/100 transition duration-150`}
        >
          Agro texnikalar
        </Link>
        <Link
          to="/news"
          onClick={() => setActivity(false, false, true, false, false)}
          className={`px-4 py-2 ${
            isNews && isAdmin && "bg-slate-500"
          } hover:bg-slate-700 rounded cursor-pointer text-white/90 bg-opacity-20 hover:text-white/100 transition duration-150`}
        >
          Yangiliklar
        </Link>
        <Link
          to="/order"
          onClick={() => setActivity(false, false, false, true, false)}
          className={`px-4 py-2 ${
            isOrder && isAdmin && "bg-slate-500"
          } hover:bg-slate-700 rounded cursor-pointer text-white/90 bg-opacity-20 hover:text-white/100 transition duration-150`}
        >
          Buyurtmalar
        </Link>
        <Link
          to="/slider"
          onClick={() => setActivity(false, false, false, false, true)}
          className={`px-4 py-2 ${
            isSlider && isAdmin && "bg-slate-500"
          } hover:bg-slate-700 rounded cursor-pointer text-white/90 bg-opacity-20 hover:text-white/100 transition duration-150`}
        >
          Slider
        </Link>
      </div>
      <div
        className={`${
          isAdmin ? "flex" : "hidden"
        } justify-around py-2 items-center min-w-[350px] text-white`}
      >
        <h3>
          Xush kelibsiz,{" "}
          <span className="font-medium text-orange-300">admin</span>
        </h3>
        <button
          onClick={logoutAdmin}
          className="bg-red-600 py-2 px-4 rounded hover:bg-red-700 transition duration-150 text-white"
        >
          Chiqish
        </button>
      </div>
      <button
        onClick={logoutAdmin}
        className={`${
          isAdmin ? "hidden" : ""
        } bg-blue-700 py-2 px-4 rounded hover:bg-blue-800 transition duration-150 text-white`}
      >
        Kirish
      </button>
    </nav>
  );
};

export default Navbar;
