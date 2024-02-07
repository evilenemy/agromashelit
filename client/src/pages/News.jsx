import React from 'react'
import NewsCard from '../components/NewsCard'
import { Link } from 'react-router-dom'

const News = () => {
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
          <NewsCard />
          <NewsCard />
          <NewsCard />
          <NewsCard />
          <NewsCard />
          <NewsCard />
          <NewsCard />
          <NewsCard />
          <NewsCard />
        </div>
      </div>
    </section>
  )
}

export default News