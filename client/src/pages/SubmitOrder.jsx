import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

const SubmitOrder = ({ api, lang }) => {
  const location = useLocation();
  const navigation = useNavigate();

  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [product] = useState(location.state);

  useEffect(() => {
    if (!location.state) {
      console.clear();
      navigation("/404");
      alert("Something went wrong, plase try again later.");
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    location.state &&
      axios
        .post(`${api}/api/order`, { name, number, product })
        .then((res) => {
          alert(
            lang === "ru"
              ? "Ваш заказ успешно получен! Мы свяжемся с вами в ближайшее время."
              : "Buyurtmangiz muvaffaqiyatli qabul qilindi! Siz bilan tez orada bog'lanamiz."
          );
          navigation("/");
        })
        .catch((res) => {
          navigation("/404");
          alert("Something went wrong, plase try again later.");
        });
  };

  return (
    <section className="w-[95%] max-w-[1400px] md:w-[80%] p-4 mt-[100px] mx-auto">
      <h1 className="text-lg font-medium">{product?.title}</h1>
      <div className="w-full p-2 flex flex-col md:flex-row mt-5">
        <div className="w-full md:w-[50%]">
          <img
            src={api + product?.images[0].path}
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
            placeholder={lang === "ru" ? "Ваше имя" : "Ismingiz"}
            onInput={(e) => setName(e.target.value)}
            value={name}
          />
          <input
            className="w-full md:w-[60%] bg-gray-200 my-2 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white"
            type="text"
            placeholder={lang === "ru" ? "Номер телефона" : "Telefon raqam"}
            onInput={(e) => setNumber(e.target.value)}
            value={number}
          />
          <br />
          <button
            type="submit"
            className="py-2 px-4 mt-3 block md:inline-block mx-auto md:mx-0 outline-none rounded bg-red-500 text-white hover:bg-red-600 duration-200"
          >
            {lang === "ru" ? "Отправить" : "Yuborish"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default SubmitOrder;
