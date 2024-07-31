"use client";
import React from "react";
import { useGlobalContext } from "../context/context";
import { imagesRemove } from "../actions/imagesRemove";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const DeleteAll = () => {
  const { deleteCodeItems } = useGlobalContext();
  const { push } = useRouter();
  const delCode = async () => {
    const conf = confirm("Do you really want delete the item");
    if (conf) {
      const suc = await imagesRemove();
      const a = suc ? await deleteCodeItems() : { success: false };
      if (a.success) {
        toast.success("All items deleted successfully", {
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
        push("/pages/codeitem");
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
    }
  };
  return (
    <div>
      <div className="flex my-6 items-center justify-center ">
        <button
          onClick={delCode}
          className="cursor-pointer flex items-center justify-center gap-1 flex-wrap bg-indigo-700 hover:bg-indigo-800 text-white py-2 px-4 mb-6 rounded"
        >
          Delete All
        </button>
      </div>
    </div>
  );
};

export default DeleteAll;
