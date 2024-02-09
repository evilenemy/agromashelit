import React from "react";
import { Link } from "react-router-dom";

const New = ({ news, api }) => (
  <Link
    to={"/news/" + news._id}
    className="flex justify-around items-center w-[450px] max-h-[150px] py-3 px-5 m-2 my-4 bg-zinc-200 rounded cursor-pointer"
  >
    <img
      width={"140px"}
      className="object-cover"
      src={api + news.images[0].path}
      alt="Pic"
    />
    <div className="ml-4">
      <h1 className="font-medium">{news.title}</h1>
      <p>
        {news.description.slice(0, 80)}
        ...
      </p>
    </div>
  </Link>
);

export default New;
