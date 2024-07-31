"use client";
import { createContext, useContext } from "react";

const StateContext = createContext();

const StateProvider = (props) => {
  const deleteCodeItem = async (id) => {
    const data = await fetch(
      `https://kforcody.vercel.app/apis/codes?id=${id ? id : false}`,
      {
        method: "DELETE",
      }
    );
    const jsonData = await data.json();
    return jsonData;
  };

  const deleteCodeItems = async (id) => {
    const data = await fetch(
      `https://kforcody.vercel.app/apis/codes?delt=all`,
      {
        method: "DELETE",
      }
    );
    const jsonData = await data.json();
    return jsonData;
  };

  const getUsers = async (id) => {
    const data = await fetch(`https://kforcody.vercel.app/apis/users`, {
      method: "GET",
    });
    const jsonData = await data.json();
    return jsonData;
  };

  const deleteTheUser = async (id) => {
    const data = await fetch(
      `https://kforcody.vercel.app/apis/users?id=${id ? id : false}`,
      {
        method: "DELETE",
      }
    );
    const jsonData = await data.json();
    return jsonData;
  };

  const deleteAllUser = async (id) => {
    const data = await fetch(
      `https://kforcody.vercel.app/apis/users?delt=all`,
      {
        method: "DELETE",
      }
    );
    const jsonData = await data.json();
    return jsonData;
  };

  const deleteAllMsgs = async (id) => {
    const data = await fetch(`https://kforcody.vercel.app/apis/msg?delt=all`, {
      method: "DELETE",
    });
    const jsonData = await data.json();
    return jsonData;
  };

  const addAUser = async (username, email, password, authtype) => {
    const data = await fetch(`https://kforcody.vercel.app/apis/users`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, email, password, authtype }),
    });
    const jsonData = await data.json();
    return jsonData;
  };

  const getCodingCategory = async () => {
    const data = await fetch(`https://kforcody.vercel.app/apis/category`);
    return data.json();
  };

  const getCodingCategoryDel = async (categoryframe, categorytype) => {
    const data = await fetch(`https://kforcody.vercel.app/apis/category`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: JSON.stringify({ categoryframe, categorytype }),
    });
    return data.json();
  };

  const getCodingCategoryDelAll = async (categoryframe, categorytype) => {
    const data = await fetch(
      `https://kforcody.vercel.app/apis/category?delt=all`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: JSON.stringify({ categoryframe, categorytype }),
      }
    );
    return data.json();
  };

  const addCate = async (categoryframe, categorytype) => {
    const data = await fetch("https://kforcody.vercel.app/apis/category", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        categoryframe,
        categorytype,
      }),
    });
    return data.json();
  };

  const getMsg = async () => {
    const data = await fetch(`https://kforcody.vercel.app/apis/msg`, {
      method: "GET",
    });

    const jsonData = await data.json();
    return jsonData;
  };

  const delMsg = async (id) => {
    const data = await fetch(
      `https://kforcody.vercel.app/apis/msg?id=${id ? id : false}`,
      {
        method: "DELETE",
      }
    );

    const jsonData = await data.json();
    return jsonData;
  };

  const getCodingOne = async (id) => {
    const data = await fetch(
      `https://kforcody.vercel.app/apis/codes?id=${id}`,
      {
        method: "GET",
      }
    );
    const jsonData = await data.json();
    return jsonData;
  };

  return (
    <StateContext.Provider
      value={{
        getMsg,
        addUser,
        addCate,
        deleteAllMsgs,
        delMsg,
        deleteAllUser,
        getCodingCategory,
        getCodingCategoryDel,
        deleteCodeItems,
        getCodingCategoryDelAll,
        deleteCodeItem,
        getUsers,
        deleteTheUser,
        addAUser,
        getCodingOne,
      }}
    >
      {props.children}
    </StateContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(StateContext);
};

export { StateProvider, useGlobalContext };
