import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Agro from "../components/Agro";

const Agrotechnics = ({ api }) => {
  const [agros, setAgros] = useState([]);

  const load = () => {
    axios
      .get(`${api}/api/agro`)
      .then((res) => setAgros(res.data))
      .catch((err) => alert("Something went wrong, please try again later."));
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
          Agro texnikalar
        </Link>
        <div className="w-full flex flex-wrap justify-between">
          {agros.map((agro) => (
            <Agro product={agro} key={agro._id} api={api} />
          ))}
        </div>
        <div className="w-full flex items-center justify-center mt-5">
          <Link to={"/tractors"}>
            <button className="py-2 px-4 bg-red-500 hover:bg-red-600 duration-150 text-white rounded">
              Traktorlar
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Agrotechnics;
