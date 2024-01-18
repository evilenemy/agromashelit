import React, { useEffect, useState } from "react";
import Slider from "../components/Slider";
import Product from "../components/Product";
import heart from "../assets/images/empty_saved.png";
import { Link } from "react-router-dom";

const Saveds = () => {
  const [savedProducts, setSavedProducts] = useState([
    {
      _id: "4329dfsadfasdf6",
      images: [{ path: "/offers/maslo.jpg" }],
      title: "Test Product",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error sequi amet necessitatibus eos quis.",
      price: 10000,
    },
    {
      _id: "4329dsfsadfasdf6",
      images: [{ path: "/offers/maslo.jpg" }],
      title: "Test Product",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error sequi amet necessitatibus eos quis.",
      price: 10000,
    },
  ]);
  useEffect(() => {
    document.querySelector("title").innerHTML = "Nishtyaki | Избранный";
  }, []);
  return (
    <div className="mt-5 w-[95%] max-w-[1400px] sm:w-[90%] mx-auto">
      <div>
        <h1 className={`text-2xl ${savedProducts.length === 0 && "hidden"}`}>
          Мои желания
        </h1>
        <hr className="mt-7" />
      </div>
      <div>
        {savedProducts.length > 0 ? (
          <div className="w-full mt-10 justify-center min-[374px]:justify-between flex flex-wrap">
            <Product
              product={{
                _id: "4329dfsadfasdf6",
                images: [{ path: "/offers/maslo.jpg" }],
                title: "Test Product",
                description:
                  "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error sequi amet necessitatibus eos quis.",
                price: 10000,
              }}
              saved_={true}
            />
            <Product
              product={{
                _id: "4329dfsadfasdf6",
                images: [{ path: "/offers/maslo.jpg" }],
                title: "Test Product",
                description:
                  "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error sequi amet necessitatibus eos quis.",
                price: 10000,
              }}
              saved_={true}
            />
            <Product
              product={{
                _id: "4329dfsadfassdf6",
                images: [{ path: "/offers/maslo.jpg" }],
                title: "Test Product",
                description:
                  "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error sequi amet necessitatibus eos quis.",
                price: 10000,
              }}
              saved_={true}
            />
            <Product
              product={{
                _id: "4329dafsadfasdf6",
                images: [{ path: "/offers/maslo.jpg" }],
                title: "Test Product",
                description:
                  "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error sequi amet necessitatibus eos quis.",
                price: 10000,
              }}
              saved_={true}
            />
            <Product
              product={{
                _id: "4329dffsadfasdf6",
                images: [{ path: "/offers/maslo.jpg" }],
                title: "Test Product",
                description:
                  "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error sequi amet necessitatibus eos quis.",
                price: 10000,
              }}
              saved_={true}
            />
            <Product
              product={{
                _id: "4329dfcsadfasdf6",
                images: [{ path: "/offers/maslo.jpg" }],
                title: "Test Product",
                description:
                  "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error sequi amet necessitatibus eos quis.",
                price: 10000,
              }}
              saved_={true}
            />
          </div>
        ) : (
          <div className="w-full h-[500px] flex items-center justify-center">
            <div className="text-center">
              <img
                src={heart}
                width={"130px"}
                className="mx-auto"
                alt="Empty"
              />
              <h1 className="text-2xl font-medium mt-4">
                Добавьте то, что понравилось
              </h1>
              <p className="text-sm mt-2">
                Перейдите на главную страницу и нажмите на ♡ в товаре
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
      <div className={`mt-10 ${savedProducts.length > 0 && "hidden"}`}>
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

export default Saveds;
