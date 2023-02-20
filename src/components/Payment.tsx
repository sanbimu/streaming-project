import React, { useState } from "react";
import Button from "./Button";

const Payment = () => {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheck = () => {
      setIsChecked(!isChecked);
    };
  
    const handleNext = () => {
      if (!isChecked) {
        alert("Please accept the terms and conditions to proceed.");
      } else {
        window.location.href = "/SubscribePay";
      }
    };

  return (
    <div>
    <div className="w-10/12 h-96 p-4 mx-auto overflow-y-auto">
      <h2 className="text-dark-grey font-raleway font-normal antialiased text-opacity-90 text-2xl mb-4">Terms &amp; Conditions</h2>
        <p className="text-dark-grey font-raleway font-lighter leading-relaxed text-sm mb-4"></p>
        <div className="flex items-center font-raleway font-lighter text-base leading-relaxed mb-4">
            <input type="checkbox" id="acceptTerms" checked={isChecked} onChange={handleCheck} className="mr-2" />
            <label htmlFor="acceptTerms" className="text-dark-grey text-sm">I accept the terms and conditions</label>
        </div>
    </div>
    <Button onClick={handleNext} disabled={!isChecked} id = "longTextButton" className = "w-44 h-8 items-center my-4 mx-auto mt-8" text="NEXT" type="submit" />
    </div>
  );
};

export default Payment;
