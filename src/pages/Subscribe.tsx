import React, { useState } from "react";
import axios from 'axios';
import Logo from '../components/Logo';
import Footer from '../components/Footer';
import SubscribeOne from '../components/SubscribeOne';
import bgIMG from '../../public/backgroundbigw.jpg'
import bgIMGs from '../../public/backgroundsmallw.jpg'


const Subscribe = () => {

    const smallScreen = window.matchMedia("(max-width: 820px)").matches;

    const bgStyle = {
        backgroundImage: `url(${smallScreen ?  bgIMGs :  bgIMG})`,
        backgroundSize: '100% 60%',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
      };

  return (
    <div className="flex flex-col h-full">
        <div className="flex-1 bg-beige">
            <div id = "BeigeContainer" className = "bg-beige h-screen flex items-center justify-center" style={bgStyle}>     
                <div id = "YellowBox" className="bg-yellow bg-opacity-75 w-8/12 h-4/5 mx-auto flex items-center justify-center">
                    <div>
                        <div className = "flex justify-center items-center mx-auto mb-20">
                            <Logo className = "h-24"/>
                        </div>
                            <SubscribeOne  />
                    </div>
                </div>
            </div>
            <div className="bg-beige w-screen h-10 flex justify-center items-center">
                    <Footer />
                </div>
        </div>
            </div>
  );
};

export default Subscribe;