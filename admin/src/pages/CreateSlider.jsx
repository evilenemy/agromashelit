import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const CreateSlider = ({ api }) => {
  const navigate = useNavigate();

  const [image, setImage] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData();
    formData.append("image", image);

    axios
      .post(`${api}/api/slider`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then(() => navigate("/slider"))
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
            to={"/slider"}
            className="text-center text-gray-400 w-[250px] py-2 px-4 m-1 hover:bg-gray-700 hover:text-white rounded text-lg transition duration-150"
          >
            Slayder rasmlarini ko'rish
          </Link>
          <Link
            to={"/news/create"}
            className="text-center text-white bg-gray-600 w-[250px] py-2 px-4 m-1 hover:bg-gray-700 hover:text-white rounded text-lg transition duration-150"
          >
            Slayder rasm qo'shish
          </Link>
        </div>
      </div>
      <div className="min-w-[calc(100%-450px)] w-[75%] max-w-[calc(100%-300px)] h-[calc(100vh-64px)] flex flex-wrap overflow-y-scroll justify-around">
        <form onSubmit={handleSubmit} className="pb-7">
          <h2 className="mt-5 text-lg font-semibold leading-7 text-gray-900 text-center">
            Slayder rasm qo'shish
          </h2>
          <div className="mt-6 min-w-[600px] flex flex-col items-center">
            <div className="w-[80%] mb-4">
              <label
                htmlFor="image"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Images
              </label>
              <input
                id="image"
                type="file"
                className="mt-2 block w-full rounded-md border-0 py-2 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none"
                files={image}
                onInput={(e) => setImage(e.target.files[0])}
                required
              />
            </div>
            {error && (
              <div className="w-[50%] mx-auto mb-4 rounded-md border-2 border-red-400 text-red-500 bg-red-100 py-2 px-4">
                {error}
              </div>
            )}
            <button
              disabled={loading}
              className="bg-blue-700 text-white py-2 px-4 rounded hover:bg-blue-800 transition duration-100 active:scale-95 disabled:bg-indigo-400"
            >
              Qo'shish
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateSlider;
