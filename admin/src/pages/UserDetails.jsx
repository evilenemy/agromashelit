import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const UserDetails = ({ api }) => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);

    axios
      .get(`${api}/api/users/${id}`)
      .then((res) => {
        setLogin(res.data.login);
        setEmail(res.data.email || "");
        setImage(res.data.image);
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
    formData.append("login", login);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("image", image);

    axios
      .put(`${api}/api/users/${id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then(() => navigate("/users"))
      .catch((err) => {
        setError(err.response.data.error);
        setLoading(false);
      });
  };

  const handleDelete = () => {
    if (window.confirm("Do you really want to delete this account?"))
      axios
        .delete(`${api}/api/users/${id}`)
        .then((res) => navigate("/"))
        .catch((err) => setError(err.response.data.error));
  };

  return (
    <div className="flex">
      <div className="min-w-[300px] w-[25%] max-w-[450px] flex items-center h-[calc(100vh-64px)] bg-gray-800 border-r border-r-neutral-400">
        <div className="h-[80%] w-full flex flex-col items-center">
          <Link
            to={"/users"}
            className="text-center text-gray-400 w-[250px] py-2 px-4 m-1 hover:bg-gray-700 hover:text-white rounded text-lg transition duration-150"
          >
            Список Пользователей
          </Link>
          <Link
            to={"/users/create"}
            className="text-center text-gray-400 w-[250px] py-2 px-4 m-1 hover:bg-gray-700 hover:text-white rounded text-lg transition duration-150"
          >
            Создавать аккаунт
          </Link>
        </div>
      </div>
      <div className="min-w-[calc(100%-450px)] w-[75%] max-w-[calc(100%-300px)] h-[calc(100vh-64px)] flex flex-wrap overflow-y-scroll justify-around">
        <form onSubmit={handleEdit} className="pb-7">
          <h2 className="mt-5 text-lg font-semibold leading-7 text-gray-900 text-center">
            Редактировать аккаунт
          </h2>
          <div className="mt-6 min-w-[600px] flex flex-col items-center">
            <div className="w-[80%] mb-4">
              <label
                htmlFor="login"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Логин <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                id="login"
                value={login}
                onInput={(e) => setLogin(e.target.value)}
                className="outline-none disabled:bg-zinc-200 mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Логин"
                required
              />
            </div>

            <div className="w-[80%] mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Электронная почта
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onInput={(e) => setEmail(e.target.value)}
                className="mt-2 outline-none disabled:bg-zinc-200 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Электронная почта"
              />
            </div>

            <div className="w-[80%] mb-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Новый пароль <span className="text-red-600">*</span>
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onInput={(e) => setPassword(e.target.value)}
                className="mt-2 outline-none disabled:bg-zinc-200 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Новый пароль"
                required
              />
            </div>

            <div className="w-[80%] mb-4">
              <label
                htmlFor="image"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Изображение
              </label>
              <input
                id="image"
                type="file"
                className="mt-2 block w-full rounded-md border-0 py-2 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none"
                files={image}
                onInput={(e) => setImage(e.target.files[0])}
              />
            </div>
            {error && (
              <div className="w-[50%] mx-auto mb-4 rounded-md border-2 border-red-400 text-red-500 bg-red-100 py-2 px-4">
                {error}
              </div>
            )}
            <div className="flex justify-around items-center px-2">
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
                disabled={loading}
                type="button"
                onClick={handleDelete}
                className="ml-4 bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition duration-100 active:scale-95 disabled:bg-red-400"
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

export default UserDetails;
