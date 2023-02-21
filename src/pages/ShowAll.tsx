import React from "react";
import Content2 from "../components/Content2";
import MusicPlayer from "../components/MusicPLayer";

const ShowAll = () => {

  return (
      <div className="flex flex-col h-full">
          <div className="flex-1 bg-beige">
              <div id = "BeigeContainer" className = "bg-beige h-screen flex items-center justify-center">     
                      <div>
                          <MusicPlayer  />
                      </div>
                  </div>
              </div>
              <div className="bg-beige w-screen h-10 flex justify-center items-center">
                  <Content2 />
              </div>
          </div>
    );
  };

export default ShowAll;
