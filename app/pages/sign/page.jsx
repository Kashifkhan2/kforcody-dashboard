"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useCookies } from "next-client-cookies";
import { toast } from "react-toastify";

const Sign = () => {
  const cookies = useCookies();
  const { push } = useRouter();
  const [cred, setCred] = useState({ email: "", pass: "" });
  const [show, setShow] = useState(true);
  const [loading, setLoading] = useState(false);

  const dbData = async (e) => {
    e.preventDefault();
    setLoading(true);
    const data = await fetch(`/api/users`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: cred.email, password: cred.pass }),
    });
    const jsonData = await data.json();
    if (jsonData.status && jsonData.status == 200) {
      cookies.set("authUser", "true");
      push("/");
    } else {
      setLoading(false);
      toast.error("Sorry Sign up with correct credentials", {
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
  };

  const handleChange = (e) => {
    setCred({ ...cred, [e.target.name]: e.target.value });
  };

  return (
    <div className="pt-[110px] relative">
      <div className="container flex-col flex h-screen">
        <div className="w-[95%] md:w-full max-w-xs m-auto bg-indigo-200 rounded p-5">
          <header>
            <img className="w-20 mx-auto mb-5" src="/logo.svg" />
          </header>
          <form onSubmit={dbData}>
            <div>
              <label className="block mb-2 text-indigo-500" htmlFor="username">
                Email
              </label>
              <input
                onChange={handleChange}
                value={cred.email}
                className="w-full p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300"
                type="email"
                name="email"
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-indigo-500" htmlFor="password">
                Password
              </label>
              <input
                onChange={handleChange}
                value={cred.pass}
                className="w-full p-2 mb-1 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300"
                type={show ? "password" : "text"}
                name="pass"
                required
              />
              <p
                className="mb-6 text-black cursor-pointer"
                onClick={() => {
                  setShow(!show);
                }}
              >
                Show Password
              </p>
            </div>
            <div>
              {!loading ? (
                <input
                  className="w-full cursor-pointer flex items-center justify-center gap-1 flex-wrap bg-indigo-700 hover:bg-indigo-800 text-white font-bold py-2 px-4 mb-6 rounded"
                  type="submit"
                  value={"Sign Up"}
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
          </form>
        </div>
      </div>
    </div>
  );
};

export default Sign;
