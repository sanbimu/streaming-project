import React from "react";
import Logo from '../components/Logo';
import Footer from '../components/Footer';
import Terms from '../components/Terms';

const SubscribeTerms = () => {
  
  return (
    <div className="flex flex-col h-full">
        <div className="flex-1 bg-beige">
            <div id = "BeigeContainer" className = "bg-beige h-screen flex items-center justify-center">     
                <div id = "YellowBox" className="bg-yellow bg-opacity-75 w-8/12 h-4/5 mx-auto flex items-center justify-center">
                    <div>
                        <div className = "flex justify-center items-center mx-auto mb-8">
                            <Logo className = "h-28"/>
                        </div>
                            <Terms  />
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

export default SubscribeTerms;