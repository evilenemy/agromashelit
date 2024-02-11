import React from "react";
import { Link } from "react-router-dom";

const Product = ({
  product = {
    _id: "43534534fdsvsdvsdv",
    title: "BERKO-025",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor magnam rem nihil, doloremque fuga dolorem obcaecati praesentium in molestiae dicta!",
    images: [{ path: "/product-1.jpg" }],
  },
  api,
}) => {
  const submitOrder = () => navigation("/submit", { state: product });
  return (
    <Link
      to={`/tractor/${product._id}`}
      className="w-[340px] p-1 pb-3 bg-zinc-100 text-white rounded my-4"
    >
      <img src={api + product.images[0].path} className="" alt="Pic" />
      <div className="down-content">
        <h1
          className={`text-xl p-1 mt-2 line-clamp-1 text-black font-bold font-poppins`}
        >
          {product.title}
        </h1>
        <h3 className="ml-1 mt-1 text-sm line-clamp-3 font-poppins leading-7 text-zinc-600">
          {product.description}
        </h3>
        <button
          onClick={submitOrder}
          className="bg-green-400 py-2 px-4 inline-block mt-2 rounded ml-2 hover:bg-white hover:text-green-400 transition duration-300"
        >
          Buyurtma berish
        </button>
      </div>
    </Link>
  );
};

export default Product;
