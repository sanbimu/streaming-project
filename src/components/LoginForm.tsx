import React, { useState } from "react";
import axios from "axios";
import Button from "./Button";
import { useNavigate } from "react-router";


const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorString, setErrorString] = useState("");

  const Navigate = useNavigate();

  const buttonStyle = {
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    marginBottom: '15px',
    letterSpacing: '0.3em',
    textShadow: '0.2px 0.2px 0px rgba(255,234,189,0.5)',
  };

  const axiosInstance = axios.create({
    baseURL: 'https://backwave.herokuapp.com/',
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
    if(username === "" || password === ""){
      setErrorString("Please enter username and password");
      return;
    }
    else{
      
      axiosInstance.post('/user/login', {
        username: username,
        password: password
      })
      .then(response => {
        //login successful
        console.log("set token inside local storage");
        localStorage.setItem("token", response.data.token);
        console.log(localStorage.getItem("token"));
        setErrorString("Success");
        Navigate("/ShowAll")
      })
      .catch(error => {
        //login failed
        localStorage.setItem("token", error.response.data.message);
        console.log(error.response.data.message);
        setErrorString(error.response.data.message);
      });
    }
  };

  const handleForgetPassword = (e: React.FormEvent) => {
    e.preventDefault();
    Navigate("/ForgotPassword")
  };
  
  return (
    <div className="flex flex-col items-center justify-center">
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
      </form>
      <div className="flex flex-col">
        <Button id = "longTextButton" className = "w-44 h-8 items-center my-4 mx-auto mt-8" text="LOGIN" onClick={handleLogin} type="submit"  style={buttonStyle} />
        <Button id = "longTextButton" className = "w-44 h-8 items-center my-4 mx-auto" text="FORGOT PASSWORD" onClick={handleForgetPassword} type="submit"  style={buttonStyle}/>
      </div>
      <div>
        <p className="text-center text-dark-grey text-sm font-raleway mx-4">{errorString}</p>
      </div>
  </div>
  );
};

export default LoginForm;

