import React, { useState } from "react";
import Button from "./Button";

const Payment = () => {

  const handlePayment = () => {
    console.log("button payment clicked");


  fetch("https://backwave.herokuapp.com/create-checkout-session", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      items: [
        { id: 1, quantity: 1 }
      ],
    }),
  })
    .then(async res => {
      if (res.ok) return res.json()
      const json = await res.json()
      return await Promise.reject(json)
    })
    .then(({ url }) => {
      window.location = url
    })
    .catch(e => {
      console.error(e.error)
    })
}

  

  return (
    <div>
        <div className="w-10/12 h-96 p-4 mx-auto overflow-y-auto">
            <h2 className="text-dark-grey font-raleway font-normal text-center antialiased text-opacity-90 text-2xl mb-4">Payment</h2>
            <p className="text-dark-grey font-raleway font-lighter text-justify leading-relaxed text-sm mb-4">
            Your monthly subscription to Wave costs <b>€9,99</b> and can be cancelled at any time. 
            If you decide to cancel, please be aware that the cancellation will take effect at the end of your current billing period. 
            This means that you will retain access to Wave until the end of the current period, but will not be charged again in the future</p>
        </div>
            <Button id = "longTextButton" className = "w-44 h-8 items-center my-4 mx-auto mt-8" text="TO PAYMENT" type="submit" onClick={handlePayment}/>
    </div>
  );
};

export default Payment;
