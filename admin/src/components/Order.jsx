import React from "react";
import { Link } from "react-router-dom";

const Order = ({ order }) => (
  <Link
    to={"/order/" + order._id}
    className="flex justify-around items-center w-[450px] max-h-[150px] py-3 px-5 m-2 my-4 bg-zinc-200 rounded cursor-pointer"
  >
    <div className="ml-4">
      <h1 className="font-medium">{order.name}</h1>
      <p>{order.number}</p>
    </div>
  </Link>
);

export default Order;
