import React from "react";

const Navbar = () => {
  return (
    <nav>
      <div className="w-full py-1 h-[35px] flex justify-center text-white bg-red-600/95">
        <ul className="w-[85%] max-w-[1400px] flex justify-between">
          <li>+998xxxxxxxxx</li>
          <li>UZ</li>
        </ul>
      </div>
      <div className="w-full h-14 flex absolute z-10 top-[35px] justify-center py-1 bg-transparent">
        <div className="w-[85%] max-w-[1400px] flex justify-between items-center">
          <h1 className="text-2xl font-medium text-white">Logo</h1>
          <ul className="grid grid-rows-1 grid-cols-3 px-4 py-2">
            <li className="text-center nav-tractor cursor-pointer text-white text-lg min-w-[150px]">
              Traktorlar
              <span className="nav-tractor-prog"></span>
            </li>
            <li className="text-center nav-agro cursor-pointer text-white text-lg min-w-[150px]">
              Agrotexnikalar
              <span className="nav-agro-prog"></span>
            </li>
            <li className="text-center nav-about cursor-pointer text-white text-lg min-w-[150px]">
              Biz haqimizda
              <span className="nav-about-prog"></span>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
