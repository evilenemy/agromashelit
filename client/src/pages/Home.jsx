import React from "react";
import Slider from "../components/Slider";
import { Link } from "react-router-dom";
import Product from "../components/Product";

const Home = () => {
  return (
    <div className="w-full max-w-[1400px]">
      <header className="w-full h-[calc(100vh-35px)] bg-black bg-[url('/tractor-1.jpg')] bg-cover"></header>
      {/* <section
        className={`w-full max-h-[600px] ${
          window.innerWidth > 960 ? "max-h-[413px]" : "max-h-[600px]"
        }`}
      >
        <Slider
          slides={[
            {
              path: "/tractor-6.jpg",
            },
            {
              path: "/tractor-2.jpg",
            },
            {
              path: "/tractor-3.jpg",
            },
            {
              path: "/tractor-4.jpg",
            },
          ]}
          slideMode={"image"}
          navigation={false}
        />
      </section> */}
    </div>
    // <div className="w-full mt-10 font-semibold">
    //  <Link className="w-full flex text-3xl leading-[29px]">
    //    <span className="text-center-for-mobile">Популярные товары</span>
    //    {/* <span className="text-center-for-mobile">Щедрая пятница</span>{" "}
    //    <p className="mt-auto laptop-visible">
    //      <svg
    //     width="36"
    //     height="36"
    //     viewBox="0 0 24 24"
    //     fill="none"
    //     xmlns="http://www.w3.org/2000/svg"
    //   >
    //     <path
    //       fillRule="evenodd"
    //       clipRule="evenodd"
    //       d="M9.18945 16.4983C8.91426 16.1887 8.94215 15.7146 9.25174 15.4394L13.1211 12L9.25173 8.56055C8.94215 8.28536 8.91426 7.81131 9.18945 7.50172C9.46464 7.19213 9.93869 7.16425 10.2483 7.43943L14.7483 11.4394C14.9084 11.5818 15 11.7858 15 12C15 12.2142 14.9084 12.4182 14.7483 12.5605L10.2483 16.5605C9.93869 16.8357 9.46464 16.8079 9.18945 16.4983Z"
    //       fill="black"
    //     ></path>
    //   </svg>
    // </p> */}
    //     </Link>
    //     <div className="w-full mt-5 flex flex-wrap justify-around sm:justify-between">
    //       <Product
    //         product={{
    //           _id: "4329dfsadfasdf6",
    //           images: [{ path: "/offers/maslo.jpg" }],
    //           title: "Test Product",
    //           description:
    //             "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error sequi amet necessitatibus eos quis.",
    //           price: 10000,
    //         }}
    //       />
    //       <Product
    //         product={{
    //           _id: "4329dfsadfasd6",
    //           images: [{ path: "/offers/maslo.jpg" }],
    //           title: "Test Product",
    //           description:
    //             "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error sequi amet necessitatibus eos quis.",
    //           price: 10000,
    //         }}
    //       />
    //       <Product
    //         product={{
    //           _id: "4329dfsadfas2df6",
    //           images: [{ path: "/offers/maslo.jpg" }],
    //           title: "Test Product",
    //           description:
    //             "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error sequi amet necessitatibus eos quis.",
    //           price: 10000,
    //         }}
    //       />
    //       <Product
    //         product={{
    //           _id: "4329dfsa3dfasdf6",
    //           images: [{ path: "/offers/maslo.jpg" }],
    //           title: "Test Product",
    //           description:
    //             "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error sequi amet necessitatibus eos quis.",
    //           price: 10000,
    //         }}
    //       />
    //       <Product
    //         product={{
    //           _id: "4329dfsadf2asdf6",
    //           images: [{ path: "/offers/maslo.jpg" }],
    //           title: "Test Product",
    //           description:
    //             "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error sequi amet necessitatibus eos quis.",
    //           price: 10000,
    //         }}
    //       />
    //       <Product
    //         product={{
    //           _id: "4329dfsa1dfasdf6",
    //           images: [{ path: "/offers/maslo.jpg" }],
    //           title: "Test Product",
    //           description:
    //             "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error sequi amet necessitatibus eos quis.",
    //           price: 10000,
    //         }}
    //       />
    //       <Product
    //         product={{
    //           _id: "4329dfsadf8asdf6",
    //           images: [{ path: "/offers/maslo.jpg" }],
    //           title: "Test Product",
    //           description:
    //             "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error sequi amet necessitatibus eos quis.",
    //           price: 10000,
    //         }}
    //       />
    //       <Product
    //         product={{
    //           _id: "4329dfsadfdasdf6",
    //           images: [{ path: "/offers/maslo.jpg" }],
    //           title: "Test Product",
    //           description:
    //             "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error sequi amet necessitatibus eos quis.",
    //           price: 10000,
    //         }}
    //       />
    //       <Product
    //         product={{
    //           _id: "4329dsfsadfasdf6",
    //           images: [{ path: "/offers/maslo.jpg" }],
    //           title: "Test Product",
    //           description:
    //             "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error sequi amet necessitatibus eos quis.",
    //           price: 10000,
    //         }}
    //       />
    //       <Product
    //         product={{
    //           _id: "4329dfsabdfasdf6",
    //           images: [{ path: "/offers/maslo.jpg" }],
    //           title: "Test Product",
    //           description:
    //             "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error sequi amet necessitatibus eos quis.",
    //           price: 10000,
    //         }}
    //       />
    //       <Product
    //         product={{
    //           _id: "4329dfscadfasdf6",
    //           images: [{ path: "/offers/maslo.jpg" }],
    //           title: "Test Product",
    //           description:
    //             "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error sequi amet necessitatibus eos quis.",
    //           price: 10000,
    //         }}
    //       />
    //       <Product
    //         product={{
    //           _id: "4329dfzsadfasdf6",
    //           images: [{ path: "/offers/maslo.jpg" }],
    //           title: "Test Product",
    //           description:
    //             "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error sequi amet necessitatibus eos quis.",
    //           price: 10000,
    //         }}
    //       />
    //       <Product
    //         product={{
    //           _id: "4329dfsadfcasdf6",
    //           images: [{ path: "/offers/maslo.jpg" }],
    //           title: "Test Product",
    //           description:
    //             "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error sequi amet necessitatibus eos quis.",
    //           price: 10000,
    //         }}
    //       />
    //       <Product
    //         product={{
    //           _id: "4329dfsadfcasjf6",
    //           images: [{ path: "/offers/maslo.jpg" }],
    //           title: "Test Product",
    //           description:
    //             "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error sequi amet necessitatibus eos quis.",
    //           price: 10000,
    //         }}
    //       />
    //     </div>
    //   </div>
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
