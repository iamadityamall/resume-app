import React from "react";
import { BiFileFind } from "react-icons/bi";
import { IoMdOpen } from "react-icons/io";

const OtherOptions = () => {
  return (
    <nav className=" rounded-sm fixed right-[-3px] top-14 text-black mr-3 bg-primary transition delay-75 ease-linear list-none w-52 drop-shadow-xl font-secondary">
      <li className=" p-3 cursor-pointer flex items-center space-x-6">
        <BiFileFind className="text-xl" />
        <p className="text-xs">Find</p>
      </li>
      <li className="p-3 cursor-pointer flex items-center space-x-6">
        <IoMdOpen className="text-xl" />
        <p className="text-xs">Open in new window</p>
      </li>
    </nav>
  );
};

export default OtherOptions;
