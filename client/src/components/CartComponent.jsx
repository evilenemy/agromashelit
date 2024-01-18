import React, { useEffect, useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { Link } from "react-router-dom";

const CartComponent = ({ product, index, setOrderProducts }) => {
  const [lengthProduct, setLengthProduct] = useState(product.productLength);
  const [isHover, setIsHover] = useState(false);

  useEffect(() => {
    setOrderProducts((prevProducts) =>
      prevProducts.map((product) =>
        product._id === product._id
          ? { ...product, productLength: lengthProduct }
          : product
      )
    );
  }, [lengthProduct]);

  document
    .querySelector("#delete-btn-" + product._id)
    ?.addEventListener("mouseover", () => setIsHover(true));
  document
    .querySelector("#delete-btn-" + product._id)
    ?.addEventListener("mouseout", () => setIsHover(false));

  const format = (num) =>
    String(num).replace(/(?<!\..*)(\d)(?=(?:\d{3})+(?:\.|$))/g, "$1 ");

  const removeProduct = () => {
    setOrderProducts((prevProducts) =>
      prevProducts.filter((product_) => product_._id !== product._id)
    );
  };

  return (
    <div className="w-full min-h-[190px] p-1 pb-4 md:pb-1">
      <hr className={`mb-5 ${index === 0 && "hidden"}`} />
      <div
        className={`grid grid-cols-6 grid-rows-3 md:grid-rows-1 ${
          index === 0 && "mt-5"
        }`}
      >
        <img
          src={product.images[0].path}
          alt="Product Pic"
          className="h-[80px] md:h-[100px] lg:h-[140px] min-w-max row-span-2 my-auto object-contain"
        />
        <Link
          to={"/product/" + product._id}
          className="col-span-5 md:col-span-3 text-sm md:text-xl text-left break-words ml-5 sm:ml-4"
        >
          {product.title}
        </Link>
        <br className="block md:hidden" />
        <h1 className="text-lg md:text-2xl col-span-4 md:col-span-2 font-medium text-end">
          {format(lengthProduct * product.price)} сум
        </h1>
        <br className="block md:hidden" />
        <div className="flex flex-col justify-around mt-4 px-4 col-span-3">
          <div className="relative flex w-[100px] sm:w-[130px]">
            <button
              className="absolute w-1/3 left-0 text-xl h-full flex justify-center items-center"
              onClick={() =>
                setLengthProduct(
                  lengthProduct > 1 ? lengthProduct - 1 : lengthProduct
                )
              }
            >
              <FaMinus color={lengthProduct <= 1 ? "#7f828693" : ""} />
            </button>
            <input
              type="number"
              onInput={(e) =>
                setLengthProduct(
                  e.target.value >= product.maxProduct
                    ? product.maxProduct
                    : e.target.value <= 1
                    ? 1
                    : e.target.value
                )
              }
              value={lengthProduct}
              className="w-full py-2 text-center outline-none ring-1 rounded-sm ring-[#7f828693]"
            />
            <button
              className="absolute w-1/3 right-0 h-full flex justify-center items-center"
              onClick={() =>
                setLengthProduct(
                  lengthProduct < product.maxProduct
                    ? lengthProduct + 1
                    : lengthProduct
                )
              }
            >
              <FaPlus
                color={lengthProduct >= product.maxProduct ? "#7f828693" : ""}
              />
            </button>
          </div>
          <span className="text-zinc-500 mt-2 hidden lg:block">
            {format(product.price)} сум /ед.
          </span>
        </div>
        <button
          id={"delete-btn-" + product._id}
          onClick={removeProduct}
          className={`flex items-center justify-end col-span-2 duration-300 mt-2 ${
            isHover ? "text-black" : "text-zinc-400"
          }`}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M9.75 3.5C9.33579 3.5 9 3.83579 9 4.25V5H15V4.25C15 3.83579 14.6642 3.5 14.25 3.5H9.75ZM7.5 4.25V5H3.75C3.33579 5 3 5.33579 3 5.75C3 6.16421 3.33579 6.5 3.75 6.5H4.30005L5.62088 19.9681C5.73386 21.1202 6.70255 21.9985 7.86014 21.9985H16.1399C17.2975 21.9985 18.2661 21.1202 18.3791 19.9681L19.7 6.5H20.25C20.6642 6.5 21 6.16421 21 5.75C21 5.33579 20.6642 5 20.25 5H16.5V4.25C16.5 3.00736 15.4926 2 14.25 2H9.75C8.50736 2 7.5 3.00736 7.5 4.25ZM11 9.75C11 9.33579 10.6642 9 10.25 9C9.83579 9 9.5 9.33579 9.5 9.75V17.25C9.5 17.6642 9.83579 18 10.25 18C10.6642 18 11 17.6642 11 17.25V9.75ZM14.5 9.75C14.5 9.33579 14.1642 9 13.75 9C13.3358 9 13 9.33579 13 9.75V17.25C13 17.6642 13.3358 18 13.75 18C14.1642 18 14.5 17.6642 14.5 17.25V9.75Z"
              fill={isHover ? "black" : "#8B8E99"}
              className="duration-300"
            ></path>
          </svg>
          <span className="ml-2">Удалить</span>
        </button>
      </div>
    </div>
  );
};

export default CartComponent;
