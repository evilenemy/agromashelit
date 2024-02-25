import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const OrderDetails = ({ api }) => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [product, setProduct] = useState({
    _id: "",
    images: [],
    title: "",
    description: [],
    price: 0,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);

    axios
      .get(`${api}/api/order/${id}`)
      .then((res) => {
        setName(res.data.name);
        setNumber(res.data.number);
        setProduct(res.data.product);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        setError(err.response.data.error);
      });
  }, []);

  console.log(product);

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to complete the order?"))
      axios
        .delete(`${api}/api/order/${id}`)
        .then((res) => navigate("/order"))
        .catch((err) => setError(err.response.data.error));
  };

  return (
    <div className="flex">
      <div className="min-w-[300px] w-[25%] max-w-[450px] flex items-center h-[calc(100vh-64px)] bg-gray-800 border-r border-r-neutral-400">
        <div className="h-[80%] w-full flex flex-col items-center">
          <Link
            to={"/order"}
            className="text-center text-gray-400 w-[250px] py-2 px-4 m-1 hover:bg-gray-700 hover:text-white rounded text-lg transition duration-150"
          >
            Buyurtmalarni ko'rish
          </Link>
        </div>
      </div>
      <div className="min-w-[calc(100%-450px)] w-[75%] max-w-[calc(100%-300px)] h-[calc(100vh-64px)] flex flex-wrap overflow-y-scroll justify-around">
        <form className="pb-7">
          <h2 className="mt-5 text-lg font-semibold leading-7 text-gray-900 text-center">
            Buyurtmani ko'rish
          </h2>
          <div className="mt-6 min-w-[600px] flex flex-col items-center">
            <div className="w-[80%] mb-4">
              <label
                htmlFor="title"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Name
              </label>
              <input
                type="text"
                id="title"
                value={name}
                onInput={(e) => setName(e.target.value)}
                className="outline-none disabled:bg-zinc-200 mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Name"
                readOnly
              />
            </div>

            <div className="w-[80%] mb-4">
              <label
                htmlFor="description"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Number
              </label>
              <input
                id="description"
                value={number}
                onInput={(e) => setNumber(e.target.value)}
                rows={3}
                className="mt-2 outline-none disabled:bg-zinc-200 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Number"
                readOnly
              />
            </div>

            <div className="border w-[80%] rounded-lg p-4 mt-4">
              <h1 className="text-center text-lg font-medium my-2">
                Buyurtma Tafsilotlari
              </h1>
              <h1 className="font-medium">
                Texnika nomi:{" "}
                <span className="font-normal">{product?.title}</span>
              </h1>

              <ul className="mt-2">
                <h1 className="font-medium">Buyurtmaning qisqacha tavsifi:</h1>{" "}
                {product.description.slice(0, 4).map((text, index) => (
                  <li key={index} className="ml-4 line-clamp-1">
                    {text}
                  </li>
                ))}
              </ul>

              <h1 className="font-medium mt-2">
                Texnika narxi: <span className="font-normal">{product?.price} so'm</span>
              </h1>

              <div className="mt-4">
                <h1 className="font-medium">Texnika rasmlari</h1>
                <div className="flex flex-wrap justify-around mt-2">
                  {product?.images.map((image, index) => (
                    <img
                      src={api + image.path}
                      className="w-[25%] object-cover"
                      key={index}
                      alt="Pic"
                    />
                  ))}
                </div>
              </div>
            </div>

            {error && (
              <div className="w-[50%] mx-auto mb-4 rounded-md border-2 border-red-400 text-red-500 bg-red-100 py-2 px-4">
                {error}
              </div>
            )}
            <div className="flex justify-around items-center px-2 mt-7">
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
                Tugatish
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default OrderDetails;
