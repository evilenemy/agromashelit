import React, { useEffect, useState } from "react";
import NewsCard from "../components/NewsCard";
import { Link } from "react-router-dom";
import axios from "axios";

const News = ({ api }) => {
  const [news, setNews] = useState([]);

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
          Yangiliklar
        </Link>
        <div className="w-full flex flex-wrap justify-between">
          {news.map((new_) => (
            <NewsCard news={new_} key={new_._id} api={api} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;
