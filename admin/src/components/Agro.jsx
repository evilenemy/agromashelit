import React from "react";
import { Link } from "react-router-dom";

const Agro = ({agro, api}) => (
  <Link
    to={"/agro/" + agro._id}
    className="flex justify-around items-center w-[450px] max-h-[150px] py-3 px-5 m-2 my-4 bg-zinc-200 rounded cursor-pointer"
  >
    <img
      width={"140px"}
      className="object-cover"
      src={api + agro.images[0].path}
      alt="Pic"
    />
    <div className="ml-4">
      <h1 className="font-medium">{agro.title}</h1>
      <p>
        {agro.description.slice(0, 80)}
        ...
      </p>
      <h3 className="font-medium">{agro.price} sum</h3>
    </div>
  </Link>
);

export default Agro;
