import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Event from "../components/Event";

const Events = ({ api }) => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    load();
  }, []);

  const load = () => {
    setLoading(true);
    axios
      .get(`${api}/api/event`)
      .then((res) => {
        setEvents(res.data);
        setLoading(false);
        setError(null);
      })
      .catch((err) => {
        setError(err);
        setEvents([]);
        setLoading(false);
      });
  };

  console.log(events)

  return (
    <div className="flex">
      <div className="min-w-[300px] w-[25%] max-w-[450px] flex items-center h-[calc(100vh-64px)] bg-gray-800 border-r border-r-neutral-400">
        <div className="h-[80%] w-full flex flex-col items-center">
          <Link
            to={"/events"}
            className="text-center text-white bg-gray-600 w-[250px] py-2 px-4 m-1 hover:bg-gray-700 hover:text-white rounded text-lg transition duration-150"
          >
            Получить новинки
          </Link>
          <Link
            to={"/events/create"}
            className="text-center text-gray-400 w-[250px] py-2 px-4 m-1 hover:bg-gray-700 hover:text-white rounded text-lg transition duration-150"
          >
            Создавать новинки
          </Link>
        </div>
      </div>
      <div className="min-w-[calc(100%-450px)] w-[75%] max-w-[calc(100%-300px)] h-[calc(100vh-64px)] flex flex-wrap overflow-y-scroll justify-around">
        {!loading &&
          events.map((event) => <Event event={event} key={event._id} />)}
        {loading && <p>Loading...</p>}
        {!loading && error && <p>{error}</p>}
      </div>
    </div>
  );
};

export default Events;
