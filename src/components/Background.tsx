import React from "react";
import Button from "./Button";
import Logo from "./Logo";
import Questions from "./Questions";
import Footer from "./Footer";

const Background = () => {
    return (
        <div>
            <div id = "BeigeContainer" className = "bg-beige h-screen flex items-center justify-center">     
                <div id = "YellowBox" className="bg-yellow bg-opacity-75 w-8/12 lg:w-5/12 h-4/5 mx-auto flex items-center justify-center">
                    <div>
                        <Logo />
                        <Button text="LOGIN"></Button> 
                        <Button text="SUBSCRIBE"></Button> 
                    </div>
                </div>
            </div> 
            <div id = "YellowContainer" className = "bg-yellow h-screen flex flex-col justify-between">
                <div>
                    <Questions />
                </div>
            </div>
        </div>
    );
  };

export default Background; 