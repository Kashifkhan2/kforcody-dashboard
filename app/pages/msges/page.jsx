"use client";
import Msmodal from "@/app/components/Msmodal";
import { useGlobalContext } from "@/app/context/context";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import MsgTable from "@/app/components/MsgTable";

const Page = () => {
  const [msg, setMsg] = useState([]);
  const { getMsg, delMsg, deleteAllMsgs } = useGlobalContext();
  const [modal, setModal] = useState(false);
  const [geto, setGeto] = useState({});

  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 5;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = msg.slice(firstIndex, lastIndex);
  const npage = Math.ceil(msg.length / recordsPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);
  const goToNextPage = () => {
    if (currentPage !== npage) setCurrentPage(currentPage + 1);
  };
  const goToPrevPage = () => {
    if (currentPage !== 1) setCurrentPage(currentPage - 1);
  };

  // const getUsersC = async () => {
  //   const data = await getUsers();
  //   setUsers(data.Users);
  // };

  const getmsg = async () => {
    const a = await getMsg();
    a.success ? setMsg(a.Users) : setMsg([]);
  };

  const deleteUser = async (id) => {
    const conf = confirm("Do you Really Want To Delete The User");
    if (conf) {
      const a = await delMsg(id);
      a.success
        ? toast.success("Message deleted successfully", {
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
      getmsg();
    }
  };

  const opti = (itm) => {
    setGeto(itm);
    setModal(!modal);
  };

  const searchFilter = async (e) => {
    const data = await getMsg();
    const result = data.Users.filter((elem) => {
      return elem.name.toLowerCase().includes(e.target.value.toLowerCase());
    });

    e.target.value == "" ? setMsg(data.Users) : setMsg(result);
  };
  const deleteAllMsgsFunc = async () => {
    const deleted = await deleteAllMsgs();
    !deleted.success
      ? toast.error("Some error occured", {
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
      : toast.success("Deleted successfully", {
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
    getmsg();
  };

  useEffect(() => {
    getmsg();
  }, []);

  return (
    <>
      <section className="mx-auto pt-[80px] w-full max-w-7xl px-4 py-4">
        {modal && <Msmodal setModal={setModal} modal={modal} msg={geto} />}
        <div className="flex flex-col space-y-4 lg:flex-row md:items-center md:justify-between md:space-y-0">
          <div className="">
            <h2 className="text-lg text-white font-semibold md:text-center lg:text-start">
              Message
            </h2>
            <p className="mt-1 text-sm text-gray-400">
              This is a list of all msg. You can search or delete messages.
            </p>
          </div>
          <div className="flex gap-2 flex-wrap sm:flex-nowrap">
            <div>
              <button
                onClick={deleteAllMsgsFunc}
                type="button"
                className="cursor-pointer flex items-center justify-center gap-1 flex-wrap bg-indigo-700 hover:bg-indigo-800 text-white py-2 px-4 mb-2 rounded"
              >
                Delete All Users
              </button>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-start md:justify-center lg:justify-end">
          <div>
            <input
              className="px-4 border w-full focus:border-[#86b7fe] fcb rounded-md py-2 outline-none bg-transparent"
              type="text"
              onChange={searchFilter}
              placeholder="Search Here"
            />
          </div>
        </div>
        <MsgTable deleteUser={deleteUser} opti={opti} msgs={records} />
        <div className="mt-4 w-full border-gray-300">
          <div className="mt-2 flex items-center md:justify-center lg:justify-end">
            <div className="flex items-end justify-start gap-2 flex-wrap">
              <button
                onClick={goToPrevPage}
                type="button"
                className="rounded-md bg-indigo-700 hover:bg-indigo-800 px-3 py-2 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                &larr; Previous
              </button>
              <button
                onClick={goToNextPage}
                type="button"
                className="rounded-md bg-indigo-700 hover:bg-indigo-800 px-3 py-2 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Next &rarr;
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
