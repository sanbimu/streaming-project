import React from "react";
import Navbar from "../components/Navbar";
import Content from "../components/Content";
import Content2 from "../components/Content2";
import MusicPlayer from "./MusicPLayer";

const ShowAll: React.FC = () => {
  
  console.log(localStorage.getItem("token"));
  return (
    <>
      <div className="BgColor lg:pl-14 lg:pr-14 h-screen ">
        <div className="bg-yellow-100 lg:h-screen">
          <div className="pb-4">
            <Navbar />
          </div>
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
