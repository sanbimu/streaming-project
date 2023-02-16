import React from "react";
import Logo from '../components/Logo';
import Button from '../components/Button';
import Questions from '../components/Questions';
import Footer from '../components/Footer';

const LandingPage = () => {
    return (
        <div className="flex flex-col h-full">
            <div className="flex-1 bg-beige">
                <div id = "BeigeContainer" className = "bg-beige h-screen flex items-center justify-center">     
                    <div id = "YellowBox" className="bg-yellow bg-opacity-75 w-8/12 lg:w-5/12 h-4/5 mx-auto flex items-center justify-center">
                        <div>
                            <Logo />
                            <Button text="LOGIN" linkTo="/Login" />
                            <Button text="SUBSCRIBE" linkTo="/Subscribe" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex-1 bg-yellow">
                <div className="flex flex-col h-full items-center">
                    <div className="flex-1">
                        <Questions />
                    </div>
                    <div className="bg-beige w-screen h-10 flex justify-center items-center">
                        <Footer />
                    </div>
                </div>
            </div>
        </div>
      );
    };

export default LandingPage;
