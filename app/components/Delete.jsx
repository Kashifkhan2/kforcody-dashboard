"use client";
import React from "react";
import { MdOutlineFolderDelete } from "react-icons/md";
import { useGlobalContext } from "../context/context";
import { useRouter } from "next/navigation";
import { imageRemove } from "../actions/imageRemove";
import { toast } from "react-toastify";

const Delete = ({ imgKey, itemID }) => {
  const { push } = useRouter();
  const { deleteCodeItem } = useGlobalContext();
  const delCode = async () => {
    const a = await imageRemove(imgKey);
    if (a) {
      const conf = confirm("Do you really want to delete the item");
      if (conf) {
        const a = await deleteCodeItem(itemID);
        if (a.success) {
          toast.success("Item deleted successfully", {
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
  };

  return (
    <>
      <span
        onClick={delCode}
        className="absolute cursor-pointer p-1 rounded-lg top-4 right-4 bg-[#00000094] text-white z-50"
      >
        <MdOutlineFolderDelete size={25} />
      </span>
    </>
  );
};

export default Delete;
