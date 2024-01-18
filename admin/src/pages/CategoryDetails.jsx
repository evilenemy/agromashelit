import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const CategoryDetails = ({ api }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${api}/api/category/${id}`)
      .then((res) => {
        setTitle(res.data.title);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        setError(err.response.data.error);
      });
  }, []);

  const handleEdit = (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData();
    formData.append("title", title);

    axios
      .put(`${api}/api/category/${id}`, formData)
      .then(() => navigate("/categories"))
      .catch((err) => {
        setError(err.response.data.error);
        setLoading(false);
      });
  };

  const handleDelete = () => {
    setLoading(true);
    if (window.confirm("Do you really want to delete this category?"))
      axios
        .delete(`${api}/api/category/${id}`)
        .then(() => {
          setLoading(false);
          navigate(-1);
        })
        .catch((err) => {
          setError(err.response.data.error);
          setLoading(false);
        });
  };

  return (
    <div className="flex">
      <div className="min-w-[300px] w-[25%] max-w-[450px] flex items-center h-[calc(100vh-64px)] bg-gray-800 border-r border-r-neutral-400">
        <div className="h-[80%] w-full flex flex-col items-center">
          <Link
            to={"/categories"}
            className="text-center text-gray-400 w-[250px] py-2 px-4 m-1 hover:bg-gray-700 hover:text-white rounded text-lg transition duration-150"
          >
            Получить категорию
          </Link>
          <Link
            to={"/categories/create"}
            className="text-center text-gray-400 w-[250px] py-2 px-4 m-1 hover:bg-gray-700 hover:text-white rounded text-lg transition duration-150"
          >
            Создавать категория
          </Link>
        </div>
      </div>
      <div className="min-w-[calc(100%-450px)] w-[75%] max-w-[calc(100%-300px)] h-[calc(100vh-64px)] flex flex-wrap overflow-y-scroll justify-around">
        <form onSubmit={handleEdit} className="pb-7">
          <h2 className="mt-5 text-lg font-semibold leading-7 text-gray-900 text-center">
            Редактировать категория
          </h2>
          <div className="mt-6 min-w-[600px] flex flex-col items-center">
            <div className="w-[80%] mb-4">
              <label
                htmlFor="title"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Название
              </label>
              <input
                type="text"
                id="title"
                value={title}
                onInput={(e) => setTitle(e.target.value)}
                className="outline-none mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Название"
                required
              />
            </div>
            {error && (
              <div className="w-[50%] mx-auto mb-4 rounded-md border-2 border-red-400 text-red-500 bg-red-100 py-2 px-4">
                {error}
              </div>
            )}
            <div>
              <button
                type="button"
                onClick={() => navigate(-1)}
                className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition duration-100 active:scale-95"
              >
                Назад
              </button>
              <button
                disabled={loading}
                className="ml-4 bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600 transition duration-100 active:scale-95 disabled:bg-yellow-200"
              >
                Редактировать
              </button>
              <button
                type="button"
                onClick={handleDelete}
                disabled={loading}
                className="ml-4 bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition duration-100 active:scale-95 disabled:bg-red-300"
              >
                Удалить
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CategoryDetails;
