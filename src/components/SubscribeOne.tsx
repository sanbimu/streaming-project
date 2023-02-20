import React, { useState } from "react";
import Button from "../components/Button";
import { useNavigate } from "react-router";
import axios from 'axios';


const SubscribeOne = () => {
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errorString, setErrorString] = useState("");
    
    const NavigateTo = useNavigate();

    const axiosInstance = axios.create({
      baseURL: 'https://fullstacksoundwave.herokuapp.com',
      timeout: 5000,
      headers: { 'X-Custom-Header': 'value' }
    });


    const handleEmailInput = (e: React.ChangeEvent<HTMLInputElement>) => {
      setEmail(e.target.value);
    };
  
    const handleUserInput = (e: React.ChangeEvent<HTMLInputElement>) => {
      setUsername(e.target.value);
    };
  
    const handlePasswordInput = (e: React.ChangeEvent<HTMLInputElement>) => {
      setPassword(e.target.value);
    };
  
    const handleSubscribeOne = (e: React.FormEvent) => {
      e.preventDefault();
      if (email === "" || username === "" || password === ""){
        setErrorString("Please fill in all the fields");
        return;
      }
      else{
        axiosInstance.post('/user/register', {
          email: email,
          username: username,
          password: password
        })
        .then(response => {
          console.log(response);
          NavigateTo("/SubscribeTerms");
        })
        .catch(error => {
          console.log(error.message);
          setErrorString("Something went wrong, please try again: " + error.message);
        });
        
      }
    };

  return (
    <div className="flex items-center justify-center">
        <form onSubmit={handleSubscribeOne} className="px-auto">
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
            <div className="mb-4">
                <label className="block color-dark-grey font-mulish tracking-wide font-bold antialiased text-opacity-90 mb-2 pl-1" htmlFor="username">
                     Choose a username
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
                    Choose a password
                </label>
                <input
                    className="appearance-none border border-danger rounded w-full py-2 px-3 text-grey-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="password"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={handlePasswordInput}></input>
            </div>
            <Button id = "longTextButton" className = "w-44 h-8 items-center my-4 mx-auto mt-8" text="NEXT" onClick={handleSubscribeOne} type="submit" />

                {/* needs to be styled */}
                <div>
                    <p>{errorString}</p>
                </div>
      </form>
  </div>
  );
};

export default SubscribeOne;

