"use client";
import { useGlobalContext } from "@/app/context/context";
import React, { useEffect, useState } from "react";

const Page = ({ params }) => {
  const [myProducts, setMyProducts] = useState({ success: false });
  const { getCodingOne } = useGlobalContext();

  const getOne = async () => {
    const data = await getCodingOne(params.slug);
    setMyProducts(data);
  };

  useEffect(() => {
    getOne();
  }, []);

  return (
    <div className="pt-[110px]">
      <section className="text-gray-600 body-font">
        {myProducts.success ? (
          <div className="container border-b border-gray-600 rounded-lg mx-auto flex px-5 py-24 items-center justify-center flex-col">
            <img
              className="lg:w-[50%] w-full mb-10 object-cover object-center rounded"
              alt="hero"
              src={myProducts.data.img}
            />
            <div className="text-center lg:w-2/3 w-full">
              <h1 className="py-2 text-3xl">
                <span className="text-cyan-500">Category </span>:{" "}
                {myProducts.data.categorytype.toUpperCase()}
              </h1>
              <h1 className="py-2 text-3xl">
                <span className="text-cyan-500">FrameWorks</span>:{" "}
                {myProducts.data.categoryframe.toUpperCase()}
              </h1>
              <h1 className="title-font sm:text-4xl text-3xl mb-4 pt-6 font-medium text-white">
                <span className="text-cyan-500">Title</span>:{" "}
                {myProducts.data.title}
              </h1>
              <p className="mb-8 leading-relaxed">
                <span className="text-cyan-500">Description</span>:{" "}
                {myProducts.data.desc}
              </p>
              <div className="flex justify-center">
                <a
                  download={true}
                  href={myProducts.data.codefile}
                  className="inline-flex cursor-pointer py-2 px-6 focus:outline-none rounded text-lg text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br"
                >
                  Download
                </a>
              </div>
              <div className="py-4">
                <h1 className="py-2 text-3xl">Thanks For Downloading</h1>
              </div>
            </div>
          </div>
        ) : (
          <h1 className="text-center py-64 text-3xl text-indigo-600">
            Nothing Found
          </h1>
        )}
      </section>
    </div>
  );
};

export default Page;
