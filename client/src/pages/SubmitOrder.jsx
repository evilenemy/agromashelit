import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

const SubmitOrder = ({ api }) => {
  const location = useLocation();
  const navigate = useNavigate()

  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [product] = useState(location.state);

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(`${api}/api/order`, { name, number })
      .then((res) => alert("Buyurtmangiz muvaffaqiyatli qabul qilindi."))
      .catch((res) => alert("Something went wrong, please try again later."));

    navigate("/");
  };

  return (
    <section className="w-[95%] max-w-[1400px] md:w-[80%] p-4 mt-[100px] mx-auto">
      <h1 className="text-lg font-medium">{product.title}</h1>
      <div className="w-full p-2 flex flex-col md:flex-row mt-5">
        <div className="w-full md:w-[50%]">
          <img
            src={api + product.images[0].path}
            className="max-w-[50%] mx-auto object-contain"
            alt="Pic"
          />
        </div>
        <form
          className="w-full mt-5 md:mt-0 md:w-[50%]"
          onSubmit={handleSubmit}
        >
          <input
            className="w-full md:w-[60%] my-2 bg-gray-200 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white"
            type="text"
            placeholder="Ismingiz"
            onInput={(e) => setName(e.target.value)}
            value={name}
          />
          <input
            className="w-full md:w-[60%] bg-gray-200 my-2 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white"
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
