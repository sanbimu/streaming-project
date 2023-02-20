import React from "react";
import Navbar from "../components/Navbar";
import Content2 from "../components/Content2";
import MusicPlayer from "./MusicPLayer";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";

// site/ShowAll

const ShowAll: React.FC = () => {

  const NavigateTo = useNavigate();

  const checkToken = () => {
    const token = localStorage.getItem("token")
    console.log("token: ", token);
    if(!token){
      console.log("no token found");
      window.location.href = "/login";
    }else{
      try{
        const decoded =  jwt_decode(token);
        console.log("decoded token: ", decoded);
      }catch(error){
        console.log("user not logged in: ", error);
        window.location.href = "/login";
      }
    }
  }
  checkToken();

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
