import React from "react";
import Buttons from "../../components/Buttons";
import Link from "next/link";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import Delete from "@/app/components/Delete";
import DeleteAll from "../../components/DeleteAll";

export const getCodingItems = async (lim, sk, cfra, cty) => {
  const data = await fetch(
    `https://kforcody.vercel.app/apis/codes?limit=${lim || 5}&page=${
      sk || 1
    }&categoryframe=${cfra || false}&categorytype=${cty || false}`
  );

  return data.json();
};

export const getCodingCategory = async () => {
  const data = await fetch(`https://kforcody.vercel.app/apis/category`);
  return data.json();
};

const Page = async ({ searchParams }) => {
  const limit = 10;
  const page = Number(searchParams.page) || 1;
  const cframe = searchParams.cframe || null;
  const ctype = searchParams.ctype || null;
  const myProducts = await getCodingItems(limit, page, cframe, ctype);
  const myProductsCate = await getCodingCategory();
  const pages = Math.ceil(myProducts.TotalItem / limit);

  return (
    <div className="pt-[110px] relative">
      <div className="mt-5 mb-52">
        <h1 className="sm:text-3xl text-center text-2xl font-medium title-font text-gray-300 mb-4">
          Source Code Projects
        </h1>
        <div className="flex gap-3 flex-wrap items-center justify-center">
          <div className="relative group">
            <button
              type="button"
              className="inline-flex justify-center items-center w-full px-4 py-2 text-sm font-medium text-white bg-gray-800 hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
            >
              Framework
              <svg
                className="w-4 h-4 ml-2 -mr-1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path fillRule="evenodd" d="M10 12l-5-5h10l-5 5z" />
              </svg>
            </button>
            <div className="absolute z-50 left-0 w-40 mt-0 origin-top-left bg-white divide-y divide-gray-100 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-300">
              <div className="py-1">
                {!myProductsCate.success ? (
                  <h1 className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    No Codes
                  </h1>
                ) : (
                  myProductsCate.Category[0].categoryframe.map(
                    (elem, index) => {
                      return (
                        <Link
                          key={index}
                          href={`/pages/codeitem?cframe=${elem}&ctype=${
                            ctype ? ctype : false
                          }`}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          {elem.toUpperCase()}
                        </Link>
                      );
                    }
                  )
                )}
                <Link
                  href={`/pages/codeitem?cframe=false&ctype=${
                    ctype ? ctype : false
                  }`}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Clear
                </Link>
              </div>
            </div>
          </div>
          <div className="relative group">
            <button
              type="button"
              className="inline-flex justify-center items-center w-full px-4 py-2 text-sm font-medium text-white bg-gray-800 hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
            >
              Category
              <svg
                className="w-4 h-4 ml-2 -mr-1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path fillRule="evenodd" d="M10 12l-5-5h10l-5 5z" />
              </svg>
            </button>
            <div className="absolute z-50 left-0 w-40 mt-0 origin-top-left bg-white divide-y divide-gray-100 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-300">
              <div className="py-1">
                {!myProductsCate.success ? (
                  <h1 className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    No Codes
                  </h1>
                ) : (
                  myProductsCate.Category[0].categorytype.map((elem, index) => {
                    return (
                      <Link
                        key={index}
                        href={`/pages/codeitem?ctype=${elem}&cframe=${
                          cframe ? cframe : false
                        }`}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        {elem.toUpperCase()}
                      </Link>
                    );
                  })
                )}
                <Link
                  href={`/pages/codeitem?ctype=false&cframe=${
                    cframe ? cframe : false
                  }`}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Clear
                </Link>
              </div>
            </div>
          </div>
        </div>
        <DeleteAll />
        <div className="w-[98%] my-10 md:w-[90%] mx-auto flex items-center justify-center gap-y-12 gap-6 flex-wrap">
          {!myProducts.success ? (
            <h1 className="text-center text-3xl text-white">No Codes</h1>
          ) : (
            myProducts.data.map((elem, index) => {
              return (
                <div
                  key={index}
                  data-aos="flip-down"
                  className="max-w-sm relative bg-[#0c122e] rounded-md dark:bg-gray-800"
                >
                  <Delete imgKey={elem.img} itemID={elem._id} />
                  <span>
                    <img
                      className="rounded-t-lg w-[23rem] h-[15rem]"
                      src={elem.img}
                      alt=""
                    />
                  </span>
                  <div className="p-6 py-16">
                    <div>
                      <h5 className="text-gray-600 text-sm py-2">
                        {elem.categorytype.toUpperCase()}
                      </h5>
                      <h1 className="mt-2 mb-6 text-2xl font-bold tracking-tight text-white dark:text-white">
                        {elem.title}
                      </h1>
                    </div>
                    <Buttons
                      text={"Download"}
                      sr={`/pages/downloads/${elem._id}`}
                    />
                  </div>
                </div>
              );
            })
          )}
        </div>
        <div className="justify-center gap-6 md:gap-12 mt-20 items-center flex flex-wrap">
          <Link
            href={`/pages/codeitem?page=${page <= 1 ? 1 : page - 1}&ctype=${
              ctype ? ctype : false
            }&cframe=${cframe ? cframe : false}`}
            type="button"
            disabled={page <= 1}
            className={`text-white flex items-center justify-center gap-2 outline-none dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 ${
              page <= 1
                ? "bg-cyan-300 pointer-events-none"
                : "text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br"
            }`}
          >
            <AiOutlineArrowLeft className="font-bold text-xl" /> Prev
          </Link>
          <Link
            href={`/pages/codeitem?page=${
              page == pages ? page : page + 1
            }&ctype=${ctype ? ctype : false}&cframe=${cframe ? cframe : false}`}
            type="button"
            className={`text-white flex items-center justify-center outline-none dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 ${
              page == pages || pages == 0
                ? "bg-cyan-300 pointer-events-none"
                : "text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br"
            }`}
          >
            Next <AiOutlineArrowRight className="font-bold ml-2 text-xl" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Page;
