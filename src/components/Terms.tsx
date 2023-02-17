
import { useState } from "react";

const Terms = () => {
  const [accepted, setAccepted] = useState(false);

  const handleCheckboxChange = () => {
    setAccepted(!accepted);
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 bg-beige">
        <div id="BeigeContainer" className="bg-beige h-screen flex items-center justify-center">
          <div id="YellowBox" className="bg-yellow bg-opacity-75 w-8/12 h-4/5 mx-auto flex items-center justify-center">
            <div className="w-10/12 h-full overflow-auto">
              <div className="bg-dark-grey p-6 text-white">
                <h1 className="text-3xl font-bold mb-4">Terms and Conditions</h1>
                <p className="mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis sagittis erat. Vivamus et diam commodo, congue lectus id, interdum mi. Sed porttitor commodo commodo. Integer eu vestibulum leo. Vestibulum ac commodo ex. Aliquam vel lacinia ipsum, eu pulvinar lacus.
                </p>
                <p className="mb-4">
                  Praesent convallis felis in metus feugiat, quis semper mi convallis. Proin gravida, eros at luctus egestas, nibh augue pretium nunc, vel fermentum arcu odio sed risus. Sed malesuada, velit quis blandit laoreet, est eros rhoncus dui, vel pellentesque nisi enim quis ex.
                </p>
                <p className="mb-4">
                  Donec auctor enim quis semper mollis. Pellentesque pretium tincidunt odio, sit amet facilisis justo pharetra vitae. Suspendisse suscipit malesuada sapien vitae consectetur. Vestibulum dictum enim a neque feugiat venenatis.
                </p>
                <div className="flex items-center mb-4">
                  <input
                    id="acceptTermsCheckbox"
                    type="checkbox"
                    className="mr-2"
                    checked={accepted}
                    onChange={handleCheckboxChange}
                  />
                  <label htmlFor="acceptTermsCheckbox">
                    I accept the terms and conditions
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;
