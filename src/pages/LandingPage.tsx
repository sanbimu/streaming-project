import React, { useState } from "react";
import Logo from '../components/Logo';
import Button from '../components/Button';
import Questions from '../components/Questions';
import Footer from '../components/Footer';
import { useNavigate } from "react-router";
import bgIMG from '../../public/backgroundbigw.jpg'
import bgIMGs from '../../public/backgroundsmallw.jpg'  

const LandingPage = () => {
    const Navigate = useNavigate();
    const [isChecked, setIsChecked] = useState(false);

    const smallScreen = window.matchMedia("(max-width: 820px)").matches;

    const bgStyle = {
        backgroundImage: `url(${smallScreen ?  bgIMGs :  bgIMG})`,
        backgroundSize: '100% 60%',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
      };

      const buttonStyle = {
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        marginBottom: '35px',
        letterSpacing: '0.3em',
        textShadow: '0.2px 0.2px 0px rgba(255,234,189,0.5)',
      };

    const handleCheck = () => {
        const cookiesDiv = document.getElementById("Cookies");
        if (cookiesDiv) {
          cookiesDiv.style.display = "none";
        }
        setIsChecked(true);
      };

      const clickLogin = () => {
        Navigate("/Login");
    }   
      const clickSubscribe = () => {
        Navigate("/Subscribe");
    }   

    return (
        <div className="flex flex-col h-full">
            <div className="flex-1 bg-beige">
                <div id = "BeigeContainer" className = "bg-beige h-screen flex items-center justify-center relative" style={bgStyle}>
                    <div id="YellowBox" className="bg-yellow bg-opacity-75 w-8/12 lg:w-5/12 h-4/5 mx-auto flex items-center justify-center">
                        <div>
                            <div className = "flex justify-center items-center mx-auto mt-14 mb-24">
                                <Logo />
                            </div>
                            <Button id = "CustomButton" className = "w-56 h-12 text-base items-center" text="LOGIN" onClick={clickLogin} style={buttonStyle} />
                            <Button id = "CustomButton" className = "w-56 h-12 items-center" text="SUBSCRIBE" onClick={clickSubscribe} style={buttonStyle}/>
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
