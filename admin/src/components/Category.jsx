import React from "react";
import { Link } from "react-router-dom";

const Category = ({ category }) => {
  return (
    <Link
      to={"/categories/" + category._id}
      className="flex justify-around items-center max-w-[350px] max-h-[60px] py-3 px-5 m-2 my-4 bg-zinc-200 rounded cursor-pointer"
    >
      {category.title}
    </Link>
  );
};

export default Category;
