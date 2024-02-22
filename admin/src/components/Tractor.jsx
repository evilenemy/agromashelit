import React from "react";
import { Link } from "react-router-dom";

const Tractor = ({ tractor, api }) => {
  return (
    <Link
      to={"/" + tractor._id}
      className="flex justify-between items-center w-[450px] h-[300px] py-3 px-5 m-2 my-4 bg-zinc-200 rounded cursor-pointer"
    >
      <img
        width={"200px"}
        height={"300px"}
        className="object-cover"
        src={api + tractor.images[0].path}
        alt="Pic"
      />
      <div className="w-[48%]">
        <h1 className="font-medium">{tractor.title}</h1>
        <ul>
          {tractor.description.slice(0, 3).map((text, index) => (
            <li className="line-clamp-1" key={index}>
              {text}
            </li>
          ))}
        </ul>
        <h3 className="font-medium">{tractor.price} sum</h3>
      </div>
    </Link>
  );
};

export default Tractor;
