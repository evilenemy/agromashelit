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
      className="w-[550px] bg-zinc-200 p-1 pr-2 flex justify-between text-white rounded my-4 relative"
    >
      <img
        src={api + product.images[0].path}
        className="w-[200px] h-[300px] object-cover rounded"
        alt="Pic"
      />
      <div className="w-[60%]">
        <h1
          className={`text-lg p-1 line-clamp-1 text-black font-bold font-poppins`}
        >
          {product.title}
        </h1>
        <ul>
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
          className="bg-green-400 py-2 absolute bottom-4 px-4 inline-block mt-2 rounded ml-2 hover:bg-white hover:text-green-400 transition duration-300"
        >
          Buyurtma berish
        </button>
      </div>
    </Link>
  );
};

export default Product;
