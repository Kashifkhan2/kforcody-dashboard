import React from "react";
import { Trash2 } from "lucide-react";
import { FaBookReader } from "react-icons/fa";

const MsgTable = ({ deleteUser, msgs, opti }) => {
  return (
    <div>
      <div className="py-5">
        <div className="overflow-hidden rounded-lg shadow hidden md:block">
          {msgs.length < 1 ? (
            <h1 className="text-white text-center my-16 text-3xl">No Data</h1>
          ) : (
            <table className="w-full">
              <thead className="bg-gray-500 text-white border-b-2 border-gray-300">
                <tr>
                  <th className="w-20 p-3 text-sm font-semibold tracking-wide text-left">
                    No.
                  </th>
                  <th className="p-3 text-sm font-semibold tracking-wide text-left">
                    Name
                  </th>
                  <th className="p-3 text-sm font-semibold tracking-wide text-left">
                    Msg
                  </th>
                  <th className="w-24 text-sm font-semibold tracking-wide text-left">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-300">
                {msgs.map((elem, index) => {
                  return (
                    <tr key={index} className="bg-gray-400">
                      <td className="p-3 text-sm text-gray-300 whitespace-nowrap">
                        <a
                          href="#"
                          className="font-bold text-blue-500 hover:underline"
                        >
                          {index + 1}
                        </a>
                      </td>
                      <td className="p-3 text-sm text-gray-300 whitespace-nowrap">
                        {elem.name}
                      </td>
                      <td className="p-3 text-sm text-gray-300 whitespace-nowrap">
                        {elem.msg}
                      </td>
                      <td className="p-3 text-sm text-gray-300 flex gap-3">
                        <span
                          onClick={() => {
                            deleteUser(elem._id);
                          }}
                          className="hover:text-red-500 cursor-pointer"
                        >
                          <Trash2 size={20} />
                        </span>
                        <span
                          onClick={() => {
                            opti(elem);
                          }}
                          className="hover:text-indigo-500 cursor-pointer"
                        >
                          <FaBookReader size={20} />
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
          {msgs.length < 1 ? (
            <h1 className="text-white">No Data</h1>
          ) : (
            msgs.map((elem, index) => {
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
                  <div className="text-sm p-1 text-gray-300">
                    {elem.username}
                  </div>
                  <div className="text-sm text-gray-300 bg-green-100 p-1 rounded-md text-wrap break-words">
                    {elem.email}
                  </div>
                  <div className="text-sm p-1 text-gray-300">{elem.date}</div>
                  <div className="text-sm flex gap-3 p-1 font-medium text-black">
                    <span
                      onClick={() => {
                        deleteUser(elem._id);
                      }}
                      className="hover:text-red-500 cursor-pointer"
                    >
                      <Trash2 size={20} />
                    </span>
                    <span className="hover:text-indigo-500 cursor-pointer">
                      <FaBookReader
                        onClick={() => {
                          opti(elem);
                        }}
                        size={20}
                      />
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

export default MsgTable;
