import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const ProductDetails = ({ api }) => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState("");
  const [images, setImages] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${api}/api/category`)
      .then((res) => setCategories(res.data))
      .catch((err) => alert(err.response.data.error));

    axios
      .get(`${api}/api/product/${id}`)
      .then((res) => {
        setTitle(res.data.title);
        setDescription(res.data.description);
        setPrice(res.data.price);
        setCategory(res.data.category_id);
        setImages(res.data.images);
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
    formData.append("description", description);
    formData.append("price", price);
    formData.append("category_id", category);
    for (const image of images) formData.append("images", image);

    axios
      .put(`${api}/api/product/${id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then(() => navigate("/"))
      .catch((err) => {
        setError(err.response.data.error);
        setLoading(false);
      });
  };

  const handleDelete = () => {
    if (window.confirm("Do you really want to delete this product?"))
      axios
        .delete(`${api}/api/product/${id}`)
        .then((res) => navigate("/"))
        .catch((err) => setError(err.response.data.error));
  };

  return (
    <div className="flex">
      <div className="min-w-[300px] w-[25%] max-w-[450px] flex items-center h-[calc(100vh-64px)] bg-gray-800 border-r border-r-neutral-400">
        <div className="h-[80%] w-full flex flex-col items-center">
          <Link
            to={"/"}
            className="text-center text-gray-400 w-[250px] py-2 px-4 m-1 hover:bg-gray-700 hover:text-white rounded text-lg transition duration-150"
          >
            Получить товари
          </Link>
          <Link
            to={"/create"}
            className="text-center text-gray-400 w-[250px] py-2 px-4 m-1 hover:bg-gray-700 hover:text-white rounded text-lg transition duration-150"
          >
            Создавать товар
          </Link>
        </div>
      </div>
      <div className="min-w-[calc(100%-450px)] w-[75%] max-w-[calc(100%-300px)] h-[calc(100vh-64px)] flex flex-wrap overflow-y-scroll justify-around">
        <form onSubmit={handleEdit} className="pb-7">
          <h2 className="mt-5 text-lg font-semibold leading-7 text-gray-900 text-center">
            Редактировать товар
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
                className="outline-none disabled:bg-zinc-200 mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Название"
                required
              />
            </div>

            <div className="w-[80%] mb-4">
              <label
                htmlFor="description"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Описание
              </label>
              <textarea
                id="description"
                value={description}
                onInput={(e) => setDescription(e.target.value)}
                rows={3}
                className="mt-2 outline-none disabled:bg-zinc-200 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Описание"
                required
              />
            </div>

            <div className="w-[80%] mb-4">
              <label
                htmlFor="price"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Цена
              </label>
              <input
                id="price"
                type="number"
                value={price}
                onInput={(e) => setPrice(Number(e.target.value).toFixed())}
                className="mt-2 outline-none disabled:bg-zinc-200 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Цена"
                required
              />
            </div>

            <div className="w-[80%] mb-4">
              <label
                htmlFor="category"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Категория
              </label>
              <select
                id="category"
                value={category}
                required
                onChange={(e) => setCategory(e.target.value)}
                className="mt-2 py-2 disabled:bg-zinc-200 pr-7 cursor-pointer block outline-none w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              >
                <option value="" disabled>
                  Выбирать
                </option>
                {categories.map((category) => (
                  <option value={category._id} key={category._id}>
                    {category.title}
                  </option>
                ))}
              </select>
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
                rows={3}
                type="file"
                className="mt-2 block disabled:bg-zinc-200 w-full rounded-md border-0 py-2 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none"
                multiple
                files={images}
                onInput={(e) => setImages(e.target.files)}
              />
            </div>
            {error && (
              <div className="w-[50%] mx-auto mb-4 rounded-md border-2 border-red-400 text-red-500 bg-red-100 py-2 px-4">
                {error}
              </div>
            )}
            <div className="flex justify-around items-center px-2">
              <button type="button" onClick={() => navigate(-1)} className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition duration-100 active:scale-95">Назад</button>
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

export default ProductDetails;
