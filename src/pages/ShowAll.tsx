import React from "react";
import Content2 from "../components/Content2";
import MusicPlayer from "../components/MusicPLayer";

const ShowAll = () => {
  return (
    <div className="bg-yellow">
      <div className="flex flex-col h-full md:h-screen lg:h-screen bg-beige md:mr-14 md:ml-14 lg:mr-14 lg:ml-14">
        <div className="flex-1 ">
          <div id="BeigeContainer" className="  flex justify-center">
            <MusicPlayer />
          </div>
        </div>
        <div className="">
          <Content2 />
        </div>
      </div>
    </div>
  );
};

export default ShowAll;
