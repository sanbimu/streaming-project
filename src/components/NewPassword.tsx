import React, { useState } from "react";
import axios from 'axios';
import Button from "../components/Button";
import { useNavigate } from "react-router";

const NewPassword= () => {
  const [newPassword, setNewPassword] = useState("");
  const [errorString, setErrorString] = useState("");

  const NavigateTo = useNavigate();

  const axiosInstance = axios.create({
    baseURL: 'https://backwave.herokuapp.com/',
    timeout: 5000,
    headers: { 'X-Custom-Header': 'value' }
  });

  const handlePasswordInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewPassword(e.target.value);
  };

  const handleNewPassword = () => {
    // add your forgot password logic here
    console.log("button clicked");
    if (newPassword === ""){
      setErrorString("Please fill in all the fields");
      return;
    }else{
      axiosInstance.post('/reset-password', {
        password: newPassword
      })
      .then(response => {
        console.log(response);
        NavigateTo("/Login");
      })
      .catch(error => {
        console.log(error.message);
        setErrorString("Something went wrong, please try again: " + error.message);
      });
    }

    
  };

  return (
    <div className="flex flex-col items-center justify-center">
        <form onSubmit={handleNewPassword} className="px-auto">
        <div className="mb-6">
                <label className="block color-dark-grey font-mulish tracking-wide font-bold antialiased text-opacity-90 mb-2 pl-1" htmlFor="password">
                    Choose new password
                </label>
                <input
                    className="appearance-none border border-danger rounded w-full py-2 px-3 text-grey-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="password"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={handlePasswordInput}></input>
            </div>
      </form>
      <Button 
        onClick={handleNewPassword}
        id = "longTextButton" 
        className = "w-44 h-8 items-center mt-8 mb-4 mx-auto" 
        text="SAVE PASSWORD" 
        type="submit" 
      />
  </div>
  );
};

export default NewPassword;

