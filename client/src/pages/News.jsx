import React, { useEffect, useState } from "react";
import NewsCard from "../components/NewsCard";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const News = ({ api, lang }) => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);

  const navigation = useNavigate();

  const load = async () => {
    setLoading(true);
    await axios
      .get(`${api}/api/news`)
      .then((res) => setNews(res.data))
      .catch((err) => {
        navigation("/404");
        alert("Something went wrong, plase try again later.");
      });
    setLoading(false);
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
          {!loading &&
            news.map((new_) => (
              <NewsCard news={new_} key={new_._id} api={api} />
            ))}
          {loading && <div>Loading...</div>}
        </div>
      </div>
    </section>
  );
};

export default News;
