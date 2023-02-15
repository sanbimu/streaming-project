import React from "react";

const Content = () => {
  return (
    <div className="flex justify-center ">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-4">
        <div className="col-span-2 lg:col-span-4 ">
          <h1 className="font-bold">Weekly Top Track</h1>
        </div>
        <div className="col-span-1 h-40 w-40 lg:h-60 lg:w-60 bg-white hover:scale-125 hover:bg-black items-center justify-center flex rounded-lg ">
          X
        </div>
        <div className="col-span-1 h-40 w-40 lg:h-60 lg:w-60 bg-white hover:scale-125 hover:bg-black items-center justify-center flex rounded-lg">
          X
        </div>
        <div className="col-span-1 h-40 w-40 lg:h-60 lg:w-60 bg-white hover:scale-125 hover:bg-black items-center justify-center flex rounded-lg">
          X
        </div>
        <div className="col-span-1 h-40 w-40 lg:h-60 lg:w-60 bg-white hover:scale-125 hover:bg-black items-center justify-center flex rounded-lg">
          X
        </div>
      </div>
    </div>
  );
};

export default Content;
