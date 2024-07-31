"use client";
import React, { useEffect, useState } from "react";
import { useGlobalContext } from "@/app/context/context";
import Modal from "../../components/Modal";
import { toast } from "react-toastify";
import Table from "@/app/components/Table";

const Page = () => {
  const [users, setUsers] = useState([]);
  const [modal, setModal] = useState(false);
  const { getUsers, deleteTheUser, deleteAllUser } = useGlobalContext();

  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 5;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = users.slice(firstIndex, lastIndex);
  const npage = Math.ceil(users.length / recordsPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);
  const goToNextPage = () => {
    if (currentPage !== npage) setCurrentPage(currentPage + 1);
  };
  const goToPrevPage = () => {
    if (currentPage !== 1) setCurrentPage(currentPage - 1);
  };

  const getUsersC = async () => {
    const data = await getUsers();
    setUsers(data.Users);
  };

  const addUser = () => {
    setModal(!modal);
    getUsersC();
    toast.success("User added successfully", {
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
  };

  const deleteUser = async (id) => {
    const conf = confirm("Do you Really Want To Delete The User");
    if (conf) {
      const a = await deleteTheUser(id);
      a.success
        ? toast.success("User deleted successfully", {
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
      getUsersC();
    }
  };

  const deleteAllUserFunc = async () => {
    const deleted = await deleteAllUser();
    deleted.success
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
      : toast.success("Users deleted successfully", {
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
    getUsersC();
  };

  useEffect(() => {
    getUsersC();
  }, []);

  const searchFilter = async (e) => {
    const data = await getUsers();
    const result = data.Users.filter((elem) => {
      return elem.username.toLowerCase().includes(e.target.value.toLowerCase());
    });

    e.target.value == "" ? setUsers(data.Users) : setUsers(result);
  };

  return (
    <>
      <section className="mx-auto pt-[80px] w-full max-w-7xl px-4 py-4">
        {modal && <Modal setModal={setModal} modal={modal} addUser={addUser} />}
        <div className="flex flex-col space-y-4 lg:flex-row md:items-center md:justify-between md:space-y-0">
          <div className="">
            <h2 className="text-lg text-white font-semibold md:text-center lg:text-start">
              Users
            </h2>
            <p className="mt-1 text-sm text-gray-400">
              This is a list of all Users. You can add new users or delete
              existing ones.
            </p>
          </div>
          <div className="flex gap-2 flex-wrap sm:flex-nowrap">
            <div>
              <button
                onClick={deleteAllUserFunc}
                type="button"
                className="cursor-pointer flex items-center justify-center gap-1 flex-wrap bg-indigo-700 hover:bg-indigo-800 text-white py-2 px-4 mb-2 rounded"
              >
                Delete All Users
              </button>
            </div>
            <div>
              <button
                onClick={() => {
                  setModal(!modal);
                }}
                type="button"
                className="cursor-pointer flex items-center justify-center gap-1 flex-wrap bg-indigo-700 hover:bg-indigo-800 text-white py-2 px-4 mb-2 rounded"
              >
                Add New User
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
        <Table deleteUser={deleteUser} users={records} datatype={"user"} />
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
