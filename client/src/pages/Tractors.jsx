import React, { useEffect, useState } from "react";
import Product from "../components/Product";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Tractors = ({ api, lang }) => {
  const [tractors, setTractors] = useState([]);
  const [loading, setLoading] = useState(false);

  const navigation = useNavigate();

  const load = () => {
    setLoading(true);
    axios
      .get(`${api}/api/tractor`)
      .then((res) => {
        setTractors(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        navigation("/404");
        alert("Something went wrong, plase try again later.");
      });
  };

  useEffect(() => {
    load();
  }, []);
  return (
    <section>
      <div className="w-[90%] mx-auto">
        <Link
          to={"/tractors"}
          className="inline-block mt-[100px] text-2xl text-red-400 font-medium cursor-pointer hover:text-red-500 duration-150"
        >
          {lang === "ru" ? "Тракторы" : "Traktorlar"}
        </Link>
        <div className="w-full flex flex-wrap justify-around">
          {!loading &&
            tractors.map((tractor) => (
              <Product product={tractor} key={tractor._id} api={api} />
            ))}
          {loading && <div>Loading...</div>}
        </div>
        <div className="w-full flex items-center justify-center mt-5">
          <Link to={"/agrotechnics"}>
            <button className="py-2 px-4 bg-red-500 hover:bg-red-600 duration-150 text-white rounded">
              {lang === "ru" ? "Агротехника" : "Agrotexnikalar"}
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Tractors;
