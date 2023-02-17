import React, { useState } from "react";
import Button from "./Button";

const ForgotPassForm= () => {
  const [email, setEmail] = useState("");

  const handlePasswordInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleResetPassword = () => {
    // add your forgot password logic here
  };

  return (
    <div className="flex items-center justify-center">
        <form onSubmit={handleResetPassword} className="px-auto">
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
                    onChange={handlePasswordInput}></input>
            </div>
      </form>
  </div>
  );
};

export default ForgotPassForm;

