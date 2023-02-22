import React, { useState } from "react";
import Logo from '../components/Logo';
import Button from '../components/Button';
import Questions from '../components/Questions';
import Footer from '../components/Footer';

const LandingPage = () => {
    
    const [isChecked, setIsChecked] = useState(false);

    const handleCheck = () => {
        const cookiesDiv = document.getElementById("Cookies");
        if (cookiesDiv) {
          cookiesDiv.style.display = "none";
        }
        setIsChecked(true);
      };

    return (
        <div className="flex flex-col h-full">
            <div className="flex-1 bg-beige">
                <div id = "BeigeContainer" className = "bg-beige h-screen flex items-center justify-center relative">
                    <div id="YellowBox" className="bg-yellow bg-opacity-75 w-8/12 lg:w-5/12 h-4/5 mx-auto flex items-center justify-center">
                        <div>
                            <div className = "flex justify-center items-center mx-auto mt-14 mb-24">
                                <Logo />
                            </div>
                            <Button id = "CustomButton" className = "w-56 h-12 text-base items-center" text="LOGIN" linkTo="/Login" />
                            <Button id = "CustomButton" className = "w-56 h-12 items-center" text="SUBSCRIBE" linkTo="/Subscribe" />
                        </div>
                    </div>
                        <div id="Cookies" className = "bg-dark-grey flex fixed right-1 bottom-1 p-2 m-1 w-2/5">
                            <div className ="flex flex-col p-4">
                                    <p className = "text-light-yellow font-mulish text-sm"> 
                                    This website uses cookies to 
                                    <br></br>enhance the user experience.</p>
                                <div className="flex items-center mt-2">
                                    <input 
                                    type="checkbox" 
                                    id="acceptTerms" 
                                    checked={isChecked} 
                                    onChange={handleCheck}
                                    className="mr-2" />
                                    <label htmlFor="acceptTerms" className="text-light-yellow font-mulish text-sm">I accept</label>
                                </div>
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
