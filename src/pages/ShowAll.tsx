import React from "react";
import Content2 from "../components/Content2";
import MusicPlayer from "../components/MusicPLayer";

const ShowAll: React.FC = () => {
  return (
    <>
      <div className="BgColor lg:pl-14 lg:pr-14 pb-40 ">
        <div className="bg-yellow-100 pb-10 ">
          <div className="">
            <MusicPlayer />
          </div>
          <div className="pb-4 ">
            <Content2 />
          </div>
        </div>
      </div>
    </>
  );
};

export default ShowAll;
