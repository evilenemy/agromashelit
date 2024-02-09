import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const SliderDetails = ({ api }) => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [image, setImage] = useState({ name: "", path: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);

    axios
      .get(`${api}/api/slider/${id}`)
      .then((res) => {
        setImage(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        setError(err.response.data.error);
      });
  }, []);

  const handleDelete = () => {
    if (window.confirm("Do you really want to delete this image?"))
      axios
        .delete(`${api}/api/slider/${id}`)
        .then((_) => navigate("/slider"))
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
            to={"/slider"}
            className="text-center text-gray-400 w-[250px] py-2 px-4 m-1 hover:bg-gray-700 hover:text-white rounded text-lg transition duration-150"
          >
            Slayder rasmlarni ko'rish
          </Link>
          <Link
            to={"/slider/create"}
            className="text-center text-gray-400 w-[250px] py-2 px-4 m-1 hover:bg-gray-700 hover:text-white rounded text-lg transition duration-150"
          >
            Slayder rasm qo'shish
          </Link>
        </div>
      </div>
      <div className="min-w-[calc(100%-450px)] w-[75%] max-w-[calc(100%-300px)] h-[calc(100vh-64px)] flex flex-wrap overflow-y-scroll justify-around">
        <form className="pb-7">
          <h2 className="mt-5 text-lg font-semibold leading-7 text-gray-900 text-center">
            Slayder rasmini ko'rish
          </h2>
          <div className="mt-6 min-w-[600px] flex flex-col items-center">
            <div className="w-[80%] mb-4 border-2 rounded border-blue-400 py-2 px-4">
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

export default SliderDetails;
