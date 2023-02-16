import React from "react";
import Logo from '../components/Logo';
import Footer from '../components/Footer';
import LoginForm from '../components/LoginForm';


const Login = () => {
    return (
        <div className="flex flex-col h-full">
            <div className="flex-1 bg-beige">
                <div id = "BeigeContainer" className = "bg-beige h-screen flex items-center justify-center">     
                    <div id = "YellowBox" className="bg-yellow bg-opacity-75 w-8/12 lg:w-5/12 h-4/5 mx-auto flex items-center justify-center">
                        <div>
                            <Logo />
                            <LoginForm  />
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-beige w-screen h-10 flex justify-center items-center">
                <Footer />
            </div>
        </div>
      );
    };

export default Login;