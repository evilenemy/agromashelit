import React from "react";
import { Link } from "react-router-dom";

const Slider = ({ slider, api }) => (
  <Link
    to={"/slider/" + slider?._id}
    className="flex justify-around items-center w-[150px] max-h-[150px] py-3 px-5 m-2 my-4 bg-zinc-200 rounded cursor-pointer"
  >
    <img
      width={"140px"}
      className="object-cover"
      src={api + slider?.path}
      alt="Pic"
    />
  </Link>
);

export default Slider;
