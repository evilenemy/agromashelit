import React, { useEffect, useState } from "react";
import Slider from "../components/Slider";
import Product from "../components/Product";
import not_found from "../assets/icons/not-found.png";
import { Link, useLocation } from "react-router-dom";

const Search = () => {
  const [searchProducts, setSearchProducts] = useState([
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
  const location = useLocation();
  const [query, setQuery] = useState("");

  useEffect(() => {
    const newQuery = location.search.replace("?query=", "");
    setQuery(newQuery);
    document.title = newQuery + " - Nishtyaki";
  }, [location]);

  return (
    <div className="mt-5 w-[95%] max-w-[1400px] sm:w-[90%] mx-auto">
      <h1
        className={`text-2xl mt-10 ${searchProducts.length === 0 && "hidden"}`}
      >
        Найдено <span>{searchProducts.length}</span> товар
        <span>{searchProducts.length > 1 ? "ов" : ""}</span>
      </h1>
      <div>
        {searchProducts.length > 0 ? (
          <div className="w-full mt-5 justify-center min-[374px]:justify-start   flex flex-wrap">
            {searchProducts.map((product) => (
              <Product product={product} />
            ))}
          </div>
        ) : (
          <div className="w-full h-[500px] flex items-center justify-center">
            <div className="text-center">
              <img
                src={not_found}
                width={"130px"}
                className="mx-auto"
                alt="Empty"
              />
              <h1 className="text-2xl font-medium mt-4">
                К сожалению, ничего не найдено.
              </h1>
              <p className="text-sm mt-2">
                Пожалуйста, проверьте и попробуйте снова
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
      <div className={`mt-10 ${searchProducts.length > 0 && "hidden"}`}>
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

export default Search;
