import React, { useState } from "react";
import { Link } from "react-router-dom";

const SubmitOrder = ({
  product = {
    _id: "5438fds7685rf78",
    title: "BERKO-025",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor magnam rem nihil, doloremque fuga dolorem obcaecati praesentium in molestiae dicta!",
    images: [{ path: "/product-1.jpg" }],
  },
}) => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Name: " + name + "\n" + "Number: " + number);
    setName("");
    setNumber("");
  };

  return (
    <section className="w-[95%] max-w-[1400px] md:w-[80%] p-4 mt-[100px] mx-auto">
      <Link
        to={`/product/${product._id}`}
        className="cursor-pointer text-lg font-medium"
      >
        {product.title}
      </Link>
      <div className="w-full p-2 flex flex-col md:flex-row mt-5">
        <div className="w-full md:w-[50%]">
          <img
            src={product.images[0].path}
            className="max-w-[50%] mx-auto object-contain"
            alt="Pic"
          />
        </div>
        <form
          className="w-full mt-5 md:mt-0 md:w-[50%]"
          onSubmit={handleSubmit}
        >
          <input
            class="w-full md:w-[60%] my-2 bg-gray-200 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white"
            type="text"
            placeholder="Ismingiz"
            onInput={(e) => setName(e.target.value)}
            value={name}
          />
          <input
            class="w-full md:w-[60%] bg-gray-200 my-2 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white"
            type="text"
            placeholder="Telefon raqam"
            onInput={(e) => setNumber(e.target.value)}
            value={number}
          />
          <br />
          <button
            type="submit"
            className="py-2 px-4 mt-3 block md:inline-block mx-auto md:mx-0 outline-none rounded bg-red-500 text-white hover:bg-red-600 duration-200"
          >
            Yuborish
          </button>
        </form>
      </div>
    </section>
  );
};

export default SubmitOrder;
