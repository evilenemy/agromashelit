import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Agro from "../components/Agro";

const Agrotechnics = ({ api }) => {
  const [agros, setAgros] = useState([
    {
      _id: "65c783e21163e7345501d641",
      title: "Lorem ipsum, dolor",
      description: [],
      price: 21312312,
      images: [
        {
          // path: "\\uploads\\agrotechnics\\1707638111091 - qulay to'lov.jpg",
          path: "/qulay to'lov.jpg",
          size: "33,43kb",
          name: "1707638111091 - qulay to'lov.jpg",
        },
        {
          path: "/qulay to'lov.jpg",
          size: "157,56kb",
          name: "1707638111092 - sifat.jpeg",
        },
      ],
      createdAt: "2024-02-10T14:10:42.396Z",
      updatedAt: "2024-02-11T07:55:11.096Z",
      __v: 1,
    },
    {
      _id: "65c783d11163e7345501d63e",
      title: "Lorem ipsum, dolor",
      description: [],
      price: 123123123,
      images: [
        {
          path: "/qulay to'lov.jpg",
          size: "33,43kb",
          name: "1707638140267 - qulay to'lov.jpg",
        },
        {
          path: "/qulay to'lov.jpg",
          size: "157,56kb",
          name: "1707638140268 - sifat.jpeg",
        },
        {
          path: "/qulay to'lov.jpg",
          size: "113,6kb",
          name: "1707638140268 - tractor-6.jpg",
        },
      ],
      createdAt: "2024-02-10T14:10:25.215Z",
      updatedAt: "2024-02-11T07:55:40.272Z",
      __v: 1,
    },
    {
      _id: "65c783be1163e7345501d63b",
      title: "Lorem ipsum, dolor",
      description: [],
      price: 11115430000,
      images: [
        {
          path: "/qulay to'lov.jpg",
          size: "33,43kb",
          name: "1707638157072 - qulay to'lov.jpg",
        },
        {
          path: "/qulay to'lov.jpg",
          size: "157,56kb",
          name: "1707638157072 - sifat.jpeg",
        },
        {
          path: "/qulay to'lov.jpg",
          size: "550,91kb",
          name: "1707638157072 - texnikxizmat.jpg",
        },
        {
          path: "/qulay to'lov.jpg",
          size: "113,6kb",
          name: "1707638157072 - tractor-6.jpg",
        },
      ],
      createdAt: "2024-02-10T14:10:06.911Z",
      updatedAt: "2024-02-11T07:55:57.077Z",
      __v: 1,
    },
  ]);

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
          {lang === "ru" ? "Агротехника" : "Agrotexnikalar"}
        </Link>
        <div className="w-full flex flex-wrap justify-around">
          {agros.map((agro) => (
            <Agro product={agro} key={agro._id} api={api} />
          ))}
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
