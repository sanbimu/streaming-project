import React, { useState } from "react";
import Button from "./Button";

const LoginForm = () => {
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
    <div className="flex items-center justify-center">
        <form onSubmit={handleLogin} className="p-10">
            <div className="mb-4">
                <label className="block color-dark-grey font-mulish tracking-wide font-bold antialiased text-opacity-90 mb-2 pl-1" htmlFor="email">
                     Email
                </label>
                <input
                    className="appearance-none border border-danger rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="email"
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={handleEmailChange}></input>
            </div>
            <div className="mb-6">
                <label className="block color-dark-grey font-mulish tracking-wide font-bold antialiased text-opacity-90 mb-2 pl-1" htmlFor="password">
                    Password
                </label>
                <input
                    className="appearance-none border border-danger rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="password"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={handlePasswordChange}></input>
            </div>
            <div className="flex items-center justify-between">
                <Button text="LOGIN" linkTo="/LandingPage" type="submit" />
                <Button text="FORGOT PASSWORD" linkTo="/LandingPage" onClick={handleForgotPassword} />
                <Button text="RESET PASSWORD" linkTo="/LandingPage" onClick={handleResetPassword}/>
            </div>
      </form>
  </div>
  );
};

export default LoginForm;
