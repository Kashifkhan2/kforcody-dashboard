"use client";
import React, { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { useGlobalContext } from "@/app/context/context";
import { MdDeleteOutline } from "react-icons/md";
import { toast } from "react-toastify";

const Page = () => {
  const [cate, setCate] = useState({ categoryframe: "", categorytype: "" });
  const [categ, setCateg] = useState({ categoryframe: [], categorytype: [] });
  const [loading, setLoading] = useState(false);
  const {
    getCodingCategory,
    getCodingCategoryDelAll,
    getCodingCategoryDel,
    addCate,
  } = useGlobalContext();

  const addcate = async (e) => {
    e.preventDefault();
    setLoading(true);
    const { categoryframe, categorytype } = cate;
    if (cate.categoryframe == "" && cate.categorytype == "") {
      toast.error("Please fill all the fields", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        className: "text-sm",
      });
      setLoading(false);
    } else {
      const a = await addCate(categoryframe, categorytype);
      if (a.success) {
        toast.success("Category added successfully", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          className: "text-sm",
        });
        runing();
      } else {
        toast.error("Some error occured", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          className: "text-sm",
        });
      }
      setLoading(false);
    }
  };

  const deleteIt = async (categor, check) => {
    if (
      check == "fr" &&
      categor !== undefined &&
      categor !== false &&
      categor !== null
    ) {
      const a = await getCodingCategoryDel(categor, null);
      a.success
        ? toast.success("Deleted successfully", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            className: "text-sm",
          })
        : toast.error("Some error occured", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            className: "text-sm",
          });
    } else if (
      check == "ty" &&
      categor !== undefined &&
      categor !== false &&
      categor !== null
    ) {
      const a = await getCodingCategoryDel(null, categor);
      a.success
        ? toast.success("Deleted successfully", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            className: "text-sm",
          })
        : toast.error("Some error occured", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            className: "text-sm",
          });
    }
    runing();
  };

  const handleChange = (e) => {
    setCate({ ...cate, [e.target.name]: e.target.value });
  };

  const deleteAll = async () => {
    const permi = confirm("Do you really want to delete it");
    if (permi) {
      const deletedc = await getCodingCategoryDelAll(null, "medical");
      deletedc.success
        ? toast.success("Deleted successfully", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            className: "text-sm",
          })
        : toast.error("Some error occured", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            className: "text-sm",
          });
      runing();
    }
  };

  const runing = async () => {
    const a = await getCodingCategory();
    a.success
      ? setCateg(a.Category[0])
      : setCateg({ categoryframe: [], categorytype: [] });
  };

  useEffect(() => {
    runing();
  }, []);

  return (
    <div>
      <section>
        <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
          <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
            <div className="mb-2 flex justify-center">
              <img src="/logo.svg" alt="Logo" />
            </div>
            <h2 className="text-center text-2xl font-bold leading-tight text-white">
              Add Categories
            </h2>
            <form onSubmit={addcate} className="mt-8">
              <div className="space-y-5">
                <div>
                  <label
                    htmlFor="categoryframe"
                    className="text-base font-medium"
                  >
                    {" "}
                    Category Frame{" "}
                  </label>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="text"
                      value={cate.categoryframe}
                      name="categoryframe"
                      id="categoryframe"
                      onChange={handleChange}
                    ></input>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="categorytype"
                      className="text-base font-medium"
                    >
                      {" "}
                      Category Type{" "}
                    </label>
                  </div>
                  <div className="mt-2">
                    <input
                      onChange={handleChange}
                      value={cate.categorytype}
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="text"
                      name="categorytype"
                      id="categorytype"
                    ></input>
                  </div>
                </div>
                <div>
                  {!loading ? (
                    <input
                      className="w-full cursor-pointer flex items-center justify-center gap-1 flex-wrap bg-indigo-700 hover:bg-indigo-800 text-white font-bold py-2 px-4 mb-6 rounded"
                      type="submit"
                      value={"Add Now"}
                    />
                  ) : (
                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-1 flex-wrap bg-indigo-700 hover:bg-indigo-800 text-white font-bold py-2 px-4 mb-6 rounded pointer-events-none"
                    >
                      <svg
                        width="20"
                        height="20"
                        fill="currentColor"
                        className="mr-2 animate-spin"
                        viewBox="0 0 1792 1792"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M526 1394q0 53-37.5 90.5t-90.5 37.5q-52 0-90-38t-38-90q0-53 37.5-90.5t90.5-37.5 90.5 37.5 37.5 90.5zm498 206q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-704-704q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm1202 498q0 52-38 90t-90 38q-53 0-90.5-37.5t-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-964-996q0 66-47 113t-113 47-113-47-47-113 47-113 113-47 113 47 47 113zm1170 498q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-640-704q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zm530 206q0 93-66 158.5t-158 65.5q-93 0-158.5-65.5t-65.5-158.5q0-92 65.5-158t158.5-66q92 0 158 66t66 158z"></path>
                      </svg>
                      Loading
                    </button>
                  )}
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="flex items-center justify-center ">
          <button
            onClick={deleteAll}
            className="cursor-pointer flex items-center justify-center gap-1 flex-wrap bg-indigo-700 hover:bg-indigo-800 text-white py-2 px-4 mb-6 rounded"
          >
            Delete All
          </button>
        </div>
        <div className="flex justify-center mx-3 my-6 flex-wrap gap-10">
          <div className="bg-[#0c122e] p-3 lg:w-[20%] rounded-md">
            <h1 className="font-bold text-white py-2 border-b">
              Category Framework
            </h1>
            {categ.categoryframe.length < 1 ? (
              <h1>No Category</h1>
            ) : (
              categ.categoryframe.map((elem, i) => {
                return (
                  <div
                    key={i}
                    className="flex gap-2 justify-between items-center"
                  >
                    <h1 className="py-1" key={i}>
                      {elem.toUpperCase()}
                    </h1>
                    <h1>
                      <MdDeleteOutline
                        onClick={() => {
                          deleteIt(elem, "fr");
                        }}
                        className="text-red-500 cursor-pointer"
                        size={18}
                      />
                    </h1>
                  </div>
                );
              })
            )}
          </div>
          <div className="bg-[#0c122e] p-3 lg:w-[20%] rounded-md">
            <h1 className="font-bold text-white py-2 border-b">
              Category Type
            </h1>
            {categ.categorytype.length < 1 ? (
              <h1>No Category</h1>
            ) : (
              categ.categorytype.map((elem, i) => {
                return (
                  <div
                    key={i}
                    className="flex gap-2  justify-between items-center"
                  >
                    <h1 className="py-1" key={i}>
                      {elem.toUpperCase()}
                    </h1>
                    <h1>
                      <MdDeleteOutline
                        onClick={() => {
                          deleteIt(elem, "ty");
                        }}
                        className="text-red-500 cursor-pointer"
                        size={18}
                      />
                    </h1>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
