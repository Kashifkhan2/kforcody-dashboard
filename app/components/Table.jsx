import React from "react";
import { Trash2 } from "lucide-react";
import { FaBookReader } from "react-icons/fa";

const Table = ({ deleteUser, users, datatype }) => {
  return (
    <div>
      <div className="py-5">
        <div className="overflow-hidden rounded-lg shadow hidden md:block">
          {users.length < 1 ? (
            <h1 className="text-white text-center my-16 text-3xl">No Data</h1>
          ) : (
            <table className="w-full">
              <thead className="bg-gray-500 border-b-2 border-gray-200">
                <tr>
                  <th className="w-20 p-3 text-sm font-semibold tracking-wide text-left">
                    No.
                  </th>
                  <th className="p-3 text-sm font-semibold tracking-wide text-left">
                    Name
                  </th>
                  <th className="w-24 p-3 text-sm font-semibold tracking-wide text-left">
                    Email
                  </th>
                  <th className="w-24 p-3 text-sm font-semibold tracking-wide text-left">
                    Date
                  </th>
                  <th className="w-24 text-sm font-semibold tracking-wide text-left">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {users.map((elem, index) => {
                  return (
                    <tr key={index} className="bg-gray-400">
                      <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                        <a
                          href="#"
                          className="font-bold text-blue-500 hover:underline"
                        >
                          {index + 1}
                        </a>
                      </td>
                      <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                        {elem.username}
                      </td>
                      <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                        <span className="p-1.5 text-xs font-medium uppercase tracking-wider text-green-800 bg-green-200 rounded-lg bg-opacity-50">
                          {elem.email}
                        </span>
                      </td>
                      <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                        <span className="p-1.5 text-xs font-medium uppercase tracking-wider rounded-lg bg-opacity-50">
                          {elem.date}
                        </span>
                      </td>
                      <td className="p-3 text-sm text-gray-700 flex gap-3">
                        <span
                          onClick={() => {
                            deleteUser(elem._id);
                          }}
                          className="hover:text-red-500 cursor-pointer"
                        >
                          <Trash2 size={20} />
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:hidden">
          {users.length < 1 ? (
            <h1 className="text-white">No Data</h1>
          ) : (
            users.map((elem, index) => {
              return (
                <div
                  key={index}
                  className="bg-white space-y-3 p-4 rounded-lg shadow"
                >
                  <div className="flex p-1 items-center space-x-2 text-sm">
                    <div>
                      <a
                        href="#"
                        className="text-blue-500 font-bold hover:underline"
                      >
                        {index + 1}
                      </a>
                    </div>
                  </div>
                  <div className="text-sm p-1 text-gray-700">
                    {elem.username}
                  </div>
                  <div className="text-sm text-gray-700 bg-green-100 p-1 rounded-md text-wrap break-words">
                    {elem.email}
                  </div>
                  <div className="text-sm p-1 text-gray-700">{elem.date}</div>
                  <div className="text-sm p-1 font-medium text-black">
                    <span
                      onClick={() => {
                        deleteUser(elem._id);
                      }}
                      className="hover:text-red-500 cursor-pointer"
                    >
                      <Trash2 size={20} />
                    </span>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default Table;
