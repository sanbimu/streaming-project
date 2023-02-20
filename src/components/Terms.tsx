import React, { useState } from "react";
import Button from "./Button";

const Terms = () => {
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
        <p className="text-dark-grey font-raleway font-lighter leading-relaxed text-sm mb-4">
            Welcome to Wave, a music streaming service that allows you to listen to your favorite songs on demand. By using our service, you agree to the following terms and conditions:
            <br /><br />
            <p className="font-bold">1. Intellectual Property</p>
            All intellectual property rights in the website and service are owned by us or our licensors. 
            You may use the website and service for your own personal and non-commercial use only.            
            <br /><br />
            <p className="font-bold">2. User Conduct</p>            
            You must not use the website or service in any way that is unlawful, illegal, fraudulent or harmful, or in connection with any unlawful, illegal, fraudulent or harmful purpose or activity. 
            You must not use the website or service to copy, store, host, transmit, send, use, publish or distribute any material that consists of or is linked to any spyware, computer virus, Trojan horse, worm, keystroke logger, rootkit or other malicious computer software.
            <br /><br />
            <p className="font-bold">3. Payment</p>
            Our service is provided on a subscription basis. You must pay the relevant subscription fees to use the service. 
            We reserve the right to change the subscription fees and payment methods at any time.
            <br /><br />
            <p className="font-bold">4. Content</p>
            All content made available through the service is owned by us or our licensors. You may only use the content for your own personal and non-commercial use. 
            You must not reproduce, modify, distribute, display or perform any content without our prior written consent.
            <br /><br />
            <p className="font-bold">5. Limitation of Liability</p>
            We will not be liable to you for any direct, indirect or consequential loss or damage arising out of or in connection with the use of the website or service,
            including loss of profits, loss of business, business interruption or loss of data.
            <br /><br />
            <p className="font-bold">6. Privacy</p>
            We respect your privacy and will only use your personal information in accordance with our privacy policy.
            <br /><br />
            <p className="font-bold">7. Termination</p>
            We may terminate your use of the website or service at any time and for any reason, without notice.
            <br /><br />
            <p className="font-bold">8. Amendments</p>
            We may update these terms and conditions from time to time by posting a new version on our website. 
            You should check this page occasionally to ensure you are familiar with any changes.
            <br /><br />
            <p className="font-bold">8. Governing Law</p>
            These terms and conditions shall be governed by and construed in accordance with the laws of Belgium. 
            Any disputes arising out of or in connection with these terms and conditions shall be subject to the exclusive jurisdiction of the courts of Belgium.
            <br /><br />
            </p>
        <div className="flex items-center font-raleway font-lighter text-base leading-relaxed mb-4">
            <input type="checkbox" id="acceptTerms" checked={isChecked} onChange={handleCheck} className="mr-2" />
            <label htmlFor="acceptTerms" className="text-dark-grey text-sm">I accept the terms and conditions</label>
        </div>
    </div>
    <Button onClick={handleNext} disabled={!isChecked} id = "longTextButton" className = "w-44 h-8 items-center my-4 mx-auto mt-8" text="NEXT" type="submit" />
    </div>
  );
};

export default Terms;
