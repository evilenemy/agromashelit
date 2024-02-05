import React, { useEffect, useState } from "react";
import Slider from "../components/Slider";
import Product from "../components/Product";
import { motion } from "framer-motion";

const ProductDetail = () => {
  const [product, setProduct] = useState({
    maxProduct: 30,
    productPrice: 2330000,
    images: [
      { path: "/product-1.jpg" },
      { path: "/product-1.jpg" },
      { path: "/product-1.jpg" },
      { path: "/product-1.jpg" },
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

  const format = (num) =>
    String(num).replace(/(?<!\..*)(\d)(?=(?:\d{3})+(?:\.|$))/g, "$1 ");

  return (
    <div className="overflow-x-hidden mt-5">
      <div className="w-full max-w-[1400px] md:w-[90%] mx-auto py-4">
        <div className="flex flex-col items-center md:flex-row md:items-start md:justify-between  mt-5 responsive-detail">
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1 }}
            className="w-[90%] mt-4 max-h-[450px] md:w-5/12 p-4 sticky top-2"
          >
            <Slider slides={product.images} slideMode={"image"} />
          </motion.div>
          <div className="w-[90%] md:w-[55%] mt-4 sticky top-2">
            <motion.h1
              initial={{ y: -200, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="text-2xl mt-2 font-medium"
            >
              {product.title}
            </motion.h1>
            <motion.hr
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="my-10"
            />
            <div className="mt-5">
              <motion.h3
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 2 }}
                className="font-normal"
              >
                Narx:
              </motion.h3>
              <motion.h1
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 2 }}
                className="text-xl w-[40%] font-medium flex items-center justify-between mt-2"
              >
                {format(lengthProduct * product.productPrice)} so'm{" "}
                {/* <p className="line-through text-sm text-[#7f8286]">
                3 234 000 сум
              </p> */}
              </motion.h1>
            </div>
            <motion.button
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 2.5 }}
              className="w-1/2 mt-4 py-2 px-4 bg-green-400 hover:bg-green-500 duration-150 font-medium text-white rounded-md"
            >
              Buyurtma berish
            </motion.button>
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
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 3 }}
          className="w-full mt-20"
        >
          <h1 className="text-center">Tovar tavsifi</h1>
          <p className="mt-5 w-[70%] mx-auto text-sm leading-6">
            {product.description}
          </p>
        </motion.div>
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 3.5 }}
          className="w-[90%] mt-10 mx-auto"
        >
          <h1 className="text-2xl font-medium">O'xshash tovarlar</h1>
          <div className="flex justify-between">
            <Product
              product={{
                _id: "4329dfsa1dfasdf6",
                images: [{ path: "/product-1.jpg" }],
                title: "Test Product",
                description:
                  "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error sequi amet necessitatibus eos quis.",
                price: 10000,
              }}
            />
            <Product
              product={{
                _id: "43239dfsadfasdf6",
                images: [{ path: "/product-1.jpg" }],
                title: "Test Product",
                description:
                  "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error sequi amet necessitatibus eos quis.",
                price: 10000,
              }}
            />
            <Product
              product={{
                _id: "4329dfsadfasrdf6",
                images: [{ path: "/product-1.jpg" }],
                title: "Test Product",
                description:
                  "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error sequi amet necessitatibus eos quis.",
                price: 10000,
              }}
            />
          </div>
        </motion.div>
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
