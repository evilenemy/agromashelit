import React from "react";
import { Link } from "react-router-dom";

const User = ({ user, api }) => (
  <Link
    to={"/users/" + user._id}
    className="flex justify-around items-center w-[350px] max-h-[120px] py-2 px-5 m-2 my-4 bg-zinc-200 rounded cursor-pointer"
  >
    <img
      width={"100px"}
      className="object-cover rounded-full"
      src={api + "/" + user.imagePath}
      alt="Pic"
    />
    <div className="ml-4">
      <h1 className="font-medium">{user.login}</h1>
      <h3>
        {!user.email && "Email: "}
        <span className="text-sm">{user.email || "None"}</span>
      </h3>
    </div>
  </Link>
);

export default User;
