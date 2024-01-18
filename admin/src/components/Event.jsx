import React from "react";
import { Link } from "react-router-dom";

const Event = ({ event }) => {
  return (
    <Link
      to={"/events/" + event._id}
      className="flex justify-around items-center max-w-[350px] max-h-[80px] py-3 px-6 m-2 my-4 bg-zinc-200 rounded cursor-pointer"
    >
      <h1 className="m-2">{event.name}</h1>
    </Link>
  );
};

export default Event;
