import React from "react";
import Product from "../components/Product";
import { Link } from "react-router-dom";

const Tractors = () => {
  return (
    <section>
      <div className="w-[90%] mx-auto">
        <Link
          to={"/tractors"}
          className="inline-block mt-[100px] text-2xl text-red-400 font-medium cursor-pointer hover:text-red-500 duration-150"
        >
          Traktorlar
        </Link>
        <div className="w-full flex flex-wrap justify-between">
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
        </div>
        <div className="w-full flex items-center justify-center mt-5">
          <Link to={"/agrotechnics"}>
            <button className="py-2 px-4 bg-red-500 hover:bg-red-600 duration-150 text-white rounded">
              Agro texnikalar
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Tractors;
