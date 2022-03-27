import React from "react";
import { FiArrowLeft } from "react-icons/fi";
import { AiFillFilePdf } from "react-icons/ai";
import { FiDownload } from "react-icons/fi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useState } from "react";
import OtherOptions from "./OtherOptions";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  return (
    <nav className="w-screen flex justify-between px-4 py-2 fixed top-0 text-white">
      {/*navbar left section*/}
      <div className="flex items-center space-x-8">
        <button className="p-2">
          <FiArrowLeft className="text-2xl" />
        </button>
        <div className="flex items-center space-x-4">
          <div>
            <AiFillFilePdf className="text-2xl text-red-600" />
          </div>
          <div className="text-sm font-sans">Resume-Aditya-Mall.pdf</div>
        </div>
      </div>

      {/* navbar right section */}
      <div className="flex items-center text-xl space-x-8">
        <button onClick={() => alert("you clicked me")}>
          <FiDownload />
        </button>
        <button onClick={() => setMenu(!menu)}>
          <BsThreeDotsVertical />
        </button>
      </div>

      {menu ? <OtherOptions/> : null}
    </nav>
  );
};

export default Navbar;
