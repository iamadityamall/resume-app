import React from "react";
import { FiArrowLeft } from "react-icons/fi";
import { AiFillFilePdf } from "react-icons/ai";
import { FiDownload } from "react-icons/fi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useState } from "react";
import OtherOptions from "./OtherOptions";
import CV from "../assets/Aditya-Mall-Front-End-Developer-Resume.pdf"

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  return (
    <nav className="w-screen flex justify-between px-4 py-2 fixed top-0 text-white bg-gradient-to-b from-black xl:py-6 xl:px-8">
      {/*navbar left section*/}
      <div className="flex items-center space-x-8 rounded-lg overflow-hidden">
        <a
          href="https://aditya-mall.netlify.app/"
          className="transition delay-75 ease-out  p-2"
        >
          <FiArrowLeft className="text-2xl" />
        </a>
        <div className="flex items-center space-x-4">
          <div>
            <AiFillFilePdf className="text-2xl text-red-600" />
          </div>
          <div className="text-sm font-sans">Resume-Aditya-Mall.pdf</div>
        </div>
      </div>

      {/* navbar right section */}
      <div className="flex items-center text-xl space-x-4 xl:space-x-5 xl:p-2">
        <a
          href={CV}
          download
          target="_blank"
          rel="noreferrer"
          className=" p-2"
        >
          <FiDownload />
        </a>
        <button
          onClick={() => setMenu(!menu)}
          className=" p-2"
        >
          <BsThreeDotsVertical />
        </button>
      </div>

      {menu ? <OtherOptions /> : null}
    </nav>
  );
};

export default Navbar;
