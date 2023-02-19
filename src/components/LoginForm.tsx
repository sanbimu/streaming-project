import React, { useState } from "react";
import Button from "./Button";
import axios from "axios";
import { useNavigate } from "react-router";


const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");

  const Navigate = useNavigate();
  
  const axiosInstance = axios.create({
    baseURL: 'https://fullstacksoundwave.herokuapp.com',
    timeout: 5000,
    headers: { 'X-Custom-Header': 'value' }
  });
  

  const handleUserInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
    
  };

  const handlePasswordInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
   
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    axiosInstance.post('/user/login', {
      username: username,
      password: password
    })
    .then(response => {
      //login successful
      console.log("set token inside local storage");
      localStorage.setItem("token", response.data.token);
      console.log(localStorage.getItem("token"));
      Navigate("/showall")
    })
    .catch(error => {
      //login failed
      localStorage.setItem("token", error.response.data.message);
      console.log(error.response.data.message);
    });
  };

  return (
    <div className="flex items-center justify-center">
        <form onSubmit={handleLogin} className="px-auto">
            <div className="mb-4">
                <label className="block color-dark-grey font-mulish tracking-wide font-bold antialiased text-opacity-90 mb-2 pl-1" htmlFor="username">
                     Username
                </label>
                <input
                    className="appearance-none border border-danger rounded w-full py-2 px-3 text-grey-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="username"
                    type="username"
                    placeholder="Username"
                    value={username}
                    onChange={handleUserInput}></input>
            </div>
            <div className="mb-6">
                <label className="block color-dark-grey font-mulish tracking-wide font-bold antialiased text-opacity-90 mb-2 pl-1" htmlFor="password">
                    Password
                </label>
                <input
                    className="appearance-none border border-danger rounded w-full py-2 px-3 text-grey-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="password"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={handlePasswordInput}></input>
            </div>
            <Button id = "longTextButton" className = "w-44 h-8 items-center my-4 mx-auto mt-8" text="LOGIN" type="submit" onClick={handleLogin}/>
            {/* <Button id = "longTextButton" className = "w-44 h-8 items-center my-4 mx-auto" text="FORGOT PASSWORD" linkTo="" type="submit" /> */}
      </form>
  </div>
  );
};

export default LoginForm;

