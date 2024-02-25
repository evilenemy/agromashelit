import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Agro from "../components/Agro";

const Agrotechnics = ({ api, lang }) => {
  const [agros, setAgros] = useState([]);
  const [loading, setLoading] = useState(false);

  const navigation = useNavigate()

  const load = async () => {
    setLoading(true);
    await axios
      .get(`${api}/api/agro`)
      .then((res) => setAgros(res.data))
      .catch((err) => {
        navigation("/404");
        alert("Something went wrong, plase try again later.");
      });
    setLoading(false);
  };

  useEffect(() => {
    load();
  }, []);

  return (
    <section>
      <div className="w-[90%] mx-auto">
        <Link
          to={"/agrotechnics"}
          className="inline-block mt-[100px] text-2xl text-red-400 font-medium cursor-pointer hover:text-red-500 duration-150"
        >
          {lang === "ru" ? "Агротехника" : "Agrotexnikalar"}
        </Link>
        <div className="w-full flex flex-wrap justify-around">
          {!loading &&
            agros.map((agro) => (
              <Agro product={agro} key={agro._id} api={api} />
            ))}
          {loading && <div>Loading...</div>}
        </div>
        <div className="w-full flex items-center justify-center mt-5">
          <Link to={"/tractors"}>
            <button className="py-2 px-4 bg-red-500 hover:bg-red-600 duration-150 text-white rounded">
              {lang === "ru" ? "Тракторы" : "Traktorlar"}
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Agrotechnics;
