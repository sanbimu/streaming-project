import React, { useState } from "react";
import axios from 'axios';
import Logo from '../components/Logo';
import Footer from '../components/Footer';
import ForgotPassForm from "../components/ForgotPassForm";
import Button from "../components/Button";

// const axiosInstance = axios.create({
//   baseURL: 'https://fullstacksoundwave.herokuapp.com',
//   timeout: 5000,
//   headers: { 'X-Custom-Header': 'value' }
// });

// axiosInstance.get('/user/getAll', {
//     data: 'example data'
//   })
//   .then(response => {
//     console.log(response.data);
//   })
//   .catch(error => {
//     console.log(error);
//   });


const ForgotPassword = () => {

  const [email, setEmail] = useState("");

  const handlePasswordInput = (e: React.ChangeEvent<HTMLInputElement>) => {
      setEmail(e.target.value);
    };
  
  const handleResetPassword = () => {
      // add your forgot password logic here
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
                            <ForgotPassForm  />
                            <Button id = "longTextButton" className = "w-44 h-8 items-center my-4 mx-auto mt-8" text="RESET PASSWORD" linkTo="/Login" type="submit" />
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

export default ForgotPassword;
