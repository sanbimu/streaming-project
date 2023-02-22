import React from "react";
import Content2 from "../components/Content2";
import MusicPlayer from "../components/MusicPLayer";

const ShowAll = () => {
  return (
    <div className="flex flex-col h-full bg-beige">
      <div className="flex-1 ">
        <div id="BeigeContainer" className="  flex justify-center">
          <MusicPlayer />
        </div>
      </div>
      <div className="  ">
        <Content2 />
      </div>
    </div>
  );
};

export default ShowAll;
