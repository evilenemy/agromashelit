import React, { useEffect, useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa6";
import Slider from "../components/Slider";
import Product from "../components/Product";

const ProductDetail = () => {
  const [product, setProduct] = useState({
    maxProduct: 30,
    productPrice: 2330000,
    images: [
      { path: "/offers/maslo.jpg" },
      { path: "/offers/maslo.jpg" },
      { path: "/offers/maslo.jpg" },
      { path: "/offers/maslo.jpg" },
    ],
    title:
      "Смартфон Honor X7b 8/128 GB, большой 6.8 FullHD+ экран, LTE + термокувшин Honor",
    description:
      "Совершенные спортивные моменты начинаются с идеальной одежды. Наш универсальный мужской спортивный костюм — это тот незаменимый гардеробный элемент, который дарит комфорт и свободу движений во всех ситуациях. Будь то для активного отдыха, спорта, прогулок или туризма, наш костюм станет надежным спутником в любых приключениях и является идеальным выбором для школы, путешествий и повседневной носки. Спортивный костюм это твой верный компаньон на все случаи жизни! Идеальное сочетание трендового дизайна и удобства - вот что делает этот костюм на самом деле незаменимым. Прекрасно подходит для активного образа жизни, этот мужской спортивный костюм станет твоим надежным спутником в спортзале, на тренировках по физкультуре, а также на прогулках с друзьями или даже на охоте. Даже холодная погода не страшна с таким комплектом, и ты можешь смело отправляться на каток или играть в футбол или баскетбол, зная, что наш костюм обеспечит тебе тепло и комфорт. Благодаря натуральной ткани из хлопка, этот спортивный костюм обеспечит непревзойденный уровень комфорта в любое время года. Он легко приспособится под любую погоду, будь то жаркое лето, прохладная весна, теплая осень или холодная зима. Ткань сохраняет свою форму даже после многих стирок, а костюм идеально садится на разные фигуры, будь то узкие или широкие плечи. Прямой крой и оптимальная длина брюк делают этот спортивный костюм универсальным - он подойдет как для стройных, так и для полных мужчин. Широкая резинка в поясе штанов не сдавливает и не вызывает дискомфорта, обеспечивая максимальную свободу движений. Он идеально подходит для любого случая, не сковывая ваши движения и при этом выглядит просто непревзойденно стильно и современно. Собирай овации в повседневной жизни, выбирая стильный и модный комплект, который гарантированно привлечет внимание окружающих. Любимому мужчине этот спортивный костюм станет идеальным подарком на день рождения или на новый год - он оценит его комфортность и стильность.",
  });
  const [isSaved, setIsSaved] = useState(false);
  const [lengthProduct, setLengthProduct] = useState(1);

  useEffect(() => {
    document.querySelector("title").innerHTML = "Nishtyaki | " + product.title;
  }, []);

  const saved = () => {
    setIsSaved(!isSaved);
  };

  const format = (num) =>
    String(num).replace(/(?<!\..*)(\d)(?=(?:\d{3})+(?:\.|$))/g, "$1 ");

  return (
    <div className="overflow-x-hidden">
      <div className="w-full max-w-[1400px] md:w-[90%] mx-auto py-4">
        <div className="flex flex-col items-center md:flex-row md:items-start md:justify-between  mt-5 responsive-detail">
          <div className="w-[90%] md:w-5/12 p-4 sticky top-2">
            <Slider slides={product.images} slideMode={"image"} />
          </div>
          <div className="w-[90%] md:w-[55%] sticky top-2">
            <div className="p-2 flex justify-end">
              <button
                onClick={saved}
                className="flex px-2 justify-between items-center min-w-[125px]"
              >
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.95 2C8.51792 2 10 4.15234 10 4.15234C10 4.15234 11.485 2 14.05 2C16.705 2 19 4.07 19 6.95C19 11.1805 12.5604 15.6197 10.3651 17.5603C10.1582 17.7432 9.84179 17.7432 9.63488 17.5603C7.44056 15.6209 1 11.1803 1 6.95C1 4.07 3.295 2 5.95 2Z"
                    fill={isSaved ? "orange" : "white"}
                    fillOpacity="0.8"
                  ></path>
                  <path
                    d="M1 6.86486C1 4.20297 3.15017 2 5.86486 2C7.98685 2 9.35921 3.35876 10 4.18673C10.6408 3.35876 12.0132 2 14.1351 2C16.8506 2 19 4.20302 19 6.86486C19 8.02987 18.5328 9.18622 17.8534 10.265C17.1716 11.3476 16.252 12.3903 15.29 13.3377C13.9567 14.6508 12.4757 15.8387 11.4134 16.6907C10.9618 17.0529 10.5859 17.3544 10.3293 17.579C10.1407 17.7439 9.85926 17.7439 9.67075 17.579C9.41405 17.3544 9.03815 17.0529 8.58659 16.6907C7.52431 15.8387 6.04326 14.6508 4.70997 13.3377C3.74802 12.3903 2.82836 11.3476 2.14659 10.265C1.46724 9.18622 1 8.02987 1 6.86486ZM5.86486 3C3.70929 3 2 4.74838 2 6.86486C2 7.76743 2.36553 8.73607 2.99277 9.73208C3.61759 10.7242 4.47833 11.706 5.41165 12.6252C6.71033 13.9042 8.08423 15.005 9.13396 15.8461C9.45728 16.1052 9.74985 16.3396 10 16.547C10.2501 16.3396 10.5427 16.1052 10.866 15.8461C11.9158 15.005 13.2897 13.9042 14.5883 12.6252C15.5217 11.706 16.3824 10.7242 17.0072 9.73208C17.6345 8.73607 18 7.76743 18 6.86486C18 4.74833 16.2914 3 14.1351 3C12.0406 3 10.8181 4.70211 10.5033 5.21028C10.2727 5.5825 9.72727 5.58249 9.4967 5.21027C9.1819 4.7021 7.95944 3 5.86486 3Z"
                    fill={isSaved ? "orange" : "#15151A"}
                  ></path>
                </svg>
                <p className="ml-2">В желания{isSaved ? "х" : ""}</p>
              </button>
            </div>
            <h1 className="text-2xl mt-2 font-medium">{product.title}</h1>
            <hr className="my-10" />
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
                {format(lengthProduct * product.productPrice)} сум{" "}
                {/* <p className="line-through text-sm text-[#7f8286]">
                3 234 000 сум
              </p> */}
              </h1>
            </div>
            <div className="flex justify-between mt-5">
              <button className="w-[49%] py-2 px-4 bg-orange-500 text-white rounded-md hover:bg-orange-600 duration-100">
                Добавить в корзину
              </button>
              <button className="w-[49%] py-2 px-4 border-2 border-orange-500 font-medium text-orange-500 rounded-md">
                Купить в 1 клик
              </button>
            </div>
            {/* <div className="mt-10">
              <h4>Кратко о товаре:</h4>
              <ul className="mt-5 text-[#4a4c4e] list-style-inside leading-7">
                <li>Качество высокое ( Катышков не будет)</li>
                <li>Карманы прочные, капюшон не обвиснет</li>
                <li>Состав: 80% Хлопок, 20% Полиэстер</li>
                <li>Материал: Футер, 3-х нитка</li>
                <li>
                  Универсальный мужской спортивный костюм это тот незаменимый
                  гардеробный элемент, который дарит комфорт и свободу движений.
                </li>
                <li>Подробно читайте в описании</li>
              </ul>
            </div> */}
          </div>
        </div>
        <div className="w-full mt-20">
          <h1 className="text-center">Описание товара</h1>
          <p className="mt-5 w-[70%] mx-auto text-sm leading-6">
            {product.description}
          </p>
        </div>
        <div className="w-[90%] mt-10 mx-auto">
          <h1 className="text-2xl font-medium">Похожие товары</h1>
          <Slider
            slides={[
              <Product
                product={{
                  _id: "4329dfsa1dfasdf6",
                  images: [{ path: "/offers/maslo.jpg" }],
                  title: "Test Product",
                  description:
                    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error sequi amet necessitatibus eos quis.",
                  price: 10000,
                }}
              />,
              <Product
                product={{
                  _id: "43239dfsadfasdf6",
                  images: [{ path: "/offers/maslo.jpg" }],
                  title: "Test Product",
                  description:
                    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error sequi amet necessitatibus eos quis.",
                  price: 10000,
                }}
              />,
              <Product
                product={{
                  _id: "4329dfsadfasrdf6",
                  images: [{ path: "/offers/maslo.jpg" }],
                  title: "Test Product",
                  description:
                    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error sequi amet necessitatibus eos quis.",
                  price: 10000,
                }}
              />,
              <Product
                product={{
                  _id: "4329dfesadfasdf6",
                  images: [{ path: "/offers/maslo.jpg" }],
                  title: "Test Product",
                  description:
                    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error sequi amet necessitatibus eos quis.",
                  price: 10000,
                }}
              />,
              <Product
                product={{
                  _id: "4329dfsadfasdwf6",
                  images: [{ path: "/offers/maslo.jpg" }],
                  title: "Test Product",
                  description:
                    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error sequi amet necessitatibus eos quis.",
                  price: 10000,
                }}
              />,
              <Product
                product={{
                  _id: "43229dfsadfasdf6",
                  images: [{ path: "/offers/maslo.jpg" }],
                  title: "Test Product",
                  description:
                    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error sequi amet necessitatibus eos quis.",
                  price: 10000,
                }}
              />,
            ]}
            slideMode={"product"}
            isPlay={false}
          />
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default ProductDetail;
