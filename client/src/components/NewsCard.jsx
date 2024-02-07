import React from "react";
import { Link } from "react-router-dom";

const NewsCard = ({
  news = {
    _id: "43534534fdsvsdvsdv",
    title: "BERKO-025",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor magnam rem nihil, doloremque fuga dolorem obcaecati praesentium in molestiae dicta!",
    images: [{ path: "/product-1.jpg" }],
  },
}) => {
  return (
    <Link
      to={`/news/${news._id}`}
      className="w-[340px] p-1 pb-3 bg-zinc-100 text-white rounded my-4"
    >
      <img src={news.images[0].path} alt="Pic" />
      <div className="down-content">
        <h1
          className={`text-xl p-1 mt-2 line-clamp-1 text-black font-bold font-poppins`}
        >
          {news.title}
        </h1>
        <h3 className="ml-1 mt-1 text-sm line-clamp-3 font-poppins font-medium leading-7 text-zinc-600">
          {news.description}
        </h3>
      </div>
    </Link>
  );
};

export default NewsCard;
