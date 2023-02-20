import React from "react";
import Logo from '../components/Logo';
import Button from '../components/Button';
import Questions from '../components/Questions';
import Footer from '../components/Footer';
import { useNavigate } from "react-router";
import { Component } from 'react';


const LandingPage = () => {
    const navigateTo = useNavigate();
    
    const loginPage = () => {
        navigateTo('/Login');
    }

    const subscribePage = () => {
        navigateTo('/Subscribe');
    }
    

    return (
        <div className="flex flex-col h-full">
            <div className="flex-1 bg-beige">
                <div id = "BeigeContainer" className = "bg-beige h-screen flex items-center justify-center">     
                    <div id = "YellowBox" className="bg-yellow bg-opacity-75 w-8/12 lg:w-5/12 h-4/5 mx-auto flex items-center justify-center">
                        <div>
                            <div className = "flex justify-center items-center mx-auto mt-14 mb-24">
                                <Logo />
                            </div>
                            <Button id = "CustomButton" className = "w-56 h-12 text-base items-center" text="LOGIN" onClick={loginPage} />
                            <Button id = "CustomButton" className = "w-56 h-12 text-base items-center" text="SUBSCRIBE" onClick={subscribePage} />
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
