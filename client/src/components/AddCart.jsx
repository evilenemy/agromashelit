import React, { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";

const AddCart = ({ product, setOpen }) => {
  const [lengthProduct, setLengthProduct] = useState(1);

  const format = (num) =>
    String(num).replace(/(?<!\..*)(\d)(?=(?:\d{3})+(?:\.|$))/g, "$1 ");
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.3 }}
        className="fixed z-30 top-0 left-0 right-0 bottom-0 overflow-hidden bg-black/75 flex justify-center items-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
          className="bg-white w-2/3 p-4 h-[450px] flex justify-between"
        >
          <div className="w-1/2 flex items-center justify-center">
            <img
              src={product.images[0].path}
              className="h-full object-contain rounded-md"
              alt="Pic"
            />
          </div>
          <div className="w-1/2 h-full relative">
            <button
              onClick={() => setOpen(false)}
              className="absolute right-3 top-2"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="24" height="24" rx="12" fill="#DFE0E2"></rect>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8.28033 7.21967C7.98744 6.92678 7.51256 6.92678 7.21967 7.21967C6.92678 7.51256 6.92678 7.98744 7.21967 8.28033L10.9393 12L7.21967 15.7197C6.92678 16.0126 6.92678 16.4874 7.21967 16.7803C7.51256 17.0732 7.98744 17.0732 8.28033 16.7803L12 13.0607L15.7197 16.7803C16.0126 17.0732 16.4874 17.0732 16.7803 16.7803C17.0732 16.4874 17.0732 16.0126 16.7803 15.7197L13.0607 12L16.7803 8.28033C17.0732 7.98744 17.0732 7.51256 16.7803 7.21967C16.4874 6.92678 16.0126 6.92678 15.7197 7.21967L12 10.9393L8.28033 7.21967Z"
                  fill="#4E5155"
                ></path>
              </svg>
            </button>
            <h1 className="text-2xl w-[90%]">{product.title}</h1>
            <hr className="my-10 w-[90%]" />
            <div>
              <h3 className="font-normal">Количество:</h3>
              <div className="flex items-center">
                <div className="relative flex w-[130px] mt-2">
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
                      color={
                        lengthProduct >= product.maxProduct ? "#7f828693" : ""
                      }
                    />
                  </button>
                </div>
                <h3 className="ml-4 text-green-600 mt-2">
                  В наличии {product.maxProduct}
                </h3>
              </div>
            </div>
            <div className="mt-5">
              <h3 className="font-normal">Цена:</h3>
              <h1 className="text-xl w-[40%] font-medium flex items-center justify-between mt-2">
                {format(lengthProduct * product.price)} сум{" "}
                {/* <p className="line-through text-sm text-[#7f8286]">
                3 234 000 сум
              </p> */}
              </h1>
            </div>
            <button className="mt-5 w-[90%] py-3 px-4 bg-orange-500 text-white rounded-md hover:bg-orange-600 duration-100">
              Добавить в корзину
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default AddCart;
