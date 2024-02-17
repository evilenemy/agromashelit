import React, { useEffect, useState } from "react";
import Product from "../components/Product";
import { Link } from "react-router-dom";
import axios from "axios";

const Tractors = ({ api }) => {
  const [tractors, setTractors] = useState([
    {
      _id: "65c87bf122f135650772671a",
      title: "Lorem ipsum, dolor",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex tempora aspernatur iste, magni praesentium deserunt repudiandae. Molestiae rem veniam quos error, consectetur corrupti quo voluptatibus soluta, suscipit ab eos voluptatem earum explicabo quidem molestias asperiores, beatae assumenda debitis impedit porro minus delectus inventore! Rem, minus. Accusamus nisi inventore facere velit quia impedit iste perspiciatis alias praesentium obcaecati eos, labore repudiandae quibusdam iure id nihil incidunt ad maiores voluptatibus magni non ea dolorem quidem eveniet! Quidem saepe deleniti maxime voluptatem modi optio numquam quisquam voluptatibus, aut quibusdam fugit totam officiis nulla ipsam. Quidem laudantium ipsam nesciunt ab incidunt, repudiandae provident maxime.",
      price: 4500000,
      images: [
        {
          path: "/product-1.jpg",
          size: "693,58kb",
          name: "1707637745319 - product-1.jpg",
        },
        {
          path: "/product-1.jpg",
          size: "550,91kb",
          name: "1707637745338 - texnikxizmat.jpg",
        },
        {
          path: "/product-1.jpg",
          size: "18,97kb",
          name: "1707637745338 - tractor-2.jpg",
        },
      ],
      createdAt: "2024-02-11T07:49:05.790+00:00",
      updatedAt: "2024-02-11T07:51:42.200+00:00",
      __v: 0,
    },
    {
      _id: "65c87c6522f1356507726730",
      title: "Lorem ipsum, dolor",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex tempora aspernatur iste, magni praesentium deserunt repudiandae. Molestiae rem veniam quos error, consectetur corrupti quo voluptatibus soluta, suscipit ab eos voluptatem earum explicabo quidem molestias asperiores, beatae assumenda debitis impedit porro minus delectus inventore! Rem, minus. Accusamus nisi inventore facere velit quia impedit iste perspiciatis alias praesentium obcaecati eos, labore repudiandae quibusdam iure id nihil incidunt ad maiores voluptatibus magni non ea dolorem quidem eveniet! Quidem saepe deleniti maxime voluptatem modi optio numquam quisquam voluptatibus, aut quibusdam fugit totam officiis nulla ipsam. Quidem laudantium ipsam nesciunt ab incidunt, repudiandae provident maxime.",
      price: 3440000,
      images: [
        {
          path: "/product-1.jpg",
          size: "693,58kb",
          name: "1707637861712 - product-1.jpg",
        },
        {
          path: "/product-1.jpg",
          size: "500,61kb",
          name: "1707637861712 - tractor-1.jpg",
        },
        {
          path: "/product-1.jpg",
          size: "654,62kb",
          name: "1707637861712 - tractor-3.jpg",
        },
      ],
      createdAt: "2024-02-11T07:51:01.721+00:00",
      updatedAt: "2024-02-11T07:51:01.721+00:00",
      __v: 0,
    },
    {
      _id: "65c87c7c22f1356507726733",
      title: "Lorem ipsum, dolor",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex tempora aspernatur iste, magni praesentium deserunt repudiandae. Molestiae rem veniam quos error, consectetur corrupti quo voluptatibus soluta, suscipit ab eos voluptatem earum explicabo quidem molestias asperiores, beatae assumenda debitis impedit porro minus delectus inventore! Rem, minus. Accusamus nisi inventore facere velit quia impedit iste perspiciatis alias praesentium obcaecati eos, labore repudiandae quibusdam iure id nihil incidunt ad maiores voluptatibus magni non ea dolorem quidem eveniet! Quidem saepe deleniti maxime voluptatem modi optio numquam quisquam voluptatibus, aut quibusdam fugit totam officiis nulla ipsam. Quidem laudantium ipsam nesciunt ab incidunt, repudiandae provident maxime.",
      price: 7600000,
      images: [
        {
          path: "/product-1.jpg",
          size: "165,23kb",
          name: "1707638612312 - 22.jpg",
        },
        {
          path: "/product-1.jpg",
          size: "257,09kb",
          name: "1707638612313 - about-image.jpg",
        },
      ],
      createdAt: "2024-02-11T07:51:24.493+00:00",
      updatedAt: "2024-02-11T08:03:32.318+00:00",
      __v: 0,
    },
  ]);

  // const load = () => {
  //   axios
  //     .get(`${api}/api/tractor`)
  //     .then((res) => setTractors(res.data))
  //     .catch((err) => alert("Something went wrong, please try again later."));
  // };

  // useEffect(() => {
  //   load();
  // }, []);
  return (
    <section>
      <div className="w-[90%] mx-auto">
        <Link
          to={"/tractors"}
          className="inline-block mt-[100px] text-2xl text-red-400 font-medium cursor-pointer hover:text-red-500 duration-150"
        >
          Traktorlar
        </Link>
        <div className="w-full flex flex-wrap justify-around">
          {tractors.map((tractor) => (
            <Product product={tractor} key={tractor._id} api={api} />
          ))}
        </div>
        <div className="w-full flex items-center justify-center mt-5">
          <Link to={"/agrotechnics"}>
            <button className="py-2 px-4 bg-red-500 hover:bg-red-600 duration-150 text-white rounded">
              Agro texnikalar
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Tractors;
