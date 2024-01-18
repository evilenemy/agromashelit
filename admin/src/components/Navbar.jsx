import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = ({ isAdmin, setIsAdmin }) => {
  const location = useLocation();

  const [isProduct, setIsProduct] = useState(
    location.pathname === "/" || location.pathname === "/create"
  );
  const [isCategory, setIsCategory] = useState(
    location.pathname === "/categories" ||
      location.pathname === "/categories/create"
  );
  const [isEvent, setIsEvent] = useState(
    location.pathname === "/events" || location.pathname === "/events/create"
  );
  const [isUser, setIsUser] = useState(
    location.pathname === "/users" || location.pathname === "/users/create"
  );

  const setActivity = (product, category, event, user) => {
    setIsProduct(product);
    setIsCategory(category);
    setIsEvent(event);
    setIsUser(user);
  };

  const logoutAdmin = () => {
    sessionStorage.setItem("authAdmin", JSON.stringify(false));
    setIsAdmin(false);
  };

  return (
    <nav className="bg-gray-800 border-b border-b-slate-600 w-full h-16 p-4 flex items-center justify-around select-none">
      <a
        href="https://nishtyaki.uz"
        className="text-white text-lg cursor-pointer"
        style={{ fontFamily: "Courgette" }}
      >
        Nishtyaki
      </a>
      <div className="min-w-[500px] flex justify-around items-center font-medium">
        <Link
          to="/"
          onClick={() => setActivity(true, false, false, false)}
          className={`px-4 py-2 ${
            isProduct && isAdmin
              ? "bg-slate-500 text-orange-300"
              : "text-orange-200"
          } hover:bg-slate-700 rounded cursor-pointer bg-opacity-20 hover:text-orange-300 transition duration-150`}
        >
          Товар
        </Link>
        <Link
          to="/categories"
          onClick={() => setActivity(false, true, false, false)}
          className={`px-4 py-2 ${
            isCategory && isAdmin
              ? "bg-slate-500 text-orange-300"
              : "text-orange-200"
          } hover:bg-slate-700 rounded cursor-pointer bg-opacity-20 hover:text-orange-300 transition duration-150`}
        >
          Категория
        </Link>
        <Link
          to="/events"
          onClick={() => setActivity(false, false, true, false)}
          className={`px-4 py-2 ${
            isEvent && isAdmin
              ? "bg-slate-500 text-orange-300"
              : "text-orange-200"
          } hover:bg-slate-700 rounded cursor-pointer bg-opacity-20 hover:text-orange-300 transition duration-150`}
        >
          Новинки
        </Link>
        <Link
          to="/users"
          onClick={() => setActivity(false, false, false, true)}
          className={`px-4 py-2 ${
            isUser && isAdmin
              ? "bg-slate-500 text-orange-300"
              : "text-orange-200"
          } hover:bg-slate-700 rounded cursor-pointer bg-opacity-20 hover:text-orange-300 transition duration-150`}
        >
          Пользователей
        </Link>
      </div>
      <div
        className={`${
          isAdmin ? "flex" : "hidden"
        } justify-around py-2 items-center min-w-[350px] text-white`}
      >
        <h3>
          Добро пожаловать,{" "}
          <span className="font-medium text-orange-300">admin</span>
        </h3>
        <button
          onClick={logoutAdmin}
          className="bg-red-600 py-2 px-4 rounded hover:bg-red-700 transition duration-150 text-white"
        >
          Выйти
        </button>
      </div>
      <button
        onClick={logoutAdmin}
        className={`${
          isAdmin ? "hidden" : ""
        } bg-blue-700 py-2 px-4 rounded hover:bg-blue-800 transition duration-150 text-white`}
      >
        Войти
      </button>
    </nav>
  );
};

export default Navbar;
