import React from "react";

const MusicPlayer = () => {
  return (
    <div className="flex justify-center ">
      <div className="grid grid-cols-4 lg:grid-cols-4 w-full bottom-0 fixed">
        <div className="col-span-1 h-20  bg-gray-900 items-center justify-center flex">
          E
        </div>
        <div className="col-span-1 h-20  bg-gray-900 items-center justify-center flex">
          F
        </div>
        <div className="col-span-1 h-20  bg-gray-900 items-center justify-center flex">
          G
        </div>
        <div className="col-span-1 h-20  bg-gray-900 items-center justify-center flex">
          H
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;
