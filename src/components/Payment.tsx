import React, { useState } from "react";
import Button from "./Button";

const Payment = () => {

  return (
    <div>
        <div className="w-10/12 h-96 p-4 mx-auto overflow-y-auto">
            <h2 className="text-dark-grey font-raleway font-normal antialiased text-opacity-90 text-2xl mb-4">Payment</h2>
            <p className="text-dark-grey font-raleway font-lighter leading-relaxed text-sm mb-4">€9,99 will be charged for your monthly subscription to Wave. You can cancel your subscription anytime.</p>
        </div>
            <Button id = "longTextButton" className = "w-44 h-8 items-center my-4 mx-auto mt-8" text="NEXT" type="submit" />
    </div>
  );
};

export default Payment;
