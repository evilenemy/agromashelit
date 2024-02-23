import React, { useEffect, useState } from "react";
import NewsCard from "../components/NewsCard";
import { Link } from "react-router-dom";
import axios from "axios";

const News = ({ api, lang }) => {
  const [news, setNews] = useState([
    {
      _id: "65c786671163e7345501d658",
      title: "Lorem ipsum, dolor",
      description: [],
      images: [
        {
          path: "/assets/images/more-info.jpg",
          size: "72,29kb",
          name: "1707638496283 - more-info.jpg",
        },
        {
          path: "/assets/images/more-info.jpg",
          size: "12,54kb",
          name: "1707638496283 - team_01.jpg",
        },
      ],
      createdAt: "2024-02-10T14:21:27.630Z",
      updatedAt: "2024-02-11T08:01:36.289Z",
      __v: 1,
    },
    {
      _id: "65c7865a1163e7345501d655",
      title: "Lorem ipsum, dolor",
      description: [],
      images: [
        {
          path: "/assets/images/more-info.jpg",
          size: "72,29kb",
          name: "1707574874952 - more-info.jpg",
        },
      ],
      createdAt: "2024-02-10T14:21:14.955Z",
      updatedAt: "2024-02-10T14:21:14.955Z",
      __v: 0,
    },
    {
      _id: "65c786361163e7345501d651",
      title: "Lorem ipsum, dolor",
      description: [],
      images: [
        {
          path: "/assets/images/more-info.jpg",
          size: "72,29kb",
          name: "1707574838597 - more-info.jpg",
        },
      ],
      createdAt: "2024-02-10T14:20:38.602Z",
      updatedAt: "2024-02-10T14:20:38.602Z",
      __v: 0,
    },
  ]);

  const load = () => {
    axios
      .get(`${api}/api/news`)
      .then((res) => setNews(res.data))
      .catch((err) => alert("Something went wrong, please try again later."));
  };

  useEffect(() => {
    load();
  }, []);

  return (
    <section>
      <div className="w-[90%] mx-auto">
        <Link
          to={"/news"}
          className="inline-block mt-[100px] text-2xl text-red-400 font-medium cursor-pointer hover:text-red-500 duration-150"
        >
          {lang === "ru" ? "Новости" : "Yangiliklar"}
        </Link>
        <div className="w-full flex flex-wrap justify-around">
          {news.map((new_) => (
            <NewsCard news={new_} key={new_._id} api={api} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;
