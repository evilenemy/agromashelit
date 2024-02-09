import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Order from "../components/Order";

const Orders = ({ api }) => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    load();
  }, []);

  const load = () => {
    setLoading(true);
    axios
      .get(`${api}/api/order`)
      .then((res) => {
        setOrders(res.data);
        setLoading(false);
        setError(null);
      })
      .catch((err) => {
        setError(err);
        setOrders([]);
        setLoading(false);
      });
  };

  return (
    <div className="flex">
      <div className="min-w-[300px] w-[25%] max-w-[450px] flex items-center h-[calc(100vh-64px)] bg-gray-800 border-r border-r-neutral-400">
        <div className="h-[80%] w-full flex flex-col items-center">
          <Link
            to={"/order"}
            className="text-center text-white bg-gray-600 w-[250px] py-2 px-4 m-1 hover:bg-gray-700 hover:text-white rounded text-lg transition duration-150"
          >
            Buyurtmalarni ko'rish
          </Link>
        </div>
      </div>
      <div className="min-w-[calc(100%-450px)] w-[75%] max-w-[calc(100%-300px)] h-[calc(100vh-64px)] flex flex-wrap overflow-y-scroll justify-around">
        {!loading &&
          orders.map((order) => <Order order={order} key={order._id} />)}
        {loading && <p>Loading...</p>}
        {!loading && error && <p>{error}</p>}
      </div>
    </div>
  );
};

export default Orders;
