import React, { useState } from "react";
import axios from 'axios';
import Button from "../components/Button";
import { useNavigate } from "react-router";

const NewPassword= () => {
  const [password, setPassword] = useState("");

  const NavigateTo = useNavigate();

  const axiosInstance = axios.create({
    baseURL: 'https://fullstacksoundwave.herokuapp.com',
    timeout: 5000,
    headers: { 'X-Custom-Header': 'value' }
  });

  const handlePasswordInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleNewPassword = () => {
    // add your forgot password logic here
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

