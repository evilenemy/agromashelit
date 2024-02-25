import React from "react";
import { Link } from "react-router-dom";

const Product = ({
  product = {
    _id: "43534534fdsvsdvsdv",
    title: "BERKO-025",
    description: [],
    images: [{ path: "/product-1.jpg" }],
  },
  api,
}) => {
  const submitOrder = () => navigation("/submit", { state: product });
  return (
    <Link
      to={`/tractor/${product._id}`}
      className="w-[180px] md:w-[550px] bg-zinc-200 p-1 flex flex-col md:flex-row justify-between text-white rounded my-4 relative"
    >
      <img
        src={api + product.images[0].path}
        className="w-full md:w-[200px] h-[160px] md:h-[300px] object-cover rounded"
        alt="Pic"
      />
      <div className="w-[100%] md:w-[60%]">
        <h1
          className={`text-sm md:text-lg p-1 line-clamp-1 text-black font-semibold md:font-bold font-poppins text-center md:text-left`}
        >
          {product.title}
        </h1>
        <ul className="hidden md:block">
          {product.description
            .slice(
              0,
              product.description.length > 8 ? 8 : product.description.length
            )
            .map((text, index) => (
              <li
                key={index}
                className="text-sm line-clamp-1 font-poppins leading-6 text-zinc-600"
              >
                {text}
              </li>
            ))}
        </ul>
        {/* <h3 className="ml-1 mt-1 text-sm line-clamp-6 font-poppins leading-7 text-zinc-600">
          {product.description}
        </h3> */}
        <button
          onClick={submitOrder}
          className="w-[90%] bg-green-400 py-2 text-xs md:text-base px-4 mt-2 ml-[50%] -translate-x-1/2 md:translate-x-0 md:ml-0 mb-4 block rounded hover:bg-white hover:text-green-400 transition duration-300"
        >
          Buyurtma berish
        </button>
      </div>
    </Link>
  );
};

export default Product;
