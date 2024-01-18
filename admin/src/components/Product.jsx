import React from "react";
import { Link } from "react-router-dom";

const Product = ({ product, api }) => {
  return (
    <Link
      to={"/" + product._id}
      className="flex justify-around items-center w-[450px] max-h-[150px] py-3 px-5 m-2 my-4 bg-zinc-200 rounded cursor-pointer"
    >
      <img
        width={"140px"}
        className="object-cover"
        src={api + "/" + product.images[0].path}
        alt="Pic"
      />
      <div className="ml-4">
        <h1 className="font-medium">{product.title}</h1>
        <p>
          {product.description.slice(0, 80)}
          ...
        </p>
        <h3 className="font-medium">{product.price} sum</h3>
      </div>
    </Link>
  );
};

export default Product;
