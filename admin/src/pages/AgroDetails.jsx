import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const AgroDetails = ({ api }) => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [previmages, setPrevImages] = useState([]);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);

    axios
      .get(`${api}/api/agro/${id}`)
      .then((res) => {
        setTitle(res.data.title);
        setDescription(res.data.description);
        setPrice(res.data.price);
        setPrevImages(res.data.images);
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
    if (images.length > 0)
      for (const image of images) formData.append("images", image);

    axios
      .put(`${api}/api/agro/${id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then(() => navigate("/agro"))
      .catch((err) => {
        setError(err.response.data.error);
        setLoading(false);
      });
  };

  const handleDelete = () => {
    if (window.confirm("Do you really want to delete this product?"))
      axios
        .delete(`${api}/api/agro/${id}`)
        .then((res) => navigate("/agro"))
        .catch((err) => setError(err.response.data.error));
  };

  const downloadImages = (path, name) => {
    axios.get(`${api + path}`, { responseType: "blob" }).then((res) => {
      const href = window.URL.createObjectURL(res.data);
      let a = document.createElement("a");
      a.href = href;
      a.download = name;

      document.body.appendChild(a);
      a.click();

      document.body.removeChild(a);
      window.URL.revokeObjectURL(href);
    });
  };

  return (
    <div className="flex">
      <div className="min-w-[300px] w-[25%] max-w-[450px] flex items-center h-[calc(100vh-64px)] bg-gray-800 border-r border-r-neutral-400">
        <div className="h-[80%] w-full flex flex-col items-center">
          <Link
            to={"/agro"}
            className="text-center text-gray-400 w-[250px] py-2 px-4 m-1 hover:bg-gray-700 hover:text-white rounded text-lg transition duration-150"
          >
            Texnikalarni ko'rish
          </Link>
          <Link
            to={"/agro/create"}
            className="text-center text-gray-400 w-[250px] py-2 px-4 m-1 hover:bg-gray-700 hover:text-white rounded text-lg transition duration-150"
          >
            Texnika qo'shish
          </Link>
        </div>
      </div>
      <div className="min-w-[calc(100%-450px)] w-[75%] max-w-[calc(100%-300px)] h-[calc(100vh-64px)] flex flex-wrap overflow-y-scroll justify-around">
        <form onSubmit={handleEdit} className="pb-7">
          <h2 className="mt-5 text-lg font-semibold leading-7 text-gray-900 text-center">
            Texnikani o'zgartirish
          </h2>
          <div className="mt-6 min-w-[600px] flex flex-col items-center">
            <div className="w-[80%] mb-4">
              <label
                htmlFor="title"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Title
              </label>
              <input
                type="text"
                id="title"
                value={title}
                onInput={(e) => setTitle(e.target.value)}
                className="outline-none disabled:bg-zinc-200 mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Title"
                required
              />
            </div>

            <div className="w-[80%] mb-4">
              <label
                htmlFor="description"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Description
              </label>
              <textarea
                id="description"
                value={description}
                onInput={(e) => setDescription(e.target.value)}
                rows={3}
                className="mt-2 outline-none disabled:bg-zinc-200 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Description"
                required
              />
            </div>

            <div className="w-[80%] mb-4">
              <label
                htmlFor="price"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Price
              </label>
              <input
                id="price"
                type="number"
                value={price}
                onInput={(e) => setPrice(Number(e.target.value).toFixed())}
                className="mt-2 outline-none disabled:bg-zinc-200 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Price"
                required
              />
            </div>

            <div className="w-[80%] mb-4 border-2 rounded border-blue-400 py-2 px-4">
              {previmages.map((image, index) => (
                <div key={index}>
                  <img
                    src={api + image.path}
                    className="w-[350px] object-contain mx-auto my-3"
                    alt="Pic"
                  />
                  <button
                    type="button"
                    onClick={() => downloadImages(image.path, image.name)}
                    className="py-2 px-4 text-white bg-blue-600 hover:bg-blue-700 rounded float-right duration-150"
                  >
                    Yuklab olish
                  </button>
                </div>
              ))}
            </div>

            <div className="w-[80%] mb-4">
              <label
                htmlFor="image"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Images
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
              <button
                type="button"
                onClick={() => navigate(-1)}
                className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition duration-100 active:scale-95"
              >
                Ortga
              </button>
              <button
                disabled={loading}
                type="submit"
                className="ml-4 bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600 transition duration-100 active:scale-95 disabled:bg-yellow-200"
              >
                O'zgartirish
              </button>
              <button
                disabled={loading}
                type="button"
                onClick={handleDelete}
                className="ml-4 bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition duration-100 active:scale-95 disabled:bg-red-400"
              >
                O'chirish
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AgroDetails;
