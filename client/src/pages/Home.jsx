import React from "react";
import Slider from "../components/Slider";
import { Link } from "react-router-dom";
import Product from "../components/Product";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="w-full max-w-[1400px]">
      <header className="w-full h-[calc(100vh-35px)] flex justify-center items-center bg-black/40 bg-blend-multiply bg-[url('/tractor-1.jpg')] bg-cover">
        <div className="text-white max-w-[800px] flex flex-col items-center">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl"
          >
            Biz haqimizda
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
            className="mt-5 leading-7"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In
            dignissimos eveniet inventore laborum consequatur, iste ex, harum
            aliquid quidem ut explicabo deserunt et? Accusamus, asperiores omnis
            sed officia nemo delectus nisi id, laborum ea accusantium a ut neque
            sint libero, ratione impedit quaerat obcaecati sunt iure sapiente
            voluptatem. Saepe ea iure dignissimos obcaecati voluptates tempora
            ex inventore quae vitae cum tenetur, aperiam nulla, ab voluptatum
            sapiente velit officia eaque veniam. Cum error sed nobis saepe
            deserunt exercitationem vitae est autem, reiciendis amet velit et
            similique eveniet suscipit dolores neque libero?
          </motion.p>
        </div>
      </header>
      <motion.section
        className={`w-[90%] max-h-[600px] mx-auto ${
          window.innerWidth > 960 ? "max-h-[413px]" : "max-h-[600px]"
        }`}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Slider
          slides={[
            {
              path: "/slider-1.webp",
            },
            {
              path: "/slider-2.webp",
            },
          ]}
          slideMode={"image"}
          Navigation_={false}
        />
      </motion.section>
      <div className="w-[90%] mx-auto mt-10 font-semibold">
        <Link className="w-full flex text-3xl text-green-500">
          <motion.span
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center-for-mobile"
          >
            Traktorlar
          </motion.span>
        </Link>
        <div className="w-full mt-5 flex flex-wrap justify-around sm:justify-between">
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
        </div>
      </div>
      <br /><br /><br /><br /><br />
    </div>
    //   <section className="hidden w-full md:flex max-w-[1400px] h-[450px] items-center mb-2 md:mb-8 overflow-hidden rounded-2xl">
    //     <img
    //       src={"/offers/rasrochka.jpg"}
    //       alt="Pic"
    //       className="object-cover rounded-xl hover:scale-[1.007] duration-200 cursor-pointer"
    //     />
    //   </section>{" "}
    //   <div className="w-full h-[500px]">
    //     <Link className="w-full flex text-3xl leading-[29px]">
    //       <span className="text-center-for-mobile">Щедрая пятница</span>{" "}
    //       <p className="mt-auto laptop-visible">
    //         <svg
    //           width="36"
    //           height="36"
    //           viewBox="0 0 24 24"
    //           fill="none"
    //           xmlns="http://www.w3.org/2000/svg"
    //         >
    //           <path
    //             fillRule="evenodd"
    //             clipRule="evenodd"
    //             d="M9.18945 16.4983C8.91426 16.1887 8.94215 15.7146 9.25174 15.4394L13.1211 12L9.25173 8.56055C8.94215 8.28536 8.91426 7.81131 9.18945 7.50172C9.46464 7.19213 9.93869 7.16425 10.2483 7.43943L14.7483 11.4394C14.9084 11.5818 15 11.7858 15 12C15 12.2142 14.9084 12.4182 14.7483 12.5605L10.2483 16.5605C9.93869 16.8357 9.46464 16.8079 9.18945 16.4983Z"
    //             fill="black"
    //           ></path>
    //         </svg>
    //       </p>
    //     </Link>
    //     <Slider
    //       slides={[
    //         <Product
    //           product={{
    //             _id: "4329dfsadfasfdf6",
    //             images: [{ path: "/offers/maslo.jpg" }],
    //             title: "Test Product",
    //             description:
    //               "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error sequi amet necessitatibus eos quis.",
    //             price: 10000,
    //           }}
    //         />,
    //         <Product
    //           product={{
    //             _id: "4329dfsadfsasdf6",
    //             images: [{ path: "/offers/maslo.jpg" }],
    //             title: "Test Product",
    //             description:
    //               "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error sequi amet necessitatibus eos quis.",
    //             price: 10000,
    //           }}
    //         />,
    //         <Product
    //           product={{
    //             _id: "4329dfsadfavsdf6",
    //             images: [{ path: "/offers/maslo.jpg" }],
    //             title: "Test Product",
    //             description:
    //               "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error sequi amet necessitatibus eos quis.",
    //             price: 10000,
    //           }}
    //         />,
    //         <Product
    //           product={{
    //             _id: "4c329dfsadfasdf6",
    //             images: [{ path: "/offers/maslo.jpg" }],
    //             title: "Test Product",
    //             description:
    //               "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error sequi amet necessitatibus eos quis.",
    //             price: 10000,
    //           }}
    //         />,
    //         <Product
    //           product={{
    //             _id: "4329dvfsadfasdf6",
    //             images: [{ path: "/offers/maslo.jpg" }],
    //             title: "Test Product",
    //             description:
    //               "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error sequi amet necessitatibus eos quis.",
    //             price: 10000,
    //           }}
    //         />,
    //         <Product
    //           product={{
    //             _id: "432z9dfsadfasdf6",
    //             images: [{ path: "/offers/maslo.jpg" }],
    //             title: "Test Product",
    //             description:
    //               "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error sequi amet necessitatibus eos quis.",
    //             price: 10000,
    //           }}
    //         />,
    //       ]}
    //       slideMode={"product"}
    //     />
    //   </div>
    //   <div className="w-full h-[500px]">
    //     <Link className="w-full mt-10 flex text-3xl leading-[29px]">
    //       <span className="text-center-for-mobile">Щедрая пятница</span>{" "}
    //       <p className="mt-auto laptop-visible">
    //         <svg
    //           width="36"
    //           height="36"
    //           viewBox="0 0 24 24"
    //           fill="none"
    //           xmlns="http://www.w3.org/2000/svg"
    //         >
    //           <path
    //             fillRule="evenodd"
    //             clipRule="evenodd"
    //             d="M9.18945 16.4983C8.91426 16.1887 8.94215 15.7146 9.25174 15.4394L13.1211 12L9.25173 8.56055C8.94215 8.28536 8.91426 7.81131 9.18945 7.50172C9.46464 7.19213 9.93869 7.16425 10.2483 7.43943L14.7483 11.4394C14.9084 11.5818 15 11.7858 15 12C15 12.2142 14.9084 12.4182 14.7483 12.5605L10.2483 16.5605C9.93869 16.8357 9.46464 16.8079 9.18945 16.4983Z"
    //             fill="black"
    //           ></path>
    //         </svg>
    //       </p>
    //     </Link>
    //     <Slider
    //       slides={[
    //         <Product
    //           product={{
    //             _id: "4329dfvsadfasdf6",
    //             images: [{ path: "/offers/maslo.jpg" }],
    //             title: "Test Product",
    //             description:
    //               "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error sequi amet necessitatibus eos quis.",
    //             price: 10000,
    //           }}
    //         />,
    //         <Product
    //           product={{
    //             _id: "4329dfsadfansdf6",
    //             images: [{ path: "/offers/maslo.jpg" }],
    //             title: "Test Product",
    //             description:
    //               "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error sequi amet necessitatibus eos quis.",
    //             price: 10000,
    //           }}
    //         />,
    //         <Product
    //           product={{
    //             _id: "4329gdfsadfasdf6",
    //             images: [{ path: "/offers/maslo.jpg" }],
    //             title: "Test Product",
    //             description:
    //               "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error sequi amet necessitatibus eos quis.",
    //             price: 10000,
    //           }}
    //         />,
    //         <Product
    //           product={{
    //             _id: "4329dfisadfasdf6",
    //             images: [{ path: "/offers/maslo.jpg" }],
    //             title: "Test Product",
    //             description:
    //               "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error sequi amet necessitatibus eos quis.",
    //             price: 10000,
    //           }}
    //         />,
    //         <Product
    //           product={{
    //             _id: "4329df5sadfasdf6",
    //             images: [{ path: "/offers/maslo.jpg" }],
    //             title: "Test Product",
    //             description:
    //               "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error sequi amet necessitatibus eos quis.",
    //             price: 10000,
    //           }}
    //         />,
    //         <Product
    //           product={{
    //             _id: "4329dfsadfasdf6",
    //             images: [{ path: "/offers/maslo.jpg" }],
    //             title: "Test Product",
    //             description:
    //               "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error sequi amet necessitatibus eos quis.",
    //             price: 10000,
    //           }}
    //         />,
    //       ]}
    //       slideMode={"product"}
    //       autoPlay={3000}
    //     />
    //   </div>
    //   <div className="w-full h-[500px]">
    //     <Link className="w-full mt-10 flex text-3xl leading-[29px]">
    //       <span className="text-center-for-mobile">Щедрая пятница</span>{" "}
    //       <p className="mt-auto laptop-visible">
    //         <svg
    //           width="36"
    //           height="36"
    //           viewBox="0 0 24 24"
    //           fill="none"
    //           xmlns="http://www.w3.org/2000/svg"
    //         >
    //           <path
    //             fillRule="evenodd"
    //             clipRule="evenodd"
    //             d="M9.18945 16.4983C8.91426 16.1887 8.94215 15.7146 9.25174 15.4394L13.1211 12L9.25173 8.56055C8.94215 8.28536 8.91426 7.81131 9.18945 7.50172C9.46464 7.19213 9.93869 7.16425 10.2483 7.43943L14.7483 11.4394C14.9084 11.5818 15 11.7858 15 12C15 12.2142 14.9084 12.4182 14.7483 12.5605L10.2483 16.5605C9.93869 16.8357 9.46464 16.8079 9.18945 16.4983Z"
    //             fill="black"
    //           ></path>
    //         </svg>
    //       </p>
    //     </Link>
    //     <Slider
    //       slides={[
    //         <Product
    //           product={{
    //             _id: "4329dfvsadfasdf6",
    //             images: [{ path: "/offers/maslo.jpg" }],
    //             title: "Test Product",
    //             description:
    //               "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error sequi amet necessitatibus eos quis.",
    //             price: 10000,
    //           }}
    //         />,
    //         <Product
    //           product={{
    //             _id: "4329dfsadfansdf6",
    //             images: [{ path: "/offers/maslo.jpg" }],
    //             title: "Test Product",
    //             description:
    //               "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error sequi amet necessitatibus eos quis.",
    //             price: 10000,
    //           }}
    //         />,
    //         <Product
    //           product={{
    //             _id: "4329gdfsadfasdf6",
    //             images: [{ path: "/offers/maslo.jpg" }],
    //             title: "Test Product",
    //             description:
    //               "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error sequi amet necessitatibus eos quis.",
    //             price: 10000,
    //           }}
    //         />,
    //         <Product
    //           product={{
    //             _id: "4329dfisadfasdf6",
    //             images: [{ path: "/offers/maslo.jpg" }],
    //             title: "Test Product",
    //             description:
    //               "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error sequi amet necessitatibus eos quis.",
    //             price: 10000,
    //           }}
    //         />,
    //         <Product
    //           product={{
    //             _id: "4329df5sadfasdf6",
    //             images: [{ path: "/offers/maslo.jpg" }],
    //             title: "Test Product",
    //             description:
    //               "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error sequi amet necessitatibus eos quis.",
    //             price: 10000,
    //           }}
    //         />,
    //         <Product
    //           product={{
    //             _id: "4329dfsadfasdf6",
    //             images: [{ path: "/offers/maslo.jpg" }],
    //             title: "Test Product",
    //             description:
    //               "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error sequi amet necessitatibus eos quis.",
    //             price: 10000,
    //           }}
    //         />,
    //       ]}
    //       slideMode={"product"}
    //       autoPlay={3100}
    //     />
    //   </div>
    //   <div className="w-full h-[500px]">
    //     <Link className="w-full mt-10 flex text-3xl leading-[29px]">
    //       <span className="text-center-for-mobile">Щедрая пятница</span>{" "}
    //       <p className="mt-auto laptop-visible">
    //         <svg
    //           width="36"
    //           height="36"
    //           viewBox="0 0 24 24"
    //           fill="none"
    //           xmlns="http://www.w3.org/2000/svg"
    //         >
    //           <path
    //             fillRule="evenodd"
    //             clipRule="evenodd"
    //             d="M9.18945 16.4983C8.91426 16.1887 8.94215 15.7146 9.25174 15.4394L13.1211 12L9.25173 8.56055C8.94215 8.28536 8.91426 7.81131 9.18945 7.50172C9.46464 7.19213 9.93869 7.16425 10.2483 7.43943L14.7483 11.4394C14.9084 11.5818 15 11.7858 15 12C15 12.2142 14.9084 12.4182 14.7483 12.5605L10.2483 16.5605C9.93869 16.8357 9.46464 16.8079 9.18945 16.4983Z"
    //             fill="black"
    //           ></path>
    //         </svg>
    //       </p>
    //     </Link>
    //     <Slider
    //       slides={[
    //         <Product
    //           product={{
    //             _id: "4329dfsa1dfasdf6",
    //             images: [{ path: "/offers/maslo.jpg" }],
    //             title: "Test Product",
    //             description:
    //               "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error sequi amet necessitatibus eos quis.",
    //             price: 10000,
    //           }}
    //         />,
    //         <Product
    //           product={{
    //             _id: "43239dfsadfasdf6",
    //             images: [{ path: "/offers/maslo.jpg" }],
    //             title: "Test Product",
    //             description:
    //               "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error sequi amet necessitatibus eos quis.",
    //             price: 10000,
    //           }}
    //         />,
    //         <Product
    //           product={{
    //             _id: "4329dfsadfasrdf6",
    //             images: [{ path: "/offers/maslo.jpg" }],
    //             title: "Test Product",
    //             description:
    //               "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error sequi amet necessitatibus eos quis.",
    //             price: 10000,
    //           }}
    //         />,
    //         <Product
    //           product={{
    //             _id: "4329dfesadfasdf6",
    //             images: [{ path: "/offers/maslo.jpg" }],
    //             title: "Test Product",
    //             description:
    //               "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error sequi amet necessitatibus eos quis.",
    //             price: 10000,
    //           }}
    //         />,
    //         <Product
    //           product={{
    //             _id: "4329dfsadfasdwf6",
    //             images: [{ path: "/offers/maslo.jpg" }],
    //             title: "Test Product",
    //             description:
    //               "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error sequi amet necessitatibus eos quis.",
    //             price: 10000,
    //           }}
    //         />,
    //         <Product
    //           product={{
    //             _id: "43229dfsadfasdf6",
    //             images: [{ path: "/offers/maslo.jpg" }],
    //             title: "Test Product",
    //             description:
    //               "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error sequi amet necessitatibus eos quis.",
    //             price: 10000,
    //           }}
    //         />,
    //       ]}
    //       slideMode={"product"}
    //       autoPlay={3200}
    //     />
    //   </div>
    //   <br className="mobile-visible" />
    //   <br className="mobile-visible" />
    //   <br className="mobile-visible" />
    //   <br className="mobile-visible" />
    //   <br className="mobile-visible" /> */}
    // </div>
  );
};

export default Home;
