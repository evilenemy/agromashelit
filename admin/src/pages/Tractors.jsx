import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Tractor from "../components/Tractor";

const Tractors = ({ api }) => {
  const [tractors, setTractors] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    load();
  }, []);

  const load = () => {
    setLoading(true);
    axios
      .get(`${api}/api/tractor`)
      .then((res) => {
        setTractors(res.data);
        setLoading(false);
        setError(null);
      })
      .catch((err) => {
        setError(err);
        setTractors([]);
        setLoading(false);
      });
  };

  return (
    <div className="flex">
      <div className="min-w-[300px] w-[25%] max-w-[450px] flex items-center h-[calc(100vh-64px)] bg-gray-800 border-r border-r-neutral-400">
        <div className="h-[80%] w-full flex flex-col items-center">
          <Link
            to={"/"}
            className="text-center text-white bg-gray-600 w-[250px] py-2 px-4 m-1 hover:bg-gray-700 hover:text-white rounded text-lg transition duration-150"
          >
            Traktorlarni ko'rish
          </Link>
          <Link
            to={"/create"}
            className="text-center text-gray-400 w-[250px] py-2 px-4 m-1 hover:bg-gray-700 hover:text-white rounded text-lg transition duration-150"
          >
            Traktor qo'shish
          </Link>
        </div>
      </div>
      <div className="min-w-[calc(100%-450px)] w-[75%] max-w-[calc(100%-300px)] h-[calc(100vh-64px)] flex flex-wrap overflow-y-scroll justify-around">
        {!loading &&
          tractors.map((tractor) => (
            <Tractor tractor={tractor} api={api} key={tractor._id} />
          ))}
        {loading && <p>Loading...</p>}
        {!loading && error && <p>{error}</p>}
      </div>
    </div>
  );
};

export default Tractors;
