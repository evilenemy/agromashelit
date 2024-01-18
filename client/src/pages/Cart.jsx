import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Slider from "../components/Slider";
import Product from "../components/Product";
import CartComponent from "../components/CartComponent";
import empty_cart from "../assets/icons/empty-cart.png";

const Cart = () => {
  const [orderProducts, setOrderProducts] = useState([
    {
      _id: "31434f9sd6g9sd",
      images: [{ path: "/offers/maslo.jpg" }],
      title: "Телевизор Artel A43KF5500 Android, чёрныйdasdasdasdasd",
      maxProduct: 41,
      productLength: 1,
      price: 1980000,
    },
    {
      _id: "31434f9sd6g9dsasd",
      images: [{ path: "/offers/maslo.jpg" }],
      title: "Телевизор Artel A43KF5500 Android, чёрный sdaasd",
      maxProduct: 21,
      productLength: 1,
      price: 198000,
    },
    {
      _id: "31434f9sddsad6g9sd",
      images: [{ path: "/offers/maslo.jpg" }],
      title: "Телевизор Artel A43KF5500 Android, чёрный",
      maxProduct: 431,
      productLength: 1,
      price: 19800,
    },
  ]);

  useEffect(() => {
    document.querySelector("title").innerHTML = "Nishtyaki | Корзина";
  }, []);

  const format = (num) =>
    String(num).replace(/(?<!\..*)(\d)(?=(?:\d{3})+(?:\.|$))/g, "$1 ");

  const sumOfProducts = () =>
    orderProducts.reduce(
      (total, product) => total + product.productLength * product.price,
      0
    );
  const submit = () => {
    alert("Submit");
  };

  return (
    <div className="mt-5 w-full max-w-[1400px] md:w-[90%] mx-auto">
      <div>
        <h1
          className={`text-lg sm:text-2xl ml-2 md:ml-0 ${
            orderProducts.length === 0 && "hidden"
          }`}
        >
          Ваша корзина,{" "}
          <span className="text-zinc-400 text-sm sm:text-xl">
            {orderProducts.length} товар
          </span>
        </h1>
      </div>
      <div>
        {orderProducts.length > 0 ? (
          <div className="w-full mt-5 flex max-[1227px]:flex-wrap justify-center xl:justify-between">
            <div className="min-w-[66%] max-w-[95%] py-2 px-6 border rounded">
              {orderProducts.map((product, index) => (
                <CartComponent
                  key={product._id}
                  product={product}
                  index={index}
                  setOrderProducts={setOrderProducts}
                />
              ))}
            </div>
            <div className="min-w-[32%] ml-0 min-[1227px]:ml-2 max-h-[200px] max-[1227px]:mt-4 max-[1227px]:w-[95%] rounded-md static lg:sticky top-2 border py-2 px-4">
              <h1 className="text-lg sm:text-xl mt-2">Ваш заказ</h1>
              {/* <div className="flex justify-between mt-4">
                <h1 className="text-base">
                  Товары {"(" + orderProducts.length + ")"}:
                </h1>
                <h1 className="text-base">{format(sumOfProducts())} сум</h1>
              </div> */}
              <div className="flex justify-between mt-6">
                <h1 className="text-base sm:text-lg">Итого:</h1>
                <h1 className="text-lg sm:text-xl font-medium">
                  {format(sumOfProducts())} сум
                </h1>
              </div>
              <button
                onClick={submit}
                className="w-full py-2 px-4 bg-orange-500 rounded-md text-white mt-6 hover:bg-orange-600 duration-100"
              >
                Перейти к оформлению
              </button>
            </div>
          </div>
        ) : (
          <div className="w-full h-[500px] flex items-center justify-center">
            <div className="text-center">
              <img src={empty_cart} alt="Empty" className="mx-auto" />
              <h1 className="text-2xl font-medium mt-4">
                В корзине пока нет товаров
              </h1>
              <p className="text-sm mt-2">
                Начните с подборок на главной странице или найдите нужный товар
                через поиск
              </p>
              <Link
                to={"/"}
                className="py-2 px-4 bg-orange-500 text-white inline-block mt-4 rounded"
              >
                На главную
              </Link>
            </div>
          </div>
        )}
      </div>
      <div className={`mt-10 ${orderProducts.length > 0 && "hidden"}`}>
        <h1 className="text-xl font-medium">Популярные товары</h1>
        <Slider
          slides={[
            <Product
              product={{
                _id: "4329dfsadfasdf6",
                images: [{ path: "/offers/maslo.jpg" }],
                title: "Test Product",
                description:
                  "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error sequi amet necessitatibus eos quis.",
                price: 10000,
              }}
            />,
            <Product
              product={{
                _id: "4329dfsadfassdf6",
                images: [{ path: "/offers/maslo.jpg" }],
                title: "Test Product",
                description:
                  "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error sequi amet necessitatibus eos quis.",
                price: 10000,
              }}
            />,
            <Product
              product={{
                _id: "4329dafsadfasdf6",
                images: [{ path: "/offers/maslo.jpg" }],
                title: "Test Product",
                description:
                  "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error sequi amet necessitatibus eos quis.",
                price: 10000,
              }}
            />,
            <Product
              product={{
                _id: "4329dffsadfasdf6",
                images: [{ path: "/offers/maslo.jpg" }],
                title: "Test Product",
                description:
                  "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error sequi amet necessitatibus eos quis.",
                price: 10000,
              }}
            />,
            <Product
              product={{
                _id: "4329dfcsadfasdf6",
                images: [{ path: "/offers/maslo.jpg" }],
                title: "Test Product",
                description:
                  "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error sequi amet necessitatibus eos quis.",
                price: 10000,
              }}
            />,
          ]}
          slideMode={"product"}
        />
      </div>
    </div>
  );
};

export default Cart;
