import React from "react";
import Link from "next/link";

const Buttons = (props) => {
  return (
    <>
      <Link
        href={props.sr}
        className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
      >
        {props.text}
      </Link>
    </>
  );
};

export default Buttons;
