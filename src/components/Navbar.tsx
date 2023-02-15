import React from "react";
import DropdownButton from "./DrowdownButton";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <nav className="   border-2 p-4 ">
      <div className="grid grid-cols-4 lg:grid-cols-4  lg:gap-4 ">
        <div className="col-span-4 lg:col-span-1 border justify-center lg:justify-end flex items-center">
          <Logo />
        </div>
        <div className="col-span-3 lg:col-span-2 items-center flex justify-center ">
          <p className="bg-white rounded p-4 w-full text-center">Search</p>
        </div>
        <div className="   col-span-1 lg:col-span-1  text-white p-4 rounded items-center flex ">
          <DropdownButton />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
