"use client";
import React, { useState } from "react";
import { toast } from "react-toastify";
// import { generateUploadButton } from "@uploadthing/react";

const Page = () => {
  // const UploadButtonUp = generateUploadButton();
  const [data, setData] = useState({
    title: "",
    desc: "",
    categoryframe: "",
    categorytype: "",
    img: "",
    codefile: "",
  });
  const [loading, setLoading] = useState(false);

  const postdata = async () => {
    const { title, desc, categoryframe, categorytype, img, codefile } = data;
    if (
      !title ||
      !desc ||
      !categoryframe ||
      !categorytype ||
      !img ||
      !codefile
    ) {
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
    } else {
      setLoading(true);
      const sendData = await fetch(`https://kforcody.vercel.app/apis/codes`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title,
          desc,
          categoryframe,
          categorytype,
          img,
          codefile,
        }),
      });
      const sendDataRes = await sendData.json();
      sendDataRes.Success
        ? toast.success("Item added successfully", {
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
      console.log(sendDataRes);
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postdata();
  };

  const handleChange = async (e) => {
    // if (e.target.name == "img") {
    //   setData({ ...data, [e.target.name]: e.target.files[0] });
    // } else {
    setData({ ...data, [e.target.name]: e.target.value });
    // }
  };

  return (
    <div>
      <section>
        <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
          <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
            <div className="mb-2 flex justify-center">
              <img src="/logo.svg" alt="Logo" />
            </div>
            <h2 className="text-center text-2xl font-bold leading-tight text-white">
              Add A Code File
            </h2>
            <form onSubmit={handleSubmit} className="mt-8">
              <div className="space-y-5">
                <div>
                  <label htmlFor="" className="text-base font-medium">
                    Title
                  </label>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      value={data.title}
                      onChange={handleChange}
                      type="text"
                      name="title"
                    ></input>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <label htmlFor="" className="text-base font-medium">
                      Description
                    </label>
                  </div>
                  <div className="mt-2">
                    <input
                      value={data.desc}
                      onChange={handleChange}
                      type="text"
                      name="desc"
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    ></input>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <label htmlFor="" className="text-base font-medium">
                      CategoryType
                    </label>
                  </div>
                  <div className="mt-2">
                    <input
                      value={data.categorytype}
                      onChange={handleChange}
                      type="text"
                      name="categorytype"
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    ></input>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <label htmlFor="" className="text-base font-medium">
                      CategoryFrame
                    </label>
                  </div>
                  <div className="mt-2">
                    <input
                      value={data.categoryframe}
                      onChange={handleChange}
                      type="text"
                      name="categoryframe"
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    ></input>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <label htmlFor="" className="text-base font-medium">
                    Add A Code File Link
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    value={data.codefile}
                    onChange={handleChange}
                    type="text"
                    name="codefile"
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  ></input>
                </div>
                <div className="mt-2">
                  <input
                    value={data.img}
                    onChange={handleChange}
                    type="text"
                    name="img"
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  ></input>
                </div>
                {/*<div>
                  <UploadButtonUp
                    endpoint="imageUploader"
                    onClientUploadComplete={(res) => {
                      setData({ ...data, img: res[0].url });
                      alert("Upload Completed");
                    }}
                    onUploadError={(error) => {
                      alert(`ERROR! ${error.message}`);
                    }}
                  /> 
                </div> */}
                {/* <div>
                  <label className="block mb-2 text-sm font-medium" htmlFor="">
                    Upload An Image
                  </label>
                  <input
                    type="file"
                    name="img"
                    onChange={handleChange}
                    className="block w-full border border-gray-500 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600
                                    file:bg-gray-400 file:border-0
                                    file:me-4
                                    file:py-3 file:px-4
                                    dark:file:bg-gray-700 dark:file:text-gray-400"
                  />
                </div> */}
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
      </section>
    </div>
  );
};

export default Page;
