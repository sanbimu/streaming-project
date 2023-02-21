import React, { useState } from "react";

const SubscribeOne = () => {
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

  const handleEmailInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleUserInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handlePasswordInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubscribeOne = () => {
    // add your forgot password logic here
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
                    onChange={handlePasswordInput}></input>
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
      </form>
  </div>
  );
};

export default SubscribeOne;

