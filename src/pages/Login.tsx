import React, { useState } from "react";
import axios from 'axios';
import Logo from '../components/Logo';
import Footer from '../components/Footer';
import LoginForm from '../components/LoginForm';
import Button from "../components/Button";

// const axiosInstance = axios.create({
//   baseURL: 'https://fullstacksoundwave.herokuapp.com/',
//   timeout: 5000,
//   headers: { 'X-Custom-Header': 'value' }
// });

// axiosInstance.post('/users/login', {
//     username: 'loic',
//     password: '1234'
//   })
//   .then(response => {
//     console.log(response.data);
//   })
//   .catch(error => {
//     console.log(error);
//   });



const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // add your login logic here
  };

  const handleForgotPassword = () => {
    // add your forgot password logic here
  };

  const handleResetPassword = () => {
    // add your reset password logic here
  };

    return (
        <div className="flex flex-col h-full">
            <div className="flex-1 bg-beige">
                <div id = "BeigeContainer" className = "bg-beige h-screen flex items-center justify-center">     
                    <div id = "YellowBox" className="bg-yellow bg-opacity-75 w-8/12 h-4/5 mx-auto flex items-center justify-center">
                        <div>
                            <div className = "flex justify-center items-center mx-auto mb-20">
                                <Logo className = "h-32"/>
                            </div>
                            <LoginForm  />
                            <Button id = "longTextButton" className = "w-44 h-8 items-center my-4 mx-auto mt-8" text="LOGIN" linkTo="/LandingPage" type="submit" />
                            <Button id = "longTextButton" className = "w-44 h-8 items-center my-4 mx-auto" text="FORGOT PASSWORD" linkTo="/LandingPage" onClick={handleForgotPassword} />
                            <Button id = "longTextButton" className = "w-44 h-8 items-center my-4 mx-auto" text="RESET PASSWORD" linkTo="/LandingPage" onClick={handleResetPassword}/>
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

export default Login;
