import React, { useState } from "react";

const DropdownButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        className="btn text-white bg-black hover:bg-gray-400  font-bold rounded p-4"
        onClick={toggleDropdown}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>
      {isOpen && (
        <ul className="w-40 absolute bg-black  rounded-lg py-2">
          <li className="px-4 py-2 ">Option 1</li>
          <li className="px-4 py-2 ">Option 2</li>
          <li className="px-4 py-2 ">Option 3</li>
        </ul>
      )}
    </div>
  );
};

export default DropdownButton;
