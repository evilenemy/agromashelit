import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/logo/logo words.png";
import { BiSearchAlt2 } from "react-icons/bi";
import { VscHome } from "react-icons/vsc";

const Navbar = ({ user }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [visibility, setVisibility] = useState(false);
  const [home, setHome] = useState(location.pathname === "/");
  const [catalog, setCatalog] = useState(false);
  const [cart, setCart] = useState(location.pathname === "/cart");
  const [saved, setSaved] = useState(location.pathname === "/saved");
  const [profile, setProfile] = useState(location.pathname === "/account");

  useEffect(() => {
    setHome(location.pathname === "/");
    setCart(location.pathname === "/cart");
    setSaved(location.pathname === "/saved");
    setProfile(location.pathname === "/profile");
    setSearch((prev) => (location.pathname.includes("/search") ? prev : ""));
  }, []);

  const activateState = (
    home_ = false,
    catalog_ = false,
    cart_ = false,
    saved_ = false,
    profile_ = false
  ) => {
    setHome(home_);
    setCatalog(catalog_);
    setCart(cart_);
    setSaved(saved_);
    setProfile(profile_);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/search?query=" + search);
  };

  return (
    <nav className="w-full min-h-[50px] mt-2">
      <div
        className={`w-[90%] max-w-[1400px] p-4 h-full mx-auto flex items-center justify-between laptop-visible`}
      >
        <Link to={"/"}>
          <img
            src={logo}
            className="hidden sm:block -ml-3"
            width={"150px"}
            alt="Logo"
          />
        </Link>
        <div className="flex w-full md:w-1/2 justify-evenly">
          {/* <button className="hidden sm:flex px-3 py-1 md:max-lg:py-2 bg-orange-400 bg-opacity-80 border rounded text-black text-lg items-center justify-evenly">
            {" "}
            <span className="text-xl mr-2">
              <TfiMenuAlt />
            </span>{" "}
            Каталог
          </button> */}
          <form
            className="relative rounded-md shadow-sm w-[80%] border border-slate-300 flex"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              id="search"
              className="w-full h-full outline-none rounded-md border-0 py-2 pl-4 text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6"
              placeholder="Искать товары и категории"
              value={search}
              onInput={(e) => setSearch(e.target.value)}
            />
            <button className="absolute inset-y-0 right-0 rounded-r bg-black bg-opacity-10 px-6 flex items-center justify-center">
              <BiSearchAlt2 />
            </button>
          </form>
        </div>
        <div className="w-[28%] bottom-0 py-1 flex items-center justify-around">
          <Link
            to={user ? "/profile" : "/login"}
            className="flex items-center cursor-pointer hover:bg-stone-200 rounded px-3 py-2.5 transition duration-200"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 3C9.79086 3 8 4.79086 8 7V8C8 10.2091 9.79086 12 12 12C14.2091 12 16 10.2091 16 8V7C16 4.79086 14.2091 3 12 3ZM9.5 7C9.5 5.61929 10.6193 4.5 12 4.5C13.3807 4.5 14.5 5.61929 14.5 7V8C14.5 9.38071 13.3807 10.5 12 10.5C10.6193 10.5 9.5 9.38071 9.5 8V7ZM5.50232 19.3686C5.97321 16.2577 9.01803 14.5 12.0022 14.5C14.9858 14.5 18.031 16.2577 18.5019 19.3686C18.5046 19.3866 18.5025 19.3972 18.5 19.4048C18.497 19.4137 18.4903 19.4269 18.4759 19.442C18.4453 19.4741 18.3894 19.5039 18.3171 19.5039H5.68718C5.61487 19.5039 5.55898 19.4741 5.52838 19.442C5.51394 19.4269 5.50726 19.4137 5.50427 19.4048C5.50174 19.3972 5.49961 19.3865 5.50232 19.3686ZM12.0022 13C8.57321 13 4.64037 15.0404 4.01922 19.1441C3.85624 20.2208 4.75727 21.0039 5.68718 21.0039H18.3171C19.247 21.0039 20.148 20.2208 19.985 19.1441C19.3638 15.0404 15.4306 13 12.0022 13Z"
                fill="black"
              ></path>
            </svg>{" "}
            <span className="ml-1 small-laptop-visible-reverse">
              {!user && "Войти"}
            </span>
          </Link>
          <Link
            to={"/saved"}
            className="flex items-center ml-4 cursor-pointer hover:bg-stone-200 rounded px-3 py-2.5 transition duration-200"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7.5 5.5C5.26935 5.5 3.5 7.30906 3.5 9.5C3.5 10.4282 3.87684 11.4436 4.5487 12.5105C5.21692 13.5716 6.14148 14.6274 7.15127 15.6219C8.55769 17.007 10.0318 18.1879 11.1708 19.1003C11.4734 19.3427 11.7523 19.5661 12 19.7694C12.2477 19.5661 12.5266 19.3427 12.8292 19.1003C13.9682 18.1879 15.4423 17.007 16.8487 15.6219C17.8585 14.6274 18.7831 13.5716 19.4513 12.5105C20.1232 11.4436 20.5 10.4282 20.5 9.5C20.5 7.30898 18.7314 5.5 16.5 5.5C14.3473 5.5 13.0738 7.20226 12.7262 7.74742C12.3889 8.27655 11.6111 8.27653 11.2738 7.74742C10.9262 7.20225 9.65273 5.5 7.5 5.5ZM2 9.5C2 6.49094 4.43065 4 7.5 4C9.73143 4 11.2249 5.30207 12 6.21581C12.7751 5.30207 14.2686 4 16.5 4C19.5702 4 22 6.49102 22 9.5C22 10.8218 21.4706 12.1189 20.7206 13.3098C19.9669 14.5066 18.954 15.6539 17.9013 16.6906C16.4429 18.1269 14.808 19.4384 13.6502 20.3672C13.1649 20.7565 12.7634 21.0786 12.4939 21.3144C12.2111 21.5619 11.7889 21.5619 11.5061 21.3144C11.2366 21.0786 10.8351 20.7565 10.3498 20.3672C9.19201 19.4384 7.55712 18.1269 6.09873 16.6906C5.04602 15.6539 4.03308 14.5066 3.27942 13.3098C2.52941 12.1189 2 10.8218 2 9.5Z"
                fill="#141415"
              ></path>
            </svg>{" "}
            <span className="ml-1 small-laptop-visible-reverse">Избранное</span>
          </Link>
          <Link
            to={"/cart"}
            className="flex items-center ml-4 cursor-pointer hover:bg-stone-200 rounded px-3 py-2.5 transition duration-200"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="black"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9 6.5C9 4.88779 10.2402 3.5 12 3.5C13.7598 3.5 15 4.88779 15 6.5V7.5H9V6.5ZM7.5 9V11.5H9V9H15V11.5H16.5V9H18.5V19.75C18.5 20.1642 18.1642 20.5 17.75 20.5H6.25C5.83579 20.5 5.5 20.1642 5.5 19.75V9H7.5ZM7.5 7.5V6.5C7.5 4.11221 9.35984 2 12 2C14.6402 2 16.5 4.11221 16.5 6.5V7.5H19.25H20V8.25V19.75C20 20.9926 18.9926 22 17.75 22H6.25C5.00736 22 4 20.9926 4 19.75V8.25V7.5H4.75H7.5Z"
              ></path>
            </svg>{" "}
            <span className="ml-1 small-laptop-visible-reverse">Корзина</span>
          </Link>
        </div>
      </div>
      <div className="mobile-visible w-full">
        <div className="header w-full flex justify-evenly items-center mt-5">
          <svg
            width="25"
            height="25"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`ui-icon return-icon ${visibility ? "" : "hidden"}`}
            onClick={() => setVisibility(false)}
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M15.8106 20.4983C16.0857 20.1887 16.0579 19.7146 15.7483 19.4394L7.8789 12L15.7483 4.56055C16.0579 4.28536 16.0857 3.81131 15.8106 3.50172C15.5354 3.19213 15.0613 3.16425 14.7517 3.43944L6.25173 11.4394C6.09161 11.5818 6 11.7858 6 12C6 12.2142 6.09161 12.4182 6.25173 12.5605L14.7517 20.5605C15.0613 20.8357 15.5354 20.8079 15.8106 20.4983Z"
              fill="black"
            ></path>
          </svg>
          <form
            className={`px-3 rounded-xl shadow-sm ${
              visibility ? "w-[78%]" : "w-[90%]"
            } border flex items-center bg-gray-100`}
            onSubmit={handleSubmit}
          >
            <label
              htmlFor="search"
              className="flex h-full left-1.5 justify-end items-center"
            >
              <BiSearchAlt2 fontSize={"22px"} color="#8B8E99" />
            </label>
            <input
              type="text"
              id="search"
              className="w-full h-full outline-none outline-offset-0 rounded-xl border-0 placeholder:text-sm py-2 pl-2 text-gray-900 bg-gray-100 focus:ring-0 ring-0"
              placeholder="Искать товары и категории"
              value={search}
              onInput={(e) => setSearch(e.target.value)}
              onClick={() => setVisibility(true)}
            />

            <div
              className="flex items-center justify-center h-full"
              onClick={() => setSearch("")}
            >
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={`ui-icon clean ${search.length > 0 ? "" : "hidden"}`}
              >
                <circle cx="12" cy="12" r="12" fill="#62656A"></circle>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M16.0657 9.0657C16.3781 8.75328 16.3781 8.24675 16.0657 7.93433C15.7533 7.62191 15.2467 7.62191 14.9343 7.93433L12 10.8686L9.06572 7.93433C8.7533 7.62191 8.24677 7.62191 7.93435 7.93433C7.62193 8.24675 7.62193 8.75328 7.93435 9.0657L10.8687 12L7.93433 14.9343C7.62191 15.2467 7.62191 15.7533 7.93433 16.0657C8.24675 16.3781 8.75328 16.3781 9.0657 16.0657L12 13.1314L14.9344 16.0657C15.2468 16.3781 15.7533 16.3781 16.0657 16.0657C16.3781 15.7533 16.3781 15.2467 16.0657 14.9343L13.1314 12L16.0657 9.0657Z"
                  fill="#DFE0E2"
                ></path>
              </svg>
            </div>
          </form>
        </div>
      </div>
      <ul className="laptop-visible max-w-[1400px] flex w-[90%] mx-auto justify-between items-center list-none text-gray-500">
        <li className="animate-lineFull transition duration-200 hover:text-orange-400 cursor-pointer">
          Электроника
          <div className="w-0 mt-1 animation-bar bg-orange-400"></div>
        </li>
        <li className="animate-lineFull transition duration-200 hover:text-orange-400 cursor-pointer">
          Бытовая техника
          <div className="w-0 mt-1 animation-bar bg-orange-400"></div>
        </li>
        <li className="animate-lineFull transition duration-200 hover:text-orange-400 cursor-pointer">
          Одежда
          <div className="w-0 mt-1 animation-bar bg-orange-400"></div>
        </li>
        <li className="animate-lineFull transition duration-200 hover:text-orange-400 cursor-pointer">
          Обувь
          <div className="w-0 mt-1 animation-bar bg-orange-400"></div>
        </li>
        <li className="animate-lineFull transition duration-200 hover:text-orange-400 cursor-pointer">
          Аксессуары
          <div className="w-0 mt-1 animation-bar bg-orange-400"></div>
        </li>
        <li className="animate-lineFull transition duration-200 hover:text-orange-400 cursor-pointer">
          Красота
          <div className="w-0 mt-1 animation-bar bg-orange-400"></div>
        </li>
        <li className="animate-lineFull transition duration-200 hover:text-orange-400 cursor-pointer">
          Здоровье
          <div className="w-0 mt-1 animation-bar bg-orange-400"></div>
        </li>
        <li className="animate-lineFull transition duration-200 hover:text-orange-400 cursor-pointer">
          Товары для дома
          <div className="w-0 mt-1 animation-bar bg-orange-400"></div>
        </li>
        <li className="animate-lineFull transition duration-200 hover:text-orange-400 cursor-pointer">
          Строительство и ремонт
          <div className="w-0 mt-1 animation-bar bg-orange-400"></div>
        </li>
        {/* <li className="transition duration-300 hover:text-orange-400 cursor-pointer">Автотовары</li> */}
        {/* <li
          className="flex justify-around cursor-pointer hover:text-orange-400 transition duration-200"
          onClick={() => activateState(false, true, false, false, false)}
        >
          <span className="-mt-2">Ещё</span>{" "}
          <span className="ml-1 text-sm">
            <FaAngleDown />
          </span>
        </li> */}
      </ul>
      <ul className="mobile-categories z-20 bg-white fixed bottom-0 list-none w-full items-center max-h-14">
        <li
          className={`flex items-center flex-col text-xs ${
            home ? "text-[#FFA836]" : "text-[#8B8E99]"
          } w-1/5 h-full`}
          onClick={() => {
            activateState(true, false, false, false, false);
            navigate("/");
          }}
        >
          <VscHome
            color={`${home ? "#FFA836" : "#8B8E99"}`}
            fontSize={"26px"}
          />{" "}
          Главная
        </li>
        <li
          className={`flex items-center flex-col text-xs text-[${
            catalog ? "#FFA836" : "#8B8E99"
          }] text-gray-400 w-1/5`}
          onClick={() => activateState(false, true, false, false, false)}
        >
          <svg
            width="28"
            height="28"
            viewBox="0 0 29 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="Icon">
              <g id="Icon_2">
                <path
                  d="M1.5 12.5C1.5 7.25329 5.75329 3 11 3C16.2467 3 20.5 7.25329 20.5 12.5C20.5 14.853 19.6445 17.0062 18.2276 18.6656L24.2795 24.6993C24.5728 24.9917 24.5735 25.4666 24.2811 25.7599C23.9886 26.0532 23.5138 26.054 23.2204 25.7615L17.1671 19.7264C15.5075 21.144 13.3537 22 11 22C5.75329 22 1.5 17.7467 1.5 12.5ZM11 4.5C6.58172 4.5 3 8.08172 3 12.5C3 16.9183 6.58172 20.5 11 20.5C15.4183 20.5 19 16.9183 19 12.5C19 8.08172 15.4183 4.5 11 4.5Z"
                  fill={`${catalog ? "#FFA836" : "#8B8E99"}`}
                ></path>
                <path
                  d="M22.75 6.00003C22.3358 6.00003 22 6.33582 22 6.75003C22 7.16424 22.3358 7.50003 22.75 7.50003H26.75C27.1642 7.50003 27.5 7.16424 27.5 6.75003C27.5 6.33582 27.1642 6.00003 26.75 6.00003H22.75Z"
                  fill={`${catalog ? "#FFA836" : "#8B8E99"}`}
                ></path>
                <path
                  d="M22.75 11.75C22.3358 11.75 22 12.0858 22 12.5C22 12.9142 22.3358 13.25 22.75 13.25H26.75C27.1642 13.25 27.5 12.9142 27.5 12.5C27.5 12.0858 27.1642 11.75 26.75 11.75H22.75Z"
                  fill={`${catalog ? "#FFA836" : "#8B8E99"}`}
                ></path>
                <path
                  d="M22.75 17.5C22.3358 17.5 22 17.8358 22 18.25C22 18.6642 22.3358 19 22.75 19H26.75C27.1642 19 27.5 18.6642 27.5 18.25C27.5 17.8358 27.1642 17.5 26.75 17.5H22.75Z"
                  fill={`${catalog ? "#FFA836" : "#8B8E99"}`}
                ></path>
              </g>
            </g>
          </svg>
          Каталог
        </li>
        <li
          className={`flex items-center flex-col text-xs text-[${
            cart ? "#FFA836" : "#8B8E99"
          }] text-gray-400 w-1/5`}
          onClick={() => {
            activateState(false, false, true, false, false);
            navigate("/cart");
          }}
        >
          <svg
            width="28"
            height="28"
            viewBox="0 0 29 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="Icon">
              <path
                id="Icon_2"
                d="M9.5 7C9.5 4.5444 11.4295 2 14.5 2C17.5705 2 19.5 4.54439 19.5 7H24V22.25C24 24.3211 22.3211 26 20.25 26H8.75C6.67893 26 5 24.3211 5 22.25V7H9.5ZM11 7H18C18 5.25561 16.6295 3.5 14.5 3.5C12.3705 3.5 11 5.2556 11 7ZM9.5 8.5H6.5V22.25C6.5 23.4926 7.50736 24.5 8.75 24.5H20.25C21.4926 24.5 22.5 23.4926 22.5 22.25V8.5H19.5V11.5H18V8.5H11V11.5H9.5V8.5Z"
                fill={cart ? "#FFA836" : "#8B8E99"}
              ></path>
            </g>
          </svg>
          Корзина
        </li>
        <li
          className={`flex items-center flex-col text-xs text-[${
            saved ? "#FFA836" : "#8B8E99"
          }] w-1/5`}
          onClick={() => {
            activateState(false, false, false, true, false);
            navigate("/saved");
          }}
        >
          <svg
            width="28"
            height="28"
            viewBox="0 0 29 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="Icon">
              <path
                id="Icon_2"
                d="M9.02703 4C5.38324 4 2.5 6.96273 2.5 10.5391C2.5 16 9.99615 21.5 14.0055 24.8139C14.2885 25.062 14.7115 25.062 14.9945 24.8139C19 21.5 26.5 16 26.5 10.5391C26.5 6.96281 23.6178 4 19.973 4C17.2008 4 15.3841 5.6987 14.5 6.79192C13.6159 5.6987 11.7992 4 9.02703 4ZM4 10.5391C4 7.7779 6.22487 5.5 9.02703 5.5C11.7441 5.5 13.3368 7.65762 13.7573 8.32095C14.1013 8.86359 14.8987 8.86359 15.2427 8.32095C15.6632 7.65762 17.2559 5.5 19.973 5.5C22.776 5.5 25 7.77781 25 10.5391C25 15.1 18 20.5 14.5 23.2667C11 20.5 4 15.1 4 10.5391Z"
                fill={saved ? "#FFA836" : "#8B8E99"}
              ></path>
            </g>
          </svg>
          Избранное
        </li>
        <li
          className={`flex items-center flex-col text-xs text-[${
            profile ? "#FFA836" : "#8B8E99"
          }] w-1/5`}
          onClick={() => {
            activateState(false, false, false, false, true);
            navigate("/profile");
          }}
        >
          <svg
            width="28"
            height="28"
            viewBox="0 0 29 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="Icon">
              <g id="Icon_2">
                <path
                  d="M14.5 3C11.4624 3 9 5.46243 9 8.5C9 11.5376 11.4624 14 14.5 14C17.5376 14 20 11.5376 20 8.5C20 5.46243 17.5376 3 14.5 3ZM10.5 8.5C10.5 6.29086 12.2909 4.5 14.5 4.5C16.7091 4.5 18.5 6.29086 18.5 8.5C18.5 10.7091 16.7091 12.5 14.5 12.5C12.2909 12.5 10.5 10.7091 10.5 8.5Z"
                  fill={profile ? "#FFA836" : "#8B8E99"}
                ></path>
                <path
                  d="M14.5025 15C9.16883 15 4.5 19.0011 4.5 24C4.5 25.1046 5.39543 26 6.5 26H22.5C23.6046 26 24.5 25.1046 24.5 24C24.5 19.0057 19.8369 15 14.5025 15ZM6 24C6 19.9911 9.82583 16.5 14.5025 16.5C19.1783 16.5 23 19.9943 23 24C23 24.2761 22.7761 24.5 22.5 24.5H6.5C6.22386 24.5 6 24.2761 6 24Z"
                  fill={profile ? "#FFA836" : "#8B8E99"}
                ></path>
              </g>
            </g>
          </svg>
          Кабинет
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
