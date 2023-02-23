import React, { useState } from "react";
import axios from 'axios';
import Button from "../components/Button";
import { useNavigate } from "react-router";



const ForgotPassForm= () => {
  const [email, setEmail] = useState("");

  const NavigateTo = useNavigate();

  const axiosInstance = axios.create({
    baseURL: 'https://fullstacksoundwave.herokuapp.com',
    timeout: 5000,
    headers: { 'X-Custom-Header': 'value' }
  });

  const handleEmailInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleResetPassword = () => {
    // add your forgot password logic here
  };

  return (
    <div className="flex flex-col items-center justify-center">
        <form onSubmit={handleResetPassword} className="px-auto">
            <div className="mb-4">
                <label className="block color-dark-grey font-mulish tracking-wide font-bold antialiased text-opacity-90 mb-2 pl-1" htmlFor="email">
                     Email
                </label>
                <input
                    className="appearance-none border border-danger rounded w-full py-2 px-3 text-grey-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="email"
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={handleEmailInput}></input>
            </div>
      </form>
      <Button 
        onClick={handleResetPassword}
        id = "longTextButton" 
        className = "w-44 h-8 items-center mt-8 mb-4 mx-auto" 
        text="RESET PASSWORD" 
        type="submit" 
      />
  </div>
  );
};

export default ForgotPassForm;

