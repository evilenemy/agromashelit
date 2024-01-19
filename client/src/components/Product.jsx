import React from "react";
import { Link } from "react-router-dom";

const Product = ({
  product = {
    title: "BERKO-025 - ikki tomonlama tirkamali kombayn",
    images: [{ path: "/product-1.jpg" }],
  },
}) => {
  return (
    <div className="w-[290px] py-3 mx-1">
      <img src={product.images[0].path} className="border p-4" alt="Pic" />
      <h1 className="text-sm p-2 text-center">{product.title}</h1>
      <Link to={"/id"} className="w-[30%] bg-green-600/80 text-white hover:bg-green-600/95 transition duration-300 rounded mx-auto block py-2 px-4 cursor-pointer">
        Batafsil
      </Link>
    </div>
  );
};

export default Product;
